import { useState } from "react"

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ダンス自体が初めてなのですが踊れるようになりますでしょうか?",
      answer: "はい、大丈夫です‼ 優しく丁寧にその方のペースに合わせて指導致します。"
    },
    {
      question: "レッスンにはどんな服を着ていけば良いでしょうか?",
      answer: "動きやすい服装とパウスカート。ご自身の好きなパウスカートをご着用ください。パウスカートのレンタルもございます。"
    },
    {
      question: "衣装は高いですか？",
      answer: "私たちのハラウでは、お客様に楽しんで頂けるよう衣装にもこだわってます。リーズナブルで素敵な衣装を選定しておりますのでご安心ください。場合によってはレンタルもございます。"
    },
    {
      question: "発表会はありますか？",
      answer: "あります。大きなホール・レストランでのショー・老人ホームなどの施設でのボランティアなど定期的にイベントはございます。出演は強制ではありませんのでご都合に合わせてお決め頂けます。人前で踊ることはスキルアップのチャンスでもあります。メンバー同士の交流も深まりますので是非一緒に楽しみましょう。"
    },
    {
      question: "お休みの振り替えはありますか？",
      answer: "振替レッスンは対応しております。勤労市民センターのクラスは都度払いですのでお休みでもレッスン料金は頂いておりません。"
    },
    {
      question: "体験レッスンを受けたいのですが。",
      answer: "無料体験レッスンはいつでもできますので、レッスン日をご確認の上ご都合が良いときにはお越しいただけますので、お問い合わせフォームよりご連絡ください。"
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="font-notoSansJp text-2xl font-bold text-center mb-6">よくあるご質問</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-300 last:border-none"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4 text-left"
          >
            <span className="font-medium">{faq.question}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion