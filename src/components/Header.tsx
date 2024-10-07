import React, { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import logo from '../img/logo.png';
import moon from '../img/moon.png';
import bb from '../img/bb.png';
import wb from '../img/wb.png';
import contact from '../img/header/contact.png';
import home from '../img/header/home.png';
import services from '../img/header/services.png';
import user from '../img/header/user.png';
import sun from '../img/sun.png';
import works from '../img/header/works.png';
import { Button } from '@chakra-ui/react';
import { NavLink, Link } from 'react-router-dom';
import network from '../img/network-white.png';

function Header() {
    const { toggleTheme, theme } = useContext(ThemeContext);
    const [isMenuOpen, setMenuOpen] = useState(false); // State for burger menu

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className="relative z-20 mx-auto w-[1300px] max-[1350px]:w-[1100px] max-[1150px]:w-[1000px] pt-5 max-[1040px]:w-[850px] max-[420px]:p-[10px] max-[890px]:w-[600px] max-[630px]:w-[500px]  max-[530px]:w-[400px]">
            <div className={`h-75 rounded-2xl ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                <div className='h-full p-5 flex flex-row justify-between items-center'>
                    <div className='flex w-1/4 justify-start'>
                        <NavLink to={'/'}>
                            <div className="w-full flex flex-grow items-center">
                                <img className='mr-3' src={theme === 'light' ? logo : network} width={33} height={33} />
                                <p><span className={`${theme === 'dark' ? 'text-white' : 'bg-white'} text-[25px] font-medium`}>Pen</span><span className='text-[#4770FF] text-[25px] font-medium'>Folio</span></p>
                            </div>
                        </NavLink>
                    </div>

                    <div className="hidden max-[890px]:block">
                        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none text-lg">
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>

                    <div className={`flex flex-row justify-center flex-grow max-[890px]:hidden  `}>
                        <ul className="flex flex-grow w-full justify-around items-center ">
                            <NavLink to={'/'}>
                                <li className="cursor-pointer rounded-md flex items-center p-2.5 border border-gray-300 hover:bg-gray-300 hover:bg-opacity-50 transition duration-200">
                                    <img className='mr-3' src={home} width={20} height={20} />Home
                                </li>
                            </NavLink>
                            <NavLink to={'/works'}>
                                <li className="cursor-pointer rounded-md flex items-center p-2.5 border border-gray-300 hover:bg-gray-300 hover:bg-opacity-50 transition duration-200">
                                    <img className='mr-3' src={works} width={20} height={20} />Works
                                </li>
                            </NavLink>
                            <NavLink to={"/contact"}>
                                <li className="cursor-pointer rounded-md flex items-center p-2.5 border border-gray-300 hover:bg-gray-300 hover:bg-opacity-50 transition duration-200">
                                    <img className='mr-3' src={contact} width={20} height={20} />Contact
                                </li>
                            </NavLink>
                        </ul>
                    </div>

                    <div className="flex w-1/4 justify-end items-center max-[890px]:hidden">
                        <div className='cursor-pointer' onClick={toggleTheme}>
                            {/* Add your theme toggle icon here */}
                        </div>
                        <Link to='/contact'>
                            <Button colorScheme="teal" size="lg">
                                Let's Talk
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Burger menu for mobile */}
                {isMenuOpen && (
                    <div
                        className="absolute top-[100%] left-0 w-full z-50 bg-gray-200 rounded-md p-4 max-[890px]:block" // Increased z-index to 50
                    >
                        <NavLink to={'/'}>
                            <div className="cursor-pointer rounded-md p-2.5 hover:bg-gray-300 transition duration-200">Home</div>
                        </NavLink>
                        <NavLink to={'/works'}>
                            <div className="cursor-pointer rounded-md p-2.5 hover:bg-gray-300 transition duration-200">Works</div>
                        </NavLink>
                        <NavLink to={"/contact"}>
                            <div className="cursor-pointer rounded-md p-2.5 hover:bg-gray-300 transition duration-200">Contact</div>
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
