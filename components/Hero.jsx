import React from 'react'
import { AiFillFacebook,AiFillYoutube,AiFillLinkedin } from "react-icons/ai";
const Hero = () => {
  return (
    <div>
<div  className='flex justify-center '>
      <h1 className='text-[35px] text-cyan-300 font-semibold font-serif'>john wick</h1>
      </div>
      <div className='flex justify-center'>
      <h2 className='text-[20px] text-white font-semibold font-serif'>actor and artist</h2>
      </div>
      <div className='flex items-center justify-center mt-2 font-serif text-center text-white'>
      <p>john wick is american actor and action hero that never dead  <br/> sfsdfbnmmn pyll bullets and car trasj ect2039 earn 2.4$ </p>
      </div>

      <div className="flex flex-wrap  text-[23px] items-center justify-between max-w-xs p-4 mx-auto text-white">

      <AiFillFacebook/>
      <AiFillYoutube/>
      <AiFillLinkedin/>

      </div>
      <div className="flex justify-center">
      <img src="/a.png"/>
      </div>
    </div>
  )
}

export default Hero
