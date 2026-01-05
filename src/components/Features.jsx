import React from 'react';
import { Clock, ShieldCheck, Zap } from 'lucide-react';

const Features = () => {
    const items = [
        {
            icon: <Zap className="text-medic-600" />,
            title: "Resultados en línea",
            desc: "Accede a tus informes y resultados desde cualquier dispositivo en tiempo récord.",
            color: "bg-medic-50"
        },
        {
            icon: <ShieldCheck className="text-trust" />,
            title: "Tecnología de punta",
            desc: "Equipamiento médico de última generación para diagnósticos precisos.",
            color: "bg-trust-light"
        },
        {
            icon: <Clock className="text-amber-600" />,
            title: "Atención sin esperas",
            desc: "Sistemas de agendamiento optimizados para respetar tu tiempo al máximo.",
            color: "bg-amber-50"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, idx) => (
                        <div key={idx} className={`p-8 rounded-3xl transition-all hover:shadow-xl border border-transparent hover:border-slate-100 group`}>
                            <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {React.cloneElement(item.icon, { size: 32 })}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
