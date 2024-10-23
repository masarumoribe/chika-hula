import { profile } from '../assets/images';

function Profile() {
  return (
    <section id='profile' className='w-full min-h-screen bg-gradient-to-r from-amber-100 to-amber-200 p-8 xl:px-36 -z-10'>
      <div className='relative py-4 text-center text-3xl z-10'>
        <h1 className='font-notoSansJp text-center font-semibold text-slate-900'>プロフィール</h1>
        <div className='bg-secondary rounded-full mx-10 md:mx-24'>
          <h2 className='text-slate-900 text-xl md:text-2xl font-semibold pt-2'>Aloha Nani Pua Melia Chika</h2>
          <h2 className='font-notoSansJp text-slate-900 text-xl md:text-2xl font-semibold tracking-wide pb-2'>鵜澤智華</h2>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center md:flex-row md:gap-5 md:mt-24 md:mb-10'>
          <img
            src={profile}
            alt='profile picture'
            className="w-3/4 md:w-1/2 h-auto object-cover rounded-3xl shadow-lg hover:scale-105 transform transition-transform duration-500 z-10"
          />
        <div className='text-center md:text-left py-8 z-10'>
          <p className='font-notoSansJp text-lg lg:text-3xl lg:leading-tight text-slate-600 font-light'>お神輿大好きフラダンサー</p>
          <p className='font-notoSansJp text-lg lg:text-3xl lg:leading-tight text-slate-600 font-light'>フラダンス歴14年</p>
          <p className='font-notoSansJp text-lg lg:text-3xl lg:leading-tight text-slate-600 font-light'>ソロコンペ3位</p>
          <p className='font-notoSansJp text-lg lg:text-3xl lg:leading-tight text-slate-600 font-light'>グループコンペ入賞</p>
          <h2 className='font-notoSansJp text-2xl lg:text-3xl lg:leading-tight text-slate-900 font-bold mt-4'>Academy of Hawaiian Arts Japan 所属</h2>
          <p className='font-notoSansJp text-lg lg:text-3xl lg:leading-tight text-slate-600 font-bold mt-4'>フラダンス命</p>
          <p className='font-notoSansJp text-lg lg:text-3xl lg:leading-tight text-slate-600 font-light text-wrap:no-wrap'>楽しく皆で笑顔で踊るをモットーにしています。<br/>是非一緒に踊りましょう</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;