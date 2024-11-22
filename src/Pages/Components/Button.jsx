import React from 'react'

export const Button = ({ text, onSubmit }) => {
    return (
        <button className='bg-prussianBlue-600 w-1/2 p-3 text-gray-50 text-lg font-semibold border-2 rounded-lg hover:text-prussianBlue-600 hover:bg-gray-50 hover:border-prussianBlue-600' onClick={onSubmit}>
            <p>
                {text}
            </p>
        </button>
    )
}
