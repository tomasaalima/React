import React from 'react';
import Timer from '../components/ExempleOne';
import Menu from '../components/Menu';

function HomePage() {
  return (
    <div
      className="flex flex-col h-screen"
    >
      <Menu />
      <Timer start={0} ms={1000} />
    </div>
  );
}

export default HomePage;
