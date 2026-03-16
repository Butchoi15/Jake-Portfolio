import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
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

export default function HomePage() {
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
                        I Help You Get More Traffic{' '}
                        <span className="accent-gradient-text">and Save Time</span>
                    </h1>

                    <p className="animate-fade-up delay-200 text-lg md:text-xl text-[#6B7280] font-medium leading-relaxed max-w-2xl">
                        I'm a Virtual Assistant and SEO specialist who helps businesses grow online while giving owners their time back. I handle the boring and repetitive tasks like research, outreach, link building, and organizing data so you don't have to.
                    </p>

                    <p className="animate-fade-up delay-300 text-lg md:text-xl text-[#6B7280] font-medium leading-relaxed max-w-2xl">
                        I also use simple AI tools and proven SEO strategies to help bring more visitors and leads to your website. My goal is to keep things running smoothly behind the scenes so you can focus on the important parts of your business.
                    </p>

                    <div className="animate-fade-up delay-300 flex flex-wrap gap-4 pt-2 justify-center">
                        <Link to="/contact" className="accent-gradient text-white px-8 py-4 rounded-full font-heading font-bold text-base hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_4px_20px_rgba(79,70,229,0.35)]">
                            Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
                        </Link>
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
                </div>
            </section>

            {/* ═══ FOOTER ═══ */}
            <footer className="border-t border-[#E5E7EB] py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-[#9CA3AF]">SEO, AI & Growth Specialist</p>
                        <p className="text-sm text-[#9CA3AF]">&copy; {new Date().getFullYear()} Jake. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
