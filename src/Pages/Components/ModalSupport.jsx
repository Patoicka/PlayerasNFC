import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import Loader from './Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ModalSupport = ({ show, title, onCancel, animated }) => {

    const [seeLoader, setSeeLoader] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const sendInfo = () => {
        setSeeLoader(true);

        setTimeout(() => {
            setSeeLoader(false);
            setConfirm(true);
            setTimeout(() => {
                setConfirm(false);
                onCancel();
            }, 3000);

        }, 1500);
    };

    return (
        <Modal
            show={show}
            title={title}
            onCancel={onCancel}
            animated={animated}
        >
            <div className='flex flex-col items-center'>
                <h1 className='font-semibold mt-6 text-lg'> Bienvenido a soporte Playeras NFC </h1>
                <p className='font-semibold'> Por favor llena el formulario para brindarte ayuda. </p>
            </div>

            {seeLoader ? <div className='mt-40 flex w-full h-full items-center justify-center'> <Loader text={'Enviando'} /> </div> :
                <>

                    {confirm ?
                        <div className='flex flex-col mt-12 mx-10 border-2 border-prussianBlue-700 py-10 items-center justify-center text-center'>
                            <h1 className='text-2xl uppercase text-prussianBlue-700 font-bold text-center'> Información recibida </h1>
                            <p className='text-lg mt-6 items-center px-6'> Tendras una respuesta dentro de 48 horas aproximadamente. <p> <FontAwesomeIcon icon={faCheck} size='lg' /> </p> </p>

                            <span className='italic font-bold mt-14'> Gracias por contactar con nosotros. </span>
                            <span className='italic font-bold mt-1'> Att. Playeras NFC </span>
                        </div>
                        :
                        <form className='flex flex-col w-full justify-center items-center px-8 my-3' action="">
                            <div className='flex w-full relative my-4 px-10'>
                                <label htmlFor="" className='absolute text-sm -top-3 left-14 px-2 bg-gray-100'>Nombre</label>
                                <input type="text" className='focus:border-prussianBlue-500 px-4 py-2 w-full border border-celadon-600 rounded-lg bg-gray-100' />
                            </div>
                            <div className='flex w-full relative my-4 px-10'>
                                <label htmlFor="" className='absolute text-sm -top-3 left-14 px-2 bg-gray-100'>Correo</label>
                                <input type="text" className='focus:border-prussianBlue-500 px-4 py-2 w-full border border-celadon-600 rounded-lg bg-gray-100' />
                            </div>
                            <div className='flex w-full relative my-4 px-10'>
                                <label htmlFor="" className='absolute text-sm -top-3 left-14 px-2 bg-gray-100'>Asunto</label>
                                <input type="text" className='focus:border-prussianBlue-500 px-4 py-2 w-full border border-celadon-600 rounded-lg bg-gray-100' />
                            </div>
                            <div className='flex w-full relative my-4 px-10'>
                                <label htmlFor="" className='absolute text-sm -top-3 left-14 px-2 bg-gray-100'>Descripción</label>
                                <textarea
                                    className='focus:border-prussianBlue-500 px-4 py-2 w-full h-24 border border-celadon-600 rounded-lg bg-gray-100 resize-none'
                                    placeholder="Escribe aquí los detalles de tu solicitud..."
                                />
                            </div>
                            <div className='flex w-full justify-center my-1 px-10'>
                                <Button text={'Enviar'} onSubmit={sendInfo} />
                            </div>
                        </form>
                    }

                </>
            }

        </Modal>
    );
};
