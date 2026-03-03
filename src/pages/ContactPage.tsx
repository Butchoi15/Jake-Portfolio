import React from 'react';
import { Mail, Linkedin, Facebook, ArrowRight, MessageSquare } from 'lucide-react';

export default function ContactPage() {
    const contactLinks = [
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-6 h-6" />,
            label: "Professional Profile",
            url: "https://www.linkedin.com/in/ronald-jake-pitos-4542b61a8/",
            color: "bg-[#0A66C2]"
        },
        {
            name: "Facebook",
            icon: <Facebook className="w-6 h-6" />,
            label: "Social Connection",
            url: "https://www.facebook.com/jake.pitos",
            color: "bg-[#1877F2]"
        },
        {
            name: "Email",
            icon: <Mail className="w-6 h-6" />,
            label: "jpjake15@gmail.com",
            url: "mailto:jpjake15@gmail.com",
            color: "bg-red-500"
        }
    ];

    return (
        <main className="bg-white min-h-[80vh] flex flex-col justify-center py-24">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                        Let's Work <span className="text-blue-600">Together</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed">
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
                            className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-500 hover:shadow-xl transition-all text-center"
                        >
                            <div className={`w-14 h-14 ${link.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                                {link.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{link.name}</h3>
                            <p className="text-slate-500 font-medium mb-4">{link.label}</p>
                            <div className="flex items-center justify-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                                Connect <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="mailto:jpjake15@gmail.com"
                        className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-600 hover:scale-105 transition-all shadow-xl shadow-slate-200"
                    >
                        <MessageSquare className="w-6 h-6" />
                        Send me a message
                    </a>
                </div>
            </div>
        </main>
    );
}
