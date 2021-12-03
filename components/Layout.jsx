import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Property from "./Property";
import Navbar from "./Navbar";
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Real Estate</title>
            </Head>
            <Box maxWidth="1280px" m="auto">

                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>

        </>
    )
}
<Layout>
    <Property />
</Layout>
export default Layout
