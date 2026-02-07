'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    // Safely get the current locale, defaulting to 'en'
    const currentLocale = pathname.split('/')[1] || 'en';

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'az', label: 'AZ' },
        { code: 'fr', label: 'FR' },
    ];

    const handleLanguageChange = (newLocale: string) => {
        const pathSegments = pathname.split('/');
        pathSegments[1] = newLocale; // Replace the locale segment
        const newPath = pathSegments.join('/');
        router.push(newPath);
    };

    return (
        <div className="flex items-center p-1 bg-gray-100 rounded-2xl border border-gray-200">
            {languages.map((lang) => {
                const isActive = currentLocale === lang.code;
                return (
                    <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`
                            relative z-10 
                            rounded-xl font-bold transition-all duration-300 ease-out
                            
                            /* --- Responsive Sizing --- */
                            text-xs px-3 py-1.5       /* Mobile: Compact */
                            md:text-sm md:px-5 md:py-2 /* Desktop: Spacious */

                            /* --- Interaction Animations --- */
                            hover:opacity-90 active:scale-95

                            /* --- Active vs Inactive Styles --- */
                            ${isActive
                                ? 'text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-md transform scale-105'
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                            }
                        `}
                    >
                        {lang.label}
                    </button>
                );
            })}
        </div>
    );
}