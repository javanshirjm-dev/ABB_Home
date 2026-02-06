"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl'; // Import hook

const Banner = () => {
    const t = useTranslations('Banner'); // Load translations
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            alt: "Building 1"
        },
        {
            id: 2,
            image: "https://i.natgeofe.com/k/074b1dbf-dced-46fa-86ef-2618323aa63f/japan-shibuya-crossing_2x1.jpg",
            alt: "Building 2"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070&auto=format&fit=crop",
            alt: "Building 3"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="w-full max-w-360 mx-auto p-8 font-sans">
            <div className="relative h-120">
                <div className="absolute inset-0 bg-[#2575cf] rounded-2xl overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute right-0 bottom-0 w-1/2 h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2575cf] via-[#2575cf]/40 to-transparent z-10"></div>
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-cover object-bottom"
                            />
                        </div>
                    ))}
                </div>

                <div className="relative z-20 h-full flex flex-col justify-center px-16 pb-12 pointer-events-none">
                    <div className="max-w-xl text-white pointer-events-auto">
                        <h1 className="text-4xl md:text-5xl font-light mb-6">
                            {t('title')}
                        </h1>
                        <p className="text-lg md:text-xl opacity-90 leading-relaxed font-light">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-[-25px] top-1/2 -translate-y-1/2 bg-gray-100 p-3 rounded-full shadow-lg hover:bg-white transition z-30 cursor-pointer"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-[-25px] top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition z-30 cursor-pointer"
                >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>

                {/* Floating Stats Card */}
                <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[90%] bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between z-30">
                    <div className="flex w-full md:w-auto grid grid-cols-2 md:flex md:gap-8 divide-x-0 md:divide-x divide-gray-100 mb-4 md:mb-0">
                        <div className="px-4 mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-gray-900">150,000+</h3>
                            <p className="text-gray-500 text-sm mt-1">{t('stat_max_amount')}</p>
                        </div>
                        <div className="px-4 pl-8 mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-gray-900">8%</h3>
                            <p className="text-gray-500 text-sm mt-1">{t('stat_min_interest')}</p>
                        </div>
                        <div className="px-4 pl-8">
                            <h3 className="text-xl font-bold text-gray-900">{t('stat_max_duration_val')}</h3>
                            <p className="text-gray-500 text-sm mt-1">{t('stat_max_duration')}</p>
                        </div>
                        <div className="px-4 pl-8">
                            <h3 className="text-xl font-bold text-gray-900">15%</h3>
                            <p className="text-gray-500 text-sm mt-1">{t('stat_min_down_payment')}</p>
                        </div>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto justify-end border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
                        <button className="bg-[#1d65db] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                            {t('btn_check')}
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                            {t('btn_more')}
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-20"></div>
        </div>
    );
};

export default Banner;