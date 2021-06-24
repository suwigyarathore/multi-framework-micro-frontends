import React, {useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import {mount} from 'marketing/MarketingApp'

function MarketingApp() {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
     const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathName }) => {
                const { pathname } =  history.location;
                pathname !== nextPathName && history.push(nextPathName);
            }
        });
     history.listen(onParentNavigate);

    }, [])
    return <div ref={ref}/>;
}

export default MarketingApp
