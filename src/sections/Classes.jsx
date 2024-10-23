import { chika6 } from "../assets/images"

function Classes() {
  return (
    <section
    id="classes"
    className="w-full flex flex-col lg:flex-row justify-center items-center min-h-screen bg-secondary overflow-hidden px-8 xl:px-36">
      <div className="lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left z-10">
        <p className="text-lg lg:text-2xl xl:text-3xl xl:leading-10 font-semibold text-primary font-montserrat">Courses Information <br/> Hula Academy</p>
        <h1 className="mt-5 text-[clamp(35px,5vw,50px)] xl:text-4xl leading-tight font-bold font-palanquin">
          <div className="bg-secondary/90 pt-2">Mahalo, are you ready to follow?</div>
          <div className="bg-secondary/90 pb-2">
            <span className="text-primary">Hula</span> Classes
          </div>
        </h1>
        <p className="text-slate-600 text-md xl:text-lg xl:leading-8 leading-6 mt-6 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam</p>
      </div>
      <div className="w-5/6 pt-10 z-10">
        <img
        src={chika6}
        alt="hula dance lesson"
        className="w-full h-auto object-cover rounded-2xl shadow-lg"/>
      </div>
    </section>
  )
}

export default Classes