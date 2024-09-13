import Button from "../components/Button"

import { arrowRight } from "../assets/icons"
import { heroPhoto } from "../assets/images"

const Hero = () => {
  return (
    <section
    id="home"
    className="w-full flex flex-col justify-center min-h-screen bg-cyan-400 overflow-hidden">
      <div className="relative flex flex-col justify-center items-start w-full z-10 px-5">
        <p className="absolute text-2xl font-montserrat font-semibold text-amber-300 whitespace-nowrap -top-[310px]">Aloha Nani Pua Melia Chika <br/> Hula Academy</p>
        <h1 className="absolute font-palanquin text-[35px] leading-10 font-bold whitespace-nowrap -top-[130px]">
          <span className="relative bg-cyan-400 opacity-85 pr-10 rounded-r-[50px]">Enjoy Our New</span>
          <br />
          <span className="text-amber-300 inline-block mt-3">Hula</span> Classes
        </h1>
        <p className="absolute font-montserrat text-slate-gray text-sm leading-5 -bottom-[380px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <Button label="Enroll now" iconURL={arrowRight}/>
      </div>
      <div className="absolute w-11/12 -right-20 flex justify-center items-center overflow-hidden pt-20">
        <img
        src={heroPhoto}
        alt="hula dance"
        className="object-cover rounded-l-[30px] rounded-br-[30px]"/>
      </div>
    </section>
  )
}

export default Hero