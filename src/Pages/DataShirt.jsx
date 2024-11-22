import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loader from './Components/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const DataShirt = () => {

    const [load, setLoad] = useState(false);
    const [pago, setPago] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const data = location.state?.data;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (formData) => {
        console.log('Datos del formulario:', formData);
        setLoad(true);
        setTimeout(() => {
            setLoad(false);
            setPago(true);
            setTimeout(() => {
                setPago(false);
                navigate('/');
            }, 1000);
        }, 1200);
    };

    return (

        <>
            <div className="flex flex-col h-full overflow-auto w-full bg-gray-200 pt-4">
                {load ?
                    <div className='flex w-full h-full items-center justify-center'> <Loader text={'Procesando'} />  </div>
                    :
                    <>
                        {pago ?
                            <div className='flex flex-col text-prussianBlue-700 w-full h-full justify-center items-center'>
                                <h1 className='text-3xl font-bold text-prussianBlue-700'> Pago realizado </h1>
                                <p> <FontAwesomeIcon icon={faCheck} size='2xl' /> </p>
                            </div>
                            :
                            <>
                                <div className='relative'>
                                    <h1 className="text-3xl uppercase font-semibold mb-2 mt-2 text-center"> Sección de pago </h1>
                                    <span className='absolute top-2 left-6 cursor-pointer' onClick={() => navigate(-1)}> <FontAwesomeIcon icon={faChevronLeft} size='lg' /> </span>
                                </div>
                                <div className="flex w-full mt-8 justify-around px-20">
                                    <div className="flex flex-col w-1/2">
                                        <div className="flex flex-col">
                                            <h1 className="text-xl font-semibold"> Producto: </h1>
                                            <p className=""> Playera NFC Club {data.name} </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="text-xl font-semibold"> Precio: </h1>
                                            <h1 className=""> {data.price} </h1>
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="text-xl font-semibold"> Cantidad: </h1>
                                            <h1 className=""> {data.quantity} </h1>
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="text-xl font-semibold"> Total: </h1>
                                            <h1 className=""> ${data.total} </h1>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/2">
                                        <img src={data.url} alt="playera" width={180} />
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                                    <div className="flex flex-col w-full h-full items-start bg-gray-50 mt-8 pt-2">
                                        <div className='flex w-full items-start justify-center'>
                                            <div className="flex flex-col w-1/2 px-4 justify-center border-r border-black">
                                                <h1 className="text-xl uppercase font-semibold text-center py-3"> Datos de envio </h1>

                                                <div className="flex flex-col relative my-3">
                                                    <label className='absolute -top-3 left-2 bg-gray-50 px-2'> Nombre completo </label>
                                                    <input
                                                        type="text"
                                                        {...register('fullName', { required: 'El nombre completo es requerido' })}
                                                        className="w-full border-2 px-2 py-2 border-prussianBlue-500 focus:border-red-700 rounded-md"
                                                    />
                                                    {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                                                </div>

                                                <div className="flex flex-col relative my-3">
                                                    <label className='absolute -top-3 left-2 bg-gray-50 px-2'> Télefono </label>
                                                    <input
                                                        type="number"
                                                        {...register('phone', { required: 'El teléfono es requerido' })}
                                                        className="w-full border-2 px-2 py-2 border-prussianBlue-500 focus:border-red-700 rounded-md"
                                                    />
                                                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                                                </div>

                                                <div className="flex flex-col relative my-3">
                                                    <label className='absolute -top-3 left-2 bg-gray-50 px-2'> Estado </label>
                                                    <input
                                                        type="text"
                                                        {...register('state', { required: 'El estado es requerido' })}
                                                        className="w-full border-2 px-2 py-2 border-prussianBlue-500 focus:border-red-700 rounded-md"
                                                    />
                                                    {errors.state && <p className="text-red-500">{errors.state.message}</p>}
                                                </div>

                                                <div className="flex flex-col relative my-3">
                                                    <label className='absolute -top-3 left-2 bg-gray-50 px-2'> Código Postal </label>
                                                    <input
                                                        type="text"
                                                        {...register('postalCode', { required: 'El código postal es requerido' })}
                                                        className="w-full border-2 px-2 py-2 border-prussianBlue-500 focus:border-red-700 rounded-md"
                                                    />
                                                    {errors.postalCode && <p className="text-red-500">{errors.postalCode.message}</p>}
                                                </div>

                                                <div className="flex flex-col relative my-3">
                                                    <label className='absolute -top-3 left-2 bg-gray-50 px-2'> Ciudad </label>
                                                    <input
                                                        type="text"
                                                        {...register('city', { required: 'La ciudad es requerida' })}
                                                        className="w-full border-2 px-2 py-2 border-prussianBlue-500 focus:border-red-700 rounded-md"
                                                    />
                                                    {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                                                </div>

                                                <div className="flex flex-col relative my-3">
                                                    <label className='absolute -top-3 left-2 bg-gray-50 px-2'> Calle </label>
                                                    <input
                                                        type="text"
                                                        {...register('street', { required: 'La calle es requerida' })}
                                                        className="w-full border-2 px-2 py-2 border-prussianBlue-500 focus:border-red-700 rounded-md"
                                                    />
                                                    {errors.street && <p className="text-red-500">{errors.street.message}</p>}
                                                </div>

                                                <div className="flex flex-col relative my-3">
                                                    <label className='absolute -top-3 left-2 bg-gray-50 px-2'> Referencias </label>
                                                    <textarea
                                                        // {...register('references', { required: 'Las referencias son requeridas' })}
                                                        className="w-full border-2 px-2 py-2 border-prussianBlue-500 focus:border-red-700 rounded-md"
                                                    ></textarea>
                                                    {errors.references && <p className="text-red-500">{errors.references.message}</p>}
                                                </div>
                                            </div>

                                            <div className="flex flex-col w-1/2 px-4 justify-center">
                                                <h1 className="text-xl uppercase font-semibold text-center py-3"> Método de pago </h1>

                                                <div className="flex flex-col relative my-3">
                                                    <label className='absolute -top-3 left-2 bg-gray-50 px-2'> Nombre del titular </label>
                                                    <input
                                                        type="text"
                                                        {...register('cardName', { required: 'El nombre del titular es requerido' })}
                                                        className="w-full border-2 px-2 py-2 border-prussianBlue-500 focus:border-red-700 rounded-md"
                                                    />
                                                    {errors.cardName && <p className="text-red-500">{errors.cardName.message}</p>}
                                                </div>

                                                <div className="flex flex-col relative my-3">
                                                    <label className='absolute -top-3 left-2 bg-gray-50 px-2'> Núm. Tarjeta </label>
                                                    <input
                                                        type="text"
                                                        {...register('cardNumber', {
                                                            required: 'El número de tarjeta es requerido',
                                                            pattern: {
                                                                value: /^\d{16}$/,
                                                                message: 'El número de tarjeta debe tener 16 dígitos',
                                                            },
                                                        })}
                                                        className="w-full border-2 px-2 py-2 border-prussianBlue-500 focus:border-red-700 rounded-md"
                                                    />
                                                    {errors.cardNumber && <p className="text-red-500">{errors.cardNumber.message}</p>}
                                                </div>

                                                <div className="flex flex-col relative my-3">
                                                    <label className='absolute -top-3 left-2 bg-gray-50 px-2'> Fecha de vencimiento </label>
                                                    <input
                                                        type="date"
                                                        {...register('expiryDate', { required: 'La fecha de vencimiento es requerida' })}
                                                        className="w-full border-2 px-2 py-2 border-prussianBlue-500 focus:border-red-700 rounded-md"
                                                    />
                                                    {errors.expiryDate && <p className="text-red-500">{errors.expiryDate.message}</p>}
                                                </div>

                                                <div className="flex flex-col relative my-3">
                                                    <label className='absolute -top-3 left-2 bg-gray-50 px-2'> CCV </label>
                                                    <input
                                                        type="number"
                                                        {...register('ccv', {
                                                            required: 'El CCV es requerido',
                                                            pattern: {
                                                                value: /^\d{3}$/,
                                                                message: 'El CCV debe tener 3 dígitos',
                                                            },
                                                        })}
                                                        className="w-full border-2 px-2 py-2 border-prussianBlue-500 focus:border-red-700 rounded-md"
                                                    />
                                                    {errors.ccv && <p className="text-red-500">{errors.ccv.message}</p>}
                                                </div>

                                                <div className="flex flex-col relative my-3">
                                                    <label className='absolute -top-3 left-2 bg-gray-50 px-2'> Correo </label>
                                                    <input
                                                        type="email"
                                                        {...register('email', { required: 'El correo es requerido' })}
                                                        className="w-full border-2 px-2 py-2 border-prussianBlue-500 focus:border-red-700 rounded-md"
                                                    />
                                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col h-full items-center justify-center mt-6 bg-gray-200">
                                            <button
                                                type="submit"
                                                className="p-3 border-2 border-celadon-500 rounded-lg text-lg font-semibold text-celadon-800 bg-gray-50 hover:border-white hover:bg-celadon-400 hover:text-white"
                                            >
                                                Confirmar Compra
                                            </button>
                                            <p className="px-10 text-center italic mt-2">
                                                Por favor, verifique los datos de su compra. Una vez realizado el pago, no se podrán hacer devoluciones.
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </>
                        }
                    </>
                }

            </div>
        </>

    );
}
