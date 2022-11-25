import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className=' max-w-[1240] mx-auto flex flex-col justify-center h-full'>
        <p className=' text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className=' py-4'>What Can I Do.</h2>
        <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            
            <div className=' p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/assets/skills/python.png" alt="/" width='50' height='50' />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h3>Python</h3>
                    </div>
                </div>
            </div>
            <div className=' p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/assets/skills/django.png" alt="/" width='50' height='50' />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h3>Django</h3>
                    </div>
                </div>
            </div>
            <div className=' p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/assets/skills/nodejs.png" alt="/" width='64' height='64' />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h3>Node</h3>
                    </div>
                </div>
            </div>
            <div className=' p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/assets/skills/mysql.png" alt="/" width='50' height='50' />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h3>MySQL</h3>
                    </div>
                </div>
            </div>
            <div className=' p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/assets/skills/mongodb.png" alt="/" width='50' height='50' />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h3>MongoDB</h3>
                    </div>
                </div>
            </div>
            <div className=' p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/assets/skills/git.png" alt="/" width='50' height='50' />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h3>Git</h3>
                    </div>
                </div>
            </div>
            <div className=' p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/assets/skills/html.png" alt="/" width='50' height='50' />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>
            <div className=' p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/assets/skills/css3.png" alt="/" width='50' height='50' />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>
            <div className=' p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/assets/skills/javascript.png" alt="/" width='50' height='50' />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>
                </div>
            </div>
            <div className=' p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/assets/skills/react.png" alt="/" width='50' height='50' />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h3>ReactJs</h3>
                    </div>
                </div>
            </div>
            <div className=' p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/assets/skills/next.png" alt="/" width='50' height='50' />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h3>NextJs</h3>
                    </div>
                </div>
            </div>
            <div className=' p-6 shadow-xl hover:scale-105 ease-in duration-300'>
                <div className=' py-3 grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/assets/skills/tailwind-css.png" alt="/" width='50' height='50' />
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <h3>Tailwind CSS</h3>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
