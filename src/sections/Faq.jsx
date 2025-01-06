import Accordion from "../components/Accordion"

function Faq() {
  return (
    <section id="faq">
        <div className="mx-auto bg-gradient-to-r from-amber-100 to-amber-200 min-h-screen px-4 py-16 flex flex-col justify-center items-center -z-10">
            <h1 className="text-center text-3xl text-slate-800 font-bold font-notoSansJp z-10">Q&A</h1>
            <div className="max-w-[1400px] h-[600px] w-full rounded-xl bg-black/10 m-auto p-6 relative">
                <Accordion />
            </div>
        </div>
    </section>
  )
}

export default Faq