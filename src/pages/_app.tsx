import React, {useEffect} from 'react';
// import { initGA, logPageView } from 'services';

export default function CustomApp({Component, pageProps}) {
    useEffect(() => {
        // initGA();
        // logPageView();
        // Router.events.on('routeChangeComplete', logPageView);
    }, []);

    return <Component {...pageProps} />;
}
