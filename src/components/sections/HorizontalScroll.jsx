import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Logo from '../../assets/vulcano-logo.png';
import LargeCard from '../ui/LargeCard';


gsap.registerPlugin(ScrollTrigger);

const favs = [
  {
    title: "Primeiro",
    img: "/images/hollow-knight-cover.png",
    category: "Metro 1",
    rate: 4
  },
  {
    title: "Segundo",
    img: "/images/hollow-knight-cover.png",
    category: "Metro 2",
    rate: 1
  },
  {
    title: "Terceiro",
    img: "/images/hollow-knight-cover.png",
    category: "Metro 3",
    rate: 5
  },
  {
    title: "Quarto",
    img: "/images/hollow-knight-cover.png",
    category: "Metro 4",
    rate: 2.5
  },
  {
    title: "Quinto",
    img: "/images/hollow-knight-cover.png",
    category: "Metro 5",
    rate: 2
  }
]

const HorizontalScroll = () => {
  const scrollRef = useRef(null);
  const triggerRef = useRef(null);
  const revealLogoRef = useRef(null);

  useGSAP(() => {

  })
  
  return (
    <section ref={triggerRef} className='relative h-screen w-full overflow-hidden bg-blue'>
      <div ref={revealLogoRef} className='absolute inset-0 flex flex-col items-center justify-center z-0'>
        <img src={Logo} alt="" className='max-w-32' />
        <h2 className='text-7xl font-black text-white leading-none text-center'>VULCANO</h2>
      </div>

      <div className='relative z-10 flex h-full items-center pointer-events-none'
      style={{width: "450vw", paddingLeft: "100vw"}} >
        {favs.map((fav, index) => (
          <LargeCard index={index} title={fav.title} img={fav.img} rate={fav.rate} />
        ))}
      </div>
    </section>
  )
}

export default HorizontalScroll;