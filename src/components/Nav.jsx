import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { close } from '../assets/icons'
import { navLinks } from '../constants'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
  const [nav, setNav] = useState(false)
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
  }

  return (
    <header className='fixed z-20 w-full bg-amber-300'>
      <nav className='flex justify-between items-center max-container px-3 md:px-[30px]'>
        <div>
          <a href="/" className={logo ? 'hidden' : 'flex flex-row justify-center items-center font-montserrat text-slate-gray'}>
            <img className='size-16 m-5' src={headerLogo} alt="logo" />
            <h1>Chika Hula</h1>
          </a>
        </div>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div onClick={handleNav} className='hidden max-lg:block z-10 pr-8'>
          {nav ? <img src={close} alt='close icon' width={25} height={25} className='text-black icon mt-2'/> : <img
            src={hamburger}
            alt='hamburger'
            width={25}
            height={25}
            className='icon'
          />}
        </div>

        {/* Mobile menu dropdown */}
        <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'hidden'}>
          <ul>
            <a href="/" className='flex flex-row justify-center items-center font-montserrat text-slate-gray'>
            <img className='size-16 m-5' src={headerLogo} alt="logo" />
            <h1>Chika Hula</h1>
          </a>
          {navLinks.map((item) => (
            <li key={item.label} className='text-center border-b m-2'>
              <a href={item.href} className='font-montserrat leading-normal text-2xl text-slate-gray p-4'>
                {item.label}
              </a>
            </li>
          ))}
          <div className='flex justify-between m-6'>
            <FaFacebook className='icon'/>
            <FaInstagram className='icon'/>
            <FaYoutube className='icon'/>
          </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav