
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';

export const Modal = ({ title, children, show, className = "", animated, onCancel, classNameTitle }) => {

    return (
        <>
            {show ?
                <div className={`fixed inset-0 backdrop-blur-sm z-10 flex justify-center items-center overflow-auto ${animated ? 'animate__animated animate__fadeOutUp' : 'animate__animated animate__fadeInDown'} `}>
                    <div className={`flex-col h-[62%] w-[32%] mx-auto rounded-xl justify-center overflow-auto align-middle bg-gray-100 sm:shadow-lg md:shadow-2xl lg:shadow-2xls ${className}`}>
                        <div className='flex flex-col relative w-full  items-center my-8'>
                            <span className='flex absolute top-1 right-10 rounded-full px-2 py-1 cursor-pointer hover:text-prussianBlue-700' onClick={onCancel}> <FontAwesomeIcon icon={faTimes} size='lg' /> </span>
                            <h2 className={`text-2xl font-bold text-celadon-600 mulishBold text-center ${classNameTitle}`}>{title}</h2>
                            {children}
                        </div>
                    </div>
                </div >
                : null}
        </>
    )
}