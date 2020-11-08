import Layout from '../components/MyLayout';
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/Date'

const linkStyle = {
  'textDecoration': 'none',
  color: 'purple'
};

const mediumPosts = [
  {
    date: '2016-08-07',
    title: 'Rising Women in Tech: Developing Countries',
    url: 'https://medium.com/@nainar/2016-mid-year-review-6f1659493a44'
  }, 
  {
    date: '2016-07-06',
    title: '2016 Mid Year Review',
    url: 'https://medium.com/@nainar/2016-mid-year-review-6f1659493a44'
  }, 
  {
    date: '2016-01-25',
    title: 'My failure Resume',
    url: 'https://medium.com/@nainar/my-failure-resume-82d5ad2bdee5'
  }, 
];

export const config = { amp: true };
function HomePage({allPostsData}) {
  return (
    <Layout>
      <main>
          <section>
            <h1>Hi! 👋🏾 Here are some posts.</h1>
            <br/>
            {allPostsData.map(({ id, date, title }) => (
              <div>
                <Link href="/[id]" as={`/${id}`}>
                  <a style={linkStyle}>{title}</a>
                </Link>
                <br />
                <small><Date dateString={date} /></small>
                <br />
                <br />
              </div>
            ))}
            <h1>Previous posts written elsewhere</h1>
            <br/>
            {mediumPosts.map(({ date, title, url }) => (
              <div>
                <Link href={url} as={url}>
                  <a style={linkStyle}>{title}</a>
                </Link>
                <br />
                <small><Date dateString={date} /></small>
                <br />
                <br />
              </div>
            ))}
          </section>
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
    h1 {
        color:#d8156e;
    }
    main {
      position: relative;
      margin: 0;
      color: #333333;
      top: 5.5em;
      left: 50%;
      transform: translate(50%, 0%);
      padding-left:10px;
      width: 95%;
      padding-bottom: 0px;
    }
    small {
      color:grey;
    }    
    @media only screen and (max-width: 1500px) {
      main {
        position: relative;
        top: 5.5em;
        left: 1em;
        transform: translate(0%, 0%);
        padding-left:0px;
        padding-bottom: 100px;
      }  
    }

  `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default HomePage;