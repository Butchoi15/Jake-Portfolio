import React from 'react';
import { Mail, Linkedin, Facebook, ArrowRight, MessageSquare } from 'lucide-react';

export default function ContactPage() {
    const contactLinks = [
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-8 h-8" />,
            label: "Professional Profile",
            url: "https://www.linkedin.com/in/ronald-jake-pitos-4542b61a8/",
            gradient: "from-blue-600 to-cyan-500",
            glow: "shadow-[0_0_30px_rgba(37,99,235,0.4)]"
        },
        {
            name: "Facebook",
            icon: <Facebook className="w-8 h-8" />,
            label: "Social Connection",
            url: "https://www.facebook.com/jake.pitos",
            gradient: "from-blue-700 to-blue-500",
            glow: "shadow-[0_0_30px_rgba(29,78,216,0.4)]"
        },
        {
            name: "Email",
            icon: <Mail className="w-8 h-8" />,
            label: "jpjake15@gmail.com",
            url: "mailto:jpjake15@gmail.com",
            gradient: "from-red-500 to-orange-500",
            glow: "shadow-[0_0_30px_rgba(239,68,68,0.4)]"
        }
    ];

    return (
        <main className="bg-[#050510] min-h-[80vh] flex flex-col justify-center py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-up">
                    <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-white mb-8">
                        Let's Work <span className="text-glow">Together</span>
                    </h1>
                    <p className="text-xl text-white/60 font-medium leading-relaxed">
                        I'm currently accepting new projects and collaborations. Reach out via any of the platforms below or send me a direct message!
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                    {contactLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all text-center animate-fade-up"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <div className={`w-20 h-20 bg-gradient-to-br ${link.gradient} text-white rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 transition-transform ${link.glow} border border-white/20`}>
                                {link.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-black text-white mb-3">{link.name}</h3>
                            <p className="text-white/50 font-medium mb-6">{link.label}</p>
                            <div className="inline-flex items-center justify-center bg-white/5 px-6 py-2 rounded-full text-white/80 font-bold group-hover:text-white group-hover:bg-white/10 transition-all gap-2 border border-white/5">
                                Connect <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center animate-fade-up" style={{ animationDelay: '300ms' }}>
                    <a
                        href="mailto:jpjake15@gmail.com"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-12 py-6 rounded-full text-xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105 border border-white/10"
                    >
                        <MessageSquare className="w-6 h-6" />
                        Send me a message
                    </a>
                </div>
            </div>
        </main>
    );
}
