import React from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout';

const show = (props) => {
  return (
    <div>
      <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        {props.show.image ? <img src={props.show.image.medium} /> : null}
      </Layout>
    </div>
  );
};

show.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
}

export default show;
