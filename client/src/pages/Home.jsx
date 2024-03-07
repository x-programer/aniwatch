import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';

function Home() {
  return (
    <>
    <h3 className='text text-white'>Hello</h3>
      <Link to="/about" className='text text-white'>About</Link>
    </>
  );
}

export default Home;
