"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Banner = () => {
    const t = useTranslations('Banner');
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
        <div className="w-full max-w-360 mx-auto p-4 md:p-8 font-sans">
            {/* Changed h-120 to relative min-h for mobile responsiveness */}
            <div className="relative min-h-[500px] md:h-[480px]">

                {/* Background & Slides */}
                <div className="absolute inset-0 bg-[#2575cf] rounded-2xl overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            // Mobile: Image takes full width but lower opacity? Or keep w-1/2?
                            // Let's keep w-1/2 on desktop, but on mobile maybe make it cover bottom or right with gradient
                            className={`absolute right-0 bottom-0 w-full md:w-1/2 h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2575cf] via-[#2575cf]/80 md:via-[#2575cf]/40 to-transparent z-10"></div>
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-cover object-center md:object-bottom"
                            />
                        </div>
                    ))}
                </div>

                {/* Content Text */}
                <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 pb-24 md:pb-12 pointer-events-none">
                    <div className="max-w-xl text-white pointer-events-auto mt-10 md:mt-0">
                        <h1 className="text-3xl md:text-5xl font-light mb-4 md:mb-6 leading-tight">
                            {t('title')}
                        </h1>
                        <p className="text-base md:text-xl opacity-90 leading-relaxed font-light">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>

                {/* Navigation Buttons - Adjusted for Mobile */}
                <button
                    onClick={prevSlide}
                    // Mobile: Left 2 (inside), Desktop: Left -6 (outside)
                    className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-white/90 md:bg-gray-100 p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition z-30 cursor-pointer backdrop-blur-sm"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                </button>
                <button
                    onClick={nextSlide}
                    // Mobile: Right 2 (inside), Desktop: Right -6 (outside)
                    className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-white/90 md:bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-50 transition z-30 cursor-pointer backdrop-blur-sm"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                </button>

                {/* Floating Stats Card */}
                {/* Mobile: Relative positioning or adjusted absolute. kept absolute but fixed width/spacing */}
                <div className="absolute -bottom-24 md:-bottom-12 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between z-30">

                    {/* Stats Grid */}
                    <div className="w-full md:w-auto grid grid-cols-2 md:flex md:gap-8 mb-4 md:mb-0">
                        {/* Stat 1 */}
                        <div className="px-2 md:px-4 mb-4 md:mb-0 border-r border-gray-100">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">150,000+</h3>
                            <p className="text-gray-500 text-xs md:text-sm mt-1">{t('stat_max_amount')}</p>
                        </div>

                        {/* Stat 2 - Removed pl-8 on mobile */}
                        <div className="px-2 md:px-4 pl-4 md:pl-8 mb-4 md:mb-0 md:border-r border-gray-100">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">8%</h3>
                            <p className="text-gray-500 text-xs md:text-sm mt-1">{t('stat_min_interest')}</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="px-2 md:px-4 md:pl-8 border-r border-gray-100 md:border-none">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">{t('stat_max_duration_val')}</h3>
                            <p className="text-gray-500 text-xs md:text-sm mt-1">{t('stat_max_duration')}</p>
                        </div>

                        {/* Stat 4 */}
                        <div className="px-2 md:px-4 pl-4 md:pl-8">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">15%</h3>
                            <p className="text-gray-500 text-xs md:text-sm mt-1">{t('stat_min_down_payment')}</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 w-full md:w-auto pt-4 md:pt-0 border-t border-gray-100 md:border-0">
                        <button className="flex-1 md:flex-none bg-[#1d65db] hover:bg-blue-700 text-white font-medium py-3 px-4 md:px-6 rounded-lg text-sm md:text-base transition-colors whitespace-nowrap">
                            {t('btn_check')}
                        </button>
                        <button className="flex-1 md:flex-none bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-4 md:px-6 rounded-lg text-sm md:text-base transition-colors whitespace-nowrap">
                            {t('btn_more')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Spacer for the floating card */}
            <div className="h-28 md:h-20"></div>
        </div>
    );
};

export default Banner;