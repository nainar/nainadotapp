import Layout from '../components/MyLayout';
import Link from 'next/link';

export const config = { amp: true };

function HomePage() {
  return (
    <Layout>
      <main>
          <h1>Hi! 👋🏾 My name is Naina!</h1>
          <br/>
          <div>
            This is my blog! Welcome!
            What will I write about you ask? I don't know yet. 
            I am practicing social isolation and have this domain so 🤷🏾.
          </div>          
          <br/>
          <div>
            <b>Some random facts about me:</b>
            <ul>
              <li>I'm Pakistani 🇵🇰.</li>
              <li>I live in the Bay Area in California.</li>
              <li>I love reading! Ask me about my love for <a href="https://www.goodreads.com/book/show/7201.As_the_Crow_Flies">As The Crow Flies by Jeffrey Archer</a></li>
              <li>I spend my weekends currently in self isolation learning how to bake, cook and play the keyboard!</li>
              <li>My sourdough starter is called Dough-lly Parton.</li>
            </ul>
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
    h1 {
        color:#d8156e;
    }
    main {
      position: fixed;
      margin: 0;
      color: #333333;
      top: calc(50% - 16px);
      left: 50%;
      transform: translate(-50%, -50%);
      padding-left:10px;
    }
    @media only screen and (max-width: 768px) {
      main {
        top: 4em;
        left: 1em;
        transform: translate(0%, 0%);
        padding-left:0px;
      }  
    }

  `}</style>
    </Layout>
  );
}

export default HomePage;