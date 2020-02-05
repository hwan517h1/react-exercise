import React from 'react';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import Layout from '../components/Layout';
import Header from '../components/Header';

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
      <Link href="numbers/[number]" as={`/numbers/${props.number}`}>
        <a>{props.number}</a>
      </Link>
    </li>
  );
};

const fetcher = async (url) => {
  return (await fetch(url)).json();
}

const index = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(`/api/randomQuote${query.author ? '?author=' + query.author : ''}`, fetcher);
  // The following line has optional chaining, added in Next.js v9.1.5, is the same as `data && data.author`
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading';
  if (error) quote = 'Failed to fetch the quote.';

  return (
    <div>
      <Layout>
        <Header />
      </Layout>
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink1 title="Hello, Next.js!" />
          <PostLink1 title="Learn Next.js" />
          <PostLink1 title="More" />
          <PostLink2 number="1" />
          <PostLink2 number="2" />
          <PostLink2 number="3" />
        </ul>
      </Layout>
      <Layout>
        <main className="center">
          <div className="quote">{quote}</div>
          {author && <span className="author">- {author}</span>}

          <style jsx> {`
            main {
              width: 90%;
              max-width: 900px;
              margin: 300px auto;
              text-align: center;
            }
            .quote {
              font-family: cursive;
              color: #e243de;
              font-size: 24px;
              padding-bottom: 10px;
            }
            .author {
              font-family: sans-serif;
              color: #559834;
              font-size: 20px;
            }
          `} </style>
        </main>
      </Layout>
    </div>
  );
};

export default index;