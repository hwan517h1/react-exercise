import React from 'react';
import Link from 'next/Link';

import Layout from '../components/Layout';

const PostLink1 = (props) => {
  return (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

const PostLink2 = (props) => {
  return (
    <li>
      <Link href="ids/[id]" as={`/ids/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  );
};

const index = () => {
  return (
    <div>
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink1 title="Hello, Next.js!" />
          <PostLink1 title="Learn Next.js" />
          <PostLink1 title="More" />
          <PostLink2 id="1" />
          <PostLink2 id="2" />
          <PostLink2 id="3" />
        </ul>
      </Layout>
    </div>
  );
};

export default index;