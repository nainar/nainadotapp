import Link from 'next/link';
import Head from 'next/head';

export const config = { amp: true };

const linkStyle = {
  marginRight: 15,
  'textDecoration': 'none',
  color: 'purple'
};
const mobileLinkStyle = {
  'textDecoration': 'none',
  color: 'purple',
  marginRight: '8%',
  marginLeft: '8%',
};
const dekstopLinkStyle = {
  marginRight: 15,
  'textDecoration': 'none',
  color: 'purple'
};

function getPages() {
  return [
    { link: '/posts', title: 'Posts' },
    { link: '/work', title: 'Profesh' },
    { link: '/talks', title: 'Talks' }
  ];
 }

function Header() {
  return (
    <div>
        <style jsx>{`
            @font-face {
                font-family: 'Bai Jamjuree';
                font-style: sans-serif;
                src: url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');
            }
            *{
              font-family: 'Bai Jamjuree', sans-serif;
            }
            header {
                width: 100%;
                background-color: #38e4dd;
                padding: 1vh 0 1vh 0;
                height: 3em;
                position: fixed;
                overflow: hidden;
                top: 0;
            }
            .name {
              position: fixed;
              text-align:center;
              left: 50%;
              transform: translateX(-50%);
              font-size: 2em;
              top: 0.5em;
            }
            .mobileLinks {
              display: none;
            }
            .desktopLinks {
              position: relative; 
              width: 100%;
              background-color: #38e4dd;
              top: 1em;
              padding-left: 1em;
            }
          
            @media only screen and (max-width: 768px) {
              .mobileLinks {
                background-color: #38e4dd;
                width: 100%;
                display: inline;
                padding-bottom: 5px;
                font-size: 1.25em;
                position: fixed;
                top: 3em;
              }
              .desktopLinks {
                display: none;
              }
              .name {
                font-size: 1.5em;
                top: 0.75em;
              }
              header {
                height: 5em;
              }
            }
        `}</style> 
      <Head>
        <title>Naina Raisinghani</title>
        <script type="application/ld+json"dangerouslySetInnerHTML={{__html: `
            {
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Naina Raisinghani",
              "url": "https://naina.app",
              "image": "https://naina.app",
              "sameAs": [
                "https://twitter.com/nainar92",
                "https://www.instagram.com/nainar92/",
                "https://www.linkedin.com/in/nainaraisinghani/",
                "https://naina.app",
                "https://github.com/nainar"
              ],
              "jobTitle": "Product Manager",
              "worksFor": {
                "@type": "Organization",
                "name": "Google"
              }  
            }
          `}}/>
        <script async key="amp-fx-collection" custom-element="amp-fx-collection" src="https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js" />
      </Head>
      <header amp-fx="float-in-top">
        <div className="desktopLinks">
          {getPages().map(page => (
            <Link href={page.link}>
              <a style={dekstopLinkStyle}>{page.title}</a>
            </Link>
          ))}
        </div>
        <Link href="/">
          <a style={linkStyle} className="name">Naina's Blog </a>
        </Link>
        <div className="mobileLinks">
          {getPages().map(page => (
            <Link href={page.link}>
              <a style={mobileLinkStyle}>{page.title}</a>
            </Link>
          ))}
        </div>
      </header>
    </div>
)};

export default Header;