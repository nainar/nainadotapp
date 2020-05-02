import Layout from '../components/MyLayout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../lib/posts'
import Date from '../components/Date'

export const config = { amp: true };

export default function Post({ postData }) {
  return (
    <Layout>
        <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💩</text></svg>" />
        </Head>
      <main>
        <h2>{postData.title}</h2>
        <small><Date dateString={postData.date} /></small>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
    a {
      text-decoration: none,
      color: 'purple',
    }
    small {
      color:grey;
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
        z-index:-1;
        left: 0;
        transform: translate(0%, 0%);
        top:3.75em;
        padding-left:10px;
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

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}