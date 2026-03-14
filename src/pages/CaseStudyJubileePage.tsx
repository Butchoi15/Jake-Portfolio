import React from 'react';
import { ArrowLeft, TrendingUp, Search, Target, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudyJubileePage() {
    return (
        <div className="pt-24 pb-20 bg-[#050510] min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Back Button */}
                <Link to="/skills" className="inline-flex items-center gap-2 text-white/50 hover:text-white font-medium mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Case Studies
                </Link>

                {/* Hero Section */}
                <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-white/5 mb-8 animate-fade-up relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="flex flex-wrap gap-3 mb-8 relative z-10">
                        <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-[0_0_10px_rgba(59,130,246,0.2)]">SEO Case Study</span>
                        <span className="bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-[0_0_10px_rgba(168,85,247,0.2)]">Digital PR</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-heading font-black text-white tracking-tight leading-tight mb-6 relative z-10">
                        JubileeTV: Scaling Organic Revenue by <span className="text-glow">1,377%</span>
                    </h1>

                    <p className="text-xl text-white/70 leading-relaxed mb-10 relative z-10">
                        How highly targeted link building and digital PR outreach helped a brand successfully pivot from B2B to D2C, eventually outranking Amazon for critical product terms.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 relative z-10">
                        <div>
                            <div className="text-4xl font-heading font-black text-blue-400 mb-2 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">+1,377%</div>
                            <div className="text-xs font-bold text-white/50 uppercase tracking-widest">Organic Revenue</div>
                        </div>
                        <div>
                            <div className="text-4xl font-heading font-black text-purple-400 mb-2 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">+316%</div>
                            <div className="text-xs font-bold text-white/50 uppercase tracking-widest">Organic Traffic</div>
                        </div>
                        <div>
                            <div className="text-4xl font-heading font-black text-green-400 mb-2 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">+385%</div>
                            <div className="text-xs font-bold text-white/50 uppercase tracking-widest">Conversions</div>
                        </div>
                        <div>
                            <div className="text-4xl font-heading font-black text-orange-400 mb-2 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]">#1</div>
                            <div className="text-xs font-bold text-white/50 uppercase tracking-widest">Beat Amazon</div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="glass-card rounded-[2.5rem] p-8 border border-white/5 animate-fade-up" style={{ animationDelay: '100ms' }}>
                            <h2 className="text-2xl font-heading font-black text-white mb-6 flex items-center gap-3">
                                <Target className="text-blue-400 w-8 h-8 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" /> The Challenge
                            </h2>
                            <p className="text-white/70 leading-relaxed text-lg">
                                JubileeTV needed to pivot their entire business model from B2B over to a Direct-to-Consumer (D2C) model on Shopify. They were heavily reliant on branded search terms and Amazon listings, leaving their own eCommerce storefront with very little generic organic visibility. They needed to build topical authority fast in the highly competitive senior care and wellness space.
                            </p>
                        </div>

                        <div className="glass-card rounded-[2.5rem] p-8 border border-white/5 animate-fade-up" style={{ animationDelay: '200ms' }}>
                            <h2 className="text-2xl font-heading font-black text-white mb-6 flex items-center gap-3">
                                <Users className="text-purple-400 w-8 h-8 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" /> My Role & Strategy
                            </h2>
                            <p className="text-white/70 leading-relaxed text-lg mb-6">
                                As the <strong className="text-white">Lead Prospector & Email Outreach Manager</strong> on this agency campaign, my objective was to secure thematic, high-trust backlinks to transition their domain authority for D2C search queries.
                            </p>
                            <ul className="space-y-4 text-white/70 text-lg">
                                <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <span className="text-blue-400 mt-1 font-bold">✓</span>
                                    <span><strong className="text-white">Deep Niche Prospecting:</strong> Identified and vetted high-DR publications specifically within the senior care, wellness, and tech accessibility niches.</span>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <span className="text-blue-400 mt-1 font-bold">✓</span>
                                    <span><strong className="text-white">Digital PR Outreach:</strong> Crafted highly personalized outreach sequences to pitch JubileeTV as an innovative tech solution for seniors, avoiding generic link-farm placements.</span>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <span className="text-blue-400 mt-1 font-bold">✓</span>
                                    <span><strong className="text-white">Relationship Building:</strong> Negotiated directly with editors and site owners to secure editorial links that brought both authority and direct referral traffic.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="glass-card rounded-[2.5rem] p-8 border border-white/5 animate-fade-up" style={{ animationDelay: '300ms' }}>
                            <h2 className="text-2xl font-heading font-black text-white mb-6 flex items-center gap-3">
                                <TrendingUp className="text-green-400 w-8 h-8 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" /> The Outcome
                            </h2>
                            <p className="text-white/70 leading-relaxed text-lg">
                                By consistently landing placements on trusted industry websites, the off-page SEO signals compounded. The site saw a massive <strong className="text-white">931% growth in monthly volume</strong> over 17 months, successfully shifted reliance away from Amazon, and secured page 1 rankings for highly competitive non-branded keywords.
                            </p>
                        </div>

                        {/* Visual Proof / Charts */}
                        <div className="space-y-8 pt-8 animate-fade-up" style={{ animationDelay: '400ms' }}>
                            <h2 className="text-2xl font-heading font-black text-white mb-6 flex items-center gap-3">
                                📊 Growth Metrics
                            </h2>

                            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-black/40">
                                <div className="border-b border-white/10 px-6 py-4 font-bold text-white/80 bg-white/5 tracking-wide text-sm uppercase">Increase in Page 1 Keyword Positions</div>
                                <img src="/jtv-chart-1.png" alt="Increase in Page 1 Keyword Positions" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                            </div>

                            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-black/40">
                                <div className="border-b border-white/10 px-6 py-4 font-bold text-white/80 bg-white/5 tracking-wide text-sm uppercase">Growth in Non-Branded vs Branded</div>
                                <img src="/jtv-chart-2.png" alt="Growth in non-branded vs branded traffic" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                            </div>

                            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-black/40">
                                <div className="border-b border-white/10 px-6 py-4 font-bold text-white/80 bg-white/5 tracking-wide text-sm uppercase">Total Organic Search Performance</div>
                                <img src="/jtv-chart-3.png" alt="931% growth in monthly volume" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 animate-fade-up" style={{ animationDelay: '500ms' }}>
                        {/* Sidebar Info */}
                        <div className="glass-card rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                            
                            <h3 className="text-xl font-heading font-black text-white mb-6 border-b border-white/10 pb-4 relative z-10">Project Details</h3>

                            <div className="space-y-6 relative z-10">
                                <div>
                                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Client</div>
                                    <div className="font-medium text-lg text-white">JubileeTV</div>
                                </div>
                                <div>
                                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Agency</div>
                                    <div className="font-medium text-lg text-white">Break The Web</div>
                                </div>
                                <div>
                                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">My Role</div>
                                    <div className="font-medium text-lg text-white">Lead Prospector & Outreach</div>
                                </div>
                                <div>
                                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Focus</div>
                                    <div className="font-medium flex flex-wrap gap-2 mt-2">
                                        <span className="bg-white/10 border border-white/5 px-3 py-1.5 rounded-full text-xs font-bold text-white/80">Link Building</span>
                                        <span className="bg-white/10 border border-white/5 px-3 py-1.5 rounded-full text-xs font-bold text-white/80">Digital PR</span>
                                        <span className="bg-white/10 border border-white/5 px-3 py-1.5 rounded-full text-xs font-bold text-white/80">Email Outreach</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
