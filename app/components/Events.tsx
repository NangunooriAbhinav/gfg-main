import { useState } from 'react';

export default function Events() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { src: './posters/1.png', alt: 'Event Poster 1' },
        { src: './posters/2.png', alt: 'Event Poster 2' },
        { src: './posters/3.png', alt: 'Event Poster 3' },
        { src: './posters/4.png', alt: 'Event Poster 4' },
        { src: './posters/5.png', alt: 'Event Poster 5' },
        { src: './posters/6.png', alt: 'Event Poster 6' },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    return (
        <section id="events-loc" className="swiper-body">

            <img
                id="events-head-img"
                src="./event-banner.png"
                alt="Events Head"
            />

            <div className="relative overflow-hidden w-[50%] h-[70%]">
                <div
                    className="flex transition-transform duration-500 "
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="w-full h-auto object-center object-cover"
                            />
                        </div>
                    ))}
                </div>
                {/* Left Arrow */}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    onClick={prevSlide}
                >
                    &#10094;
                </button>
                {/* Right Arrow */}
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
}
