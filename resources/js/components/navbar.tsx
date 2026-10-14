import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { weddingConfig } from '@/config/wedding';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/home' },
        { name: 'Schedule', href: '/schedule' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Where to Stay', href: '/where-to-stay' },
        { name: 'RSVP', href: '/rsvp' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/home" className="font-serif text-2xl text-primary font-bold tracking-tight">
                            {weddingConfig.coupleShortName}
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-serif text-sm font-bold text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-border/40 absolute w-full animate-in slide-in-from-top-2">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
