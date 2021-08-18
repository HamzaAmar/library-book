import { Star } from '@components/icons';
import { BookType } from '@constants/books';
import React from 'react';
import styles from './book.module.css';

const Book = ({ img, rating }: BookType) => {
  return (
    <div className={`keen-slider__slide ${styles.book}`}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={img.src} alt={img.alt} />
      </div>
      <div className={styles.rating}>
        <Star width="12.5" />
        <small className={styles.ratingNumber}>{rating}</small>
      </div>
    </div>
  );
};

export default Book;
