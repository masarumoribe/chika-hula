import Button from "../components/Button"

import { arrowRight } from "../assets/icons"
import { heroPhoto } from "../assets/images"

const Hero = () => {
  return (
    <section
    id="home"
    className=" relative w-full flex flex-col justify-center items-center min-h-screen bg-cyan-400 overflow-hidden">
      <div className="absolute flex flex-col justify-between items-center w-full h-full z-10 p-10">
        <p className="text-xl font-montserrat font-semibold text-amber-300 whitespace-nowrap pt-24">Aloha Nani Pua Melia Chika <br/> Hula Academy</p>
        <h1 className="flex flex-col justify-center items-center font-palanquin text-[35px] leading-10 font-bold whitespace-nowrap mt-40">
          <div className="bg-cyan-400 opacity-85 px-10 rounded-[50px] py-3">Enjoy Our New</div>
          <br />
          <div className="bg-cyan-400 opacity-85 px-10 rounded-[50px] py-3"><span className="text-amber-300 inline-block">Hula</span> Classes</div>
        </h1>
        <p className="hidden font-montserrat text-slate-gray text-sm leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <div className="">
          <Button label="Enroll now" iconURL={arrowRight}/>
        </div>
      </div>
      <div className="absolute w-10/12 flex justify-center items-center overflow-hidden mt-20">
        <img
        src={heroPhoto}
        alt="hula dance"
        className="object-cover rounded-[30px]"/>
      </div>
    </section>
  )
}

export default Hero