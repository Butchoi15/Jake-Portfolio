import React from 'react';
import { TrendingUp, Users, CheckCircle2, Sparkles, Brain, Zap, CheckSquare, ShoppingCart, Globe, Search, Filter, Mail, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const RevealCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const { ref, isRevealed } = useScrollReveal();
    return (
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} h-full`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

const toolCategories = [
    { title: "AI & Intelligence", icon: <Brain className="w-5 h-5 text-[#7C3AED]" />, tools: ["ChatGPT", "Bing AI", "Google Bard", "Perplexity.ai", "Gemini", "Antigravity"] },
    { title: "Automation", icon: <Zap className="w-5 h-5 text-[#F97316]" />, tools: ["n8n", "Make.com"] },
    { title: "Collaboration", icon: <CheckSquare className="w-5 h-5 text-[#4F46E5]" />, tools: ["Asana", "Slack", "Notion", "Toggl"] },
    { title: "Sales & E-commerce", icon: <ShoppingCart className="w-5 h-5 text-[#10B981]" />, tools: ["Apollo.io", "eBay", "Amazon", "Shopify"] },
    { title: "Web Development", icon: <Globe className="w-5 h-5 text-[#F97316]" />, tools: ["WordPress", "Elementor"] }
];

export default function SkillsPage() {
    return (
        <main className="bg-[#FAFAF9] min-h-screen pt-24 pb-32">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <RevealCard>
                    <div className="text-center mb-16 pt-8">
                        <span className="text-[#4F46E5] font-heading tracking-widest uppercase text-sm font-bold block mb-3">What I Do</span>
                        <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-[#1A1A2E] mb-4">
                            My Skills & Services
                        </h1>
                        <p className="text-lg text-[#6B7280] font-medium max-w-2xl mx-auto">
                            Every service I offer is built to save you time, earn you traffic, or both.
                        </p>
                    </div>
                </RevealCard>

                {/* Services */}
                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    <RevealCard delay={0}>
                        <div className="card p-8 md:p-10 h-full group hover:border-[#7C3AED]/25 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative">
                                <div className="w-14 h-14 bg-[#7C3AED]/10 text-[#7C3AED] rounded-2xl flex items-center justify-center mb-6 border border-[#7C3AED]/15 group-hover:scale-105 transition-transform">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-heading font-black text-[#1A1A2E] mb-3">Virtual Assistance</h3>
                                <p className="text-[#6B7280] mb-6 leading-relaxed">
                                    Running a business eats time. I take the operational weight off your plate so you can focus on revenue.
                                </p>
                                <ul className="space-y-3">
                                    {["eCommerce Management", "Lead Generation & Research", "Customer Service", "Data Entry & Admin", "Email Outreach", "Reporting & Analytics"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-[#1A1A2E] font-medium">
                                            <CheckCircle2 className="w-4.5 h-4.5 text-[#7C3AED] flex-shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </RevealCard>

                    <RevealCard delay={100}>
                        <div className="card p-8 md:p-10 h-full group hover:border-[#4F46E5]/25 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F46E5]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative">
                                <div className="w-14 h-14 bg-[#4F46E5]/10 text-[#4F46E5] rounded-2xl flex items-center justify-center mb-6 border border-[#4F46E5]/15 group-hover:scale-105 transition-transform">
                                    <Sparkles className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-heading font-black text-[#1A1A2E] mb-3">AI & Web Development</h3>
                                <p className="text-[#6B7280] mb-6 leading-relaxed">
                                    I combine sharp logic with creative thinking to build products that are smart, simple, and built to scale.
                                </p>
                                <ul className="space-y-3">
                                    {["AI-Powered Websites", "SaaS Product Development", "Workflow Automation (n8n, Make)", "AI Chatbots & Assistants", "Prompt Engineering", "UX-Focused Interfaces"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-[#1A1A2E] font-medium">
                                            <CheckCircle2 className="w-4.5 h-4.5 text-[#4F46E5] flex-shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </RevealCard>

                    <RevealCard delay={200}>
                        <div className="card p-8 md:p-10 h-full group hover:border-[#10B981]/25 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative">
                                <div className="w-14 h-14 bg-[#10B981]/10 text-[#10B981] rounded-2xl flex items-center justify-center mb-6 border border-[#10B981]/15 group-hover:scale-105 transition-transform">
                                    <TrendingUp className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-heading font-black text-[#1A1A2E] mb-3">Digital Marketing</h3>
                                <p className="text-[#6B7280] mb-6 leading-relaxed">
                                    I help businesses get found, build authority, and turn organic traffic into recurring revenue.
                                </p>
                                <ul className="space-y-3">
                                    {["SEO Strategy & Execution", "White-Hat Link Building", "Affiliate Program Management", "Lead Generation Campaigns", "Personalized Outreach", "Content Strategy"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-[#1A1A2E] font-medium">
                                            <CheckCircle2 className="w-4.5 h-4.5 text-[#10B981] flex-shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </RevealCard>
                </div>

                {/* Link Building Process */}
                <div className="mb-24">
                    <RevealCard>
                        <div className="text-center mb-16">
                            <span className="text-[#4F46E5] font-heading tracking-widest uppercase text-sm font-bold block mb-3">Proven Methodology</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight text-[#1A1A2E] mb-4">
                                My Link Building Process
                            </h2>
                            <p className="text-lg text-[#6B7280] font-medium max-w-3xl mx-auto">
                                No generic email blasts. I build genuine relationships that land high-authority, white-hat placements — the kind that actually move your rankings.
                            </p>
                        </div>
                    </RevealCard>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-[#7C3AED]/10 via-[#4F46E5]/20 to-[#10B981]/10 -translate-y-1/2 z-0"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {[
                                { num: "01", icon: <Search />, title: "Prospecting", desc: "Deep research to uncover highly relevant, real websites with strong metrics in your niche.", color: "#7C3AED" },
                                { num: "02", icon: <Filter />, title: "Vetting & QA", desc: "Manual filtration to eliminate PBNs, link farms, and toxic domains with no real traffic.", color: "#4F46E5" },
                                { num: "03", icon: <Mail />, title: "Outreach", desc: "Personalized campaigns that build relationships and negotiate guest posts and exchanges.", color: "#10B981" },
                                { num: "04", icon: <Award />, title: "Placement", desc: "Securing the live link, verifying anchors, and tracking the impact on your domain authority.", color: "#F97316" }
                            ].map((step, i) => (
                                <RevealCard key={i} delay={i * 80}>
                                    <div className="card p-8 h-full group hover:-translate-y-2 transition-transform duration-400 relative">
                                        <div className="absolute top-3 left-3 w-8 h-8 rounded-lg flex items-center justify-center font-heading font-black text-xs text-white z-10" style={{ background: step.color }}>
                                            {step.num}
                                        </div>
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border mt-6" style={{ background: `${step.color}10`, borderColor: `${step.color}20`, color: step.color }}>
                                            {React.cloneElement(step.icon as React.ReactElement, { className: 'w-7 h-7' })}
                                        </div>
                                        <h3 className="text-xl font-heading font-bold text-[#1A1A2E] mb-2">{step.title}</h3>
                                        <p className="text-[#6B7280] leading-relaxed">{step.desc}</p>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tools */}
                <RevealCard>
                    <div className="text-center mb-16">
                        <span className="text-[#4F46E5] font-heading tracking-widest uppercase text-sm font-bold block mb-3">My Toolkit</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight text-[#1A1A2E]">
                            Tools I Work With Daily
                        </h2>
                    </div>
                </RevealCard>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toolCategories.map((cat, i) => (
                        <RevealCard key={i} delay={i * 60}>
                            <div className="card p-7 h-full group hover:border-[#4F46E5]/15">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2.5 bg-[#F5F3F0] rounded-xl border border-[#E5E7EB]">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#1A1A2E]">{cat.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.tools.map((tool, j) => (
                                        <span key={j} className="bg-[#F5F3F0] hover:bg-[#EDEBE8] px-3.5 py-1.5 rounded-full text-sm font-medium text-[#1A1A2E] border border-[#E5E7EB] transition-colors cursor-default">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </RevealCard>
                    ))}
                </div>
            </div>
        </main>
    );
}
