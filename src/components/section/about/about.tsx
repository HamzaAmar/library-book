import { RightAboutDesign } from '@components/icons';
import { Button, Input } from '@components/ui';
import React from 'react';
import styles from './about.module.css';

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <p>Explore your favorite books</p>
        <h1 className={styles.heading}>
          Get Your New <span className={styles.bStyles}>B</span>ook With The
          Best Price
        </h1>
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <Input
              name="search"
              placeholder="search book , authors , categories"
              full
              style={{ border: 0 }}
            />
          </div>
          <Button color="primary" radius="rounded" size="medium">
            Search
          </Button>
        </div>
      </div>

      <div className={styles.middleSection}>
        <img src="library.jpg" className={styles.image} />
      </div>
      <div className={styles.rightSection}>
        <RightAboutDesign />
      </div>
    </div>
  );
};

export default about;
