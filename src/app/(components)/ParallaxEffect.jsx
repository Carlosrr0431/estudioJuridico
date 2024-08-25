"use client"
import React from 'react'
import { Parallax } from 'react-scroll-parallax';

export const ParallaxEffect = () => {
    return (
        <div className='w-full h-full'>

            <Parallax speed={-5} className='bg-red-800'>
                <div className="slow" />
            </Parallax>
            <Parallax speed={5} className='bg-red-200'>
                <div className="fast" />
            </Parallax>

        </div>
    )
}
