import Link from 'next/link';
import { withAmp } from 'next/amp'

export const config = { amp: true };

const linkStyle = {
  marginRight: 15
};

function Header() {
  return (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)};

export default Header;