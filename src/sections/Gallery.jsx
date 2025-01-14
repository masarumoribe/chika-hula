import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { motion } from "framer-motion"

import { fadeIn } from "../variants"

import { chika0, chika1, chika2, chika3, chika4, chika5, chika6, chika7, chika8, chika9, chika10, chika11, chika12, chika13, chika14, chika15, chika16, chika17, chika18, chika19, chika20 } from "../assets/images"

const pictures = [chika0, chika1, chika2, chika3, chika4, chika5, chika6, chika7, chika8, chika9, chika10, chika11, chika12, chika13, chika14, chika15, chika16, chika17, chika18, chika19, chika20];

const Gallery = () => {
  const [slide, setSlide] = useState(0);
  const length = pictures.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1)
  }
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1)
  }

  return (

    <section id="gallery">
      <div className="mx-auto bg-gradient-to-r from-amber-100 to-amber-200 min-h-screen px-4 py-16 flex flex-col justify-center items-center -z-10">
      <motion.h1 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false}}

      className="text-center text-3xl text-slate-800 font-bold font-notoSansJp z-10">ギャラリー</motion.h1>
      <div className="max-w-[1400px] h-[600px] w-full rounded-xl bg-black/10 m-auto p-6 relative">
          <div
          style={{backgroundImage: `url(${pictures[slide]})`}}
          className="w-full h-full bg-center bg-contain bg-no-repeat duration-500">
          </div>
        <div onClick={prevSlide} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft size={50}/>
        </div>
        <div onClick={nextSlide} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={50}/>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Gallery