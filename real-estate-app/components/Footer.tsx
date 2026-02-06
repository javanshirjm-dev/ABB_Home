import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations('Footer');

    return (
        <footer className="w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold">ABB</span>
                            <span className="text-3xl font-light text-blue-300">{t('brand_suffix')}</span>
                        </div>
                        <p className="text-blue-200 text-sm leading-relaxed">
                            {t('description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('col_quick_links')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                    {t('link_about')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                    {t('link_properties')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                    {t('link_calculator')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                    {t('link_contact')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('col_services')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                    {t('link_valuation')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                    {t('link_products')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                    {t('link_investment')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                                    {t('link_support')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('col_contact')}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-blue-200 text-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +994 12 345 67 89
                            </li>
                            <li className="flex items-center gap-2 text-blue-200 text-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@abbhome.az
                            </li>
                            <li className="flex items-center gap-2 text-blue-200 text-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {t('address')}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-blue-300 text-sm">
                        {t('rights')}
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200 text-sm">
                            {t('link_privacy')}
                        </a>
                        <span className="text-blue-700">|</span>
                        <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200 text-sm">
                            {t('link_terms')}
                        </a>
                        <span className="text-blue-700">|</span>
                        <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200 text-sm">
                            {t('link_cookies')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;