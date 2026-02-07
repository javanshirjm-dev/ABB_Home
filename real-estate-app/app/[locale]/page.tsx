import Header from '@/components/Header';
import { connectDB } from '../lib/db';
import Footer from '@/components/Footer';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Banner from '@/components/Banner';
import { House } from '../models/House';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: 'Home' });

    await connectDB();

    const houses = await House.find({}).lean();

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <Header />
            <Banner />

            <main className="grow max-w-7xl mx-auto px-6 py-12 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {houses.map((house: any) => (
                        <div
                            key={house._id.toString()}
                            className="group bg-white rounded-2xl border-3 border-blue-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={house.image}
                                    alt={house.title?.[locale] || 'House Image'}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                                    {house.percentage}% {t('apr')}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold text-slate-900 mb-2 line-clamp-1">
                                    {house.title?.[locale]}
                                </h2>

                                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                                    {house.description?.[locale]}
                                </p>

                                <div className="flex items-center gap-3 mb-6">
                                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold">
                                        {house.yearDuration} {t('year_term')}
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-50 text-slate-600 text-xs font-semibold">
                                        {t('premium')}
                                    </span>
                                </div>

                                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{t("total_price")}</p>
                                        <p className="text-2xl font-bold text-slate-900">
                                            ${house.price?.toLocaleString()}
                                        </p>
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}