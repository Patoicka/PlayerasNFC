import React, { useEffect, useState } from 'react'
import { Modal } from './Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { DataShirt } from '../DataShirt';

export const ModalShop = ({ show, title, onCancel, animated, shirt }) => {

    const navigate = useNavigate();

    const [team, setTeam] = useState('');
    const [bgColor, setBgColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(quantity * shirt?.price)
    }, [quantity]);


    const goData = (path, shirt) => {

        setTotal(quantity * shirt.price);

        navigate(path, { state: { data: { ...shirt, quantity, total } } });
    };


    useEffect(() => {
        switch (shirt?.name) {
            case 'America':
                setTeam('text-yellow-500');
                setBgColor('bg-yellow-200');
                break;

            case 'Chivas':
                setTeam('text-red-500');
                setBgColor('bg-red-500');
                break;

            case 'Cruz Azul':
                setTeam('text-blue-700');
                setBgColor('bg-blue-200');
                break;

            case 'Tigres':
                setTeam('text-yellow-600');
                setBgColor('bg-yellow-600');
                break;

            case 'Atlas':
                setTeam('text-red-800');
                setBgColor('bg-red-800');
                break;
            case 'Pumas':
                setTeam('text-prussianBlue-600');
                setBgColor('bg-prussianBlue-700');
                break;

            default:
                setTeam('');
                setBgColor('');
                break;
        }
    }, []);

    return (
        <Modal
            title={title}
            show={show}
            onCancel={onCancel}
            animated={animated}
            classNameTitle={`font-bold ${team}`}
        >
            <div className='flex flex-col justify-center items-center w-full'>
                <div className={`flex w-full justify-center py-4 border-t border-b border-gray-400 bg-opacity-70 mt-8 ${bgColor}`} >
                    <div className='flex w-[60%] items-center justify-center'>
                        <img src={shirt?.url} alt="playera" width={240} />
                    </div>
                    <div className='flex w-[40%]'>
                        <div className='flex flex-col items-center justify-center h-full w-full'>
                            <h1 className='font-bold py-1 px-4 text-start uppercase'> Precio: $<span className='font-semibold text-base'>{shirt?.price} </span> </h1>
                            <h1 className='font-bold py-1 px-4 text-start uppercase'> Cantidad </h1>
                            <div className='flex w-1/2 mx-auto justify-around'>
                                <p className='cursor-pointer' onClick={quantity > 0 ? () => setQuantity(quantity - 1) : null}>
                                    <FontAwesomeIcon icon={faMinus} size='sm' />
                                </p>
                                <span className='font-semibold text-base'> {quantity} </span>
                                <p className='cursor-pointer' onClick={() => setQuantity(quantity + 1)}>
                                    <FontAwesomeIcon icon={faPlus} size='sm' />
                                </p>
                            </div>
                            <button
                                className='flex justify-center w-2/3 bg-gray-50 font-semibold mt-6 p-2 border border-black rounded-lg'
                                onClick={() => goData('/datos_compra', shirt)}
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full px-8 mt-4">
                    <div>
                        <h1 className="text-lg font-semibold">Descripción:</h1>
                        <p className="text-justify">
                            ¡Descubre la revolución en ropa deportiva! Nuestra playera deportiva con tecnología NFC está diseñada para quienes buscan comodidad, estilo y una experiencia conectada.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold mt-4 mb-2">Características:</h1>
                        <ol className="list-decimal ml-5">
                            <li className="text-justify">
                                <span className="font-semibold">Tecnología NFC integrada:</span> Conecta tu playera a tu dispositivo móvil para acceder a funciones personalizadas.
                            </li>
                            <li className="text-justify">
                                <span className="font-semibold">Material transpirable y ligero:</span> Hecha con tejidos de alto rendimiento que mantienen tu cuerpo fresco y seco durante tus actividades más intensas.
                            </li>
                            <li className="text-justify">
                                <span className="font-semibold">Diseño ergonómico:</span> Ajuste perfecto que te permite moverte con libertad, ideal para entrenamientos, carreras o cualquier deporte.
                            </li>
                            <li className="text-justify">
                                <span className="font-semibold">Durabilidad garantizada:</span> Resistente al lavado y al uso frecuente, con la tecnología NFC protegida para un funcionamiento prolongado.
                            </li>
                        </ol>
                    </div>
                </div>


            </div>
        </Modal >
    )
}
