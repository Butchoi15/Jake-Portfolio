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
        <header className="w-full bg-white border-b border-slate-50 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 md:py-8 flex items-center justify-between relative">
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors z-50"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-10 font-bold text-slate-600 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`hover:text-blue-600 transition-colors uppercase tracking-widest text-sm ${location.pathname === link.path ? 'text-blue-600' : ''
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center">
                    <a
                        href="https://www.upwork.com/freelancers/~01d4e97725ad352e6b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-100 uppercase tracking-tighter text-xs md:text-sm"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Navigation Overlay */}
                <div
                    className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <nav className="flex flex-col items-center justify-center h-full gap-8 p-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors uppercase tracking-tighter"
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
