import { Button } from '@components/ui';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Button rounded type="button">
          Search
        </Button>
        <Button type="button">Hello</Button>
      </main>
    </div>
  );
};

export default Home;
