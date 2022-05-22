import Head from 'next/Head';
import { Box } from '@chakra-ui/react'

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children}) => (
    <>
     <Head>
         <title>The Home Finder</title>
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
);

export default Layout;