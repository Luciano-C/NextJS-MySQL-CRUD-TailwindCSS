import React from "react";

// Toast es para enviar notificaciones al usuario (alerts estilizados)
import { ToastContainer } from "react-toastify";
import { Navbar } from "./Navbar";


export const Layout = ({ children }) => {
    return (
        <>
            
            <Navbar />
            <div className="bg-gray-100 h-screen p-10">
                <div className="container mx-auto h-full">
                    {children}
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

