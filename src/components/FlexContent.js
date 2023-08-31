import React from 'react'

const FlexContent = ({ifExists, endpoint :{heading,title,text ,img,btn,url}}) => {
  return (
    <>
        <div className={` xl:justify-between lg:flex-col lg:justify-center nike-container grid xl:grid-cols-2 xl:text-center lg:justify-items-center  lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1 ${ ifExists ? "flex-row-reverse " : "flex-row "  }`}>
            <div className='md:text-center lg:max-w-none max-w-lg   grid  items-center lg:justify-items-center xl:justify-items-center'>
                <h1 className='text-4xl sm:text-3xl font-bold text-gradient'>{heading}</h1>
                <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
                <p className='xl:text-sm my-4 text-slate-900'>{text}</p>
                <a href={url} rel="noopener noreferrer" className='flex items-center' target={"_blank"} role="button"> 
                    <button type='button' className='button-theme bg-slate-900 shadow-slate-900  text-slate-100 py-1.5  '>{btn}</button>
                </a>
            </div>
            <div className='flex items-center max-w-xl relative lg:mx-w-none w-full'>
                <img src={img
                } className='w-auto my-10 object-fill transitions-theme sm:my-8 hover:rotate-[0deg] rotate-[20deg] hover:scale-100 ease-in-out transitions-all duration-700' alt='/'  />
            </div>
        </div>
    </>
  )
}

export default FlexContent