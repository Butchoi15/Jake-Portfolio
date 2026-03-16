import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const RevealCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const { ref, isRevealed } = useScrollReveal();
    return (
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} h-full`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

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
                                <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AboutPage() {
    const experiences = [
        { logo: "/authority-builders-logo.png", hasTextLogo: false, title: "Link Builder & QA Lead", company: "Authority Builders", description: "Maintained a 98% quality assurance rate across 500+ monthly link placements, ensuring every backlink met strict editorial standards.", date: "2022 — Present" },
        { logo: "E", hasTextLogo: true, textLogoColor: "text-[#4F46E5]", title: "Prospecting & Link Building Assistant", company: "Ethical SEO Agency", description: "Scaled outreach campaigns that drove a 40% increase in high-DR backlink acquisitions for agency clients.", date: "2022 — 2026" },
        { logo: "A", hasTextLogo: true, textLogoColor: "text-[#7C3AED]", title: "VA & SEO Specialist", company: "ANT Digital Solutions Co.", description: "Streamlined client reporting and operational workflows, reclaiming 15+ hours per week for the agency.", date: "2020 — 2026" },
        { logo: "/break-the-web-logo.png", hasTextLogo: false, title: "Link Builder & Prospector", company: "Break The Web", description: "Executed targeted digital PR outreach, securing placements on top-tier industry publications.", date: "2024 — 2026" },
        { logo: "/loop-earplugs-logo.png", hasTextLogo: false, title: "Affiliate Marketing Assistant", company: "Loop Earplugs", description: "Grew and managed an affiliate database of 2,000+ creators, boosting partner-driven revenue.", date: "2023 — 2025" }
    ];

    return (
        <main className="bg-[#FAFAF9] min-h-screen pt-24 pb-32">
            <div className="max-w-6xl mx-auto px-6">
                <RevealCard>
                    <div className="text-center mb-16 pt-8">
                        <span className="text-[#4F46E5] font-heading tracking-widest uppercase text-sm font-bold block mb-3">About Me</span>
                        <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-[#1A1A2E]">
                            Solving Problems Since 2020
                        </h1>
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
                                        alt="Jake — Virtual Assistant and SEO Specialist"
                                        className="w-full h-full object-cover rounded-[1.25rem] group-hover:scale-[1.02] transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute bottom-4 right-[-1rem] bg-white px-6 py-3 rounded-2xl shadow-lg border border-[#E5E7EB]">
                                    <span className="block font-heading font-black text-xl text-[#1A1A2E]">Jake</span>
                                    <span className="text-[#4F46E5] text-xs font-bold uppercase tracking-widest">VA & SEO Specialist</span>
                                </div>
                            </div>
                        </RevealCard>
                    </div>

                    {/* Bio */}
                    <div className="md:col-span-7 pt-4">
                        <RevealCard delay={100}>
                            <div className="card p-8 md:p-10 border-l-4 border-l-[#4F46E5]">
                                <h3 className="text-xl font-heading font-bold text-[#1A1A2E] mb-4">The Story</h3>
                                <div className="space-y-4 text-lg text-[#6B7280] leading-relaxed">
                                    <p>
                                        Hi, I'm Jake. I help business owners get their time back by taking care of the work that slows them down. I'm a Virtual Assistant who handles the boring and time-consuming tasks so you can focus on running and growing your business.
                                    </p>
                                    <p>
                                        I help build simple websites, set up helpful AI tools, and organize systems that keep things running smoothly. I also help businesses show up on Google, find new leads, and build strong backlinks that help websites grow over time.
                                    </p>
                                    <p>
                                        My goal is simple: take messy, repetitive work and turn it into clear, organized processes that make your business easier to manage. While you focus on the big ideas, I make sure the work behind the scenes gets done.
                                    </p>
                                </div>
                            </div>
                        </RevealCard>
                    </div>
                </div>

                {/* Timeline */}
                <div className="pt-16 border-t border-[#E5E7EB]">
                    <RevealCard>
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-heading font-black text-[#1A1A2E]">Professional Experience</h2>
                        </div>
                    </RevealCard>
                    <div className="space-y-10 md:space-y-0 relative max-w-5xl mx-auto">
                        {experiences.map((exp, i) => (
                            <TimelineItem key={i} {...exp} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
