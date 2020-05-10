import Layout from '../components/MyLayout';
import Head from 'next/head';
import Link from 'next/link'

const linkStyle = {
  'textDecoration': 'none',
  color: 'purple'
};


export const config = { amp: true };

function HomePage() {
  return (
    <Layout>
      <main>
        <Head>
          <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
            />
          <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
        </Head>

          <h1>Hi! 👋🏾 My name is Naina!</h1>
          <br/>
          <div>
            This is my blog! Welcome!
            What will I write about you ask? Check the 
            <Link href="/posts" as={`/posts`}>
              <a style={linkStyle}> posts section! </a>
            </Link>
             I am practicing social isolation and have this domain so giving this whole blogging thing a shot 🤷🏾.
          </div>          
          <br/>
          <div>
            <b>Some random facts about me:</b>
            <ul>
              <li>I'm Pakistani 🇵🇰.</li>
              <li>I live in the Bay Area in California.</li>
              <li>I love reading! Ask me about my love for <Link style={linkStyle} href="https://www.goodreads.com/book/show/7201.As_the_Crow_Flies"><a style={linkStyle}>As The Crow Flies by Jeffrey Archer</a></Link></li>
              <li>I spend my weekends currently in self isolation learning how to bake, cook and play the keyboard!</li>
              <li>My sourdough starter is called Dough-lly Parton.</li>
            </ul>
          </div>
          <div className="signup">
            <b>Subscribe to my monthly newsletter</b>
            <br/>
            <br/>
            Logistics:
              <ul>
                <li>Released on the 10th of each month</li>
                <li>Only 1 email per month</li>
                <li>Time? Defers!</li>
              </ul>
            The newsletter will include the following:
              <li>A summary of the blogs I wrote the month before</li>
              <li>Recipes I tried to cook/bake/ferment</li>
              <li>Other interesting things...</li>
            <br/>
            <form action-xhr="https://app.us20.list-manage.com/subscribe/post?u=c27d0495837c8265254d742b4&amp;id=c0a007ee8f" method="post" class="validate" target="_blank">
            <label for="mce-EMAIL">
                <small>Email address</small>
              </label>
              <br/>
              <input type="email" value="" name="EMAIL" className="emailInput" id="mce-EMAIL" placeholder="Email" required></input>
              <div className="dummy" aria-hidden="true">
                <input type="text" name="b_c27d0495837c8265254d742b4_c0a007ee8f" tabindex="-1" value=""></input>
              </div>
              <div class="clear">
                <input type="submit" value="Subscribe" name="subscribe" className="submitButton"></input>
              </div>
              <br/>
              <div submit-success="true">
                <template type="amp-mustache">
                  Success! Thanks for signing up for my newsletter!
                </template>
              </div>
              <div submit-error="true">
                <template type="amp-mustache">
                Success! Thanks for signing up for my newsletter!
                </template>
                </div>                 
            </form>
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
    h1, input[type="submit"] {
        color:#d8156e;
    }
    .signup {
      background-color :#eab1cb; 
      padding: 10px;
    }
    .dummy {
      position: absolute;
      left: -5000px;
    }
    .submitButton {
      font-family: 'Bai Jamjuree', sans-serif;
      color: #d8156e;
      font-size: 1em;
    }
    .emailInput {
      font-family: 'Bai Jamjuree', sans-serif;
      font-size: 1em;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    form.amp-form-submit-success > input {
      display: none
    }
    form.amp-form-submit-error > input {
      display: none
    }

    main {
      position:relative;
      left: 0;
      transform: translate(0%, 0%);
      top:5.5em;
      padding-left:10px;
      padding-bottom: 100px;
      width: 95%;
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
          padding-left:0px;
          padding-bottom: 0px;
      }
  }


  `}</style>
    </Layout>
  );
}

export default HomePage;