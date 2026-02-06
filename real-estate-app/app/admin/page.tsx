"use client";
import { useState } from 'react';

export default function Admin() {
    const languages = [
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'az', label: 'Azerbaijani', flag: '🇦🇿' },
        { code: 'fr', label: 'French', flag: '🇫🇷' }
    ];

    const [activeTab, setActiveTab] = useState('en');
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        title: { en: '', az: '', fr: '' },
        description: { en: '', az: '', fr: '' },
        price: 0,
        image: '',
        percentage: 0,
        yearDuration: 0
    });

    const save = async () => {
        if (!form.price || !form.image) {
            alert('Please fill in Price and Image URL');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/houses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            if (res.ok) {
                alert('Property saved successfully!');
            } else {
                alert('Error saving property');
            }
        } catch (error) {
            console.error(error);
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    // --- STYLES ---
    // Minimalist Dark Input Style
    const inputClass = "w-full bg-neutral-900 border border-neutral-800 rounded-none px-4 py-2 outline-none focus:border-neutral-500 text-neutral-200 placeholder-neutral-600 transition-colors font-light";
    const labelClass = "block text-[12px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-3";

    return (
        <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-white selection:text-black">
            <div className="max-w-7xl mx-auto px-6 ">

                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-neutral-900 pb-8">
                    <div>
                        <h1 className="text-4xl font-light text-white tracking-tight mb-2">New Listing</h1>
                        <p className="text-neutral-500 text-sm">Create a new property entry in the portfolio.</p>
                    </div>
                    <button
                        onClick={save}
                        disabled={loading}
                        className={`px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all active:scale-95 ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? 'Processing...' : 'Publish Project'}
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* --- LEFT COLUMN: DATA (4 cols) --- */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Image Preview Card */}
                        <div className="aspect-square bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden relative group">
                            {form.image ? (
                                <img src={form.image} alt="Preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                            ) : (
                                <div className="text-center p-6">
                                    <div className="text-neutral-700 text-4xl mb-4"></div>
                                    <span className="text-neutral-600 text-xs uppercase tracking-widest">No Image</span>
                                </div>
                            )}
                        </div>

                        {/* Details Inputs */}
                        <div className="space-y-6">
                            <div>
                                <label className={labelClass}>Image Source</label>
                                <input
                                    type="text"
                                    placeholder="https://..."
                                    className={inputClass}
                                    onChange={e => setForm({ ...form, image: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className={labelClass}>Price Valuation ($)</label>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className={inputClass}
                                    onChange={e => setForm({ ...form, price: Number(e.target.value) })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>APR (%)</label>
                                    <input
                                        type="number"
                                        placeholder="0.0"
                                        step="0.1"
                                        className={inputClass}
                                        onChange={e => setForm({ ...form, percentage: Number(e.target.value) })}
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Term (Years)</label>
                                    <input
                                        type="number"
                                        placeholder="0"
                                        className={inputClass}
                                        onChange={e => setForm({ ...form, yearDuration: Number(e.target.value) })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: CONTENT (8 cols) --- */}
                    <div className="lg:col-span-8">

                        {/* Language Tabs */}
                        <div className="flex gap-8 mb-8 border-b border-neutral-900">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => setActiveTab(lang.code)}
                                    className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === lang.code
                                        ? 'text-white border-b border-white'
                                        : 'text-neutral-600 hover:text-neutral-400 border-b border-transparent'
                                        }`}
                                >
                                    <span className="mr-2 text-base font-normal opacity-50">{lang.flag}</span>
                                    {lang.label}
                                </button>
                            ))}
                        </div>

                        {/* Content Inputs */}
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <div>
                                <label className={labelClass}>
                                    Project Title <span className="text-neutral-700 ml-2">[{activeTab.toUpperCase()}]</span>
                                </label>
                                <input
                                    // @ts-ignore
                                    value={form.title[activeTab]}
                                    // @ts-ignore
                                    onChange={e => setForm({
                                        ...form,
                                        title: { ...form.title, [activeTab]: e.target.value }
                                    })}
                                    placeholder="Enter property name..."
                                    className={`${inputClass} text-xl  font-normal`}
                                />
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Description <span className="text-neutral-700 ml-2">[{activeTab.toUpperCase()}]</span>
                                </label>
                                <textarea
                                    // @ts-ignore
                                    value={form.description[activeTab]}
                                    // @ts-ignore
                                    onChange={e => setForm({
                                        ...form,
                                        description: { ...form.description, [activeTab]: e.target.value }
                                    })}
                                    rows={7}
                                    placeholder="Detailed property description..."
                                    className={`${inputClass} resize-none font-normal leading-loose text-xl`}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}