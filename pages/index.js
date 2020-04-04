import Layout from '../components/MyLayout';
import Link from 'next/link';
import { withAmp } from 'next/amp'

export const config = { amp: true };

function HomePage() {
  return (
    <Layout>
      <h1>⚠️🚧👷🏽‍♀️UNDER CONSTRUCTION!👷🏽‍♀️🚧⚠️</h1>
    <style jsx>{`
    @font-face {
        font-family: 'Bai Jamjuree';
        font-style: sans-serif;
        src: url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');
    }
    * {
        font-family: 'Bai Jamjuree', sans-serif;
    }
    h1 {
        color:red;
        position: fixed;
        top: calc(50% - 16px);
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        margin: 0;
    }
    `}</style>
    </Layout>
  );
}

export default HomePage;