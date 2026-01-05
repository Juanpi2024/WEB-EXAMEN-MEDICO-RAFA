import React, { useState } from 'react';
import examsData from '../data/exams.json';
import { Search, Filter, Clock, CreditCard, ChevronRight } from 'lucide-react';
import BookingModal from './BookingModal';

const ExamsCatalog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedExam, setSelectedExam] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredExams = examsData.filter(exam =>
        exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exam.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBook = (exam) => {
        setSelectedExam(exam);
        setIsModalOpen(true);
    };

    return (
        <section id="examenes" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Nuestros Exámenes Disponibles</h2>
                        <p className="text-slate-600 text-lg">
                            Busca y selecciona el examen que necesitas. Contamos con acreditación de calidad en todos nuestros procesos.
                        </p>
                    </div>

                    <div className="relative w-full md:w-[400px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 shadow-sm" size={20} />
                        <input
                            type="text"
                            placeholder="Ej: Hemograma, PCR, Ecografía..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-medic-500 focus:outline-none shadow-sm transition-all"
                        />
                    </div>
                </div>

                {filteredExams.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredExams.map((exam) => (
                            <div
                                key={exam.id}
                                className="bg-white border border-slate-100 rounded-3xl p-6 transition-all hover:shadow-2xl hover:shadow-medic-100/50 group flex flex-col h-full"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className="bg-medic-50 text-medic-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {exam.category}
                                    </span>
                                    <div className="text-medic-600 font-black text-xl">
                                        ${exam.price.toLocaleString()}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-medic-600 transition-colors">
                                    {exam.name}
                                </h3>

                                <p className="text-slate-500 text-sm mb-6 flex-grow">
                                    {exam.description}
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-slate-600 text-sm">
                                        <Clock size={16} className="text-medic-400" />
                                        <span>Resultados: <strong>{exam.deliveryTime}</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-600 text-sm">
                                        <CreditCard size={16} className="text-medic-400" />
                                        <span>Fonasa e Isapre</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleBook(exam)}
                                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-medic-600 text-white py-3.5 rounded-xl font-bold transition-all group-hover:scale-[1.02]"
                                >
                                    Reservar
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                        <Search className="mx-auto text-slate-300 mb-4" size={48} />
                        <h3 className="text-xl font-bold text-slate-900">No encontramos resultados</h3>
                        <p className="text-slate-500">Prueba con otros términos de búsqueda.</p>
                    </div>
                )}
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                exam={selectedExam}
            />
        </section>
    );
};

export default ExamsCatalog;
