import { Apple } from '@components/icons';
import { Button } from '@components/ui';
import React from 'react';
import styles from './smart.module.css';

const smartPhone = () => {
  return (
    <section>
      <div>
        <img src="https://piscum.photos/id/34/300/300" />
      </div>
      <div>
        <h1>Booki</h1>
        <h2>Available For Your Smartphone .</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui aliquam
          repellat illum eligendi facere, laborum magni dicta eos quas odit iure
          ea consequatur tempora minus eaque alias officia, dolorum sunt!
        </p>
        <Button icon={<Apple />}>
          Available on <b>APP store</b>
        </Button>
      </div>
    </section>
  );
};

export default smartPhone;
