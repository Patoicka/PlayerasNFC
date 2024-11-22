import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Modal } from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setTicket } from "../../store/slices";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const ModalPayment = ({ title, show, animated, onCancel, data }) => {

    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();

    const { ticket } = useSelector((state) => state.mainSlice);
    const [load, setLoad] = useState(false);
    const [accept, setAccept] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            console.log("Stripe no está cargado todavía.");
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentIntent } = await stripe.confirmCardPayment(
            "pi_123456789_secret_987654321",
            {
                payment_method: {
                    card: cardElement,
                },
            }
        );
        dispatch(setTicket(ticket + data.value.select));

        if (ticket) {
            setLoad(true);
            setTimeout(() => {
                setLoad(false);
                setAccept(true);
            }, 1500);
        }

    };

    return (
        <Modal
            title={title}
            show={show}
            animated={animated}
            onCancel={onCancel}
        >
            {load ?
                <div className="flex w-full h-full justify-center mt-40">
                    <Loader text={'Procesando'} />
                </div>
                :
                <div className="flex flex-col w-full items-center mt-6">
                    <h1 className="text-semibold">
                        <span className="font-bold text-xl">Hola</span> {data?.value?.name}.
                    </h1>

                    {accept ?
                        <div className="flex flex-col items-center justify-center mt-28 w-full">
                            <h1 className="flex items-center justify-center text-2xl font-bold text-prussianBlue-700"> Pago Aceptado <span className="ml-2"> <FontAwesomeIcon icon={faCheck} /> </span> </h1>
                            <p className="flex flex-col items-center text-lg mt-4 font-semibold"> Nuevo saldo: <p className="flex"> ${ticket}  </p></p>
                        </div>
                        :
                        <>
                            <p className="flex flex-col items-center justify-center mt-2 w-full italic font-semibold">
                                A continuación realizarás un pago por la cantidad de
                                <span className="not-italic font-semibold"> ${data?.value?.select} </span>
                            </p>

                            <form onSubmit={handleSubmit} className="w-[80%] mt-6 px-4 border p-2">
                                <div className="grid grid-cols-1 gap-4 mb-6">
                                    <div className="col-span-2">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Información de tarjeta:</label>
                                        <CardElement
                                            options={{
                                                style: {
                                                    base: {
                                                        fontSize: "16px",
                                                        color: "#424770",
                                                        "::placeholder": { color: "#aab7c4" },
                                                    },
                                                    invalid: { color: "#9e2146" },
                                                },
                                            }}
                                            className="border p-2 rounded"
                                        />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-col w-full ">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Nombre del titular:</label>
                                            <input
                                                type="text"
                                                className="flex w-full border p-2 rounded"
                                                placeholder="Nombre completo"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full mt-3">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Correo electrónico:</label>
                                            <input
                                                type="email"
                                                className="flex w-full border p-2 rounded"
                                                placeholder="Correo"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Botones de acción */}
                                <div className="flex justify-between mt-4">
                                    <button
                                        type="submit"
                                        disabled={!stripe}
                                        className="bg-green-500 text-white px-4 py-2 rounded"
                                    >
                                        Pagar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onCancel}
                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </>
                    }
                </div>}
        </Modal>
    );
};
