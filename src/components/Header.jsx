import React, { useState, useEffect } from 'react';
import { Stethoscope, Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-medic-600 p-2 rounded-lg">
                        <Stethoscope className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-medic-900">MediCheck</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-slate-600 hover:text-medic-600 font-medium transition-colors">Inicio</a>
                    <a href="#examenes" className="text-slate-600 hover:text-medic-600 font-medium transition-colors">Exámenes</a>
                    <a href="#" className="text-slate-600 hover:text-medic-600 font-medium transition-colors">Sedes</a>
                    <a href="#" className="text-slate-600 hover:text-medic-600 font-medium transition-colors">Nosotros</a>
                    <button className="bg-trust hover:bg-trust-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Agendar Hora
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
                    <a href="#" className="text-slate-600 font-medium text-lg px-2 py-1">Inicio</a>
                    <a href="#examenes" className="text-slate-600 font-medium text-lg px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>Exámenes</a>
                    <a href="#" className="text-slate-600 font-medium text-lg px-2 py-1">Sedes</a>
                    <a href="#" className="text-slate-600 font-medium text-lg px-2 py-1">Nosotros</a>
                    <button className="bg-trust text-white w-full py-3 rounded-xl font-bold mt-2">
                        Agendar Hora
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
