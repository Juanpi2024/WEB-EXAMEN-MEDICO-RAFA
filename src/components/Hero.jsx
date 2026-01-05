import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Decorative Blur Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-medic-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-trust-light rounded-full blur-3xl opacity-40 -z-10"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 md:gap-8 max-w-xl">
                        <div className="inline-flex items-center gap-2 bg-medic-50 text-medic-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-medic-100 w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medic-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-medic-600"></span>
                            </span>
                            Resultados en 24h
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                            Tu salud no puede esperar. <br />
                            <span className="text-medic-600">Agenda tus exámenes</span> en minutos.
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            Reserva de forma rápida y segura en el centro más cercano. Resultados confiables con tecnología de vanguardia y atención preferencial.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#examenes" className="flex items-center justify-center gap-2 bg-medic-600 hover:bg-medic-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-medic-200 transform hover:-translate-y-1">
                                <Search size={20} />
                                Buscar Examen
                            </a>
                            <button className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all border border-slate-200">
                                Ver Sedes
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200">
                                        <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-slate-500">
                                <span className="font-bold text-slate-900">+5,000</span> pacientes confían en nosotros este mes
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://picsum.photos/seed/medicheck/1000/800"
                                alt="Modern Clinic"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100 animate-bounce-slow">
                            <div className="flex items-center gap-4">
                                <div className="bg-trust-light p-3 rounded-xl text-trust">
                                    <Search size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Disponibilidad</p>
                                    <p className="text-lg font-bold text-slate-900">100% Garantizada</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
