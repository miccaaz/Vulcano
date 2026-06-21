import React from 'react'
import NavBar from './components/layouts/NavBar'
import Hero from './components/sections/Hero'

const App = () => {
  return (
    <div className='min-h-screen bg-[url("./assets/background.gif")] bg-no-repeat bg-cover mb-64'>
      <NavBar />
      <Hero />
    </div>
  )
}

export default App