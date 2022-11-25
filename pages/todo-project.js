import Image from 'next/image'
import React from 'react'
import todoImg from '../public/assets/projects/todo_app.png'
const todo = () => {
  return (
    <div className=' w-full'>
      <div className=' w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className=' absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className=' absolute z-1 ' layout='fill' objectFit='cover' src={todoImg}></Image>
        <div className=' absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2>SomeThing ToDo App</h2>
          <h3>ReactJs</h3>
        </div>
      </div>
     
    </div>
  )
}

export default todo
