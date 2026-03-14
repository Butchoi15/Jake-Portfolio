import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

function CountUp({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
    const [count, setCount] = useState(0);
    const { ref, isRevealed } = useScrollReveal();

    useEffect(() => {
        if (!isRevealed) return;
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };
        window.requestAnimationFrame(step);
    }, [isRevealed, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function HomePage() {
    return (
        <main className="bg-[#050510] min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center pt-20">
                {/* Animated Gradient Mesh Background */}
                <div className="absolute inset-0 bg-mesh opacity-50"></div>
                
                {/* Decorative glowing orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-32 space-y-10 flex flex-col items-center">
                    
                    {/* Badge */}
                    <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-blue-300 font-medium text-sm border-blue-500/30">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl md:text-8xl font-heading font-black leading-[1.05] tracking-tight text-white mb-2 text-glow">
                        I Scale Your Traffic & <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Automate Your Growth</span>
                    </h1>
                    
                    <p className="animate-fade-up delay-200 text-lg md:text-2xl text-white/60 font-medium leading-relaxed max-w-2xl px-2">
                        Stop losing hours to tasks that don't generate revenue. I combine proven SEO strategies with smart AI automation to bring you more leads and win back your time.
                    </p>

                    <div className="animate-fade-up delay-300 flex flex-wrap gap-4 pt-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-blue-600 text-white px-8 py-4 rounded-full font-heading font-bold text-base md:text-lg hover:bg-blue-500 transition-all hover:scale-105 flex items-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.5)] uppercase tracking-widest"
                        >
                            Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-8 sm:gap-16 pt-16 mt-8 border-t border-white/10 justify-center w-full max-w-2xl">
                        <div className="flex flex-col items-center">
                            <div className="text-5xl md:text-6xl font-heading font-black text-white text-glow">
                                <CountUp end={4} suffix="+" />
                            </div>
                            <div className="text-blue-400/80 font-bold mt-2 text-sm md:text-base uppercase tracking-widest">Years Experience</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-5xl md:text-6xl font-heading font-black text-white text-glow">
                                <CountUp end={100} suffix="%" />
                            </div>
                            <div className="text-blue-400/80 font-bold mt-2 text-sm md:text-base uppercase tracking-widest">Ready to Help</div>
                        </div>
                    </div>

                    {/* AI Generated Media Container */}
                    <div className="animate-fade-up delay-300 relative w-full max-w-4xl mt-16 aspect-video rounded-[2rem] overflow-hidden glass-card p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510] z-10 opacity-60"></div>
                        <img 
                            src="/media/hero-seo-animated.jpg" 
                            alt="Immersive SEO AI Data Visualization" 
                            className="w-full h-full object-cover rounded-[1.5rem] animate-ken-burns"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
