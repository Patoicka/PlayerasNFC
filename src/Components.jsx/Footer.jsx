import { faEarth, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setShow } from '../store/slices'

export const Footer = () => {

    const dispatch = useDispatch();
    const { show } = useSelector((state) => state.mainSlice);

    const support = () => {
        dispatch(setShow(true));
    };

    return (
        <div className='flex w-full bg-prussianBlue-700 py-4'>
            <div className='flex flex-col text-gray-100 w-1/2 text-center'>
                <div className='flex justify-center items-center cursor-pointer' onClick={support}>
                    <h1 className='font-bold'> Soporte </h1>
                    <p className='ml-2'> <FontAwesomeIcon icon={faHeadset} /> </p>
                </div>
                <p className='text-sm font-semibold'> Si tienes algún problema, </p>
                <p className='text-sm font-semibold'> no dudes en comunicarte    con nosotros  </p>
            </div>
            <div className='flex flex-col text-gray-100 w-1/2 text-center'>
                <div className='flex justify-center items-center'>
                    <h1 className='font-bold'> Redes Sociales </h1>
                    <p className='ml-2'> <FontAwesomeIcon icon={faEarth} /> </p>
                </div>
                <div className='text-gray-100'>
                    <p className='text-sm font-semibold'> Puedes encontrarnos en : </p>
                    <div className='flex justify-center'>
                        <a href="" className='px-2 pt-2'> <FaFacebook />   </a>
                        <a href="" className='px-2 pt-2'> <FaInstagram /> </a>
                        <a href="" className='px-2 pt-2'> <FaEnvelope /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
