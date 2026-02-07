'use client'

export default function AbbLine() {
    const logos = [
        {
            src: "https://redliness.az/uploads/posts/2018-02/1518094275_1491812035_kristal.png",
            alt: "Kristal",
            width: "w-40"
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/en/a/aa/Seabreeze_Amusement_Park_logo.png",
            alt: "Seabreeze",
            width: "w-44"
        },
        {
            src: "https://cdn.abbhome.az/Avant_Group_Logo_1_0f56f0c66f.svg",
            alt: "Avant Group",
            width: "w-40"
        }
    ];

    return (
        <div className="relative w-full overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50"></div>

            {/* Edge fade effects */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Scrolling content */}
            <div className="relative py-10">
                <div className="flex animate-scroll">
                    {[...Array(2)].map((_, setIndex) => (
                        <div key={setIndex} className="flex shrink-0">
                            {[...Array(8)].map((_, repeatIndex) => (
                                <div key={repeatIndex} className="flex items-center gap-16 px-12">
                                    {logos.map((logo, logoIndex) => (
                                        <div
                                            key={logoIndex}
                                            className="flex items-center justify-center bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                                        >
                                            <img
                                                className={`${logo.width} h-20 object-contain`}
                                                src={logo.src}
                                                alt={logo.alt}
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}