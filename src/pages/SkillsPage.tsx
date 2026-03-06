import React from 'react';
import {
    TrendingUp, Users, CheckCircle2,
    MessageSquare, Brain, Sparkles, Zap,
    CheckSquare, MessageCircle, Book, Clock,
    Target, ShoppingCart, Globe, Layout,
    ExternalLink, Search, Filter, Mail, Award
} from 'lucide-react';

const toolCategories = [
    {
        title: "AI & Intelligence",
        icon: <Brain className="w-6 h-6 text-purple-600" />,
        tools: ["ChatGPT", "BingAI", "GoogleBard", "Perplexity.ai", "Gemini", "Antigravity"]
    },
    {
        title: "Automation",
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        tools: ["n8n", "Make.com"]
    },
    {
        title: "Collaboration & Management",
        icon: <CheckSquare className="w-6 h-6 text-blue-500" />,
        tools: ["Asana", "Slack", "Notion", "Toggl"]
    },
    {
        title: "Sales & E-commerce",
        icon: <ShoppingCart className="w-6 h-6 text-green-600" />,
        tools: ["Apollo.io", "eBay", "Amazon", "Shopify"]
    },
    {
        title: "Web Development",
        icon: <Globe className="w-6 h-6 text-orange-500" />,
        tools: ["WordPress", "Elementor"]
    }
];

export default function SkillsPage() {
    return (
        <main className="bg-white">
            {/* Superpowers Section (Transferred from Home) */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                            My Three Superpowers 🦸‍♂️
                        </h2>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            I have three main areas of expertise. Here is a breakdown of what I can do for your business!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-200">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black mb-4">Virtual Assistance</h3>
                            <p className="text-lg text-slate-600 font-medium mb-8 leading-relaxed">
                                Running a business takes time and most of it gets spent on tasks that drain your energy. I’m here to help you get your time back.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "eCommerce Management",
                                    "Lead Generation & Research",
                                    "Customer Service & Inbox Management",
                                    "Data Entry & Web Research",
                                    "Outreach & Relationship Building",
                                    "Administrative Support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                        <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black mb-4">AI & Vibe Design</h3>
                            <p className="text-lg text-slate-600 font-medium mb-8 leading-relaxed">
                                I combine logic + creativity to build products that are smart, simple, and built to grow.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "AI-Powered Websites",
                                    "SaaS Product Development",
                                    "Workflow Automation",
                                    "AI Chatbots & Assistants",
                                    "Prompt Engineering",
                                    "UX-Focused Digital Experiences"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                        <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-green-200">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black mb-4">Digital Marketing</h3>
                            <p className="text-lg text-slate-600 font-medium mb-8 leading-relaxed">
                                I help businesses get found, build authority, and turn traffic into revenue.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Search Engine Optimization",
                                    "Link Building (White-hat)",
                                    "Affiliate Marketing",
                                    "Lead Generation",
                                    "Outreach Campaigns",
                                    "Content Strategy Support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Link Building Process Section */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Proven Methodology</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                            My Link Building Process 🔗
                        </h2>
                        <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
                            I don't just blast generic emails. I build relationships that result in high-authority, white-hat placements that actually move the needle for your traffic.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line for Desktop */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-100 via-blue-200 to-green-100 -translate-y-1/2 z-0 rounded-full"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            {/* Step 1 */}
                            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-100 text-purple-700 font-black text-xl rounded-full flex items-center justify-center border-4 border-white shadow-sm">1</div>
                                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Search className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Prospecting</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    Deep research to discover highly relevant, real websites with strong DR/UR metrics and engaged traffic in your exact niche.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-100 text-blue-700 font-black text-xl rounded-full flex items-center justify-center border-4 border-white shadow-sm">2</div>
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Filter className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Vetting & QA</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    I manually filter out PBNs, link farms, and toxic domains. If a site doesn't pass strict quality assurance, it gets dropped.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-100 text-green-700 font-black text-xl rounded-full flex items-center justify-center border-4 border-white shadow-sm">3</div>
                                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Targeted Outreach</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    Crafting highly personalized outreach campaigns and negotiating with site owners for guest posts, niche edits, and ABC exchanges.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-100 text-orange-700 font-black text-xl rounded-full flex items-center justify-center border-4 border-white shadow-sm">4</div>
                                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Award className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Placement & Tracking</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    Securing the live link, verifying anchor text placement, and monitoring its impact on your domain authority over time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                            Tools I'm Proficient In 🛠
                        </h2>
                        <p className="text-xl text-slate-600 font-medium">
                            A curated list of the technologies and platforms I use daily to deliver results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {toolCategories.map((cat, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white rounded-xl shadow-sm">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{cat.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.tools.map((tool, j) => (
                                        <span key={j} className="bg-white px-4 py-2 rounded-full text-sm font-bold text-slate-700 shadow-sm border border-slate-100">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl text-left">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                                Case Studies & Projects 🚀
                            </h2>
                            <p className="text-xl text-slate-400 font-medium">
                                Real results driven by data, automation, and solid development.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "VisionBay Ecommerce",
                                url: "https://visionbay.vercel.app/",
                                image: "/visionbay.png",
                                description: "A high-performance ecommerce website built for security products, featuring modern UI and conversion-focused design.",
                                tag: "Web Development"
                            },
                            {
                                title: "Marketing Email Scraper",
                                url: "https://marketing-email-scraper.vercel.app/",
                                image: "/marketing-scraper.png",
                                description: "An automated lead generation tool that rapidly extracts verified contact emails for marketing and SEO outreach campaigns.",
                                tag: "AI & Automation"
                            }
                        ].map((project, i) => (
                            <a
                                key={i}
                                href={project.url}
                                target={project.url !== "#" ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="group relative bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all flex flex-col h-full"
                            >
                                <div className="aspect-video bg-slate-700 overflow-hidden relative">
                                    <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold border border-white/10">
                                        {project.tag}
                                    </div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                                        {project.url !== "#" && <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 flex-shrink-0" />}
                                    </div>
                                    <p className="text-slate-400 font-medium">
                                        {project.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
