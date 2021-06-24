import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();
    onNavigate && history.listen(onNavigate)
    ReactDOM.render(
        <App history={history}/>,
        el
    )
    return {
        onParentNavigate({pathname: nextPathName}) {
            const { pathname } =  history.location;
            pathname !== nextPathName && history.push(nextPathName);
        }
    }
}

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_marketing-dev-root');
    el && mount(el, { defaultHistory: createBrowserHistory()});
}


export { mount }