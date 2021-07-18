import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, {onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    onNavigate && history.listen(onNavigate)
    ReactDOM.render(
        <App onSignIn={onSignIn} history={history}/>,
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
    const el = document.querySelector('#_auth-dev-root');
    el && mount(el, { defaultHistory: createBrowserHistory()});
}


export { mount }