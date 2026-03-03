import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-black border-b border-slate-800 flex flex-col items-center text-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/background-video.mp4" type="video/mp4" />
                </video>

                <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-32 space-y-8 flex flex-col items-center">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-white mb-2">
                        I Make Your Website <span className="text-blue-400">Super Popular!</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl px-2">
                        You built a great business. Now let's make sure people actually see it. I bring the traffic, handle the tech, and turn visitors into paying customers.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-blue-500 transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/30"
                        >
                            Let's Work Together <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-12 border-t border-slate-700 justify-center w-full max-w-md">
                        <div className="flex flex-col items-center">
                            <div className="text-3xl md:text-4xl font-black text-white">4+</div>
                            <div className="text-slate-400 font-bold mt-1 text-sm md:text-base">Years Experience</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl md:text-4xl font-black text-white">100%</div>
                            <div className="text-slate-400 font-bold mt-1 text-sm md:text-base">Ready to Help</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
