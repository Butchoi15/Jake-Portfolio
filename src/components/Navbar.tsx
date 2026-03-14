import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when location changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Me', path: '/about' },
        { name: 'My Skills', path: '/skills' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="w-full fixed top-0 z-50 glass-card border-b-0 border-white/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
                
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-white/70 hover:text-white transition-colors z-50"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-10 font-heading font-medium text-white/50 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative hover:text-white transition-colors uppercase tracking-widest text-sm py-2 group ${
                                    isActive ? 'text-white' : ''
                                }`}
                            >
                                {link.name}
                                {/* Active / Hover indicator layout */}
                                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 origin-left'}`} />
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center ml-auto">
                    <a
                        href="https://www.upwork.com/freelancers/~01d4e97725ad352e6b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group bg-blue-600/20 text-blue-400 border border-blue-500/30 px-6 md:px-8 py-2 md:py-2.5 rounded-full font-heading font-bold hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all uppercase tracking-widest text-xs md:text-sm overflow-hidden"
                    >
                        <span className="relative z-10">Hire Me</span>
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                    </a>
                </div>

                {/* Mobile Navigation Overlay */}
                <div
                    className={`fixed inset-0 bg-[#050510]/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
                        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                >
                    <nav className="flex flex-col items-center justify-center gap-8 w-full px-6">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-heading text-2xl font-bold text-white/70 hover:text-white hover:text-glow transition-all uppercase tracking-widest ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
