import React from 'react'

const Cards = ({children, imgSrc, ...props}) => {
  return (
    <>
    {/* <div {...props} className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group'>
        <img src={imgSrc} alt=""  className='transition-transform group-hover:scale-110 duration-400 h-100'/>
        <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-trasparent'>
            <div className='p-4 w-full text-white'>{children}</div>
        </div>
    </div> */}

    </>
  )
}

export default Cards



{/* <div className="max-w-sm rounded overflow-hidden shadow-lg " style={{ boxShadow: 'inset 0 -55px 25px rgba(0,0,0,0.1)' }}>
  <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> */}