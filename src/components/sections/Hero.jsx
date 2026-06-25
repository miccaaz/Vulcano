import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center px-16 font-bold'>
      <h2 className='mb-8 text-2xl'>COLLECTION OVERVIEW</h2>
      <div className='flex justify-between min-h-80'>

        {/* Infos */}
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 *:hover:scale-105'>
            <div className='bg-gray rounded-2xl p-6 w-96'>
              <h3 className='text-3xl mb-12'>TOTAL GAMES</h3>
              <span className='flex justify-end text-8xl'>20</span>
            </div>
            <div className='bg-gray rounded-2xl p-6 gap-12 w-96'>
              <h3 className='text-3xl mb-12'>COMPLETED</h3>
              <span className='flex items-center justify-end text-8xl'>10/20</span>
              
            </div>
          </div>
          
          <div className='flex justify-between bg-gray text-3xl rounded-2xl p-7 hover:scale-105'>
            <h3>MOST PLAYED PLATAFORM:</h3>
            <h3>STEAM</h3>
          </div>
        </div>

        {/* Favorite Game */}
        <div className='bg-gray rounded-2xl p-2 hover:scale-105'>
          <img src="/images/hollow-knight-cover.png" className='rounded-xl'/>
          <article className='flex justify-between text-xl py-6'>
            <h3>FAVORITE GAME: HOLLOW KNIGHT</h3>
            <span>± 100 hrs</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Hero