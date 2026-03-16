import React, { useState } from 'react';
import {
    TrendingUp, Users, CheckCircle2,
    MessageSquare, Brain, Sparkles, Zap,
    CheckSquare, MessageCircle, Book, Clock,
    Target, ShoppingCart, Globe, Layout,
    ExternalLink, Search, Filter, Mail, Award,
    ChevronDown, ArrowLeft, Code, Megaphone, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const toolCategories = [
    {
        title: "AI & Intelligence",
        icon: <Brain className="w-6 h-6 text-purple-400" />,
        tools: ["ChatGPT", "BingAI", "GoogleBard", "Perplexity.ai", "Gemini", "Antigravity"]
    },
    {
        title: "Automation",
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        tools: ["n8n", "Make.com"]
    },
    {
        title: "Collaboration & Management",
        icon: <CheckSquare className="w-6 h-6 text-blue-400" />,
        tools: ["Asana", "Slack", "Notion", "Toggl"]
    },
    {
        title: "Sales & E-commerce",
        icon: <ShoppingCart className="w-6 h-6 text-green-400" />,
        tools: ["Apollo.io", "eBay", "Amazon", "Shopify"]
    },
    {
        title: "Web Development",
        icon: <Globe className="w-6 h-6 text-orange-400" />,
        tools: ["WordPress", "Elementor"]
    }
];

const RevealCard: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => {
    const { ref, isRevealed } = useScrollReveal();
    return (
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} h-full`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

const projectCategories = [
    {
        id: "digital-marketing",
        title: "Digital Marketing & SEO",
        description: "Data-driven campaigns that move the needle on traffic, rankings, and revenue.",
        icon: <Megaphone className="w-8 h-8" />,
        color: "green",
        colorClasses: {
            bg: "bg-green-500/20",
            text: "text-green-400",
            border: "border-green-500/30",
            hoverBorder: "hover:border-green-500/50",
            glow: "shadow-[0_0_15px_rgba(34,197,94,0.4)]",
            tag: "text-green-300",
        },
        projects: [
            {
                title: "JubileeTV SEO & Digital PR",
                url: "/case-studies/jubileetv",
                isInternal: true,
                image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop",
                description: "Led prospecting and outreach that generated high-authority placements in senior care/wellness niches, contributing to a 1,377% increase in organic revenue and outranking Amazon.",
                tag: "SEO Case Study"
            }
        ]
    },
    {
        id: "ai-automation",
        title: "AI & Automation",
        description: "Intelligent tools and AI-powered applications that automate workflows and unlock new capabilities.",
        icon: <Brain className="w-8 h-8" />,
        color: "purple",
        colorClasses: {
            bg: "bg-purple-500/20",
            text: "text-purple-400",
            border: "border-purple-500/30",
            hoverBorder: "hover:border-purple-500/50",
            glow: "shadow-[0_0_15px_rgba(168,85,247,0.4)]",
            tag: "text-purple-300",
        },
        projects: [
            {
                title: "Marketing Email Scraper",
                url: "https://marketing-email-scraper.vercel.app/",
                isInternal: false,
                image: "/marketing-scraper.png",
                description: "An automated lead generation tool that rapidly extracts verified contact emails for marketing and SEO outreach campaigns.",
                tag: "Lead Gen Tool"
            },
            {
                title: "AI Image Generator",
                url: "https://image-generator-zeta-virid.vercel.app/",
                isInternal: false,
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
                description: "An interactive web application that transforms text descriptions into unique visual artworks using advanced AI models.",
                tag: "AI Application"
            }
        ]
    },
    {
        id: "web-development",
        title: "Web Development & Design",
        description: "Modern, responsive websites and applications built with performance and user experience in mind.",
        icon: <Code className="w-8 h-8" />,
        color: "blue",
        colorClasses: {
            bg: "bg-blue-500/20",
            text: "text-blue-400",
            border: "border-blue-500/30",
            hoverBorder: "hover:border-blue-500/50",
            glow: "shadow-[0_0_15px_rgba(59,130,246,0.4)]",
            tag: "text-blue-300",
        },
        projects: [
            {
                title: "VisionBay Ecommerce",
                url: "https://visionbay.vercel.app/",
                isInternal: false,
                image: "/visionbay.png",
                description: "A high-performance ecommerce website built for security products, featuring modern UI and conversion-focused design.",
                tag: "Ecommerce"
            },
            {
                title: "Yoga Teacher Studio",
                url: "https://yogateacher-five.vercel.app/",
                isInternal: false,
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
                description: "A calming, functional web application designed for a yoga instructor, featuring elegant layouts and structured services.",
                tag: "Web Design"
            }
        ]
    }
];

function PortfolioSection() {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const toggleCategory = (id: string) => {
        setExpandedCategory(expandedCategory === id ? null : id);
    };

    return (
        <section className="py-24 border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-2xl text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-white mb-4 text-glow">
                        Case Studies & Projects
                    </h2>
                    <p className="text-xl text-white/60 font-medium">
                        Real results driven by data, automation, and solid development. Tap a category to explore.
                    </p>
                </div>

                <div className="grid gap-6">
                    {projectCategories.map((cat, i) => {
                        const isExpanded = expandedCategory === cat.id;
                        const c = cat.colorClasses;

                        return (
                            <RevealCard key={cat.id} delay={i * 100}>
                                <div className={`glass-card rounded-[2rem] overflow-hidden border ${isExpanded ? c.border : 'border-white/10'} ${c.hoverBorder} transition-all duration-500`}>
                                    {/* Category Header - Clickable */}
                                    <button
                                        onClick={() => toggleCategory(cat.id)}
                                        className="w-full p-6 sm:p-8 flex items-center gap-4 sm:gap-6 text-left group cursor-pointer"
                                    >
                                        <div className={`w-14 h-14 sm:w-16 sm:h-16 ${c.bg} ${c.text} rounded-2xl flex items-center justify-center border ${c.border} group-hover:scale-110 transition-transform ${c.glow} flex-shrink-0`}>
                                            {cat.icon}
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1 truncate">{cat.title}</h3>
                                            <p className="text-sm sm:text-base text-white/50 font-medium line-clamp-2">{cat.description}</p>
                                        </div>
                                        <div className="flex items-center gap-3 flex-shrink-0">
                                            <span className={`hidden sm:inline-block ${c.bg} ${c.text} px-3 py-1 rounded-full text-sm font-bold border ${c.border}`}>
                                                {cat.projects.length} {cat.projects.length === 1 ? 'project' : 'projects'}
                                            </span>
                                            <div className={`w-10 h-10 rounded-full ${c.bg} ${c.text} flex items-center justify-center transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </button>

                                    {/* Expanded Projects */}
                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="px-4 sm:px-8 pb-6 sm:pb-8">
                                            <div className={`border-t ${c.border} pt-6 sm:pt-8`}>
                                                <div className={`grid gap-6 ${cat.projects.length === 1 ? 'grid-cols-1 max-w-2xl' : 'grid-cols-1 md:grid-cols-2'}`}>
                                                    {cat.projects.map((project, j) => {
                                                        const cardContent = (
                                                            <div className="group relative glass-card p-2 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/30 transition-all flex flex-col h-full hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                                                                <div className="aspect-video bg-[#050510] overflow-hidden relative rounded-[1.25rem] sm:rounded-[1.75rem]">
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050510] to-transparent z-10 opacity-80"></div>
                                                                    <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-black/60 backdrop-blur-md text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-bold border border-white/10 uppercase tracking-widest ${c.tag} shadow-xl`}>
                                                                        {project.tag}
                                                                    </div>
                                                                    <img
                                                                        src={project.image}
                                                                        alt={project.title}
                                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <div className="p-5 sm:p-8 flex flex-col flex-grow relative z-20 -mt-12 sm:-mt-16">
                                                                    <div className="flex justify-between items-start mb-3 sm:mb-4 gap-3">
                                                                        <h4 className="text-lg sm:text-2xl font-heading font-bold text-white leading-tight drop-shadow-md">{project.title}</h4>
                                                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 group-hover:bg-blue-500 text-white flex items-center justify-center flex-shrink-0 transition-all">
                                                                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                                                        </div>
                                                                    </div>
                                                                    <p className="text-sm sm:text-base text-white/60 font-medium leading-relaxed">
                                                                        {project.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        );

                                                        if (project.isInternal) {
                                                            return (
                                                                <Link key={j} to={project.url} className="block">
                                                                    {cardContent}
                                                                </Link>
                                                            );
                                                        }

                                                        return (
                                                            <a key={j} href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                                                                {cardContent}
                                                            </a>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </RevealCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default function SkillsPage() {
    return (
        <main className="bg-[#050510] min-h-screen pt-24 pb-32">
            <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none"></div>

            {/* Superpowers Section */}
            <section className="relative z-10 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-up">
                        <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight text-white mb-6">
                            My Three Superpowers 🦸‍♂️
                        </h2>
                        <p className="text-xl text-white/60 font-medium leading-relaxed">
                            I have three main areas of expertise. Here is a breakdown of what I can do for your business!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <RevealCard delay={0}>
                            <div className="glass-card p-10 rounded-[2rem] border-purple-500/20 hover:border-purple-500/50 transition-colors h-full group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/30 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-heading font-black text-white mb-4">Virtual Assistance</h3>
                                    <p className="text-lg text-white/60 mb-8 leading-relaxed">
                                        Running a business takes time and most of it gets spent on tasks that drain your energy. I’m here to help you get your time back.
                                    </p>
                                    <ul className="space-y-4">
                                        {["eCommerce Management", "Lead Generation & Research", "Customer Service", "Data Entry", "Outreach", "Admin Support"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-lg font-bold text-white/80">
                                                <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </RevealCard>

                        {/* Service 2 */}
                        <RevealCard delay={100}>
                            <div className="glass-card p-10 rounded-[2rem] border-blue-500/20 hover:border-blue-500/50 transition-colors h-full group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                                        <Sparkles className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-heading font-black text-white mb-4">AI & Vibe Design</h3>
                                    <p className="text-lg text-white/60 mb-8 leading-relaxed">
                                        I combine logic + creativity to build products that are smart, simple, and built to grow.
                                    </p>
                                    <ul className="space-y-4">
                                        {["AI-Powered Websites", "SaaS Product Dev", "Workflow Automation", "AI Chatbots", "Prompt Engineering", "UX Experiences"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-lg font-bold text-white/80">
                                                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </RevealCard>

                        {/* Service 3 */}
                        <RevealCard delay={200}>
                            <div className="glass-card p-10 rounded-[2rem] border-green-500/20 hover:border-green-500/50 transition-colors h-full group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-bl from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mb-8 border border-green-500/30 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                                        <TrendingUp className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-heading font-black text-white mb-4">Digital Marketing</h3>
                                    <p className="text-lg text-white/60 mb-8 leading-relaxed">
                                        I help businesses get found, build authority, and turn traffic into revenue.
                                    </p>
                                    <ul className="space-y-4">
                                        {["SEO Optimization", "White-hat Link Building", "Affiliate Marketing", "Lead Generation", "Outreach Campaigns", "Content Strategy"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-lg font-bold text-white/80">
                                                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </RevealCard>
                    </div>
                </div>
            </section>

            {/* Link Building Process Section */}
            <section className="py-24 relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">Proven Methodology</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-white mb-6">
                            My Link Building Process 🔗
                        </h2>
                        <p className="text-xl text-white/60 font-medium max-w-3xl mx-auto">
                            I don't just blast generic emails. I build relationships that result in high-authority, white-hat placements that actually move the needle for your traffic.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line for Desktop */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500/20 via-blue-500/40 to-green-500/20 -translate-y-1/2 z-0 rounded-full"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            {[
                                { num: "1", icon: <Search/>, title: "Prospecting", desc: "Deep research to discover highly relevant, real websites with strong metrics in your niche.", col: "text-purple-400", bg: "bg-purple-500/20", border: "border-purple-500/30" },
                                { num: "2", icon: <Filter/>, title: "Vetting & QA", desc: "Manual filtration to drop PBNs, link farms, and toxic domains lacking quality traffic.", col: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-500/30" },
                                { num: "3", icon: <Mail/>, title: "Outreach", desc: "Crafting highly personalized outreach campaigns to negotiate guest posts and exchanges.", col: "text-green-400", bg: "bg-green-500/20", border: "border-green-500/30" },
                                { num: "4", icon: <Award/>, title: "Placement", desc: "Securing the live link, verifying anchors, and monitoring impact on domain authority.", col: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-500/30" }
                            ].map((step, i) => (
                                <RevealCard key={i} delay={i * 100}>
                                    <div className={`glass-card p-8 rounded-[2rem] relative group hover:-translate-y-4 transition-transform duration-500 h-full border ${step.border} hover:bg-white/5`}>
                                        <div className={`absolute -top-5 -left-5 w-10 h-10 ${step.bg} ${step.col} font-heading font-black text-xl rounded-xl flex items-center justify-center shadow-lg border border-white/10`}>{step.num}</div>
                                        <div className={`w-16 h-16 ${step.bg} ${step.col} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_currentColor]`}>
                                            {React.cloneElement(step.icon as React.ReactElement, { className: 'w-8 h-8' })}
                                        </div>
                                        <h3 className="text-2xl font-bold font-heading text-white mb-3">{step.title}</h3>
                                        <p className="text-white/60 font-medium leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-white mb-6">
                            Tools I'm Proficient In 🛠
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {toolCategories.map((cat, i) => (
                            <RevealCard key={i} delay={i * 50}>
                                <div className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-blue-500/30 transition-colors h-full relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
                                    <div className="flex items-center gap-4 mb-6 relative">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                                            {cat.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2 relative">
                                        {cat.tools.map((tool, j) => (
                                            <span key={j} className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-sm font-bold text-white shadow-sm border border-white/10 transition-colors cursor-default backdrop-blur-md">
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

            {/* Portfolio Section */}
            <PortfolioSection />

        </main>
    );
}
