import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from'react-icons/fa';
const Card = (props) => {
    let {name,image,job,text} = props.reviews;
  return (
    <>
    <div className="flex flex-col md:relative ">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img src={`${image}`}   alt='' className="w-[250px] h-[210px] rounded-full p-10 gap-10 aspect-square z-[25] "/>
        <div className=" w-[140] h-[140] bg-voilet-500 rounded-fill absolute top-[-6px] z-[-10] left-[10px]"></div>
      </div>
      <div className="text-center mt-7 ">
        <p className="font-bold text-2xl capitalize tracking-wider">
            {name}
        </p>
        <p className=" text-violet-300 capitalize ">{job}</p>
      </div>
      {/* <div className="text-center mt-7 ' >
       
      </div> */}
      <div className=" text-violet-400 mx-auto mt-5 " >
         
      <FaQuoteLeft/>
      </div>
      <div className="text-center mt-4 text-slate-500 ">
        {text}
      </div>
      <div className=" text-violet-400 mx-auto mt-5 ">
        <FaQuoteRight/>
      </div>
    
    </div>
    </>
  )
}

export default Card;
