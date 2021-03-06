import React from 'react';
import Link from 'next/Link';

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/shows">
        <a style={linkStyle}>Shows</a>
      </Link>
    </div>
  );
};

export default Header;