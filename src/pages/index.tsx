import { Layout } from '@components/core';
import {
  About,
  BookCarousel,
  BookList,
  Category,
  Plans,
  SmartPhone,
  Testimonials
} from '@components/section';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <About />
        <BookCarousel />
      </div>
      <div>
        <Category />
      </div>
      <BookList />
      <Plans />
      <Testimonials />
      <SmartPhone />
    </Layout>
  );
};

export default Home;
