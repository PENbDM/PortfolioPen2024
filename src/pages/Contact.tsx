import React from 'react'
import ContactForm from '../components/ContactForm'
import  { useContext } from 'react';
import { ThemeContext } from '../App';

function Contact() {
  const { theme } = useContext(ThemeContext); // Access toggleTheme from context

  return (
    <div className='w-[1300px] h-[500px] max-[890px]:p-[10px]  mx-auto mt-5 rounded-xl  mb-20   bg-white w-[1300px] max-[1350px]:w-[1100px] max-[1150px]:w-[1000px] pt-5 max-[1040px]:w-[850px] max-[420px]:p-[10px] max-[890px]:w-[600px] max-[630px]:w-[500px]  max-[530px]:w-[400px] max-[]'>
      <div className='text-center'>
        <p className='text-4xl pt-10'>Let's 👋 <span className='text-[#4770FF]'>Work</span> Together</p>
      </div>
      <div className='flex justify-center items-center mt-[50px]'>
        <ContactForm/>
      </div>
      </div>
  )
}

export default Contact