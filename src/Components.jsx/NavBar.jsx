import React from 'react'

import Logo from '../assets/images/Logo.png';

export const NavBar = () => {
    return (
        <div className='flex w-full bg-prussianBlue-700 px-10 py-4'>
            <img src={Logo} alt="logo" width={75} />
            <div className='flex flex-col text-white w-full justify-center text-center'>
                <h1 className='text-4xl font-bold uppercase'> Playeras NFC </h1>
                <p className='text-sm italic font-semibold'> ¡Olvidate del cash y entra al dash! </p>
            </div>
        </div >
    )
}
