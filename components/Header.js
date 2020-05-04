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
  marginRight: '10%',
  marginLeft: '10%',
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
                position: fixed; 
                top: 3.75em;
                padding-bottom: 2px;
              }
              .desktopLinks {
                display: none;
              }
              .name {
                font-size: 1.5em;
                top: 0.75em;
              }
            }
        `}</style> 
      <Head>
        <title>Naina Raisinghani</title>
        <script async key="amp-sidebar" custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
        <script async key="amp-fx-collection" custom-element="amp-fx-collection" src="https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js" />
      </Head>
      <header amp-fx="float-in-top">
        <span className="desktopLinks">
          {getPages().map(page => (
            <Link href={page.link}>
              <a style={dekstopLinkStyle}>{page.title}</a>
            </Link>
          ))}
        </span>
        <Link href="/">
          <a style={linkStyle} className="name">Naina's Blog </a>
        </Link>
      </header>
      <span className="mobileLinks">
        {getPages().map(page => (
          <Link href={page.link}>
            <a style={mobileLinkStyle}>{page.title}</a>
          </Link>
        ))}
      </span>
    </div>
)};

export default Header;