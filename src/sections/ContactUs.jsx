import { contactBackground } from "../assets/images"

const ContactUs = () => {
  return (
    <section id="contact-us" className="relative flex justify-center min-h-svh bg-cover" style={{"backgroundImage": `url(${contactBackground})`}}>
      <div className="absolute h-full w-full bg-slate-400 opacity-40"/>
      <form className="bg-slate-800 border-2 border-slate-400 rounded-md font-notoSansJp flex flex-col justify-between items-start gap-5 w-5/6 p-8 my-10 lg:mx-64 2xl:mx-96 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-50">
        <h2 className="lg:text-3xl self-center text-slate-300">お問い合わせ</h2>
        <div className="text-xs lg:text-base flex flex-col w-full">
          <label className="text-slate-300">お名前</label>
          <input type="text" className="bg-transparent border-2 rounded-lg border-slate-400 p-4 mt-3" placeholder="山田 太郎" required/>
        </div>
        <div className="text-xs lg:text-base flex flex-col w-full">
          <label className="text-slate-300">フリガナ</label>
          <input type="text" className="bg-transparent border-2 rounded-lg border-slate-400 p-4 mt-3" placeholder="ヤマダ タロウ" required/>
        </div>
        <div className="text-xs lg:text-base flex flex-col w-full">
          <label className="text-slate-300">メールアドレス</label>
          <input type="email" className="bg-transparent border-2 rounded-lg border-slate-400 p-4 mt-3" placeholder="example@mail.com" required/>
        </div>
        <div className="text-xs lg:text-base flex flex-col w-full">
          <label className="text-slate-300">本文</label>
          <textarea name="" id="" className="bg-transparent h-40 resize-none border-2 rounded-lg border-slate-400 p-4 mt-3" placeholder="Enter your message" required/>
        </div>
        <button className="lg:text-xl text-slate-300 self-center hover:bg-slate-300 hover:text-slate-800 border-2 rounded-full px-10 py-3" type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default ContactUs