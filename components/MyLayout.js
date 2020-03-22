import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export const config = { amp: 'true' };


const Layout = props => (
  <div>
    <Head>
      <title>Naina Raisinghani</title>
      <link rel="shortcut icon" href="../favicon.png" />
    </Head>
    {/* <Header /> */}
    {props.children}
    <Footer />
  </div>
);

export default Layout;