import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Me', path: '/about' },
        { name: 'My Skills', path: '/skills' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-[#E5E7EB]' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-[#6B7280] hover:text-[#1A1A2E] transition-colors z-50"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-7 mx-auto">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative font-medium text-sm transition-colors py-1 ${
                                    isActive ? 'text-[#4F46E5]' : 'text-[#6B7280] hover:text-[#1A1A2E]'
                                }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-0.5 left-0 w-full h-[2px] bg-[#4F46E5] rounded-full transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                            </Link>
                        );
                    })}
                </nav>

                {/* Hire Me — always visible */}
                <a
                    href="https://www.upwork.com/freelancers/~01d4e97725ad352e6b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-gradient text-white px-5 py-2 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity shadow-[0_2px_12px_rgba(79,70,229,0.3)]"
                >
                    Hire Me
                </a>

                {/* Mobile Navigation Overlay */}
                <div
                    className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
                        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                >
                    <nav className="flex flex-col items-center justify-center gap-7 w-full px-6">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-heading text-xl font-bold text-[#1A1A2E] hover:text-[#4F46E5] transition-all ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${i * 60}ms` }}
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
