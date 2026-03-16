import React from 'react';
import { Mail, Linkedin, Facebook, ArrowRight, MessageSquare } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const RevealCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const { ref, isRevealed } = useScrollReveal();
    return (
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} h-full`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

export default function ContactPage() {
    const contactLinks = [
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-7 h-7" />,
            label: "Professional Profile",
            url: "https://www.linkedin.com/in/ronald-jake-pitos-4542b61a8/",
            color: "#4F46E5"
        },
        {
            name: "Facebook",
            icon: <Facebook className="w-7 h-7" />,
            label: "Social Connection",
            url: "https://www.facebook.com/jake.pitos",
            color: "#4F46E5"
        },
        {
            name: "Email",
            icon: <Mail className="w-7 h-7" />,
            label: "jpjake15@gmail.com",
            url: "mailto:jpjake15@gmail.com",
            color: "#F97316"
        }
    ];

    return (
        <main className="bg-[#FAFAF9] min-h-[80vh] flex flex-col justify-center py-24 pt-32">
            <div className="max-w-6xl mx-auto px-6 w-full">

                <RevealCard>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-[#1A1A2E] mb-6">
                            Let's Work <span className="accent-gradient-text">Together</span>
                        </h1>
                        <p className="text-lg text-[#6B7280] font-medium leading-relaxed">
                            I'm currently accepting new projects and collaborations. Reach out via any of the platforms below or send me a direct message.
                        </p>
                    </div>
                </RevealCard>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                    {contactLinks.map((link, i) => (
                        <RevealCard key={i} delay={i * 80}>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card p-8 text-center group hover:border-[#4F46E5]/25 block h-full"
                            >
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-105 transition-transform shadow-md" style={{ background: link.color }}>
                                    {link.icon}
                                </div>
                                <h3 className="text-xl font-heading font-black text-[#1A1A2E] mb-2">{link.name}</h3>
                                <p className="text-[#6B7280] font-medium mb-5 text-sm">{link.label}</p>
                                <div className="inline-flex items-center justify-center bg-[#F5F3F0] px-5 py-2 rounded-full text-[#1A1A2E] font-medium text-sm group-hover:bg-[#4F46E5] group-hover:text-white transition-all gap-2 border border-[#E5E7EB] group-hover:border-[#4F46E5]">
                                    Connect <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </a>
                        </RevealCard>
                    ))}
                </div>

                <RevealCard delay={300}>
                    <div className="text-center">
                        <a
                            href="mailto:jpjake15@gmail.com"
                            className="inline-flex items-center gap-3 accent-gradient text-white px-10 py-5 rounded-full text-lg font-heading font-bold hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(79,70,229,0.35)] hover:scale-105 transition-all"
                        >
                            <MessageSquare className="w-5 h-5" />
                            Send Me a Message
                        </a>
                    </div>
                </RevealCard>
            </div>
        </main>
    );
}
