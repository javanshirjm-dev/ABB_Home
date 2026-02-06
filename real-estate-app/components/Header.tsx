import { useTranslations } from 'next-intl'; // Import this
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const t = useTranslations('Header'); // Hook for Header translations

    return (
        <header className="w-full bg-white ">
            <div className="max-w-350 mx-auto px-6 py-4">
                <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-blue-600">ABB</span>
                            {/* Translated "Home" */}
                            <span className="text-3xl font-light text-gray-400">{t('brand_suffix')}</span>
                        </div>

                        <div className="relative">
                            <LanguageSwitcher />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* ... (Search button remains same) ... */}
                        <button className="p-2 border-2 border-blue-200 hover:bg-blue-200 rounded-lg transition-colors duration-200">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </button>

                        <button className="flex items-center gap-2 px-4 py-2 border-2 border-blue-200 hover:bg-blue-200 rounded-lg transition-colors duration-200">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            {/* Translated "Mortgage Cabinet" */}
                            <span className="text-gray-700 font-medium">{t('mortgage_cabinet')}</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;