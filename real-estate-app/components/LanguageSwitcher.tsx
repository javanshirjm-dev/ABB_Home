'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent } from 'react';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const currentLocale = pathname.split('/')[1] || 'en';

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'az', label: 'AZ' },
        { code: 'fr', label: 'FR' },
    ];

    const handleLanguageChange = (newLocale: string) => {
        const pathSegments = pathname.split('/');
        pathSegments[1] = newLocale;
        const newPath = pathSegments.join('/');
        router.push(newPath);
    };

    return (
        <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${currentLocale === lang.code
                        ? 'text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                        }`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}