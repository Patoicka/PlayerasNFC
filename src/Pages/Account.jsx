import { faEye, faLock, faSave, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import hombre from '../assets/images/HombreP.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPage } from '../store/slices';

import shirt from '../assets/images/NoShirt.png';

const user = {
    correo: 'ae@gmail.com',
    nombre: 'Alejandro',
    apellido: 'Espinosa Dominguez',
    contraseña: '12345678',
};

export const Account = () => {

    const { ticket } = useSelector((state) => state.mainSlice);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [pass, setPass] = useState(false);
    const [account, setAccount] = useState(false);
    const [error, setError] = useState('');

    const goRecharge = () => {
        dispatch(setPage('Recarga'));
        navigate('/recarga');
    };

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleGo = (e) => {
        e.preventDefault();
        if (form.email === user.correo && form.password === user.contraseña) {
            setAccount(true);
            setError('');
        } else {
            setError('Correo o contraseña incorrectos');
        };
    };

    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className='hidden'>
            </div>
            {account ?
                <div className='flex flex-col w-full justify-around h-full mt-20 px-11'>
                    <div className='flex w-full items-center justify-center'>
                        <div className='flex flex-col w-1/2 '>
                            <h1 className='text-3xl'> Bienvenido <span className='text-lg'>  {user?.nombre} </span> </h1>
                            <div className='flex flex-col my-2'>
                                <p className='font-semibold'> Correo </p> {user?.correo}
                            </div>
                            <div className='flex justify-start items-center'>
                                <p className='font-semibold'> Saldo ${ticket}</p>
                                <button
                                    className='flex ml-4 mb-2 bg-celadon-500 text-white font-bold rounded-lg px-2 py-1 mt-2'
                                    onClick={goRecharge}
                                > Recargar
                                </button>
                            </div>
                            <div className='flex justify-start'>
                                <p className='text-sm'> Desde tu cuenta podras realizar cambios a tu perfil. </p>
                            </div>
                        </div>
                        <div className='flex flex-col items-end w-1/2'>
                            <img src={hombre} alt="perfil" width={150} />
                        </div>
                    </div>
                    <div className='flex flex-col w-full justify-center items-center -mt-8'>
                        <h1 className='text-xl font-bold italic text-celadon-700 mb-4'> No tienes playeras aún </h1>
                        <img src={shirt} alt="playera" className=' opacity-50' width={200} />
                    </div>
                </div>
                :
                <>
                    <div className="flex flex-col items-center justify-center mt-10">
                        <h1 className="text-2xl font-bold text-prussianBlue-700 uppercase">
                            Iniciar Sesión
                        </h1>
                        <p className="font-semibold italic"> Ingresa tus datos para iniciar sesión </p>
                    </div>
                    <div className="flex flex-col w-full">

                        <form onSubmit={handleGo}>
                            <div className="flex justify-center relative w-full mt-8">
                                <label className="absolute -top-3.5 left-44 bg-white px-1">
                                    Correo <span> <FontAwesomeIcon icon={faUser} /> </span>
                                </label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Correo electrónico"
                                    className="border-2 border-black p-2 px-4 w-1/2 rounded-lg focus:border-green-500"
                                />
                            </div>

                            <div className="flex justify-center relative w-full mt-8">
                                <label className="absolute -top-3.5 left-44 bg-white px-1">
                                    Contraseña <span> <FontAwesomeIcon icon={faLock} /> </span>
                                </label>
                                <input
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    type={pass ? 'text' : 'password'}
                                    placeholder="Contraseña"
                                    className="border-2 border-black p-2 pl-4 pr-10 w-1/2 rounded-lg focus:border-green-500"
                                />
                                <span
                                    onClick={() => setPass(!pass)}
                                    className="absolute top-3 right-44 cursor-pointer"
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                </span>
                            </div>

                            <p className='text-center mt-2 italic font-semibold text-red-700'> {error} </p>

                            <div className={`flex justify-center relative w-full ${error ? 'mt-3' : 'mt-8'}`}>
                                <button
                                    type='submit'
                                    onClick={handleGo}
                                    className="flex justify-center border-4 w-1/2 px-5 py-2 rounded-lg bg-celadon-700 text-white border-celadon-700 hover:text-celadon-700 hover:bg-white text-lg font-semibold"
                                >
                                    Iniciar Sesión
                                    <span className="px-3">
                                        <FontAwesomeIcon icon={faSave} />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div >
                </>
            }
        </div >
    );
};
