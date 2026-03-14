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
            result: "Executed 100% of website updates and maintenance tasks within a 24-hour turnaround.",
            tags: ["Collaborative", "Reliable"]
        },
        {
            id: 2,
            image: "/testimonials/testimonial3.png",
            title: "VA With Excellent English & Negotiating Skills",
            rating: 5.0,
            highlight: "\"Amazing person. Thank you\"",
            result: "Successfully negotiated lower software licensing costs, saving the client $2,000+ annually.",
            tags: ["Negotiation", "English"]
        },
        {
            id: 3,
            image: "/testimonials/testimonial1.png",
            title: "Outreach Assistant",
            rating: 4.5,
            highlight: "High-quality outreach and link-building support for competitive niches.",
            result: "Secured 50+ high-DR backlinks in 3 months, significantly boosting domain authority.",
            tags: ["Link Building", "Outreach"]
        }
    ];

    return (
        <main className="bg-[#050510] min-h-screen py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 animate-fade-up">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full font-bold text-xs md:text-sm mb-6 md:mb-8 uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <Quote className="w-4 h-4" /> Client Success
                    </div>
                    <h1 className="text-4xl md:text-7xl font-heading font-black tracking-tight text-white mb-6 md:mb-8">
                        What My Clients <span className="text-glow">Say</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-2xl mx-auto">
                        I take pride in delivering high-quality work and building long-term relationships with businesses worldwide.
                    </p>
                </div>

                <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto">
                    {testimonials.map((t, index) => (
                        <div key={t.id} className="glass-card rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 group animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 bg-white/5 flex flex-col justify-center relative">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="flex items-center gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.floor(t.rating) ? 'text-orange-400 fill-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.6)]' : 'text-white/10'} `}
                                            />
                                        ))}
                                        <span className="ml-2 font-bold text-white/80">{t.rating}</span>
                                    </div>
                                    <h3 className="text-2xl font-heading font-black mb-6 text-white leading-tight">
                                        {t.title}
                                    </h3>
                                    <p className="text-xl text-white/70 italic font-medium mb-8 leading-relaxed">
                                        {t.highlight}
                                    </p>
                                    <div className="bg-blue-500/10 border border-blue-500/20 p-5 rounded-2xl mb-8 group-hover:bg-blue-500/15 transition-colors">
                                        <div className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2 text-xs">The Outcome</div>
                                        <p className="text-white/80 font-medium">
                                            {t.result}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {t.tags.map(tag => (
                                            <span key={tag} className="bg-white/5 px-4 py-2 rounded-full text-sm font-bold text-white/60 border border-white/10 italic">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 flex items-center justify-center bg-black/20">
                                    <div className="relative w-full h-full min-h-[300px] rounded-[2rem] overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors">
                                        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
                                        <img
                                            src={t.image}
                                            alt={t.title}
                                            className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 md:mt-32 text-center px-2 animate-fade-up" style={{ animationDelay: '400ms' }}>
                    <div className="relative glass-card rounded-[3rem] p-10 md:p-16 max-w-4xl mx-auto overflow-hidden border border-blue-500/30">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-transparent"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">Want to be my next success story?</h2>
                            <p className="text-lg md:text-xl font-medium text-white/70 mb-10 max-w-2xl mx-auto">Let's talk about how I can help your business achieve similar results.</p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105"
                            >
                                Start Your Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
