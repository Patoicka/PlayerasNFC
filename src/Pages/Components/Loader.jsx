import React from "react";

const Loader = ({ text }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="relative w-16 h-16">
                <span className="absolute -bottom-14 -left-3 text-prussianBlue-700 font-semibold mb-4"> {text}... </span>
                <div className="absolute w-16 h-16 border-t-4 border-l-4  border-prussianBlue-500 rounded-full animate-spin"></div>
                <div className="absolute w-16 h-16 border-t-4 border-r-4  border-prussianBlue-500 rounded-full animate-spin-reverse"></div>
            </div>
        </div>
    );
};

export default Loader;
