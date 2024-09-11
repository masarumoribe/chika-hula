import Button from "../components/Button"

import { arrowRight } from "../assets/icons"
import { heroPhoto } from "../assets/images"

const Hero = () => {
  return (
    <section
    id="home"
    className="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 bg-cyan-400 overflow-hidden lg:px-50 md:px-40">
      <div className="relative lg:w-2/4 flex flex-col justify-center items-start w-full pt-28">
        <p className="text-3xl font-montserrat font-semibold text-amber-300 whitespace-nowrap">Aloha Nani Pua Melia Chika <br/> Hula Academy</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold whitespace-nowrap z-10">
          <span className="xl:whitespace-nowrap relative bg-cyan-400 opacity-85 pr-10 rounded-r-[50px]">Enjoy Our New</span>
          <br />
          <span className="text-amber-300 inline-block mt-3">Hula</span> Classes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <Button label="Enroll now" iconURL={arrowRight}/>
      </div>
      <div className="relative w-full h-full flex justify-center items-center pt-20 pb-10 lg:h-screen overflow-hidden">
        <img
        src={heroPhoto}
        alt="hula dance"
        className="object-cover rounded-tl-[50px] rounded-br-[50px] max-w-[80%] max-h-[80%] lg:max-w-[90%] lg:max-h-[90%]"/>
      </div>
    </section>
  )
}

export default Hero