import Button from "../components/Button"

import { arrowRight } from "../assets/icons"
import { heroPhoto } from "../assets/images"

const Hero = () => {
  return (
    <section
    id="home"
    className="relative w-full flex flex-col md:flex-row justify-center items-center min-h-screen bg-secondary overflow-hidden pt-24 xl:px-36">
      <div className="md:w-[60%] flex flex-col justify-center items-center md:items-start p-8 md:p-10 text-center md:text-left z-10">
        <p className="text-lg md:text-2xl xl:text-3xl xl:leading-10 font-semibold text-primary font-montserrat">Aloha Nani Pua Melia Chika <br/> Hula Academy</p>
        <h1 className="mt-5 text-[clamp(35px,5vw,50px)] xl:text-4xl leading-tight font-bold font-palanquin">
          <div className="bg-secondary/90 pt-2">Enjoy Our New</div>
          <div className="bg-secondary/90 pb-2">
            <span className="text-primary">Hula</span> Classes
          </div>
        </h1>
        <p className="hidden md:block text-slate-600 text-md xl:text-lg xl:leading-8 leading-6 mt-6 md:mt-8 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam</p>
        <div className="mt-6 md:mt-8 transition-transform duration-300 hover:scale-105">
          <Button label="Enroll now" iconURL={arrowRight}/>
        </div>
      </div>
      <div className="mt-2 w-full max-w-sm md:max-w-md mb-8 md:mr-8 z-10">
        <img
        src={heroPhoto}
        alt="hula dance"
        className="w-full h-auto object-cover rounded-2xl shadow-lg"/>
      </div>
    </section>
  )
}

export default Hero