"use client"

import React, { useState, useRef } from "react";

import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'
import { sendForm } from "../action.js";
import Image from "next/image.js";
import Cancel from '../public/cancel.svg'
import Accordion from "./Accordion.jsx";

// import { useFormState } from "react-dom";


export const ModalConsultas = ({ setShowModal }) => {

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

                <div className="w-full grid grid-cols-2 gap-x-4 ">

                    <div className="w-[50%]">
                        <Accordion
                            title="Do you prefer Android or iOS"
                            answer="I like to use iOS products"

                        />

                    </div>

                    <div className="w-[50%]">
                        <Accordion
                            title="Do you prefer Android or iOS"
                            answer="I like to use iOS products"

                        />
                    </div>

                    <div className="w-[50%]">
                        <Accordion
                            title="Do you prefer Android or iOS"
                            answer="I like to use iOS products"

                        />
                    </div>

                    <div className="w-[50%]">
                        <Accordion
                            title="Do you prefer Android or iOS"
                            answer="I like to use iOS products"

                        />
                    </div>  

                    <div className="w-[50%]">
                        <Accordion
                            title="Do you prefer Android or iOS"
                            answer="I like to use iOS products"

                        />
                    </div>

                    <div className="w-[50%]">
                        <Accordion
                            title="Do you prefer Android or iOS"
                            answer="I like to use iOS products"

                        />
                    </div> 
                </div>
                {/* <div className="p-4 bg-gradient-to-r relative top-[5%] from-cyan-500 to-blue-500  rounded-lg xl:w-full px-4 w-[95%] mx-auto flex gap-x-[150px] justify-around">
                    <Accordion
                        title="Do you prefer Android or iOS"
                        answer="I like to use iOS products"

                    />

                    <Accordion
                        title="Do you prefer Android or iOS"
                        answer="I like to use iOS products"

                    />

                </div> */}



            </div>
        </div>





    );
};
