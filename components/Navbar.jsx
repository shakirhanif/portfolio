import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu,AiOutlineMail, AiOutlineGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleNav = ()=>{
        return setNav(preValue=>!preValue)
    }
  return (
    <div className=' fixed w-full h-20 shadow-xl z-[100]  '>
        <div className=' flex justify-between items-center w-full h-full px-2 2xl:px-16  '>
            <Image src="/../public/assets/shakir_hanif_logo.png" alt="/" width={111} height={111} />
            <div>
                <ul className=' hidden md:flex mr-5'>
                    <Link href='/'>
                        <li className=' ml-10 text-sm hover:border-b border-amber-400 ease-in duration-150'>Home</li>
                    </Link>
                    <Link href='/'>
                        <li className=' ml-10 text-sm hover:border-b  border-amber-400 ease-in duration-150 '>About</li>
                    </Link>
                    <Link href='/'>
                        <li className=' ml-10 text-sm hover:border-b  border-amber-400 ease-in duration-150 '>Skills</li>
                    </Link>
                    <Link href='/'>
                        <li className=' ml-10 text-sm hover:border-b  border-amber-400 ease-in duration-150 '>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className=' ml-10 text-sm hover:border-b  border-amber-400 ease-in duration-150 '>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className=' md:hidden mr-5 hover:cursor-pointer'>
                <AiOutlineMenu size={25}></AiOutlineMenu>
                </div>
            </div>
      </div>
      <div className={nav?' md:hidden fixed left-4 top-0 w-full h-screen bg-black/70':null}>
        <div className={nav?
            ' md:hidden fixed left-0 top-0 w-[75%] sm:[60%] md:[40%] h-screen bg-[#ecf0f3] p-5 ease-in duration-500':
            'fixed left-[-100%] p-5 ease-in duration-500'
            }>
            <div className='flex -ml-4 justify-between w-full items-center'>
                <Image src="/../public/assets/shakir_hanif_logo.png" alt="/" width={111} height={111} />
                <div onClick={handleNav} className=' mb-12 p-1 rounded-full shadow-lg shadow-gray-400 cursor-pointer'>
                    <AiOutlineClose size={25}></AiOutlineClose>
                </div>
            </div>
            <div className=' border-b border-gray-300'>
                <p className=' w-[85%] md:w-[60%]'>Let's build together</p>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                    <li className=' w-20 my-4 mt-8 text-sm'>
                        Home
                    </li>
                    <li className=' w-20 my-4 text-sm'>
                        About
                    </li>
                    <li className='w-20 my-4 text-sm'>
                        Skills
                    </li>
                    <li className='w-20 my-4 text-sm'>
                        Projects
                    </li>
                    <li className=' w-20 my-4 text-sm'>
                        Contact
                    </li>
                </ul>
                <div className=' pt-[4rem]'>
                    <p className=' uppercase tracking-widest text-gray-600'>Lets Connect</p>
                    <div className='flex flex-row justify-center mt-3'>
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

      </div>
    </div>
  )
}

export default Navbar
