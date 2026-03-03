import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsPage() {
    const testimonials = [
        {
            id: 1,
            image: "/testimonials/testimonial2.png",
            title: "Virtual Assistant - HTML CSS - WordPress",
            rating: 5.0,
            highlight: "\"We love working with Ronald, he's very efficient, 100% reliable, and always keen to help.\"",
            tags: ["Collaborative", "Reliable"]
        },
        {
            id: 2,
            image: "/testimonials/testimonial3.png",
            title: "VA With Excellent English & Negotiating Skills",
            rating: 5.0,
            highlight: "\"Amazing person. Thank you\"",
            tags: ["Negotiation", "English"]
        },
        {
            id: 3,
            image: "/testimonials/testimonial1.png",
            title: "Outreach Assistant",
            rating: 4.5,
            highlight: "High-quality outreach and link-building support for competitive niches.",
            tags: ["Link Building", "Outreach"]
        }
    ];

    return (
        <main className="bg-slate-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-bold text-xs md:text-sm mb-6 md:mb-8 uppercase tracking-widest">
                        <Quote className="w-4 h-4" /> Client Success
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-6 md:mb-8">
                        What My Clients <span className="text-blue-600">Say</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        I take pride in delivering high-quality work and building long-term relationships with businesses worldwide.
                    </p>
                </div>

                <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-50 bg-slate-50/30 flex flex-col justify-center">
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.floor(t.rating) ? 'text-orange-400 fill-orange-400' : 'text-slate-200'} `}
                                            />
                                        ))}
                                        <span className="ml-2 font-bold text-slate-700">{t.rating}</span>
                                    </div>
                                    <h3 className="text-2xl font-black mb-6 text-slate-900 leading-tight">
                                        {t.title}
                                    </h3>
                                    <p className="text-xl text-slate-600 italic font-medium mb-8 leading-relaxed">
                                        {t.highlight}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {t.tags.map(tag => (
                                            <span key={tag} className="bg-white px-4 py-2 rounded-full text-sm font-bold text-slate-500 border border-slate-100 italic">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white p-4 flex items-center justify-center">
                                    <img
                                        src={t.image}
                                        alt={t.title}
                                        className="w-full h-auto rounded-xl shadow-inner border border-slate-100"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 text-center px-2">
                    <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white max-w-4xl mx-auto shadow-2xl shadow-blue-200">
                        <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight">Want to be my next success story?</h2>
                        <p className="text-lg md:text-xl font-medium text-blue-100 mb-8 md:mb-10">Let's talk about how I can help your business achieve similar results.</p>
                        <a
                            href="/contact"
                            className="bg-white text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold hover:bg-slate-50 hover:scale-105 transition-all inline-block shadow-lg"
                        >
                            Start Your Project
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
