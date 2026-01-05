import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2 } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, exam }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        name: '',
        phone: '',
        email: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step < 2) {
            setStep(step + 1);
        } else {
            // Finalize
            setStep(3);
            setTimeout(() => {
                // Reset and close after showing success
                // onClose();
            }, 3000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose}></div>

            <div className="bg-white rounded-3xl w-full max-w-lg relative z-10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="p-8">
                    {step === 3 ? (
                        <div className="text-center py-8 animate-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-trust-light text-trust rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={48} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">¡Reserva Confirmada!</h2>
                            <p className="text-slate-600 mb-8">
                                Hemos enviado los detalles de tu cita para <strong>{exam?.name}</strong> a tu correo electrónico.
                            </p>
                            <button
                                onClick={onClose}
                                className="w-full bg-medic-600 text-white py-4 rounded-2xl font-bold text-lg"
                            >
                                Cerrar
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-6">
                                <span className="text-medic-600 font-bold text-sm uppercase tracking-widest">Paso {step} de 2</span>
                                <h2 className="text-2xl font-bold text-slate-900 mt-1">Reservar {exam?.name}</h2>
                                <p className="text-slate-500">Completa la información para confirmar tu toma de examen.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {step === 1 ? (
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <label className="text-sm font-bold text-slate-700 mb-1 block">Selecciona Fecha</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                <input
                                                    required
                                                    type="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medic-500 focus:outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <label className="text-sm font-bold text-slate-700 mb-1 block">Selecciona Horario</label>
                                            <div className="relative">
                                                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                <select
                                                    required
                                                    name="time"
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medic-500 focus:outline-none appearance-none transition-all"
                                                >
                                                    <option value="">Seleccionar hora</option>
                                                    <option value="08:00">08:00 AM</option>
                                                    <option value="09:00">09:00 AM</option>
                                                    <option value="10:00">10:00 AM</option>
                                                    <option value="11:00">11:00 AM</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                required
                                                placeholder="Nombre Completo"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medic-500 focus:outline-none transition-all"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                required
                                                type="email"
                                                placeholder="Correo Electrónico"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medic-500 focus:outline-none transition-all"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                required
                                                placeholder="Teléfono (ej: +56 9...)"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medic-500 focus:outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-medic-600 hover:bg-medic-700 text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-medic-100"
                                >
                                    {step === 1 ? 'Siguiente Paso' : 'Confirmar Reserva'}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingModal; 
