import Image from 'next/image';
import logo from '../../../public/images/logo-educacion-inicial.png'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsDoorClosedFill } from "react-icons/bs";
import { useState } from 'react';
import RegisterLogin from '../register_login/RegisterLogin';
// import { useTheme } from '@/hooks/ThemeContext';
// import ThemeSwitchButton from '../theme_button/ThemeButton';


export default function Header() {

    // const { theme, toggleTheme } = useTheme();
    const [openDialog, setOpenDialog] = useState(false);

    return (

        <nav className="h-24 w-full flex flex-row items-center justify-around">
            <RegisterLogin isOpen={openDialog} setIsOpen={setOpenDialog} />
            <div className='h-full flex items-center p-5'>
                <Image src={logo} alt='logo' className='h-16 w-full object-contain' />
            </div>

            <ul className='h-full flex items-center gap-5 md:gap-10 p-5'>
                {/* <li><ThemeSwitchButton onChange={toggleTheme}/></li> */}
                <li className='cursor-pointer'><FaSearch size={23} /></li>
                <div className='hidden md:flex flex-row gap-10'>
                    <li className='cursor-pointer'>Registro</li>
                    <li onClick={() => setOpenDialog(true)} className='cursor-pointer'>Login</li>
                </div>

                <div onClick={() => setOpenDialog(true)} className='md:hidden'>
                    <li ><BsDoorClosedFill size={23} /></li>
                </div>

                <li className='cursor-pointer'> <GiHamburgerMenu size={34} /></li>
            </ul>
        </nav>

    );
}
