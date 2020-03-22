import Layout from '../components/MyLayout';
import Link from 'next/link';
import { useAmp } from 'next/amp';

export const config = { amp: 'true' };

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
}

const PostLink = ({ post }) => (
    <li>
      <Link href="/p/[id]" as={`/p/${post.id}`}>
        <a>{post.title}</a>
      </Link>
      <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }
  
        a {
          text-decoration: none;
          color: blue;
          font-family: 'Arial';
        }
  
        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </li>
  );

export default function Blog() {
  return (
    <Layout>
      <h1>⚠️🚧👷🏽‍♀️UNDER CONSTRUCTION!👷🏽‍♀️🚧⚠️</h1>
      {/* <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul> */}
    <amp-analytics type="googleanalytics">
        <script type="application/json" jsx="true">{`
        {
            "vars": {
                "account": "UA-126879454-1"
            },
            "triggers": {
                "trackPageview": {
                "on": "visible",
                "request": "pageview"
                }
            }
        }
        `}</script>
    </amp-analytics>
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