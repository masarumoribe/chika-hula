/* eslint-disable no-irregular-whitespace */
import { chika6 } from "../assets/images"
import { TbMoodKid, TbMoodCheck, TbMoodCog } from "react-icons/tb";

function Classes() {
  return (
    <section
    id="classes"
    className="font-notoSansJp w-full flex flex-col justify-center items-center lg:flex-row lg:gap-10 min-h-screen bg-secondary overflow-hidden p-8 xl:px-40">
      <div className="lg:w-[60%] flex flex-col items-stretch gap-10 text-center lg:text-left z-10">
        <div className="text-2xl lg:text-2xl xl:text-3xl xl:leading-10 font-semibold text-primary font-notoSansJp">
          <p>クラス　インフォメーション</p>
          <p className="font-montserrat">Hula Academy</p>
        </div>
        <div className="flex flex-col gap-10 mx-10 lg:mx-0">
          <div className="grid grid-cols-4 gap-2 bg-amber-200/70 text-xl rounded-md shadow-lg p-3">
            <h1 className="col-span-4 border-b-2 border-gray-400 font-bold pb-2">Ohana</h1>
            <TbMoodKid className="row-span-2 place-self-center text-3xl"/>
            <p className="col-span-3 row-span-2 text-sm lg:text-base text-left">ご家族やお子様も楽しめるクラスを、月に2〜3回、日曜日に開催しています。</p>
            <p className="text-base col-span-2 justify-self-start">¥ 1,000/lesson</p>
            <p className="col-span-2 justify-self-end">初級</p>
          </div>
          <div className="grid grid-cols-4 gap-2 bg-amber-200/70 text-xl rounded-md shadow-lg p-3">
            <h1 className="col-span-4 border-b-2 border-gray-400 font-bold pb-2">Lehua</h1>
            <TbMoodCheck className="row-span-2 place-self-center text-3xl"/>
            <p className="col-span-3 row-span-2 text-sm lg:text-base text-left">初心者も歓迎！大人向けのオールレベルクラスを、月に2〜3回、日曜日に開催しています</p>
            <p className="text-base col-span-2 justify-self-start">¥ 2,000/lesson</p>
            <p className="col-span-2 justify-self-end">初級</p>
          </div>
          <div className="grid grid-cols-4 gap-2 bg-amber-200/70 text-xl rounded-md shadow-lg p-3">
            <h1 className="col-span-4 border-b-2 border-gray-400 font-bold pb-2">Melia</h1>
            <TbMoodCog className="row-span-2 place-self-center text-3xl"/>
            <p className="col-span-3 row-span-2 text-sm lg:text-base text-left">毎週金曜日、上級クラスで自分に挑戦し、感覚を超えた旅へ出かけましょう</p>
            <p className="text-base col-span-2 justify-self-start">¥ 8,000/month</p>
            <p className="col-span-2 justify-self-end">上級</p>
          </div>
        </div>
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


