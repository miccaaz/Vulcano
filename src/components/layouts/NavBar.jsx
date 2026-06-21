import React, { useEffect, useState } from 'react'
import ProfileImage from '../../assets/profile-image.png'
import Logo from '../../assets/vulcano-logo.png'

import { NAV_LINKS } from '../../data/constants'

import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-1000 w-full px-9 py-2 transition-all duration-300 
        ${isScrolled ? 'bg-transparent' : 'bg-gray'}`}
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      <nav className='flex items-center justify-between'>
        <div className='flex gap-6 select-none'>
          <img src={Logo} alt="Vulcano Logo" className='h-10'/>
          <h1 className='font-bold text-4xl' >VULCANO</h1>
        </div>
        <div className='flex items-center justify-center gap-9'>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={handleNavClick(link.id)}
              className={`font-bold text-2xl cursor-pointer hover:scale-110
                ${activeSection ? '' : ''}`}
            >
              {link.label}
            </button>
          ))}
          <img src={ProfileImage} alt="Profile Image" className='h-13'/>
        </div>
      </nav>
      
    </header>
  )
}

export default NavBar