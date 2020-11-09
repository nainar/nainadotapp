import Layout from '../components/MyLayout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../lib/posts'
import Date from '../components/Date'
import { parseISO, format } from 'date-fns'

export const config = { amp: true };

export default function Post({ postData }) {
  return (
    <Layout>
        <Head>
          <script type="application/ld+json"dangerouslySetInnerHTML={{__html: `
            {
              "@context": "https://schema.org/",
              "@type": "BlogPosting",
              "url": "https://naina.app/",
              "mainEntityOfPage": { 
                "@type": "WebPage", 
                "@id": "https://naina.app/" 
              },
              "headline": "${postData.title}",
              "image": "/naina_image.jpg", 
              "author": { 
                "@type": "Person", 
                "name": "Naina Raisinghani" 
              },
              "publisher": {
                "@type": "Organization",
                "name": "Naina Raisinghani",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/naina_image.jpg"
                }
              },
              "datePublished": "${format(parseISO(postData.date), 'LLLL d, yyyy')}",
              "dateModified": "${format(parseISO(postData.date), 'LLLL d, yyyy')}",
              "inLanguage": "English"
            }
          `}}/>
        <title>{postData.title}</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💩</text></svg>" />
        </Head>
      <main>
        <h1>{postData.title}</h1>
        <small><Date dateString={postData.date} /></small>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
    <style jsx global>{`
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
      blockquote {
        background-color: #80808029;
        padding: 5px;
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
      main {
        position:relative;
        left: 1em;
        transform: translate(0%, 0%);
        top:5.5em;
        padding-left:10px;
        padding-bottom: 100px;
        width: 90%;
      } 
      amp-img {
        width: 40vw; 
      }
      @media all and (max-width: 500px) {
        amp-img {
          width: 100%;
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