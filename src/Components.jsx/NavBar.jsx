import React, { useEffect, useState } from 'react'

import Logo from '../assets/images/Logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/slices';

export const NavBar = () => {

    const { page } = useSelector((state) => state.mainSlice);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [select, setSelect] = useState('Inicio');
    const [homeCss, setHomeCss] = useState('');
    const [accountCss, setAccountCss] = useState('');
    const [rechargeCss, setRechargeCss] = useState('');

    console.log(page);

    useEffect(() => {
        if (page === 'Recarga') {
            goRecharge()
        };
    }, [page])

    const goHome = () => {
        setSelect('Inicio');
        navigate('/');
    };

    const goRecharge = () => {
        setSelect('Recarga');
        navigate('/recarga');
        dispatch(setPage(''));
    };

    const goAccount = () => {
        setSelect('Cuenta');
        navigate('/cuenta');
    };

    useEffect(() => {
        switch (select) {
            case 'Inicio':
                setHomeCss('text-red-600');
                setRechargeCss('');
                setAccountCss('');
                break;

            case 'Recarga':
                setRechargeCss('text-red-600');
                setHomeCss('');
                setAccountCss('');
                break;

            case 'Cuenta':
                setAccountCss('text-red-600');
                setRechargeCss('');
                setHomeCss('');
                break;

            default:
                break;
        }
    }, [select])


    return (
        <div className='flex flex-col w-full bg-prussianBlue-700 px-10'>
            <div className='flex flex-col relative text-white w-full justify-center text-center pt-6'>
                <img src={Logo} alt="logo" width={75} className='absolute' />
                <h1 className='text-4xl font-bold uppercase'> Playeras NFC </h1>
                <p className='text-sm italic font-semibold'> ¡Olvidate del cash y entra al dash! </p>
            </div>
            <div className='flex justify-around pt-6 pb-2'>
                <span className={`px-4 text-gray-50 font-semibold cursor-pointer ${homeCss}`} onClick={goHome}> Inicio </span>
                <span className={`px-4 text-gray-50 font-semibold cursor-pointer ${accountCss}`} onClick={goAccount}> Cuenta </span>
                <span className={`px-4 text-gray-50 font-semibold cursor-pointer ${rechargeCss}`} onClick={goRecharge}> Recarga </span>
            </div>
        </div >
    )
}
