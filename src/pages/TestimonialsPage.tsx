import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const RevealCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const { ref, isRevealed } = useScrollReveal();
    return (
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} h-full`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

export default function TestimonialsPage() {
    const testimonials = [
        { id: 1, image: "/testimonials/testimonial2.png", title: "Virtual Assistant — HTML, CSS & WordPress", rating: 5.0, highlight: "\"We love working with Ronald, he's very efficient, 100% reliable, and always keen to help.\"", result: "Executed 100% of website updates and maintenance tasks within a 24-hour turnaround.", tags: ["Collaborative", "Reliable"] },
        { id: 2, image: "/testimonials/testimonial3.png", title: "VA With Excellent English & Negotiation", rating: 5.0, highlight: "\"Amazing person. Thank you\"", result: "Negotiated lower software licensing costs, saving the client $2,000+ annually.", tags: ["Negotiation", "Communication"] },
        { id: 3, image: "/testimonials/testimonial1.png", title: "Outreach Assistant", rating: 4.5, highlight: "High-quality outreach and link-building support for competitive niches.", result: "Secured 50+ high-DR backlinks in 3 months, significantly boosting domain authority.", tags: ["Link Building", "Outreach"] }
    ];

    return (
        <main className="bg-[#FAFAF9] min-h-screen pt-24 pb-32">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <RevealCard>
                    <div className="max-w-3xl mx-auto text-center mb-16 pt-8">
                        <div className="inline-flex items-center gap-2 bg-[#4F46E5]/8 border border-[#4F46E5]/15 text-[#4F46E5] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
                            <Quote className="w-4 h-4" /> Client Feedback
                        </div>
                        <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-[#1A1A2E] mb-4">
                            What My Clients Say
                        </h1>
                        <p className="text-lg text-[#6B7280] font-medium">
                            I take pride in delivering consistent, high-quality work and building long-term relationships with businesses worldwide.
                        </p>
                    </div>
                </RevealCard>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {testimonials.map((t, index) => (
                        <RevealCard key={t.id} delay={index * 100}>
                            <div className="card overflow-hidden group hover:border-[#4F46E5]/20">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#E5E7EB] flex flex-col justify-center">
                                        <div className="flex items-center gap-1 mb-5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-4.5 h-4.5 ${i < Math.floor(t.rating) ? 'text-[#F97316] fill-[#F97316]' : 'text-[#E5E7EB]'}`} />
                                            ))}
                                            <span className="ml-2 font-bold text-[#1A1A2E] text-sm">{t.rating}</span>
                                        </div>
                                        <h3 className="text-xl font-heading font-black mb-4 text-[#1A1A2E] leading-tight">{t.title}</h3>
                                        <p className="text-lg text-[#6B7280] italic font-medium mb-6 leading-relaxed">{t.highlight}</p>
                                        <div className="bg-[#4F46E5]/5 border border-[#4F46E5]/10 p-4 rounded-xl mb-5">
                                            <div className="text-xs font-bold text-[#4F46E5] uppercase tracking-widest mb-1">The Outcome</div>
                                            <p className="text-[#1A1A2E] font-medium text-sm">{t.result}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {t.tags.map(tag => (
                                                <span key={tag} className="bg-[#F5F3F0] px-3 py-1.5 rounded-full text-sm font-medium text-[#6B7280] border border-[#E5E7EB]">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-4 flex items-center justify-center bg-[#F5F3F0]">
                                        <div className="relative w-full h-full min-h-[280px] rounded-[1.25rem] overflow-hidden">
                                            <img
                                                src={t.image}
                                                alt={t.title}
                                                className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-[1.02] transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealCard>
                    ))}
                </div>
            </div>
        </main>
    );
}
