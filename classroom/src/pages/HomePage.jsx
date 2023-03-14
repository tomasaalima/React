import React from 'react';
import Timer from '../components/ExempleOne';
import Menu from '../components/Menu';

function HomePage() {
  return (
    <>
      <Menu />
      <Timer start={0} ms={1000} />
    </>
  );
}

export default HomePage;
