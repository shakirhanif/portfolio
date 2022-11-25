import React from 'react'
import {AiOutlineClose, AiOutlineMenu,AiOutlineMail, AiOutlineGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className=' w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <p className=' uppercase text-sm tracking-widest text-gray-600 '>
                Lets build something Together
            </p>
            <h1 className=' py-4 text-gray-700'>Hi, I'm <span className=' text-[#5651e5]'>Shakir</span></h1>
            <h1 className=' py-2 text-gray-700'>A Back-end<span className=' text-[#5651e5] text-xs'> +Front-end</span> Web Developer</h1>
            <p className=' py-4 text-gray-600 max-w-[70%] m-auto'>I'm backend web developer specialize in building backend of web applications using Django. I also am adept at front-end javascript frameworks like ReactJs and NextJs.</p>
            <div className=' flex justify-between m-auto max-w-[250px] py-4'>
                <div className='mx-4 rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                    <FaLinkedinIn size={20}/>
                </div>
                <div className='mx-4 rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                    <AiOutlineGithub size={20}/>
                </div>
                <div className='mx-4 rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-200'>
                    <AiOutlineMail size={20}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
