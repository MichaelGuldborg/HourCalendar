import React from 'react';
import {ThemeProvider} from "theme-ui";
import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import theme from "../constants/theme";

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