"use client"

import { motion } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";

import { fadeIn, variants } from "../../../variants.js";
import { useEffect, useRef } from "react";

const Contact = () => {

    const scrollRef = useRef(null)
    useEffect(() => {
        document.addEventListener("DOMContentLoaded", () => {
            const interBubble =
                document.querySelector < HTMLDivElement > ".interactive";
            let curX = 0;
            let curY = 0;
            let tgX = 0;
            let tgY = 0;

            function move() {
                curX += (tgX - curX) / 20;
                curY += (tgY - curY) / 20;
                interBubble.style.transform = `translate(${Math.round(
                    curX
                )}px, ${Math.round(curY)}px)`;
                requestAnimationFrame(() => {
                    move();
                });
            }

            window.addEventListener("mousemove", (event) => {
                tgX = event.clientX;
                tgY = event.clientY;
            });

            move();
        });
    }, []);

    return (
        <div ref={scrollRef}>
            <div className="container mx-auto py-20 text-center xl:text-left flex items-center justify-center h-full">
                <div className="flex flex-col w-full max-w-[700px] ">
                    <motion.h2

                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ root: scrollRef }}
                        className="h2 text-center mb-12"
                    >
                        ¡Consultá <span className="text-accent">ahora!</span>
                    </motion.h2>

                    <motion.form

                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ root: scrollRef }}


                        className="flex-1 flex flex-col gap-6 w-full mx-auto"
                    >

                        <div className="md:flex md:flex-row md:gap-y-0 flex flex-col gap-y-4 gap-x-6 w-full">
                            <input className="input border-white" placeholder="nombre" type="text" />
                            <input className="input border-white" placeholder="email" type="email" />
                        </div>

                        <textarea className="textarea border-white" placeholder="mensaje"></textarea>
                        <button className="btn flex rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 items-center justify-center overflow-hidden hover:border-accent group">
                            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                Enviar
                            </span>
                            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] " />
                        </button>
                    </motion.form>
                </div>
            </div>
            <div class="gradient-bg fixed inset-0 -z-10">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="10"
                                result="blur"
                            />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                result="goo"
                            />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div class="gradients-container">
                    <div class="g1"></div>
                    <div class="g2"></div>
                    <div class="g3"></div>
                    <div class="g4"></div>
                    <div class="g5"></div>
                    <div class="interactive"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;