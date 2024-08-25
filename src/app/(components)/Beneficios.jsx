"use client"
import React, { use, useRef, useState } from 'react'

import { FaWifi } from "react-icons/fa";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { FaShower } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import Wifi from '../public/wifi-svgrepo-com (1).svg'
import Ducha from '../public/shower-svgrepo-com.svg'
import Vestuario from '../public/lockers-svgrepo-com.svg'
import Dispenser from '../public/water-dispenser-svgrepo-com.svg'
import Patologia from '../public/health-analyst-medical-diagnosis-body-wellness-check-up-svgrepo-com.svg'
import Prevencion from '../public/protect-svgrepo-com (1).svg'
import SalaAcondicionamiento from '../public/gym-svgrepo-com.svg'
import Recuperacion from '../public/exercise-gym-svgrepo-com.svg'
import AltoRendimiento from '../public/cyclist-svgrepo-com.svg'
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BoltIcon, RocketIcon, UsersIcon } from 'lucide-react';
import { GoLaw } from "react-icons/go";
import { motion } from "framer-motion"
import { ModalConsultas } from './ModalConsultas';
import { ModalArea } from './ModalArea';


const fadeInAnimationVariants = {
    initial: (i) => ({
        opacity: 0,
        translateX: i % 2 === 0 ? -50 : 50,
        translateY: -50,
    }),
    animate: (i) => (
        {
            opacity: 1, translateX: 0, translateY: 0,
            transition: {
                duration: 0.3,
                delay: i * 0.2,

            }
        }
    )
}

export const Beneficios = ({ scrollNum }) => {

    const [showModal, setShowModal] = useState(false);
    const [tipoArea, setTipoArea] = useState("");

    const beneficiosArticles = [
        { id: 1, title: "Litigios", excerpt: "Await you" },
        { id: 2, title: "Casos de familia", excerpt: "Await you" },
        { id: 3, title: "Aduana", excerpt: "Await you" },
        { id: 4, title: "Great times", excerpt: "Await you" },
        { id: 5, title: "Great times", excerpt: "Await you" },
        { id: 6, title: "Great times", excerpt: "Await you" },
    ];


    return (
        <div className='w-full h-full bg-rgb(178, 190, 181) overflow-y-hidden purple ' >
            <div className='w-full h-full  '  >
                <h1 className='bg-rgb(178, 190, 181) text-center flex justify-center text-[25px]   md:mt-[60px] md:mb-10 mt-10 md:text-[35px] mx-auto text-slate-800 font-bold'>Nuestros Servicios</h1>

                <section className="">
                    <div className="container mx-auto px-4 mt-[80px]">

                        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">

                            {beneficiosArticles.map((article, i) => (
                                <motion.button key={article.id}

                                    initial="initial"
                                    onClick={() => (setShowModal(true), setTipoArea(article.title))}
                                    variants={fadeInAnimationVariants}
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={i}
                                    className="flex group flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 p-6 text-center shadow-sm transition-all duration-300 hover:scale-150 transform-gpu z-10 shadow-black hover:bg-sky-800">
                                    <GoLaw className='h-14 w-14 group-hover:text-white text-yellow-700' />
                                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-300">Litigios</h3>

                                </motion.button>
                            ))}




                        </div>

                    </div>
                </section>

            </div>

            {
                showModal && <ModalArea tipoArea={tipoArea} showModal={showModal} setShowModal={() => setShowModal(false)} />
            }
        </div>
    )
}
