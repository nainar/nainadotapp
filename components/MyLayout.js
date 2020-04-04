import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import { withAmp } from 'next/amp'

export const config = { amp: true };


const Layout = props => (
  <div>
    <Head>
      <title>Naina Raisinghani</title>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💩</text></svg>" />
      <script async key="amp-analytics" custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        />
    </Head>
    <Header />
    {props.children}
    <amp-analytics type="googleanalytics" id="analytics1" data-credentials="include">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            vars: {
              account: 'UA-126879454-1',
            },
            triggers: {
              trackPageview: {
                on: 'visible',
                request: 'pageview'
              }
            }
          })
        }}
      />
    </amp-analytics>
    <Footer />
  </div>
);

export default Layout;