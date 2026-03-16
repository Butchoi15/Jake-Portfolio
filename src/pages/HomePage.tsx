import React, { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, Users, CheckCircle2, Sparkles, Zap, Brain, CheckSquare, ShoppingCart, Globe, Search, Filter, Mail, Award, Quote, Star, Linkedin, Facebook, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── CountUp ─── */
function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const { ref, isRevealed } = useScrollReveal();

    useEffect(() => {
        if (!isRevealed) return;
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) window.requestAnimationFrame(step);
            else setCount(end);
        };
        window.requestAnimationFrame(step);
    }, [isRevealed, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── RevealCard ─── */
const RevealCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const { ref, isRevealed } = useScrollReveal();
    return (
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} h-full`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

/* ─── Timeline Item ─── */
function TimelineItem({ logo, hasTextLogo, textLogoColor, title, company, description, date }: any) {
    const { ref, isRevealed } = useScrollReveal({ threshold: 0.2 });
    return (
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} relative pl-8 md:pl-0`}>
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-[#E5E7EB]"></div>
            <div className="md:grid md:grid-cols-5 md:gap-8 items-center relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E5E7EB] -translate-x-1/2"></div>
                <div className="md:col-span-2 text-left md:text-right mb-4 md:mb-0">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#4F46E5]/8 text-[#4F46E5] font-heading font-bold text-sm border border-[#4F46E5]/15">
                        {date}
                    </span>
                </div>
                <div className="absolute left-[-37px] md:static md:col-span-1 flex justify-center z-10 top-2">
                    <div className="w-4 h-4 rounded-full bg-[#4F46E5] border-4 border-[#FAFAF9] shadow-[0_0_0_2px_#4F46E5]"></div>
                </div>
                <div className="md:col-span-2">
                    <div className="card p-6 md:p-8 group hover:border-[#4F46E5]/20">
                        <div className="flex gap-4 md:gap-6 flex-col sm:flex-row">
                            <div className="w-14 h-14 rounded-2xl bg-[#F5F3F0] border border-[#E5E7EB] flex items-center justify-center flex-shrink-0 p-2.5">
                                {hasTextLogo ? (
                                    <span className={`text-xl font-black ${textLogoColor}`}>{logo}</span>
                                ) : (
                                    <img src={logo} className="max-w-full max-h-full object-contain" alt={company} />
                                )}
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-[#1A1A2E] text-lg md:text-xl mb-0.5">{title}</h4>
                                <div className="text-[#4F46E5] text-xs font-bold uppercase tracking-widest mb-3">{company}</div>
                                <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════════ */
/* ─── HOMEPAGE ─── */
/* ═══════════════════════════════════════════════════════════════════ */

export default function HomePage() {

    const experiences = [
        { logo: "/authority-builders-logo.png", hasTextLogo: false, title: "Link Builder & QA Lead", company: "Authority Builders", description: "Maintained a 98% quality assurance rate across 500+ monthly link placements, ensuring every backlink met strict editorial standards.", date: "2022 — Present" },
        { logo: "E", hasTextLogo: true, textLogoColor: "text-[#4F46E5]", title: "Prospecting & Link Building Assistant", company: "Ethical SEO Agency", description: "Scaled outreach campaigns that drove a 40% increase in high-DR backlink acquisitions for agency clients.", date: "2022 — 2026" },
        { logo: "A", hasTextLogo: true, textLogoColor: "text-[#7C3AED]", title: "VA & SEO Specialist", company: "ANT Digital Solutions Co.", description: "Streamlined client reporting and operational workflows, reclaiming 15+ hours per week for the agency.", date: "2020 — 2026" },
        { logo: "/break-the-web-logo.png", hasTextLogo: false, title: "Link Builder & Prospector", company: "Break The Web", description: "Executed targeted digital PR outreach, securing placements on top-tier industry publications.", date: "2024 — 2026" },
        { logo: "/loop-earplugs-logo.png", hasTextLogo: false, title: "Affiliate Marketing Assistant", company: "Loop Earplugs", description: "Grew and managed an affiliate database of 2,000+ creators, boosting partner-driven revenue.", date: "2023 — 2025" }
    ];

    const toolCategories = [
        { title: "AI & Intelligence", icon: <Brain className="w-5 h-5 text-[#7C3AED]" />, tools: ["ChatGPT", "Bing AI", "Google Bard", "Perplexity.ai", "Gemini", "Antigravity"] },
        { title: "Automation", icon: <Zap className="w-5 h-5 text-[#F97316]" />, tools: ["n8n", "Make.com"] },
        { title: "Collaboration", icon: <CheckSquare className="w-5 h-5 text-[#4F46E5]" />, tools: ["Asana", "Slack", "Notion", "Toggl"] },
        { title: "Sales & E-commerce", icon: <ShoppingCart className="w-5 h-5 text-[#10B981]" />, tools: ["Apollo.io", "eBay", "Amazon", "Shopify"] },
        { title: "Web Development", icon: <Globe className="w-5 h-5 text-[#F97316]" />, tools: ["WordPress", "Elementor"] }
    ];

    const testimonials = [
        { id: 1, image: "/testimonials/testimonial2.png", title: "Virtual Assistant — HTML, CSS & WordPress", rating: 5.0, highlight: "\"We love working with Ronald, he's very efficient, 100% reliable, and always keen to help.\"", result: "Executed 100% of website updates and maintenance tasks within a 24-hour turnaround.", tags: ["Collaborative", "Reliable"] },
        { id: 2, image: "/testimonials/testimonial3.png", title: "VA With Excellent English & Negotiation", rating: 5.0, highlight: "\"Amazing person. Thank you\"", result: "Negotiated lower software licensing costs, saving the client $2,000+ annually.", tags: ["Negotiation", "Communication"] },
        { id: 3, image: "/testimonials/testimonial1.png", title: "Outreach Assistant", rating: 4.5, highlight: "High-quality outreach and link-building support for competitive niches.", result: "Secured 50+ high-DR backlinks in 3 months, significantly boosting domain authority.", tags: ["Link Building", "Outreach"] }
    ];

    return (
        <main className="bg-[#FAFAF9] min-h-screen">

            {/* ═══ HERO ═══ */}
            <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center pt-20">
                {/* Hero background video */}
                <div className="absolute inset-0 z-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
                        <source src="/media/hero-loop.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF9]/60 via-[#FAFAF9]/30 to-[#FAFAF9]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-32 space-y-8 flex flex-col items-center">
                    {/* Badge */}
                    <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4F46E5]/8 text-[#4F46E5] font-medium text-sm border border-[#4F46E5]/15">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F46E5] opacity-50"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4F46E5]"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl md:text-7xl font-heading font-black leading-[1.08] tracking-tight text-[#1A1A2E]">
                        I Grow Your Traffic &{' '}
                        <span className="accent-gradient-text">Automate Your Growth</span>
                    </h1>

                    <p className="animate-fade-up delay-200 text-lg md:text-xl text-[#6B7280] font-medium leading-relaxed max-w-2xl">
                        Freelance SEO specialist combining proven link building strategies with smart AI automation — so you get more organic leads while winning back your time.
                    </p>

                    <div className="animate-fade-up delay-300 flex flex-wrap gap-4 pt-2 justify-center">
                        <a href="mailto:jpjake15@gmail.com" className="accent-gradient text-white px-8 py-4 rounded-full font-heading font-bold text-base hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_4px_20px_rgba(79,70,229,0.35)]">
                            Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
                        </a>
                        <Link to="/case-studies" className="bg-white text-[#1A1A2E] px-8 py-4 rounded-full font-heading font-bold text-base border border-[#E5E7EB] hover:border-[#D1D5DB] hover:shadow-md transition-all flex items-center gap-2">
                            View My Work
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-8 sm:gap-16 pt-12 mt-4 border-t border-[#E5E7EB] justify-center w-full max-w-xl">
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-heading font-black text-[#1A1A2E]">
                                <CountUp end={4} suffix="+" />
                            </div>
                            <div className="text-[#6B7280] font-semibold mt-1 text-sm uppercase tracking-wider">Years Experience</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-heading font-black text-[#1A1A2E]">
                                <CountUp end={500} suffix="+" />
                            </div>
                            <div className="text-[#6B7280] font-semibold mt-1 text-sm uppercase tracking-wider">Links Placed</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-heading font-black text-[#1A1A2E]">
                                <CountUp end={98} suffix="%" />
                            </div>
                            <div className="text-[#6B7280] font-semibold mt-1 text-sm uppercase tracking-wider">QA Pass Rate</div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="animate-fade-up delay-400 relative w-full max-w-3xl mt-12 aspect-video rounded-[1.5rem] overflow-hidden card p-1.5 group">
                        <img
                            src="/media/hero.jpg"
                            alt="SEO and AI growth visualization with flowing data connections"
                            className="w-full h-full object-cover rounded-[1.25rem]"
                        />
                    </div>
                </div>
            </section>

            {/* ═══ ABOUT ═══ */}
            <section className="py-24 md:py-32 section-alt">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealCard>
                        <div className="text-center mb-16">
                            <span className="text-[#4F46E5] font-heading tracking-widest uppercase text-sm font-bold block mb-3">About Me</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-[#1A1A2E]">
                                Solving Problems Since 2020
                            </h2>
                        </div>
                    </RevealCard>

                    <div className="grid md:grid-cols-12 gap-12 items-start mb-24">
                        {/* Photo */}
                        <div className="md:col-span-5">
                            <RevealCard>
                                <div className="relative group">
                                    <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] card p-1.5">
                                        <img
                                            src="/Profile.JPG"
                                            alt="Jake — Freelance SEO Specialist and Virtual Assistant"
                                            className="w-full h-full object-cover rounded-[1.25rem] group-hover:scale-[1.02] transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute bottom-4 right-[-1rem] bg-white px-6 py-3 rounded-2xl shadow-lg border border-[#E5E7EB]">
                                        <span className="block font-heading font-black text-xl text-[#1A1A2E]">Jake</span>
                                        <span className="text-[#4F46E5] text-xs font-bold uppercase tracking-widest">SEO & Growth Specialist</span>
                                    </div>
                                </div>
                            </RevealCard>
                        </div>

                        {/* Bio */}
                        <div className="md:col-span-7 pt-4">
                            <RevealCard delay={100}>
                                <div className="card p-8 md:p-10 border-l-4 border-l-[#4F46E5]">
                                    <h3 className="text-xl font-heading font-bold text-[#1A1A2E] mb-4">The Short Version</h3>
                                    <p className="text-lg text-[#6B7280] leading-relaxed">
                                        Hi, I'm Jake. I help business owners reclaim their time by handling the work that slows them down. I build high-performance websites, practical AI tools, and streamlined systems that keep operations running smoothly. On the growth side, I get businesses ranking on Google, generating qualified leads, and earning strong backlinks that compound over time. I take messy, time-consuming tasks and turn them into clear processes that actually work — so you can focus on the big ideas while your business grows.
                                    </p>
                                </div>
                            </RevealCard>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="pt-16 border-t border-[#E5E7EB]">
                        <RevealCard>
                            <div className="text-center mb-20">
                                <h3 className="text-3xl md:text-4xl font-heading font-black text-[#1A1A2E]">Professional Experience</h3>
                            </div>
                        </RevealCard>
                        <div className="space-y-10 md:space-y-0 relative max-w-5xl mx-auto">
                            {experiences.map((exp, i) => (
                                <TimelineItem key={i} {...exp} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SERVICES ═══ */}
            <section className="py-24 md:py-32">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealCard>
                        <div className="max-w-2xl mx-auto text-center mb-16">
                            <span className="text-[#4F46E5] font-heading tracking-widest uppercase text-sm font-bold block mb-3">What I Do</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-[#1A1A2E] mb-4">
                                Three Ways I Help You Grow
                            </h2>
                            <p className="text-lg text-[#6B7280] font-medium">
                                Every service I offer is built to save you time, earn you traffic, or both.
                            </p>
                        </div>
                    </RevealCard>

                    <div className="grid md:grid-cols-3 gap-6">
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
                </div>
            </section>

            {/* ═══ LINK BUILDING PROCESS ═══ */}
            <section className="py-24 md:py-32 section-alt">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealCard>
                        <div className="text-center mb-16">
                            <span className="text-[#4F46E5] font-heading tracking-widest uppercase text-sm font-bold block mb-3">Proven Methodology</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-[#1A1A2E] mb-4">
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
                                    <div className="card p-8 h-full group hover:-translate-y-2 transition-transform duration-400 relative overflow-hidden">
                                        <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl flex items-center justify-center font-heading font-black text-sm text-white" style={{ background: step.color }}>
                                            {step.num}
                                        </div>
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border" style={{ background: `${step.color}10`, borderColor: `${step.color}20`, color: step.color }}>
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
            </section>

            {/* ═══ TOOLS ═══ */}
            <section className="py-24 md:py-32">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealCard>
                        <div className="text-center mb-16">
                            <span className="text-[#4F46E5] font-heading tracking-widest uppercase text-sm font-bold block mb-3">My Toolkit</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-[#1A1A2E]">
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
            </section>

            {/* ═══ TESTIMONIALS ═══ */}
            <section className="py-24 md:py-32 section-alt">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealCard>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-[#4F46E5]/8 border border-[#4F46E5]/15 text-[#4F46E5] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
                                <Quote className="w-4 h-4" /> Client Feedback
                            </div>
                            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-[#1A1A2E] mb-4">
                                What My Clients Say
                            </h2>
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
                                                    <span key={tag} className="bg-[#F5F3F0] px-3 py-1.5 rounded-full text-xs font-medium text-[#6B7280] border border-[#E5E7EB]">
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
            </section>

            {/* ═══ CTA ═══ */}
            <section className="py-24 md:py-32">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealCard>
                        <div className="relative card overflow-hidden p-10 md:p-16 max-w-4xl mx-auto text-center bg-gradient-to-br from-[#4F46E5] to-[#7C3AED]" style={{ border: 'none' }}>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4">Ready to grow your traffic?</h2>
                                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Let's talk about how SEO, automation, and the right systems can help your business scale.</p>
                                <a
                                    href="mailto:jpjake15@gmail.com"
                                    className="inline-flex items-center gap-2 bg-white text-[#4F46E5] px-10 py-4 rounded-full text-lg font-heading font-bold hover:shadow-lg hover:scale-105 transition-all"
                                >
                                    <MessageSquare className="w-5 h-5" /> Get in Touch
                                </a>
                            </div>
                        </div>
                    </RevealCard>
                </div>
            </section>

            {/* ═══ FOOTER ═══ */}
            <footer className="border-t border-[#E5E7EB] py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <span className="font-heading font-bold text-lg text-[#1A1A2E]">Jake<span className="text-[#4F46E5]">.</span></span>
                            <p className="text-sm text-[#9CA3AF] mt-1">SEO, AI & Growth Specialist</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <a href="https://www.linkedin.com/in/ronald-jake-pitos-4542b61a8/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F5F3F0] border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#4F46E5] hover:border-[#4F46E5]/25 transition-all">
                                <Linkedin className="w-4.5 h-4.5" />
                            </a>
                            <a href="https://www.facebook.com/jake.pitos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F5F3F0] border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#4F46E5] hover:border-[#4F46E5]/25 transition-all">
                                <Facebook className="w-4.5 h-4.5" />
                            </a>
                            <a href="mailto:jpjake15@gmail.com" className="w-10 h-10 rounded-full bg-[#F5F3F0] border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#4F46E5] hover:border-[#4F46E5]/25 transition-all">
                                <Mail className="w-4.5 h-4.5" />
                            </a>
                        </div>
                        <p className="text-sm text-[#9CA3AF]">&copy; {new Date().getFullYear()} Jake. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
