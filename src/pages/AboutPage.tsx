import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function TimelineItem({ logo, hasTextLogo, textLogoColor, title, company, description, date }: any) {
    const { ref, isRevealed } = useScrollReveal({ threshold: 0.2 });
    return (
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} relative pl-8 md:pl-0`}>
            {/* Timeline Line (Mobile uses left line, Desktop uses alternating) */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-white/10"></div>
            
            <div className="md:grid md:grid-cols-5 md:gap-8 items-center relative">
                {/* Desktop Center Timeline */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>
                
                {/* Date Side */}
                <div className="md:col-span-2 text-left md:text-right mb-4 md:mb-0">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-heading font-bold text-sm border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        {date}
                    </span>
                </div>

                {/* Node */}
                <div className="absolute left-[-37px] md:static md:col-span-1 flex justify-center z-10 top-2">
                    <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-[#050510] shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
                </div>

                {/* Content Side */}
                <div className="md:col-span-2">
                    <div className="glass-card p-6 md:p-8 rounded-2xl group hover:border-blue-500/40 transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex gap-4 md:gap-6 flex-col sm:flex-row">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 p-3 shadow-lg">
                                {hasTextLogo ? (
                                    <span className={`text-2xl font-black ${textLogoColor}`}>{logo}</span>
                                ) : (
                                    <img src={logo} className="max-w-full max-h-full object-contain drop-shadow-md brightness-200 contrast-125" alt={company} />
                                )}
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-white text-xl md:text-2xl mb-1">{title}</h4>
                                <div className="text-blue-400/80 uppercase tracking-widest text-xs font-bold mb-4">{company}</div>
                                <p className="text-white/60 leading-relaxed text-sm md:text-base border-l-2 border-blue-500/30 pl-4 py-1">
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

export default function AboutPage() {
    const { ref: heroRef, isRevealed: heroRevealed } = useScrollReveal();
    const { ref: bioRef, isRevealed: bioRevealed } = useScrollReveal({ threshold: 0.1 });

    const experiences = [
        {
            logo: "/authority-builders-logo.png",
            hasTextLogo: false,
            title: "AB Link Builder / QA",
            company: "Authority Builders",
            description: "Maintained a 98% quality assurance rate across 500+ monthly link placements.",
            date: "2022 → Ongoing",
        },
        {
            logo: "E",
            hasTextLogo: true,
            textLogoColor: "text-blue-400",
            title: "Web Prospecting & Link Building Assistant",
            company: "Ethical SEO Agency",
            description: "Scaled outreach campaigns resulting in a 40% increase in high-DR backlinks.",
            date: "2022 → 2026",
        },
        {
            logo: "A",
            hasTextLogo: true,
            textLogoColor: "text-purple-400",
            title: "VA & SEO Specialist",
            company: "ANT Digital Solutions Co.",
            description: "Streamlined client reporting workflows, saving the agency 15+ hours per week.",
            date: "2020 → 2026",
        },
        {
            logo: "/break-the-web-logo.png",
            hasTextLogo: false,
            title: "Link Builder / Prospector",
            company: "Break The Web",
            description: "Executed targeted PR outreach, securing placements on top-tier industry publications.",
            date: "2024 → 2026",
        },
        {
            logo: "/loop-earplugs-logo.png",
            hasTextLogo: false,
            title: "Affiliate Marketing Assistant",
            company: "Loop Earplugs",
            description: "Managed and grew an affiliate database of 2,000+ creators, boosting partner revenue.",
            date: "2023 → 2025",
        }
    ];

    return (
        <main className="bg-[#050510] min-h-screen pt-24 pb-32">
            <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none"></div>
            
            <section className="relative z-10 max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div ref={heroRef} className={`reveal ${heroRevealed ? 'revealed' : ''} text-center mb-20 md:mb-32 pt-10`}>
                    <span className="text-blue-400 font-heading tracking-widest uppercase text-sm font-bold block mb-4">/ Who Am I</span>
                    <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-white mb-6">
                        Pushing Boundaries <br/>
                        <span className="text-white/30">since 2020</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-12 gap-16 items-start mb-32">
                    {/* Left: Photo */}
                    <div className="md:col-span-5 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] glass-card p-2 border-white/10">
                            <div className="absolute inset-0 bg-[#050510]/10 z-10 mix-blend-overlay"></div>
                            <img
                                src="/Profile.JPG"
                                alt="Jake - Virtual Assistant & SEO Specialist"
                                className="w-full h-full object-cover rounded-[1.5rem] filter contrast-125 saturate-50 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
                            />
                        </div>
                        <div className="absolute bottom-6 right-[-2rem] glass-card px-8 py-4 rounded-2xl shadow-xl border-white/10 transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                            <span className="block font-heading font-black text-2xl text-white">Jake</span>
                            <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">VA & SEO Specialist</span>
                        </div>
                    </div>

                    {/* Right: Bio */}
                    <div ref={bioRef} className={`reveal ${bioRevealed ? 'revealed' : ''} md:col-span-7 space-y-8 pt-10`}>
                        <div className="glass-card p-8 md:p-12 rounded-[2rem] border-l-4 border-l-blue-500">
                            <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">👋</span>
                                The Story
                            </h3>
                            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-medium">
                                Hi, I’m Jake. I help business owners get their time back by handling the work that slows them down. I build smart websites, simple AI tools, and systems that make things run smoothly. I help businesses show up on Google, generate leads, and build strong backlinks so they can grow. I enjoy taking messy, confusing tasks and turning them into clear, organized processes that actually work. My goal is simple: make your business easier to manage, less stressful, and ready to grow while you focus on the big ideas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="pt-20 border-t border-white/10">
                    <div className="text-center mb-24">
                        <h3 className="text-4xl md:text-5xl font-heading font-black text-white">Professional Experience</h3>
                    </div>
                    
                    <div className="space-y-12 md:space-y-0 relative max-w-5xl mx-auto">
                        {experiences.map((exp, i) => (
                            <TimelineItem key={i} {...exp} />
                        ))}
                    </div>
                </div>

            </section>
        </main>
    );
}
