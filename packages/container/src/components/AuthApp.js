import React, {useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import {mount} from 'auth/AuthApp'

function AuthApp({onSignIn}) {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
     const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathName }) => {
                const { pathname } =  history.location;
                pathname !== nextPathName && history.push(nextPathName);
            },
            initialPath: history.location.pathname,
            onSignIn: () => {
                onSignIn();
            }
        });
     history.listen(onParentNavigate);

    }, [])
    return <div ref={ref}/>;
}

export default AuthApp
