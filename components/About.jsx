import React from 'react'

const About = () => {
  return (
    <div className=' w-full md:h-screen p-2 flex items-center py-16'>
      <div className=' max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className=' col-span-2 '>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
            <h2 className='py-4'>Who I am</h2>
            <p className=' py-2 text-gray-600'>I'm a Backend Web Developer building the Back-end of Websites and Web Applications that leads to the success of the overall product. I usually utilize Python fromawork Django for it and have sound knowledge of Node and Express.</p>
            <p className=' py-2 text-gray-600'>Along with Backend I also am adept in ReactJs and NextJs, and have capability to design web application with great UI and interactivity.</p>
            <p className=' py-2 text-gray-600 max-md:m-5'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. </p>
        </div>
        {/* <div className=' flex justify-between m-auto'> */}
            <div className=' w-full h-auto m-auto  flex items-center justify-between'>
                <img src="/assets/about_stock.jpg" alt="/" className=' mt-1 rounded-xl mx-auto shadow-xl shadow-gray-400 hover:scale-105 ease-in duration-300 border-4' />
            </div>
      </div>
    </div>
  )
}

export default About
