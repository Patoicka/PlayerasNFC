import { faCreditCard, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalPayment } from './Components/ModalPayment';

const options = [200, 500, 2000, 5000, 10000];

const cards = [
    {
        id: 1,
        number: '4621 2135 4212 2155',
        name: 'Isaac Alejandro Espinosa Dominguez',
    },
    {
        id: 2,
        number: '4869 1254 5879 2548',
        name: 'Cristiano Ronaldo dos Santes Aveiro',
    },
];

// Crea la instancia de Stripe
const stripePromise = loadStripe("pk_test_51Oyh1YIqKZ1c1dZVr5SZvRbf9rJRQUAQKTuhpG8mBK7AooGMT8glej5tImYhJXEdXZvWXZbUckwVSMZTLktNzJRa00tnMCDgEl");

export const Recharge = () => {
    const [select, setSelect] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardData, setCardData] = useState([]);
    const [search, setSearch] = useState(false);
    const [seeModal, setSeeModal] = useState(false);
    const [animated, setAnimated] = useState(false);
    const [dataModal, setDataModal] = useState([]);

    const { ticket } = useSelector((state) => state.mainSlice);

    const handleSearch = () => {
        const matchedCard = cards.find((card) => card.number === cardNumber.trim());
        if (matchedCard) {
            setCardData(matchedCard);
        } else {
            setCardData('');
            setSearch(true);
        }
    };

    const openModal = (data) => {
        setSeeModal(true);
        setDataModal({ value: { ...data, select } });
    };

    const closeModal = () => {
        setAnimated(true);

        setTimeout(() => {
            setSeeModal(false);
        }, 1000);
    };

    useEffect(() => {
        setAnimated(false);
        setCardNumber('');
        setCardData('');
        setSelect('');
    }, [seeModal]);

    return (
        <Elements stripe={stripePromise}>
            <div className="flex flex-col h-full w-full justify-start mt-12 items-center">
                <h1 className="text-3xl uppercase text-celadon-700 font-bold pt-4">
                    Recargar Tarjeta
                </h1>
                <p className="text-celadon-700 italic">¡Recargar saldo de manera sencilla!</p>
                <div className="flex flex-col w-full px-8 mt-4">
                    <h1 className="text-celadon-700 text-lg font-bold py-4"> 1. Ingresa número de tarjeta </h1>
                    <div className="flex w-full justify-between h-full items-center">
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-2/3 border-2 py-2 mt-4 rounded-lg px-3 border-celadon-700 focus:border-green-600"
                            placeholder="Ingresa el número de tarjeta"
                        />
                        <button
                            onClick={handleSearch}
                            className="flex w-24 justify-between font-semibold mt-3 mx-6 p-2 rounded-lg border-2 border-celadon-700"
                        >
                            Buscar
                            <p className="flex items-center px-2 mt-1">
                                <FontAwesomeIcon icon={faSearch} />
                            </p>
                        </button>
                    </div>
                </div>
                <div className="flex w-full">
                    {cardData ? (
                        <div className="flex flex-col w-full my-4 px-8">
                            <div className="flex flex-col w-full mb-4">
                                <h1>
                                    <span className="font-semibold text-xl"> Bienvenido </span> {cardData.name}
                                </h1>
                                <p>
                                    <span className="font-semibold text-xl"> N. Tarjeta </span> {cardData.number}
                                </p>
                                <p>
                                    <span className="font-semibold text-xl"> Saldo inicial </span> ${ticket}
                                </p>
                            </div>

                            <h1 className="text-celadon-700 text-lg font-bold py-4">
                                2. Selecciona un monto
                            </h1>
                            <div className="flex w-full items-center justify-between py-4">
                                {options.map((amount, index) => (
                                    <p
                                        key={index}
                                        className={`p-3 mx-3 border-2 border-black text-prussianBlue-600 font-semibold rounded-xl cursor-pointer ${select === amount ? 'bg-celadon-500 text-white' : ''
                                            }`}
                                        onClick={() => setSelect(amount)}
                                    >
                                        ${amount}
                                    </p>
                                ))}
                            </div>

                            <h1 className="text-celadon-700 text-lg font-bold py-4">
                                3. Realizar pago en linea
                            </h1>

                            <div className="flex w-full justify-center">
                                <button
                                    className="flex m-4 text-lg font-semibold bg-prussianBlue-500 text-gray-50 w-40 justify-between px-4 rounded-lg p-2 border-2 border-black"
                                    onClick={() => openModal(cardData)}
                                >
                                    Recargar <span> <FontAwesomeIcon icon={faCreditCard} /> </span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex px-8">
                            {search ? <div>No se encontró tarjeta</div> : null}
                        </div>
                    )}
                </div>
            </div>

            <ModalPayment
                title={'Finalizar pago'}
                show={seeModal}
                animated={animated}
                onCancel={closeModal}
                data={dataModal}
            />
        </Elements>
    );
};
