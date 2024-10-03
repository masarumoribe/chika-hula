const ContactUs = () => {
  return (
    <section id="contact-us" className="flex justify-center min-h-svh bg-primary">
      <form className="font-notoSansJp flex flex-col justify-center items-start gap-5 w-5/6">
        <h2 className="text-3xl self-center">Contact Me</h2>
        <div className="flex flex-col w-full">
          <label>お名前</label>
          <input type="text" className="bg-transparent border-2 rounded-lg border-slate-600 p-4 mt-3" placeholder="山田太郎" required/>
        </div>
        <div className="flex flex-col w-full">
          <label>フリガナ</label>
          <input type="text" className="bg-transparent border-2 rounded-lg border-slate-600 p-4 mt-3" placeholder="ヤマダタロウ" required/>
        </div>
        <div className="flex flex-col w-full">
          <label>メールアドレス</label>
          <input type="email" className="bg-transparent border-2 rounded-lg border-slate-600 p-4 mt-3" placeholder="example@mail.com" required/>
        </div>
        <div className="flex flex-col w-full">
          <label>本文</label>
          <textarea name="" id="" className="bg-transparent h-10 resize-none border-2 rounded-lg border-slate-600 p-4 mt-3" placeholder="Enter your message" required/>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default ContactUs