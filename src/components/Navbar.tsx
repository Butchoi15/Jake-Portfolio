import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    return (
        <header className="w-full bg-white border-b border-slate-50">
            <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-center relative">
                <nav className="flex gap-10 font-bold text-slate-600 absolute left-1/2 -translate-x-1/2">
                    <Link to="/" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-sm">Home</Link>
                    <Link to="/about" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-sm">About Me</Link>
                    <Link to="/skills" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-sm">My Skills</Link>
                    <Link to="/testimonials" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-sm">Testimonials</Link>
                    <Link to="/contact" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-sm">Contact</Link>
                </nav>

                <div className="ml-auto">
                    <a
                        href="https://www.upwork.com/freelancers/~01d4e97725ad352e6b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-100 uppercase tracking-tighter text-sm"
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </header>
    );
}
