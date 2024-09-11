import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='absolute z-10 w-full'>
      <nav className='bg-amber-200 flex justify-between items-center max-container px-[30px]'>
        <a href="/" className='flex flex-row justify-center items-center font-montserrat text-slate-gray'>
            <img className='size-16 m-5' src={headerLogo} alt="logo" />
            <h1>Chika Hula</h1>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block pr-8'>
          <img
            src={hamburger}
            alt='hamburger'
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav