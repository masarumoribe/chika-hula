import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { headerLogo } from '../assets/images'

const Footer = () => {
  return (
    <footer className="bg-amber-300 py-5 px-16">
        <div className='flex justify-between items-start gap-5 flex-wrap max-lg:flex-col'>
          <div className='flex flex-col items-start'>
            <a href='/'>
              <img
              className='size-16'
              src={headerLogo}/>
            </a>
            <p className='mt-3 text-sm leading-7 font-notoSansJp text-slate-800 sm:max-w-sm'>私たちの楽しいフラダンスクラスにご参加ください。踊りを学び、つながりを深めましょう。</p>
          </div>
          <div className='flex justify-between gap-6'>
            <FaFacebook className='icon'/>
            <FaInstagram className='icon'/>
            <FaYoutube className='icon'/>
          </div>
        </div>
    </footer>
  )
}

export default Footer