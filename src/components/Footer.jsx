import React from 'react';
import { Stethoscope, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1.5 flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-medic-600 p-2 rounded-lg">
                                <Stethoscope className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">MediCheck</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed max-w-sm">
                            Líderes en diagnóstico médico con más de 20 años de experiencia. Compromiso total con tu salud y bienestar.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-medic-600 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-medic-600 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-medic-600 transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-medic-400 transition-colors">Inicio</a></li>
                            <li><a href="#examenes" className="hover:text-medic-400 transition-colors">Exámenes</a></li>
                            <li><a href="#" className="hover:text-medic-400 transition-colors">Sedes y Horarios</a></li>
                            <li><a href="#" className="hover:text-medic-400 transition-colors">Resultados en Línea</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Nosotros</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-medic-400 transition-colors">Nuestra Visión</a></li>
                            <li><a href="#" className="hover:text-medic-400 transition-colors">Acreditaciones</a></li>
                            <li><a href="#" className="hover:text-medic-400 transition-colors">Trabaja con nosotros</a></li>
                            <li><a href="#" className="hover:text-medic-400 transition-colors">Blog de Salud</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <MapPin className="text-medic-500" size={18} />
                                <span>Av. Salud 1234, Providencia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-medic-500" size={18} />
                                <span>+56 2 2345 6789</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-medic-500" size={18} />
                                <span>contacto@medicheck.cl</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-500 text-center">
                        © 2026 MediCheck SPA. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8 text-sm text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
