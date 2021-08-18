import { Bag } from '@components/icons';
import { Button } from '@components/ui';
import { NAV_DATA } from '@constants/nav';
import React from 'react';
import styles from './header.module.css';

const header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <h1 className={styles.logo}>BOOKI</h1>
        <ul className={styles.list}>
          {NAV_DATA.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.rightHeader}>
        <Button
          style={{ position: 'relative' }}
          radius="full"
          variant="icon"
          color="transparent"
        >
          <div className={styles.badge}>01</div>
          <Bag width="15" />
        </Button>
        <Button color="transparent">Sign In</Button>
        <Button radius="rounded" size="medium" color="secondary">
          Create Account
        </Button>
      </div>
    </header>
  );
};

export default header;
