import React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';

class AppDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8'/>

                    <meta property='og:type' content='Website'/>
                    <meta property='og:url' content='https://hourcalendar.com'/>
                    <meta property='og:title' content='Hour Calendar'/>
                    <meta property="og:image" content="https://hourcalendar.com/share_image.jpg"/>
                    <link rel="shortcut icon" href="https://hourcalendar.com/favicon.png" type="image/x-icon"/>
                    <meta
                        property='og:description'
                        content='Track and export google calendar events. Export timesheets for invoicing clients.
                        View statistical overview of the time you have spent and the people you have spent it with.
                        Export data · Visualise stats · Donate · About'
                    />

                    <link
                        rel="stylesheet"
                        crossOrigin="anonymous"
                        href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600;700&family=DM+Sans:wght@400;500;700&display=swap"
                    />

                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default AppDocument;
