import powershop from '../img/power-shop.jpg'
import clothshop from '../img/clothshop.jpg'
import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react';
import { ThemeContext } from '../App';


function Works() {
  const { theme } = useContext(ThemeContext); // Access toggleTheme from context

  return (
<div className='w-[1300px] h-1200px mx-auto  bg-white mt-5 rounded-xl   max-[1350px]:w-[1100px] max-[1150px]:w-[1000px] max-[1040px]:w-[850px] max-[890px]:w-[600px] max-[630px]:w-[500px] max-[530px]:w-[400px]  max-[420px]:flex-col max-[420px]:items-center max-[420px]:justify-center'>
<div className='p-5 '>
      <div  className=' mx-auto '>
        <p className="text-3xl font-semibold max-[890px]:text-center max-[530px]:text-2xl  mx-auto text-center " >Check Out My Latest <span className="text-[#4770FF] font-semibold">Projects</span>
        </p>
      </div>

      <div className='mx-auto mt-10'>
        <div className='mx-auto text-center'>
          <p className='text-4xl font-semibold mb-4 max-[530px]:text-2xl  mx-auto'><span className="text-[#4770FF] font-semibold ">TechGear </span> Shop</p>
          <div className='flex justify-center gap-5 mb-8  mx-auto'>
          <Button colorScheme='teal' variant='outline' size="lg"><a href="https://power-shop-client.vercel.app/" target='_blank'>View</a></Button>
          <Button colorScheme='teal' variant='outline' size="lg"><a href="https://github.com/PENbDM/Power-Shop" target='_blank'>GitHub</a></Button>
          </div>
          <div className='flex justify-center mx-auto'>
            <img className='' src={powershop} width={900}  />
          </div>
        </div>
        <div className='text-center mt-10'>
          <p className='text-4xl font-semibold mb-4 max-[530px]:text-2xl'><span className="text-[#4770FF] font-semibold">Cloth </span> Boutique</p>
          <div className='flex justify-center gap-5 mb-8'>
          <Button colorScheme='teal' variant='outline' size="lg"><a href="https://mern-e-commerce-client.vercel.app/" target='_blank'>View</a></Button>
          <Button colorScheme='teal' variant='outline' size="lg"><a href="https://github.com/PENbDM/mern-e-commerce" target='_blank'>GitHub</a></Button>
          </div>
          <div className='flex justify-center mx-auto'>
            <img className='mb-10  ' src={clothshop} width={900} />
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Works