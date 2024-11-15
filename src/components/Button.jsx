const Button = ({ label, iconURL, linkTo }) => {
  return (
    <a href={linkTo} className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-primary rounded-full text-slate-gray'>
        {label}
        <img
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
        />
    </a>
  )
}

export default Button