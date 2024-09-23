import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-amber-300 p-16">
      <h1>Footer</h1>
      <div className='flex justify-between m-6'>
            <FaFacebook className='icon'/>
            <FaInstagram className='icon'/>
            <FaYoutube className='icon'/>
      </div>
    </div>
  )
}

export default Footer