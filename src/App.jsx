import React from 'react';
import NavBar from './components/layouts/NavBar';
import Hero from './components/sections/Hero';
import HorizontalScroll from './components/sections/HorizontalScroll';

const App = () => {
  return (
    <div className='min-h-screen bg-[url("./assets/background.gif")] bg-no-repeat mb-64'>
      <NavBar />
      <Hero />
      <HorizontalScroll />
    </div>
  )
}

export default App;