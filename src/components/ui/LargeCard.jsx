import React from 'react';

const LargeCard = (index, title, img, category, rate) => {
  return (
    <div key={index} className='bg-gray rounded-2xl p-2 hover:scale-105'>
      <img src={img} className='rounded-xl' />
      <article className='flex justify-between text-xl py-6'>
        <h3>{title}</h3>
        <span>{rate}</span>
      </article>
    </div>
  )
}

export default LargeCard;