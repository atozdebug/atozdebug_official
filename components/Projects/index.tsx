'use client'

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const generateSlides = [
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
]

const Projects = () => {
    return (
        <div className="wrapper">
            {/* <h2 id="basic-example-heading">Basic Example</h2> */}

            <Splide
                options={{
                    perPage: 2,
                    height: '10rem',
                    rewind: true,
                    gap: '1rem',
                }}
                aria-labelledby="basic-example-heading"
                onMoved={(splide, newIndex) => {
                    // eslint-disable-next-line
                    console.log('moved', newIndex);

                    // eslint-disable-next-line
                    console.log('length', splide.length);
                }}
            >
                // @ts-ignore
                {generateSlides.map(slide => (
                    <SplideSlide key={slide.src}>
                        <img src={slide.src} alt={slide.alt} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Projects;