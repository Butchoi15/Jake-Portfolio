import React from 'react';
import { Brain, Code, Megaphone, ExternalLink, ArrowRight } from 'lucide-react';
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
        icon: <Megaphone className="w-7 h-7" />,
        color: "#10B981",
        projects: [
            {
                title: "JubileeTV SEO & Digital PR",
                url: "/case-studies/jubileetv",
                isInternal: true,
                image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop",
                description: "Led prospecting and outreach that generated high-authority placements in senior care and wellness niches — contributing to a 1,377% increase in organic revenue and outranking Amazon.",
                tag: "SEO Case Study",
                featured: true,
                stats: ["+1,377% Revenue", "+316% Traffic", "#1 Above Amazon"]
            }
        ]
    },
    {
        id: "ai-automation",
        title: "AI & Automation",
        description: "Intelligent tools and AI-powered applications that automate workflows and unlock new capabilities.",
        icon: <Brain className="w-7 h-7" />,
        color: "#7C3AED",
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
        description: "Modern, responsive websites and applications built with performance and user experience as top priorities.",
        icon: <Code className="w-7 h-7" />,
        color: "#4F46E5",
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
                description: "A calming, functional web application designed for a yoga instructor, featuring elegant layouts and structured service pages.",
                tag: "Web Design"
            }
        ]
    }
];

export default function CaseStudiesPage() {
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
                        Real results driven by data, automation, and solid development. Here's a selection of work I'm proud of.
                    </p>
                </div>

                {/* Categories */}
                <div className="space-y-16">
                    {projectCategories.map((cat, catIndex) => (
                        <div key={cat.id}>
                            <RevealCard delay={catIndex * 80}>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center border" style={{ background: `${cat.color}10`, borderColor: `${cat.color}20`, color: cat.color }}>
                                        {cat.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-heading font-black text-[#1A1A2E]">{cat.title}</h2>
                                        <p className="text-sm text-[#6B7280]">{cat.description}</p>
                                    </div>
                                </div>
                            </RevealCard>

                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {cat.projects.map((project: any, j) => {
                                    const inner = (
                                        <RevealCard key={j} delay={j * 60}>
                                            <div className={`card overflow-hidden group h-full hover:border-[#D1D5DB] ${project.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                                                {project.featured ? (
                                                    /* Featured layout — horizontal */
                                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                                        <div className="h-64 md:h-auto bg-[#F5F3F0] overflow-hidden relative">
                                                            <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border" style={{ background: `${cat.color}10`, borderColor: `${cat.color}20`, color: cat.color }}>
                                                                {project.tag}
                                                            </div>
                                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                                        </div>
                                                        <div className="p-8 md:p-10 flex flex-col justify-center">
                                                            <h3 className="text-2xl font-heading font-black text-[#1A1A2E] mb-3">{project.title}</h3>
                                                            <p className="text-[#6B7280] leading-relaxed mb-6">{project.description}</p>
                                                            {project.stats && (
                                                                <div className="flex flex-wrap gap-3 mb-6">
                                                                    {project.stats.map((stat: string, si: number) => (
                                                                        <span key={si} className="px-3 py-1.5 rounded-full text-sm font-bold border" style={{ background: `${cat.color}08`, borderColor: `${cat.color}18`, color: cat.color }}>
                                                                            {stat}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                            <div className="inline-flex items-center gap-2 text-[#4F46E5] font-heading font-bold text-sm group-hover:gap-3 transition-all">
                                                                Read Full Case Study <ArrowRight className="w-4 h-4" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    /* Standard card layout — vertical */
                                                    <>
                                                        <div className="h-44 bg-[#F5F3F0] overflow-hidden relative">
                                                            <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border" style={{ background: `${cat.color}10`, borderColor: `${cat.color}20`, color: cat.color }}>
                                                                {project.tag}
                                                            </div>
                                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" loading="lazy" />
                                                        </div>
                                                        <div className="p-6">
                                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                                <h3 className="text-lg font-heading font-bold text-[#1A1A2E]">{project.title}</h3>
                                                                <div className="w-8 h-8 rounded-full bg-[#F5F3F0] group-hover:bg-[#4F46E5] text-[#6B7280] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all border border-[#E5E7EB] group-hover:border-[#4F46E5]">
                                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                                </div>
                                                            </div>
                                                            <p className="text-sm text-[#6B7280] leading-relaxed">{project.description}</p>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </RevealCard>
                                    );

                                    if (project.featured) {
                                        return (
                                            <div key={j} className="md:col-span-2 lg:col-span-3">
                                                {project.isInternal ? (
                                                    <Link to={project.url} className="block">{inner}</Link>
                                                ) : (
                                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">{inner}</a>
                                                )}
                                            </div>
                                        );
                                    }

                                    return project.isInternal ? (
                                        <Link key={j} to={project.url} className="block">{inner}</Link>
                                    ) : (
                                        <a key={j} href={project.url} target="_blank" rel="noopener noreferrer" className="block">{inner}</a>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
