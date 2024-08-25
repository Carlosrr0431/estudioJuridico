import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useAppContext } from '../(context)/AppWrapper';

import img2 from '../public/abg2.jpg'
import img3 from '../public/abg3.jpg'
import img4 from '../public/abg4.jpg'
import img5 from '../public/abg5.jpg'
import img6 from '../public/abg6.jpg'

export const SwiperEstudio = () => {

    const { ancho, setAncho } = useAppContext()

    useEffect(() => {
        window?.addEventListener("resize", () => {
            setAncho(window.innerWidth);
        });
        // return () => {
        //   window?.removeEventListener("resize", () => {
        //     setAncho(window?.innerWidth);
        //   });
        // };

        console.log(ancho);
    }, [setAncho, ancho])

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'2'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 3000
                }}
                spaceBetween={10}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper mr-10"
            >
                <SwiperSlide className='w-full h-full md:w-[400px] md:h-[400px]'>
                    <Image src={img2} className='object-cover md:w-full md:h-[400px] min-w-[250px] h-full' alt='' height={400} width={400} />
                </SwiperSlide >
                <SwiperSlide className='w-full h-full md:w-[400px] md:h-[400px]'>
                    <Image src={img3} className='object-cover md:w-full md:h-[400px] min-w-[250px] ' alt='' height={400} width={400} />
                </SwiperSlide >
                <SwiperSlide className='w-full h-full md:w-[400px] md:h-[400px]'>
                    <Image src={img4} className='object-cover md:w-full md:h-[400px] min-w-[250px] ' alt='' height={400} width={400} />
                </SwiperSlide >
                <SwiperSlide className='w-full h-full md:w-[400px] md:h-[400px]'>
                    <Image src={img5} className='object-cover md:w-full md:h-[400px] min-w-[250px] ' alt='' height={400} width={400} />
                </SwiperSlide >
                <SwiperSlide className='w-full h-full md:w-[400px] md:h-[400px]'>
                    <Image src={img6} className='object-cover md:w-full md:h-[400px] min-w-[250px] ' alt='' height={400} width={400} />
                </SwiperSlide >
                {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}
