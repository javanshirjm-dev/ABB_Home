import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const t = useTranslations('Header');

    return (
        <header className="w-full bg-white">
            {/* Added px-4 for mobile, md:px-6 for desktop */}
            <div className="max-w-350 mx-auto px-4 md:px-6 py-4">
                <div className="flex items-center justify-between gap-3 md:gap-8">

                    {/* LEFT SIDE: Logo & Language */}
                    <div className="flex items-center gap-3 md:gap-6">
                        <div className="flex items-center gap-2">
                            {/* Text scales: text-2xl on mobile, text-3xl on desktop */}
                            <span className="text-2xl md:text-3xl font-bold text-blue-600">ABB</span>
                            <span className="text-2xl md:text-3xl font-light text-gray-400 whitespace-nowrap">
                                {t('brand_suffix')}
                            </span>
                        </div>

                        <div className="relative">
                            <LanguageSwitcher />
                        </div>
                    </div>

                    {/* RIGHT SIDE: Buttons */}
                    <div className="flex items-center gap-2 md:gap-4">

                        {/* Search Button */}
                        <button className="p-2 border-2 border-blue-200 hover:bg-blue-200 rounded-lg transition-colors duration-200">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </button>

                        {/* Mortgage Cabinet Button */}
                        {/* Changed padding: p-2 on mobile (icon only), px-4 py-2 on desktop */}
                        <button className="flex items-center gap-2 p-2 md:px-4 md:py-2 border-2 border-blue-200 hover:bg-blue-200 rounded-lg transition-colors duration-200">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>

                            {/* Text is HIDDEN on mobile, visible on medium screens (md:block) */}
                            <span className="hidden md:block text-gray-700 font-medium whitespace-nowrap">
                                {t('mortgage_cabinet')}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;