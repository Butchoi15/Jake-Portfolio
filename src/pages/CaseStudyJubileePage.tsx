import React from 'react';
import { ArrowLeft, TrendingUp, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const RevealCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const { ref, isRevealed } = useScrollReveal();
    return (
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

export default function CaseStudyJubileePage() {
    return (
        <div className="pt-24 pb-20 bg-[#FAFAF9] min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                {/* Back Button */}
                <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#4F46E5] font-medium mb-8 transition-colors text-sm">
                    <ArrowLeft className="w-4 h-4" /> Back to Case Studies
                </Link>

                {/* Hero */}
                <RevealCard>
                    <div className="card p-8 md:p-12 mb-8 relative overflow-hidden">
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="bg-[#4F46E5]/8 border border-[#4F46E5]/15 text-[#4F46E5] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">SEO Case Study</span>
                            <span className="bg-[#7C3AED]/8 border border-[#7C3AED]/15 text-[#7C3AED] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">Digital PR</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-heading font-black text-[#1A1A2E] tracking-tight leading-tight mb-5">
                            JubileeTV: Scaling Organic Revenue by <span className="accent-gradient-text">1,377%</span>
                        </h1>

                        <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
                            How highly targeted link building and digital PR outreach helped a brand pivot from B2B to D2C, eventually outranking Amazon for critical product terms.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#E5E7EB]">
                            {[
                                { value: "+1,377%", label: "Organic Revenue", color: "#4F46E5" },
                                { value: "+316%", label: "Organic Traffic", color: "#7C3AED" },
                                { value: "+385%", label: "Conversions", color: "#10B981" },
                                { value: "#1", label: "Beat Amazon", color: "#F97316" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-3xl md:text-4xl font-heading font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
                                    <div className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealCard>

                {/* Content */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <RevealCard delay={100}>
                            <div className="card p-8">
                                <h2 className="text-xl font-heading font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                                    <Target className="text-[#4F46E5] w-6 h-6" /> The Challenge
                                </h2>
                                <p className="text-[#6B7280] leading-relaxed">
                                    JubileeTV needed to pivot their entire business model from B2B to Direct-to-Consumer (D2C) on Shopify. They were heavily reliant on branded search terms and Amazon listings, leaving their own eCommerce storefront with minimal generic organic visibility. They needed to build topical authority fast in the highly competitive senior care and wellness space.
                                </p>
                            </div>
                        </RevealCard>

                        <RevealCard delay={200}>
                            <div className="card p-8">
                                <h2 className="text-xl font-heading font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                                    <Users className="text-[#7C3AED] w-6 h-6" /> My Role & Strategy
                                </h2>
                                <p className="text-[#6B7280] leading-relaxed mb-5">
                                    As the <strong className="text-[#1A1A2E]">Lead Prospector & Email Outreach Manager</strong> on this agency campaign, my objective was to secure thematic, high-trust backlinks to accelerate their domain authority for D2C search queries.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        { title: "Deep Niche Prospecting", desc: "Identified and vetted high-DR publications specifically within the senior care, wellness, and tech accessibility niches." },
                                        { title: "Digital PR Outreach", desc: "Crafted highly personalized outreach sequences to pitch JubileeTV as an innovative tech solution for seniors, avoiding generic link-farm placements." },
                                        { title: "Relationship Building", desc: "Negotiated directly with editors and site owners to secure editorial links that brought both authority and direct referral traffic." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F3F0] border border-[#E5E7EB]">
                                            <span className="text-[#4F46E5] mt-0.5 font-bold flex-shrink-0">&#10003;</span>
                                            <span className="text-[#6B7280]"><strong className="text-[#1A1A2E]">{item.title}:</strong> {item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </RevealCard>

                        <RevealCard delay={300}>
                            <div className="card p-8">
                                <h2 className="text-xl font-heading font-black text-[#1A1A2E] mb-5 flex items-center gap-3">
                                    <TrendingUp className="text-[#10B981] w-6 h-6" /> The Outcome
                                </h2>
                                <p className="text-[#6B7280] leading-relaxed">
                                    By consistently landing placements on trusted industry websites, the off-page SEO signals compounded. The site achieved <strong className="text-[#1A1A2E]">931% growth in monthly search volume</strong> over 17 months, successfully shifted reliance away from Amazon, and secured page 1 rankings for highly competitive non-branded keywords.
                                </p>
                            </div>
                        </RevealCard>

                        {/* Charts */}
                        <RevealCard delay={400}>
                            <div className="space-y-6">
                                <h2 className="text-xl font-heading font-black text-[#1A1A2E] flex items-center gap-2">
                                    Growth Metrics
                                </h2>
                                {[
                                    { src: "/jtv-chart-1.png", alt: "Increase in Page 1 keyword positions over 17 months", label: "Increase in Page 1 Keyword Positions" },
                                    { src: "/jtv-chart-2.png", alt: "Growth in non-branded vs branded search traffic", label: "Growth in Non-Branded vs Branded" },
                                    { src: "/jtv-chart-3.png", alt: "931% growth in total monthly organic search volume", label: "Total Organic Search Performance" }
                                ].map((chart, i) => (
                                    <div key={i} className="card overflow-hidden">
                                        <div className="border-b border-[#E5E7EB] px-5 py-3 font-bold text-[#6B7280] text-sm uppercase tracking-wide">{chart.label}</div>
                                        <img src={chart.src} alt={chart.alt} className="w-full h-auto" />
                                    </div>
                                ))}
                            </div>
                        </RevealCard>
                    </div>

                    {/* Sidebar */}
                    <RevealCard delay={500}>
                        <div className="card p-8 sticky top-28">
                            <h3 className="text-lg font-heading font-black text-[#1A1A2E] mb-6 border-b border-[#E5E7EB] pb-4">Project Details</h3>
                            <div className="space-y-5">
                                {[
                                    { label: "Client", value: "JubileeTV" },
                                    { label: "Agency", value: "Break The Web" },
                                    { label: "My Role", value: "Lead Prospector & Outreach" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[#9CA3AF] text-xs font-bold uppercase tracking-widest mb-1">{item.label}</div>
                                        <div className="font-medium text-[#1A1A2E]">{item.value}</div>
                                    </div>
                                ))}
                                <div>
                                    <div className="text-[#9CA3AF] text-xs font-bold uppercase tracking-widest mb-2">Focus Areas</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Link Building", "Digital PR", "Email Outreach"].map(tag => (
                                            <span key={tag} className="bg-[#F5F3F0] border border-[#E5E7EB] px-3 py-1.5 rounded-full text-xs font-medium text-[#6B7280]">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealCard>
                </div>
            </div>
        </div>
    );
}
