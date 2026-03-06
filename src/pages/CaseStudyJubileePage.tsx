import React from 'react';
import { ArrowLeft, TrendingUp, Search, Target, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudyJubileePage() {
    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                {/* Back Button */}
                <Link to="/skills" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Case Studies
                </Link>

                {/* Hero Section */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-8">
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">SEO Case Study</span>
                        <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">Digital PR</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                        JubileeTV: Scaling Organic Revenue by 1,377%
                    </h1>

                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        How highly targeted link building and digital PR outreach helped a brand successfully pivot from B2B to D2C, eventually outranking Amazon for critical product terms.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
                        <div>
                            <div className="text-3xl font-black text-blue-600 mb-1">+1,377%</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Organic Revenue</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-purple-600 mb-1">+316%</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Organic Traffic</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-green-600 mb-1">+385%</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Conversions</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-orange-600 mb-1">#1</div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Beat Amazon</div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Target className="text-blue-600" /> The Challenge
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                JubileeTV needed to pivot their entire business model from B2B over to a Direct-to-Consumer (D2C) model on Shopify. They were heavily reliant on branded search terms and Amazon listings, leaving their own eCommerce storefront with very little generic organic visibility. They needed to build topical authority fast in the highly competitive senior care and wellness space.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Users className="text-purple-600" /> My Role & Strategy
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                As the <strong>Lead Prospector & Email Outreach Manager</strong> on this agency campaign, my objective was to secure thematic, high-trust backlinks to transition their domain authority for D2C search queries.
                            </p>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 mt-1">✓</span>
                                    <span><strong>Deep Niche Prospecting:</strong> Identified and vetted high-DR publications specifically within the senior care, wellness, and tech accessibility niches.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 mt-1">✓</span>
                                    <span><strong>Digital PR Outreach:</strong> Crafted highly personalized outreach sequences to pitch JubileeTV as an innovative tech solution for seniors, avoiding generic link-farm placements.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 mt-1">✓</span>
                                    <span><strong>Relationship Building:</strong> Negotiated directly with editors and site owners to secure editorial links that brought both authority and direct referral traffic.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <TrendingUp className="text-green-600" /> The Outcome
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                By consistently landing placements on trusted industry websites, the off-page SEO signals compounded. The site saw a massive <strong>931% growth in monthly volume</strong> over 17 months, successfully shifted reliance away from Amazon, and secured page 1 rankings for highly competitive non-branded keywords.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Sidebar Info */}
                        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
                            <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-4">Project Details</h3>

                            <div className="space-y-4">
                                <div>
                                    <div className="text-slate-400 text-sm mb-1">Client</div>
                                    <div className="font-medium">JubileeTV</div>
                                </div>
                                <div>
                                    <div className="text-slate-400 text-sm mb-1">Agency</div>
                                    <div className="font-medium">Break The Web</div>
                                </div>
                                <div>
                                    <div className="text-slate-400 text-sm mb-1">My Role</div>
                                    <div className="font-medium">Lead Prospector & Outreach</div>
                                </div>
                                <div>
                                    <div className="text-slate-400 text-sm mb-1">Focus</div>
                                    <div className="font-medium flex flex-wrap gap-2 mt-2">
                                        <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">Link Building</span>
                                        <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">Digital PR</span>
                                        <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">Email Outreach</span>
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
