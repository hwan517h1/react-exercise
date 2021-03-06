import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const post = () => {
  const router = useRouter();

  return (
    <div>
      <Layout>
        <h1>{router.query.number}</h1>
        <p>This is the blog post.</p>
      </Layout>
    </div>
  );
};

export default post;