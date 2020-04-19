import Layout from '../../components/MyLayout';
import Link from 'next/link';

export const config = { amp: true };

function HomePage() {
  return (
    <Layout>
      <main>
          <h1>Hi! 👋🏾 Yup, still Naina...</h1>
          <br/>
          <div>
            Guess I still haven't put up any posts. Oops! 🤷🏾.
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
        color:red;
    }
    main {
      position: fixed;
      margin: 0;
      color: #333333;
    }

    main {
      top: calc(50% - 16px);
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
    @media only screen and (max-width: 768px) {
      main {
        top: 4em;
        left: 1em;
        transform: translate(0%, 0%);
      }  
    }

  `}</style>
    </Layout>
  );
}

export default HomePage;