"use client"

import Image from "next/image";
import Degradado from './public/capas.svg'
import Socials from "./(components)/Socials";
import { useEffect, useRef, useState } from "react";
import { Beneficios } from "./(components)/Beneficios";
import { Consultas } from "./(components)/Consultas";
import { Sponsor } from "./(components)/Sponsor";
import TestimonialSlider from "./(components)/TestimonialSlider";
import Link from "next/link";
import SwiperGym from "./(components)/SwiperEstudio";
import Logo from './public/logo estudio juridico-02.svg'
import Video from './public/6101151-uhd_4096_2160_30fps.mp4'
import { useAppContext } from "./(context)/AppWrapper";
import ModalOracion from "./(components)/ModalOracion";
import imagenForm from './public/view-3d-justice-scales (1).jpg'
import Contact from "./(components)/Contact";


const Home = () => {

  const [showModal, setShowModal] = useState(false);
  const container = useRef()
  const { setCambioHeader } = useAppContext()
  const [scroll, setScroll] = useState(0)



  const handleScroll = () => {

    setScroll(container.current.scrollTop);
    if (scroll >= 100 && scroll <= 150) {
      setCambioHeader(true)
    } else if (scroll <= 50) {
      setCambioHeader(false)
    }
  }

  return (

    <main main className="h-full  w-full relative overflow-y-auto overflow-x-hidden  " onScroll={handleScroll} ref={container} >

      <section className="w-full h-full  " >
        <div className="w-full h-full   ">
          <div className={` text-center montserrat flex   flex-col justify-center xl:mx-auto w-full items-center  xl:text-center h-full container `}>
            <h1

              className=" h2 text-[32px] xl:text-[55px] xl:w-[1200px] font-light mx-auto items-center text-center "
            >
              Estudio jurídico
            </h1>

            <h1

              className=" h2 text-[32px] relative bottom-[20px] xl:text-[40px] xl:w-[1200px] font-semibold mx-auto items-center text-center "
            >
              Soluciones legales de excelencia <br />
            </h1>


            <button onClick={() => setShowModal(true)} class=" text-white  hover:bg-black/90  font-semibold hover:text-white py-2 px-4  hover:border-transparent bg-yellow-700  rounded-sm ">
              REALIZA TU CONSULTA
            </button>
          </div>
        </div>


        <div className="xl:bg-right xl:bg-no-repeat w-full h-full  translate-z-50  absolute inset-0   -z-20    ">
          <video src={Video} autoPlay muted loop className="object-cover h-[100%] w-[100%] brightness-50 " />
        </div>






      </section>

      <section className="h-[100%] w-[100%] bg-gray-100 ">

        <Beneficios />
      </section>

      <section className="h-[100%] w-[100%] bg-sky-900 ">

        <Consultas />
      </section>

      <section className="h-full w-[100%] bg-indigo-950">

        <Contact/>
    
        {/* <div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center ">
          <div class="bg-gray-100 text-gray-500  shadow-xl w-full overflow-hidden mb-2" >
            <div class="md:flex w-full">
              <div class="hidden md:block w-1/2 relative">
                <Image src={imagenForm} height={0} width={0} className="w-full h-full object-cover absolute unset-0" alt=""/>
              </div>
              <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                  <h1 class="font-bold text-3xl text-gray-900">Realiza tu consulta</h1>
                  <p className="text-gray-700">Completá la siguiente información</p>
                </div>
                <div className="mx-auto mr-14">
                  <div class="flex -mx-3">
                    <div class="w-1/2 px-3 mb-5">
                      <label for="" class="text-xs font-semibold px-1">Nombre</label>
                      <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                        <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Cristian" />
                      </div>
                    </div>
                    <div class="w-1/2 px-3 mb-5">
                      <label for="" class="text-xs font-semibold px-1">Apellido</label>
                      <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                        <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Benitez" />
                      </div>
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                      <label for="" class="text-xs font-semibold px-1">Motivo de la consulta</label>
                      <div class="flex">
                        <textarea class="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></textarea>
                    
                      </div>
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-12 invisible">
                      <label for="" class="text-xs font-semibold px-1">Password</label>
                      <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                        <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                      </div>
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5 relative bottom-[50px]">
                      <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Consultar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

     

      </section>

      {/* <footer class="w-full bg-gray-900 h-[200px]  sm:h-[250px]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div class="py-16 flex justify-around items-center flex-col gap-8 lg:flex-row">

            <ul class="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">

              <li class="sm:my-0 my-2" ><a href="#" class="text-white hover:text-gray-400">Planes</a></li>
              <li ><a href="#" class="text-white hover:text-gray-400">Cursos</a></li>
              <li class="sm:my-0 my-2"><a href="#" class="text-white hover:text-gray-400">Ubicacion</a></li>
              <li ><a href="#" class="text-white hover:text-gray-400">Soporte</a></li>
            </ul>
            <div class="flex  space-x-4 sm:justify-center  ">
              <Socials />
            </div>
          </div>

          <div class="py-7 border-t border-gray-700">
            <div class="flex items-center justify-center">
              <span class="text-gray-400 ">©<a href="https://pagedone.io/">Faro IT</a> 2024, Todos los derechos reservados.</span>
            </div>
          </div>
        </div>
      </footer> */}

      {
        showModal && <ModalOracion showModal={showModal} setShowModal={() => setShowModal(false)} />
      }
    </main >
  );
};

export default Home;