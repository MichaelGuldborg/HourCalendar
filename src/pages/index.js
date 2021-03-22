import React from 'react';
import {ThemeProvider} from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Features from 'sections/features';
import Subscribe from 'sections/subscribe';

export const IndexPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="Startup hosting provider landing"
                    description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
                />
                <Banner/>
                {/*<Services/>*/}
                {/*<Features/>*/}
                {/*<Subscribe/>*/}
            </Layout>
        </ThemeProvider>
    )
}

export default IndexPage;