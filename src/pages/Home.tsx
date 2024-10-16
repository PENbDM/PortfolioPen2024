import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { Button } from '@chakra-ui/react'
import penGoodPhoto from '../img/penGoodPhoto.png'
import downloadW from '../img/downloadW.png'
import github from '../img/github.png'
import linkedinn from '../img/linkedinn.png'
import { useEffect } from 'react';
import formatLogo from '../img/formatLogo.png'
import northLogo from '../img/northLogo.png'
import focchi from '../img/focchi.png'
import rc from '../img/expertArea/react-logo.png'
import js from '../img/expertArea/js-logo.png'
import ts from '../img/expertArea/typescript-logo.png'
import redux from '../img/expertArea/redux-logo.png'
import mongo from '../img/expertArea/mongodb-logo.png'
import postgres from '../img/expertArea/postgresql-logo.png'
import powershop from '../img/power-shop.jpg'
import clothshop from '../img/clothshop.jpg'
import ArrowIcon from '../components/ArrowIcon'
import { Link } from "react-router-dom";
import softecoo from '../img/softecoo.png'
function Home() {
  const { theme } = useContext(ThemeContext); // Access the current theme from context
  useEffect(() => {
    // Adding Google Analytics script
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-TR3H7WYEMN';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-TR3H7WYEMN');
    `;
    document.head.appendChild(script2);

    // Clean up the scripts when component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);
    return (
<div className='w-[1300px] h-650 mx-auto mt-5 rounded-xl max-[1350px]:w-[1100px] max-[1150px]:w-[1000px] max-[1040px]:w-[850px] max-[890px]:w-[600px] max-[630px]:w-[500px] max-[530px]:w-[400px]  max-[420px]:flex-col max-[420px]:items-center max-[420px]:justify-center'>
<div className='w-full h-full flex justify-between gap-4 1350:gap-6 1350:w-full max-[1150px]:flex-col   '>
<div className='h-full p-5 rounded-xl bg-white w-[30%] 1350:w-[32%] max-[1150px]:w-full  max-[420px]:h-[750px]  max-[530px]:h-[670px]'>
      <div className='w-[300px]  h-260 mx-auto bg-[#F0F2F5] rounded-lg 1350:w-[368px] max-[1150px]:w-[600px] max-[890px]:w-[450px] max-[530px]:w-[300px] max-[420px]:w-[250px]'>
                <img className=' h-260 object-contain ' src={penGoodPhoto} alt="Pen Photo" /> 
                </div>
                <div className='w-300 mx-auto 1350:w-[368px] max-[1150px]:w-[600px] max-[890px]:w-[450px] max-[530px]:w-[300px] max-[420px]:w-[250px]  '>
                    <p className='text-2xl mt-3 font-medium '>Dmytro Pen</p>
                    <p className='mx-auto text-lg mt-2'>
                    Greetings!👋  I am a <span className='font-semibold'>Frontend developer</span> with nearly 3 years of commercial team experience, specializing in <span className='font-semibold'>React and Typescript.</span>💻  I've worked on both small projects and complex systems, often requiring deep dives into development. 🚀</p>
                </div>
                <div className='w-368 mx-auto mt-3 max-[1150px]:w-[140px]'>
                <Button colorScheme="blue" size="lg"   leftIcon={<img src={downloadW} alt="Download" style={{ width: '30px', height: '30px' }} />}>
                     <a href='https://drive.google.com/file/d/1VT8o_f_LujJkDiXdM0Mls12qE6ADcafo/view?usp=sharing' target="_blank">
                     Get CV 

                     </a>
                </Button>
                </div>
        <div className='flex flex-row w-368 mx-auto mt-5 gap-4 max-[1150px]:justify-center max-[420px]:w-[340px]'>
            <a href='https://github.com/PENbDM' target="_blank">
            <div className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md'>
            <img src={github} width={25} height={25}/>
                </div>
                </a>
                <a href='https://www.linkedin.com/in/dmytro-pen-a79988257/' target="_blank">

                <div className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md'>
                <img src={linkedinn} width={23} height={23}/>
                    </div>
                </a>
                </div>
                
            </div>
            <div className='h-full flex flex-col justify-between w-[90%] 1350:w-[32%] max-[1150px]:w-full '>
            <div className='p-5 rounded-xl bg-white max-[890px]:h-[350px] w-[100%] h-[315px]' >
                <p className='text-2xl mb-2 font-medium px-3 max-[1150px]:text-center'>Work Experience</p>


                
      <div className='max-[890px]:h-[260px] max-[630px]:h-[300px] max-[890px]:h-[330px] ' >
        <ul className='flex flex-col w-full max-[1150px]:w-[60%]  max-[1150px]:mx-auto  max-[630px]:w-[70%] max-[530px]:w-[90%] '>
        <li className='flex flex-row items-center justify-between p-3'>
            <p className='text-[#576076] w-[30%]  max-[1150px]:w-[50%]'>2023–2024</p>
            <div className='flex items-center w-[70%] max-[1150px]:w-[50%]'>
                <div className='w-9 h-9 bg-[#F0F2F5] rounded-md flex items-center justify-center   '>
                    <img  src={softecoo} width={20} height={20} />
                </div>
                <div className='flex flex-col ml-3 max-[890px]:ml-[12px] max-[530px]:ml-[15px]'>
                    <p className='font-medium'>SoftTeco</p>
                    <p>Front End Dev</p>
                </div>
            </div>
        </li>
        <li className='flex flex-row items-center justify-between p-3'>
            <p className='text-[#576076] w-[30%] max-[1150px]:w-[50%]'>2020-2022</p>
            <div className='flex items-center w-[70%] max-[1150px]:w-[50%]'>
                <div className='w-9 h-9 bg-[#F0F2F5] rounded-md flex items-center justify-center'>
                    <img src={formatLogo} width={30} height={30} />
                </div>
                <div className='flex flex-col ml-3'>
                    <p className='font-medium'>Format</p>
                    <p>Front End Dev</p>
                </div>
            </div>
        </li>
    </ul>
</div>

            </div>
            <div className='p-5 rounded-xl bg-white max-[1150px]:mt-4 max-[420px]:h-[600px] w-[100%] h-[315px] '>
                <p className='text-2xl mb-2 font-medium px-3'>My Expert Area</p>
<div className='flex flex-wrap justify-between gap-x-2 gap-y-4 pt-5 max-[420px]:h-[300px] '>
  <div className='flex flex-col items-center'>
    <div className='w-[95px] h-[55px] bg-[#F0F2F5] rounded-lg flex items-center justify-center 1350:w-[112px] 1350:h-[60px]'>
      <img src={rc} width={32} height={32} alt="React" />
    </div>
    <p className='text-center mt-2'>React</p>
  </div>

  <div className='flex flex-col items-center'>
    <div className='w-[95px] h-[55px] bg-[#F0F2F5] rounded-lg flex items-center justify-center 1350:w-[112px] 1350:h-[60px]'>
      <img src={js} width={32} height={32} alt="JavaScript" />
    </div>
    <p className='text-center mt-2'>JavaScript</p>
  </div>

  <div className='flex flex-col items-center'>
    <div className='w-[95px] h-[55px] bg-[#F0F2F5] rounded-lg flex items-center justify-center 1350:w-[112px] 1350:h-[60px]'>
      <img src={ts} width={32} height={32} alt="TypeScript" />
    </div>
    <p className='text-center mt-2'>TypeScript</p>
  </div>

  <div className='flex flex-col items-center'>
    <div className='w-[95px] h-[55px]  bg-[#F0F2F5] rounded-lg flex items-center justify-center 1350:w-[112px] 1350:h-[60px]'>
      <img src={redux} width={32} height={32} alt="Redux" />
    </div>
    <p className='text-center mt-2'>Redux</p>
  </div>

  <div className='flex flex-col items-center'>
    <div className='w-[95px] h-[55px]  bg-[#F0F2F5] rounded-lg flex items-center justify-center 1350:w-[112px] 1350:h-[60px]'>
      <img src={mongo} width={32} height={32} alt="MongoDB" />
    </div>
    <p className='text-center mt-2'>MongoDB</p>
  </div>

  <div className='flex flex-col items-center'>
    <div className='w-[95px] h-[55px]  bg-[#F0F2F5] rounded-lg flex items-center justify-center 1350:w-[112px] 1350:h-[60px]'>
      <img src={postgres} width={32} height={32} alt="PostgresDB" />
    </div>
    <p className='text-center mt-2'>PostgresDB</p>
  </div>
</div>
            </div>
            </div>
            <div className='h-full p-5 rounded-xl bg-white w-[90%] 1350:w-[32%] max-[1150px]:w-full max-[1150px]:h-[1200px] max-[1150px]:mb-[10px] max-[420px]:mt-[115px]  '>
    <div className='flex flex-row justify-between items-center'>
        <p className='text-2xl mb-2 font-medium px-3'>Recent Projects</p>
        <div className='flex pt-0.5'>
            <div className='flex flex-row cursor-pointer'>
                <Link to={'/works'}>
                    <p className='text-md mb-2 px-3 text-[#4770FF]'>All Projects</p>
                </Link>
                <div className='mt-0.5'>
                    <ArrowIcon />
                </div>
            </div>
        </div>
    </div>

    <div className='px-3 h-[580px] max-[1150px]:h-auto flex flex-col max-[1150px]:space-y-5'>
        <div className='h-[50%] flex justify-center items-center max-[1150px]:h-auto'>
            <div className='mt-5 bg-[#F0F2F5] flex rounded-lg p-5 max-[1150px]:h-full'>
                <img className='w-[585px] h-auto max-h-[300px] object-cover max-[420px]:w-[350px]' src={powershop} alt="Power Shop" />
            </div>
        </div>
        <div className='h-[50%] flex justify-center items-center max-[1150px]:h-auto'>
            <div className='mt-5 bg-[#F0F2F5] flex rounded-lg p-5 max-[1150px]:h-full'>
                <img className='w-[585px] h-auto max-h-[300px] object-cover max-[420px]:w-[350px]' src={clothshop} alt="Cloth Shop" />
            </div>
        </div>
   </div>
       
            </div>
        </div>
    </div>
    )
}

export default Home;