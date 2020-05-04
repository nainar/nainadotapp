import Layout from '../components/MyLayout';
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/Date'

const linkStyle = {
  'textDecoration': 'none',
  color: 'purple'
};

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
          </section>
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
    small {
      color:grey;
    }    
    @media only screen and (max-width: 768px) {
      main {
        top: 5.5em;
        left: 1em;
        transform: translate(0%, 0%);
        padding-left:0px;
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