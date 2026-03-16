import React, { useState } from 'react';
import { Brain, Code, Megaphone, ExternalLink, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const RevealCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
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
        icon: <Megaphone className="w-6 h-6" />,
        color: "#10B981",
        projects: [
            {
                title: "JubileeTV SEO & Digital PR",
                url: "/case-studies/jubileetv",
                isInternal: true,
                image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=400&auto=format&fit=crop",
                description: "Led prospecting and outreach that generated high-authority placements — contributing to a 1,377% increase in organic revenue and outranking Amazon.",
                tag: "SEO Case Study"
            }
        ]
    },
    {
        id: "ai-automation",
        title: "AI & Automation",
        description: "Intelligent tools and AI-powered applications that automate workflows.",
        icon: <Brain className="w-6 h-6" />,
        color: "#7C3AED",
        projects: [
            {
                title: "Marketing Email Scraper",
                url: "https://marketing-email-scraper.vercel.app/",
                isInternal: false,
                image: "/marketing-scraper.png",
                description: "An automated lead generation tool that rapidly extracts verified contact emails for outreach campaigns.",
                tag: "Lead Gen Tool"
            },
            {
                title: "AI Image Generator",
                url: "https://image-generator-zeta-virid.vercel.app/",
                isInternal: false,
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop",
                description: "An interactive web application that transforms text descriptions into unique visual artworks using AI.",
                tag: "AI Application"
            }
        ]
    },
    {
        id: "web-development",
        title: "Web Development & Design",
        description: "Modern, responsive websites built with performance and UX in mind.",
        icon: <Code className="w-6 h-6" />,
        color: "#4F46E5",
        projects: [
            {
                title: "VisionBay Ecommerce",
                url: "https://visionbay.vercel.app/",
                isInternal: false,
                image: "/visionbay.png",
                description: "A high-performance ecommerce website for security products with conversion-focused design.",
                tag: "Ecommerce"
            },
            {
                title: "Yoga Teacher Studio",
                url: "https://yogateacher-five.vercel.app/",
                isInternal: false,
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop",
                description: "A calming, functional web application for a yoga instructor with elegant layouts.",
                tag: "Web Design"
            },
            {
                title: "Florence Nail Salon",
                url: "https://florence-nail-salon-utd9.vercel.app/index.html",
                isInternal: false,
                image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400&auto=format&fit=crop",
                description: "A luxury nail salon website for a premier Manchester, NH studio offering manicures, pedicures, gel nails, and nail art.",
                tag: "Business Website"
            },
            {
                title: "Austin Portfolio",
                url: "https://austinportfolio.vercel.app/",
                isInternal: false,
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format&fit=crop",
                description: "A professional portfolio for a customer service specialist with 15+ years of experience in client relations.",
                tag: "Portfolio"
            }
        ]
    }
];

export default function CaseStudiesPage() {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const toggleCategory = (id: string) => {
        setExpandedCategory(expandedCategory === id ? null : id);
    };

    return (
        <main className="bg-[#FAFAF9] min-h-screen pt-24 pb-32">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 pt-8 animate-fade-up">
                    <span className="text-[#4F46E5] font-heading tracking-widest uppercase text-sm font-bold block mb-3">Portfolio</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-[#1A1A2E] mb-4">
                        Case Studies & Projects
                    </h1>
                    <p className="text-lg text-[#6B7280] font-medium max-w-2xl mx-auto">
                        Real results driven by data, automation, and solid development. Tap a category to explore.
                    </p>
                </div>

                {/* Accordion Categories */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    {projectCategories.map((cat, i) => {
                        const isExpanded = expandedCategory === cat.id;

                        return (
                            <RevealCard key={cat.id} delay={i * 80}>
                                <div className={`card overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-[0_8px_40px_rgba(0,0,0,0.08)]' : ''}`} style={{ borderColor: isExpanded ? `${cat.color}30` : undefined }}>
                                    {/* Category Header — Clickable */}
                                    <button
                                        onClick={() => toggleCategory(cat.id)}
                                        className="w-full p-5 sm:p-6 flex items-center gap-4 text-left group cursor-pointer"
                                    >
                                        <div className="w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0 group-hover:scale-105 transition-transform" style={{ background: `${cat.color}10`, borderColor: `${cat.color}20`, color: cat.color }}>
                                            {cat.icon}
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <h2 className="text-base sm:text-xl font-heading font-bold text-[#1A1A2E] leading-snug">{cat.title}</h2>
                                            <p className="text-sm text-[#6B7280] hidden sm:block">{cat.description}</p>
                                        </div>
                                        <div className="flex items-center gap-3 flex-shrink-0">
                                            <span className="hidden sm:inline-block px-3 py-1 rounded-full text-sm font-bold border" style={{ background: `${cat.color}08`, borderColor: `${cat.color}18`, color: cat.color }}>
                                                {cat.projects.length} {cat.projects.length === 1 ? 'project' : 'projects'}
                                            </span>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} style={{ background: `${cat.color}10`, color: cat.color }}>
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </button>

                                    {/* Expanded Projects */}
                                    <div className={`transition-all duration-400 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                                            <div className="border-t border-[#E5E7EB] pt-5">
                                                <div className="space-y-3">
                                                    {cat.projects.map((project, j) => {
                                                        const cardContent = (
                                                            <div className="flex items-center gap-4 p-3 rounded-xl bg-[#F5F3F0] border border-[#E5E7EB] hover:border-[#D1D5DB] hover:shadow-sm transition-all group/item">
                                                                {/* Small Thumbnail */}
                                                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-white flex-shrink-0 border border-[#E5E7EB]">
                                                                    <img
                                                                        src={project.image}
                                                                        alt={project.title}
                                                                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                {/* Info */}
                                                                <div className="flex-grow min-w-0">
                                                                    <div className="flex items-center gap-2 mb-1">
                                                                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cat.color }}>{project.tag}</span>
                                                                    </div>
                                                                    <h3 className="text-sm sm:text-base font-heading font-bold text-[#1A1A2E] leading-snug mb-1">{project.title}</h3>
                                                                    <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">{project.description}</p>
                                                                </div>
                                                                {/* Arrow */}
                                                                <div className="w-8 h-8 rounded-full bg-white border border-[#E5E7EB] group-hover/item:bg-[#4F46E5] group-hover/item:border-[#4F46E5] text-[#6B7280] group-hover/item:text-white flex items-center justify-center flex-shrink-0 transition-all">
                                                                    {project.isInternal ? <ArrowRight className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                                                                </div>
                                                            </div>
                                                        );

                                                        if (project.isInternal) {
                                                            return <Link key={j} to={project.url} className="block">{cardContent}</Link>;
                                                        }
                                                        return <a key={j} href={project.url} target="_blank" rel="noopener noreferrer" className="block">{cardContent}</a>;
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
        </main>
    );
}
