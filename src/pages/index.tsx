import React from 'react';
import Head from 'next/head';

import VercelLogo from '../assets/vercel.svg';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home page</title>
      </Head>

      <VercelLogo style={{ background: '#fff' }} />
      <h1>Template Next.js</h1>
      <p>
        Preparado com styled components, importação de imagens, temas, eslint e
        prettier
      </p>
    </Container>
  );
};

export default Home;
