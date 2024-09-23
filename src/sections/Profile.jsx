import { profile } from '../assets/images';

function Profile() {
  return (
    <section id='profile' className='relative w-full min-h-screen bg-gradient-to-r from-amber-100 to-amber-200 p-8'>
      <div className='py-4 text-center text-3xl'>
        <h1 className='font-notoSansJp text-center font-semibold text-secondary animate-bounce'>プロフィール</h1>
        <div className='bg-secondary rounded-full mx-10 md:mx-24'>
          <h2 className='text-primary font-semibold tracking-wide'>Aloha Nani Pua Melia Chika</h2>
          <h2 className='text-primary font-semibold tracking-wide'>鵜澤智華</h2>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center md:flex-row md:gap-5 md:my-24'>
          <img
            src={profile}
            alt='profile picture'
            className="w-3/4 md:w-1/2 h-auto object-cover rounded-3xl shadow-lg hover:scale-105 transform transition-transform duration-500"
          />
        <div className='text-center md:text-left py-8'>
          <p className='text-lg lg:text-3xl lg:leading-tight text-secondary font-light'>お神輿大好きフラダンサー</p>
          <p className='text-lg lg:text-3xl lg:leading-tight text-secondary font-light'>フラダンス歴14年</p>
          <p className='text-lg lg:text-3xl lg:leading-tight text-secondary font-light'>ソロコンペ3位</p>
          <p className='text-lg lg:text-3xl lg:leading-tight text-secondary font-light'>グループコンペ入賞</p>
          <h2 className='text-2xl lg:text-3xl lg:leading-tight text-secondary font-bold mt-4'>Academy of Hawaiian Arts Japan 所属</h2>
          <p className='text-lg lg:text-3xl lg:leading-tight text-secondary font-bold mt-4'>フラダンス命</p>
          <p className='text-lg lg:text-3xl lg:leading-tight text-secondary font-light text-wrap:no-wrap'>楽しく皆で笑顔で踊るをモットーにしています。<br/>是非一緒に踊りましょう</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;