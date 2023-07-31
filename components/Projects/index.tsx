"use client"

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import SectionTitle from '../Common/SectionTitle';

function Projects() {
    const slides = [
        {
            id: 1,
            src: "./AI_MOVIE_PITCH_GENERATOR.png",
            alt: "image_1"
        },

        {
            id: 2,
            src: "./bizdateup.png",
            alt: "image_2"
        },

        {
            id: 3,
            src: "./broker.png",
            alt: "image_3"
        },
        {
            id: 4,
            src: "./drivego.png",
            alt: "image_4"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div className='mt-16'>
                <SectionTitle
                    title='Our Recent Projects'
                    paragraph=''
                    center
                />
            </div>

            <div className='max-w-[700px] h-[800px] w-full m-auto py-16 px-4 mt-[-100px] relative group'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                ></div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;