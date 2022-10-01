import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Korebase</title>
        <meta name="description" content="Find parties near you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>welcome to korebase</h1>
    </div>
  );
};

export default Home;
