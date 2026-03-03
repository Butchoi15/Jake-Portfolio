import React from 'react';

export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* About Me Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-slate-500 font-serif italic text-xl">/ Who Am I</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-4">
                            Pushing Boundaries <span className="text-slate-400">since 2020</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Left: Photo */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform"></div>
                            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl border-8 border-white bg-slate-100">
                                <img
                                    src="/Profile.JPG"
                                    alt="Jake - Virtual Assistant & SEO Specialist"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="mt-6 flex flex-col items-end">
                                <span className="font-bold text-lg">Jake</span>
                                <span className="text-slate-500 text-sm italic">VA & SEO Specialist</span>
                            </div>
                        </div>

                        {/* Right: Content & Work History */}
                        <div className="space-y-12">
                            <p className="text-xl text-slate-700 leading-relaxed font-medium">
                                Hi, I’m Jake. I help business owners get their time back by handling the work that slows them down. I build smart websites, simple AI tools, and systems that make things run smoothly. I help businesses show up on Google, generate leads, and build strong backlinks so they can grow. I enjoy taking messy, confusing tasks and turning them into clear, organized processes that actually work. My goal is simple: make your business easier to manage, less stressful, and ready to grow while you focus on the big ideas.
                            </p>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold border-b border-slate-200 pb-2">Professional Experience</h3>
                                <div className="overflow-x-auto -mx-6 px-6">
                                    <table className="w-full text-left border-collapse min-w-[400px]">
                                        <tbody className="divide-y divide-slate-100">
                                            <tr className="group">
                                                <td className="py-4 pr-4">
                                                    <div className="font-bold text-slate-900">AB Link Builder / QA</div>
                                                    <div className="text-sm text-slate-500 italic">Authority Builders</div>
                                                </td>
                                                <td className="py-4 text-right tabular-nums text-slate-600 font-medium">2022 → 2026</td>
                                            </tr>
                                            <tr className="group">
                                                <td className="py-4 pr-4">
                                                    <div className="font-bold text-slate-900">Web Prospecting & Link Building Assistant</div>
                                                    <div className="text-sm text-slate-500 italic">Ethical SEO Agency</div>
                                                </td>
                                                <td className="py-4 text-right tabular-nums text-slate-600 font-medium">2022 → 2026</td>
                                            </tr>
                                            <tr className="group">
                                                <td className="py-4 pr-4">
                                                    <div className="font-bold text-slate-900">VA & SEO Specialist</div>
                                                    <div className="text-sm text-slate-500 italic">ANT Digital Solutions Co.</div>
                                                </td>
                                                <td className="py-4 text-right tabular-nums text-slate-600 font-medium">2020 → 2026</td>
                                            </tr>
                                            <tr className="group">
                                                <td className="py-4 pr-4">
                                                    <div className="font-bold text-slate-900">Link Builder / Prospector</div>
                                                    <div className="text-sm text-slate-500 italic">Break The Web</div>
                                                </td>
                                                <td className="py-4 text-right tabular-nums text-slate-600 font-medium">2024 → 2026</td>
                                            </tr>
                                            <tr className="group">
                                                <td className="py-4 pr-4">
                                                    <div className="font-bold text-slate-900">Affiliate Marketing Assistant</div>
                                                    <div className="text-sm text-slate-500 italic">Loop Earplugs</div>
                                                </td>
                                                <td className="py-4 text-right tabular-nums text-slate-600 font-medium">2023 → 2025</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
