import Layout from '../components/MyLayout';
import Head from 'next/head';

export const config = { amp: true };

function TalksPage() {
  return (
    <Layout>
        <Head>
        <title>Naina Raisinghani</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💩</text></svg>" />
        <script async key="amp-youtube" custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
            />
        </Head>
      <main>
        <div className="container">
            <amp-youtube data-videoid="UyPdVFbZ3gs" layout="responsive" width="480" height="270" ></amp-youtube>
            <div className="text">
                <h2>AMP: A user driven component roadmap</h2>
                <p>
                    Come along and learn about all the new shiny components and feature work that the AMP Project has taken on. This talk also includes a sneak peek on future feature work to come. 
                </p>
            </div>

            <amp-youtube data-videoid="aRK85FSEsx0" layout="responsive" width="480" height="270"></amp-youtube>
            <div className="text">
                <h2>Rapidly Building Better Web Experiences with AMP </h2>
                <p>
                AMP set out with the vision to bring reliably fast performance to the web. 
                We are now expanding the format to new mediums like email and stories while ensuring 
                AMP has a positive return on investment for the millions of sites that use it. 
                This talk is a whirlwind tour on everything new with AMP in 2019.
                </p>
            </div>

            <amp-youtube data-videoid="Ez_wOEmH1P0" layout="responsive" width="480" height="270"></amp-youtube>
            <div className="text">
                <h2>AMP as a service: Auto-upgraded, accelerated developer workflows</h2>
                <p>
                    As the number of frameworks increase, AMP stays the well lit path that allows engineering teams 
                    to make the best decisions for their users. This talk describes how much like SaaS, by using AMP CTOs ensure their engineering 
                    teams are able to be more agile in creating forward looking experiences while being backward compatible 
                    by leveraging the thousands of open source contributions made to AMP daily.
                </p>
            </div>

            <amp-youtube data-videoid="s7OyBFLr9rY" layout="responsive" width="480" height="270"></amp-youtube>
            <div className="text">
                <h2>Houdini - how you too can write a browser rendering engine!</h2>
                <p>
                    This talk describes the Houdini APIs.
                    A group of APIs that give developers direct access to the CSS Object Model (CSSOM), 
                    thereby enabling them to write code the browser can parse as CSS, 
                    and creating new CSS features without waiting for them to be implemented natively in browsers.
                </p>
            </div>
        </div>
      </main>
    <style jsx>{`
    @font-face {
        font-family: 'Bai Jamjuree';
        font-style: sans-serif;
        src: url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');
    }
    * {
        font-family: 'Bai Jamjuree', sans-serif;
        text-decoration: none;
    }
    .text {
        text-align: center;
        vertical-align: middles;
    }
    .container {
        display: block;
    }
    main {
        position:relative;
        left: 0;
        transform: translate(0%, 0%);
        top: 6em;
        padding-left:10px;
        padding-bottom: 100px;
        width: 95%;
    }  

    @media all and (min-width: 768px) and (max-width:2000px) {
        .container {
            display: grid;
            grid-template-columns: 480px 480px;
            grid-template-rows: 270px;
            grid-gap: 10px;
        }
    }
    @media all and (min-width: 2000px) {
        .container {
            display: grid;
            grid-template-columns: 480px 480px;
            grid-template-rows: 270px;
            grid-gap: 10px;
        }
        main {
            position: fixed;
            margin: 0;
            top: calc(50%);
            left: 50%;
            transform: translate(-50%, -50%);
            padding-left:0px;
        }
    }
  `}</style>
    </Layout>
  );
}

export default TalksPage;