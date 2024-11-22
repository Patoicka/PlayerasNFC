import React, { useEffect, useState } from 'react';
import Shirt from '../assets/images/Shirt.png';
import { useDispatch, useSelector } from 'react-redux';
import { setShow } from '../store/slices';
import { ModalSupport } from './Components/ModalSupport';

import America from '../assets/images/America.png';
import Chivas from '../assets/images/Chivas.png';
import Atlas from '../assets/images/Atlas.png';
import Pumas from '../assets/images/Pumas.png';
import Tigres from '../assets/images/Tigres.png';
import Azul from '../assets/images/CruzAzul.png';
import Hombre from '../assets/images/HombreP.png';
import Mujer from '../assets/images/MujerP.png';
import { ModalShop } from './Components/ModalShop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const shirts = {
    america: { name: 'America', price: 1999, url: America, id: 1 },
    chivas: { name: 'Chivas', price: 1999, url: Chivas, id: 2 },
    atlas: { name: 'Atlas', price: 1999, url: Atlas, id: 3 },
    pumas: { name: 'Pumas', price: 1999, url: Pumas, id: 4 },
    tigres: { name: 'Tigres', price: 1999, url: Tigres, id: 5 },
    cruzAzul: { name: 'Cruz Azul', price: 1999, url: Azul, id: 6 },
};

const testimonials = [
    {
        name: "Luis",
        lastName: "Martínez Pérez",
        message: "La playera NFC me permite acceder rápidamente a mi información sin tener que cargar tarjetas. ¡Es súper innovadora!",
        image: Hombre, // Directamente la referencia al archivo
    },
    {
        name: "Ana",
        lastName: "Gómez Rivera",
        message: "Nunca imaginé que una playera pudiera ser tan útil. Escaneo mi NFC y tengo todo al alcance de un toque.",
        image: Mujer,
    },
    {
        name: "Jorge",
        lastName: "López Ramírez",
        message: "El diseño es increíble y la funcionalidad NFC me ahorra tiempo al compartir mis redes sociales. ¡Totalmente recomendado!",
        image: Hombre,
    },
    {
        name: "Claudia",
        lastName: "Hernández Soto",
        message: "Me encanta cómo la tecnología NFC integrada en la playera facilita compartir información. Es práctica y moderna.",
        image: Mujer,
    },
    {
        name: "David",
        lastName: "Jiménez Torres",
        message: "Es más que una playera. La función NFC me ayuda a conectarme fácilmente con amigos y clientes. ¡Gran innovación!",
        image: Hombre,
    },
    {
        name: "Paola",
        lastName: "Castillo Díaz",
        message: "Además de ser cómoda, su tecnología NFC me ha sorprendido. ¡Es perfecta para eventos y reuniones!",
        image: Mujer,
    },
];

export const Home = () => {
    const dispatch = useDispatch();
    const { show } = useSelector((state) => state.mainSlice);

    const [seeAnimated, setSeeAnimated] = useState(false);
    const [modalShop, setModalShop] = useState(false);
    const [modalSupport, setModalSupport] = useState(show);
    const [shirt, setShirt] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const closeModal = () => {
        setSeeAnimated(true);
        setTimeout(() => {
            dispatch(setShow(false));
            setSeeAnimated(false);
        }, 500);
    };

    const openModal = (shirtTeam) => {
        setShirt(shirtTeam);
        setModalShop(true);
    };

    const closeModalShop = () => {
        setSeeAnimated(true);
        setTimeout(() => {
            setModalShop(false);
            setSeeAnimated(false);
        }, 500);
    };

    useEffect(() => {
        setModalSupport(show);
    }, [show]);


    const mapedShirts = () => {
        const shirtsArray = Object.values(shirts);
        return shirtsArray.map((shirt, index) => {
            return (
                <div key={index} className="flex flex-col items-center my-4 cursor-pointer px-4" onClick={() => openModal(shirt)}>
                    <img src={shirt.url} alt={shirt.name} width={180} className="" />
                    <h2 className="text-lg font-bold mt-2 text-celadon-100">{shirt.name}</h2>
                    <p className="text-sm text-celadon-100 font-semibold">${shirt.price}</p>
                </div>
            );
        });
    };

    return (
        <>
            <div className="flex flex-col overflow-auto w-full bg-gray-200 pt-4">
                <div id="Titulo" className="flex relative h-full w-full px-8 text-center justify-between items-center">
                    <div className="text-prussianBlue-800 text-5xl font-bold w-[60%]">
                        <p>¿Por qué usar nuestro producto?</p>
                    </div>
                    <div className="flex relative w-[40%]">
                        <img src={Shirt} alt="shirt" className="rotate-12 absolute -top-24 -right-2" width={220} />
                    </div>
                </div>

                <div id="¿Por qué?" className="flex flex-col px-8 font-semibold mt-8">
                    <p>Con nuestras playeras, tendrás experiencias <span className="text-celadon-600 font-bold">únicas</span>.</p>
                    <p>Realiza tus pagos con un solo toque. Perfectas para eventos, conciertos o simplemente para el día a día.</p>
                </div>

                <div id="Ventajas" className="flex flex-col w-full px-8">
                    <h1 className="text-2xl py-8 font-bold text-center text-celadon-600">
                        Algunas ventajas de usar playeras NFC:
                    </h1>
                    <ol className="list-decimal list-inside text-start">
                        <li className="py-2">
                            <span className="font-bold text-prussianBlue-600">Interactividad innovadora:</span> Facilitan compartir información, acceder a promociones o realizar pagos con solo un toque.
                        </li>
                        <li className="py-2">
                            <span className="font-bold text-prussianBlue-600">Practicidad y conveniencia:</span> Eliminan la necesidad de llevar tarjetas o dispositivos adicionales.
                        </li>
                        <li className="py-2">
                            <span className="font-bold text-prussianBlue-600">Marketing inteligente:</span> Permiten personalizar experiencias para eventos, marcas o productos.
                        </li>
                        <li className="py-2">
                            <span className="font-bold text-prussianBlue-600">Versatilidad:</span> Útiles en conciertos, conferencias, negocios o uso diario.
                        </li>
                    </ol>
                </div>

                <div id="Productos" className="flex flex-col items-center bg-prussianBlue-700 bg-opacity-60 my-8 pb-4">
                    <h1 className="text-2xl py-8 font-bold text-center text-celadon-100">Nuestros Productos</h1>
                    <div className="grid grid-cols-2 gap-4">
                        {mapedShirts()}
                    </div>
                </div>

                <div id='Opiniones' className="flex flex-col items-center w-full px-4 pb-8">
                    <h2 className="text-2xl font-bold text-celadon-800">OPINIONES</h2>
                    <p className="text-center font-semibold italic">
                        ¡Conoce porque la gente nos prefiere!
                    </p>
                    <div className="relative flex items-center justify-center mt-6 w-full max-w-3xl">
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 px-3 py-2 rounded-full bg-white z-10"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} size='lg' />
                        </button>
                        <div className="flex flex-col items-center transition-all duration-500 transform">

                            <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                width={120}
                                className="rounded-full border-2"
                            />
                            <h3 className="mt-4 text-lg font-bold text-prussianBlue-800">
                                {testimonials[currentIndex].name}
                            </h3>
                            <h4 className="text-sm text-gray-500">
                                {testimonials[currentIndex].lastName}
                            </h4>
                            <p className="mt-2 text-center italic text-prussianBlue-700">
                                "{testimonials[currentIndex].message}"
                            </p>
                        </div>
                        <button
                            onClick={handleNext}
                            className="absolute right-0 px-3 py-2 rounded-full bg-white z-10"
                        >
                            <FontAwesomeIcon icon={faChevronRight} size='lg' />
                        </button>
                    </div>
                </div>
            </div>

            {modalSupport ?
                <ModalSupport
                    show={modalSupport}
                    title="Soporte"
                    onCancel={closeModal}
                    animated={seeAnimated}
                />
                : null
            }

            {modalShop ?
                <ModalShop
                    show={modalShop}
                    title={`Playera ${shirt?.name}`}
                    onCancel={closeModalShop}
                    animated={seeAnimated}
                    shirt={shirt}
                />
                : null
            }
        </>
    );
};
