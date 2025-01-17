import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { motion } from "framer-motion"

import { fadeIn } from "../variants"

import { test0, test1, test2, test3 } from "../assets/images"

const testimonial_data = [
  {
    img: test0,
    content_text: "フラを始めて約18年、昔は同じ生徒として一緒に練習していた智華ちゃんが、今は先生として指導してくれる立場になりました!今も昔も変わらずアットホームなレッスン風景で楽しく、時にスパルタに、わからないところは熱心に指導してくれます。息子と親子クラス(オハナクラス)にも参加していますが、わきあいあいと楽しんでいます！",
    testimonial_name: "Senior student"
  },
  {
    img: test1,
    content_text: "先生の教え方が非常にわかりやすく、またフラの楽しさが自然と伝わってきます。アウアナやカヒコを通じてハワイの神話や伝説にも触れることができ、心が豊かになります。レッスンを受けながら時には汗を流し、時にはハワイアンミュージックに癒され、自分自身と向き合う充実した時間を過ごすことができます。イベントに向けて仲間たちと練習することも楽しく、フラを通じて新しい友達や素敵なつながりができることも嬉しいです。",
    testimonial_name: "Senior student"
  },
  {
    img: test2,
    content_text: "町で最高のフラダンス教室！先生は今まで会った中で一番素晴らしい フラ仲間の輪に加わって、無料体験レッスンを受けてみませんか？",
    testimonial_name: "Masaru Moribe"
  },
  {
    img: test3,
    content_text: "ここが町で一番楽しいフラダンス教室！先生は本当に最高で感動します フラの世界に飛び込んで、無料体験レッスンを試してみませんか？",
    testimonial_name: "Ryo Akematsu"
  }
]

const Testimonials = () => {
  const [slide, setSlide] = useState(0);
  const length = testimonial_data.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1)
  }
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1)
  }

  return (

    <section id="testimonials">
      <div className="bg-secondary mx-auto min-h-screen px-4 py-16 flex flex-col justify-center items-center -z-10">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false}}
        >
          <h1 className="text-center text-3xl text-slate-800 font-bold font-montserrat z-10">Testimonials</h1>
          <h1 className="text-center text-3xl text-slate-800 font-bold font-notoSansJp z-10">生徒さんの声</h1>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false}}

        className="flex flex-col justify-center items-center max-w-[1400px] h-[400px] w-full rounded-xl bg-black/10 m-auto p-6 relative">
            <div>
              {testimonial_data.map((item, index) => index === slide && <div key={index}>
                <div className="flex gap-5">
                  <FaQuoteLeft size={120} className="items-start"/>
                  <h2 className="font-notoSansJp md:text-2xl font-bold">{item.content_text}</h2>
                </div>
                <div className="flex items-center gap-5 mt-4">
                  <div>
                    <img src={item.img} height={100} width={100} className="aspect-square object-cover rounded-full" alt=""/>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold">{item.testimonial_name}</h4>
                  </div>
                </div>
              </div>)}
            </div>
          <div onClick={prevSlide} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft size={50}/>
          </div>
          <div onClick={nextSlide} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight size={50}/>
          </div>
        </motion.div>
    </div>
    </section>
  )
}

export default Testimonials