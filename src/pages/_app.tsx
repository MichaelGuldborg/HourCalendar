import React, {useEffect} from 'react';
// import { initGA, logPageView } from 'services';
// import 'assets/css/react-slick.css';
import 'rc-drawer/assets/index.css';

export default function CustomApp({Component, pageProps}) {
    useEffect(() => {
        // initGA();
        // logPageView();
        // Router.events.on('routeChangeComplete', logPageView);
    }, []);

    return <Component {...pageProps} />;
}
