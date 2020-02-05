import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';

const shows = (props) => {
  return (
    <div>
      <Layout>
        <h1>Marvel TV Shows</h1>
        <ul>
          {props.shows.map(show => (
            <li key={show.id}>
              <Link href="/ids/[id]" as={`/ids/${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  );
};

shows.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=marvel');
  const data = await res.json();

  console.log(`Show data fetced. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default shows;