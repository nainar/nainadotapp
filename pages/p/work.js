import Layout from '../../components/MyLayout';
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
          <div className="title">
              <h2>Google - Mountain View, CA, USA</h2>
              <h3>Product Manager - AMP</h3>
              <h4>January 2019 - Present</h4>
          </div>
          <div className="text">
            <ul>
              <li>Leading projects within the AMP first initiative - intends to get more sites using AMP as their framework of choice. 
                <ul>
                  <li>Launched amp-script - a component that allows developers to add performant custom JavaScript to AMP pages. </li>
                  <li>Leading Bento AMP - allows developers to incrementally adopt AMP. It increases the number of people willing to deploy AMP first sites if they see it as beneficial.</li>
                  <li>Leading the AMP as a Service initiative which ensures that AMP stays the well lit path that allows engineering teams to make the best decisions for their users. </li>
                </ul>
              </li>
              <li>Driving understanding of AMP's value proposition in E-commerce.</li>
            </ul>
          </div>

          <div className="title">
            <h2>Google - Mountain View, CA, USA</h2>
            <h3>Software Engineer - AMP</h3>
            <h4>February 2018 - December 2018</h4>
          </div>
          <div className="text">
            <ul>
              <li>Added new performant animation primitives and new ways of triggering animations (device tilt and position in page) to AMP as well.</li>
              <li>Influenced browser specs by providing feedback on new APIs by testing them in AMP. </li>
            </ul>
          </div>

          <div className="title">
            <h2>Google - Sydney, Australia</h2>
            <h3>Software Engineer - Chrome</h3>
            <h4>August 2015 - February 2018</h4>
          </div>
          <div className="text">
            <ul>
              <li>Refactored the Rendering Engine to separate the code for Style Resolution and Layout Tree Construction to enable granular analysis and future improvements to the rendering engine.</li>
              <li>Reduced interop issues against the Chromium CSS Engine by fixing bugs and interacting with the CSS Working Group and other Browsers' technical teams regarding spec and implementation. Reduced the team's Interop issues by 50% despite a high rate of incoming issues. </li>
              <li>Worked with Senior members of the team to develop metrics to determine the success of our bug Triage process. Used these metrics to improve the process.</li>
            </ul>
          </div>

          <div className="title">
            <h2>Google - Sydney, Australia</h2>
            <h3>Software Engineer Intern</h3>
            <h4>June 2014 - August 2014</h4>
          </div>
          <div className="text">
            <ul>
              <li>Exposed <a href="https://github.com/web-animations">Web Animations</a> to Web Workers (additional contexts to execute JavaScript in) allowing Web Animations to be multithreaded. <a href="https://codereview.chromium.org/491053004/">Chromium Change List</a> and <a href="https://github.com/web-animations/wawwa">Github commits.</a>.</li>
              <li>Organized and led 2 team wide hackathons of 13 engineers; to develop the team's understanding of Dart and to help deal with Interop issues in the Web Animations polyfill.</li>
            </ul>
          </div>

          <div className="title">
            <h2>Lahore University of Management Sciences - Lahore, Pakistan</h2>
            <h3>Bachelors of Science, Computer Science</h3>
            <h4>September 2011 - June 2015</h4>
          </div>
          <div className="text">
            <ul>
              <li>CGPA: 3.712 / 4.0</li>
              <li>Top 10% of Class of 2015</li>
              <li>Top 10 in Computer Science</li>
              <li>Dean’s Honor List (> 3.6/4 GPA) - Lahore, Pakistan (2011 - 2015)</li>
              <li>Outstanding Diplomacy at Harvard WORLDMUN -  Seoul, South Korea (2015)</li>
              <li>Outstanding Diplomacy at Harvard WORLDMUN - Melbourne, Australia (2013)</li>
            </ul>
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
    h1, h2, h3, h4 {
      color: #d8156e;
    }
    .title {
      text-align: center;
      vertical-align: middles;
    }
    .container {
        display: grid;
        grid-template-columns: 480px 480px;
        grid-template-rows: 270px;
        grid-gap: 10px;
    }
    .container {
      display: block;
    }
    main {
        position:relative;
        z-index:-1;
        left: 0;
        transform: translate(0%, 0%);
        top:3.75em;
    }  

    @media all and (min-width: 768px) and (max-width:1500px) {
        .container {
            display: grid;
            grid-template-columns: 480px 480px;
            grid-template-rows: 270px;
            grid-gap: 10px;
        }
    }
    @media all and (min-width: 1500px) {
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
        }
    }
  

  `}</style>
    </Layout>
  );
}

export default TalksPage;