import Link from 'next/link';
import Head from 'next/head';

export const config = { amp: true };

const linkStyle = {
  marginRight: 15,
  'text-decoration': 'none',
  color: 'purple'
};

 function getPages() {
   return [
     { link: '/p/resume', title: 'Resume' },
     { link: '/p/posts', title: 'Posts' },
     { link: '/p/talks', title: 'Talks' }
   ];
 }

function Header() {
  return (
    <div>
      <Head>
        <title>Naina Raisinghani</title>
        <script async key="amp-sidebar" custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
        <script async key="amp-fx-collection" custom-element="amp-fx-collection" src="https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js" />
      </Head>
      <header amp-fx="float-in-top">
        <style jsx>{`
            @font-face {
                font-family: 'Bai Jamjuree';
                font-style: sans-serif;
                src: url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');
            }
            header {
                font-family: 'Bai Jamjuree', sans-serif;
                width: 100%;
                background-color: #07c1b98a;
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
            .links {
              position: relative; 
              top: 1em;
              padding-left: 1em;
            }
            amp-sidebar, #toggleSidebar {
              display: none;
            }
            
            @media only screen and (max-width: 768px) {
              amp-sidebar, #toggleSidebar {
                display: block;
                position: relative; 
                padding-left: 1em;
                height: 100%;
                z-index:1000;
              }
              #toggleSidebar {
                padding-top: 1em;
              }
              .links {
                display: none;
              }
            }
        `}</style>
        <span className="links">
          {getPages().map(page => (
            <Link href={page.link}>
              <a style={linkStyle}>{page.title}</a>
            </Link>
          ))}
        </span>
        <div id="toggleSidebar" role="button" aria-label="close sidebar" on="tap:sidebar1.toggle" tabindex="0">☰</div>
        <amp-sidebar id="sidebar1" layout="nodisplay" side="left">
          <ul class="sidebar" style={{listStyle: 'none'}}>
            {getPages().map(page => (
              <li>
                <Link href={page.link}>
                  <a style={linkStyle}>{page.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </amp-sidebar>
        <Link href="/">
          <a style={linkStyle} className="name">Naina's Blog </a>
        </Link>
      </header>
    </div>
)};

export default Header;