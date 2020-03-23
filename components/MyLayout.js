import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export const config = { amp: 'true' };


const Layout = props => (
  <div>
    <Head>
      <title>Naina Raisinghani</title>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💩</text></svg>" />
    </Head>
    {/* <Header /> */}
    {props.children}
    <Footer />
  </div>
);

export default Layout;