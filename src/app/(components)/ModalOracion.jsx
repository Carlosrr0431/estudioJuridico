"use client"

import React, { useState, useRef } from "react";

import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'
import { sendForm } from "../action.js";
import Image from "next/image.js";
import Cancel from '../public/cancel.svg'

// import { useFormState } from "react-dom";


const ModalOracion = ({ setShowModal }) => {

    const router = useRouter()
    // const [state, formAction] = useFormState(sendForm, {
    //     errors: {
    //         text: undefined
    //     },
    // })


    return (


        <div className={`fixed inset-0  z-50 
             flex items-center justify-center h-full w-full  bg-opacity-100  backdrop-blur-sm
             `}>
            <div className="rounded-[10px]  shadow-2xl bg-black/70 shadow-black/20 p-8 m-4 md:max-w-2xl md:mx-auto">
                <div className="flex">
                    <h1 className=" w-full text-center text-white mb-6">Realizar Consulta</h1>
                    <div className="" onClick={() => setShowModal(false)}>
                        <button className="cursor-pointer">
                            <Image src={Cancel} height={40} width={40} alt="" className="hover:scale-110" />
                        </button>
                    </div>
                </div>
                <form className="mb-4 md:flex  md:flex-wrap md:justify-between" action={(formData) => sendForm(formData)} onSubmit={() => {
                    setShowModal(false), toast.success("El pedido de oración fue enviado con exito!!!", {
                        description: "Estaremos orando por ti y tu familia.",
                    });
                }}>
                    <div className="flex flex-col mb-4 md:w-1/2">
                        {/* <label class="mb-2 uppercase tracking-wide text-lg text-grey-darkest" for="first_name">Nombre y Apellido</label> */}
                        <input className="border py-2 px-3 text-grey-darkest md:mr-2 focus:outline-none focus:bg-white/90 text-black text-lg focus:text-black rounded-[5px]" type="text" name="name" id="name" placeholder="Nombre y Apellido" required />
                    </div>
                    <div className="flex flex-col mb-4 md:w-1/2">
                        {/* <label class="mb-2 uppercase  text-lg text-grey-darkest md:ml-2" for="last_name">Número de celular</label> */}
                        <input className="border text-lg py-2 px-3 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]" type="number" name="phone" id="phone" required placeholder="Número de celular" />
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <textarea
                            required
                            aria-required="true"
                            aria-label="Test"
                            placeholder="Motivo de la consulta"
                            rows="4" id="mensaje"
                            name="mensaje"


                            className="px-3 py-2 bg-white text-lg border-gray-900 focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]"
                        ></textarea>
                    </div>



                    <button className="block bg-teal hover:bg-teal-dark border-[2px]  border-solid border-white text-white uppercase text-lg mx-auto p-2 rounded-[5px] hover:bg-white hover:text-black w-full" type="submit"  >Enviar</button>

                </form>


            </div>
        </div>





    );
};

export default ModalOracion;