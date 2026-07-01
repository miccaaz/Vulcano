import React from 'react';

const LargeCard = ({ className = '', index, title, img, category, rate }) => {
  return (
    <div className={`flex bg-gray rounded-2xl p-2 w-96 ${className}`}>
      <img src={img} alt={title} className='rounded-xl' />
      <article className='flex justify-between text-xl py-6'>
        <h3>{title}</h3>
        <span>{rate}</span>
      </article>
    </div>
  )
}

export default LargeCard;