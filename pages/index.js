import Head from 'next/head';
import Playlist from '../components/Playlist';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <Playlist />
      </main>
    </Layout>
  );
}
