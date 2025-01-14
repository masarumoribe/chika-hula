import Accordion from "../components/Accordion"

import { motion } from "framer-motion"

import { fadeIn } from "../variants"

function Faq() {
  return (
    <section id="faq">
        <div
        className="mx-auto bg-gradient-to-r from-amber-100 to-amber-200 min-h-screen px-4 py-16 flex flex-col justify-center items-center -z-10">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false}}
              className="text-center text-3xl text-slate-800 font-bold font-notoSansJp z-10">Q&A</motion.h1>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false}}
              className="max-w-[1400px] min-h-[600px] w-full rounded-xl bg-black/10 m-auto p-6 relative">
                <Accordion />
            </motion.div>
        </div>
    </section>
  )
}

export default Faq