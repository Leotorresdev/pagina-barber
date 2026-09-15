"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { services, timeSlots } from "@/lib/constants";

type FormState = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  notes: "",
};

export function Booking() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [done, setDone] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Requerido";
    if (!form.phone.trim()) e.phone = "Requerido";
    if (!form.service) e.service = "Selecciona un servicio";
    if (!form.date) e.date = "Requerido";
    else if (form.date < today) e.date = "La fecha debe ser futura";
    if (!form.time) e.time = "Requerido";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setDone(true);
  };

  const fieldCls =
    "w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-white placeholder:text-white/30 transition-colors";

  return (
    <section id="booking" className="bg-[#0A0A0A]">
      <div className="grid lg:grid-cols-2">
        <div
          className="relative min-h-[300px] lg:min-h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex flex-col justify-end p-10 lg:p-16">
            <p className="eyebrow text-[#E0C398] mb-4">Reservación</p>
            <h3 className="font-display text-4xl lg:text-5xl text-white max-w-sm leading-tight">
              Tu tiempo es valioso. <span className="italic font-normal">Nosotros te asesoramos.</span>
            </h3>
          </div>
        </div>

        <div className="p-8 md:p-14 lg:p-20 bg-[#111]">
          <p className="eyebrow text-white/50 mb-4">Agenda una Cita</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-10">Reserva Tu Asesoría</h2>

          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="border border-white/10 bg-[#0A0A0A] p-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                  className="mx-auto w-14 h-14 rounded-full bg-white flex items-center justify-center"
                >
                  <Check className="text-[#111]" size={28} strokeWidth={3} />
                </motion.div>
                <h3 className="font-display text-2xl text-white mt-6">Tu sesión está confirmada</h3>
                <p className="text-white/60 mt-3 text-sm">
                  Nos pondremos en contacto con {form.name.split(" ")[0]} en breve para finalizar
                  los detalles.
                </p>
                <button
                  onClick={() => {
                    setForm(initial);
                    setDone(false);
                  }}
                  className="mt-8 text-xs tracking-[0.25em] uppercase text-white font-semibold hover:text-white/60 transition-colors"
                >
                  Reservar Otra
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-7"
                noValidate
              >
                <div className="grid md:grid-cols-2 gap-7">
                  <Field label="Nombre Completo" error={errors.name}>
                    <input
                      className={fieldCls}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Juan Pérez"
                    />
                  </Field>
                  <Field label="Teléfono" error={errors.phone}>
                    <input
                      className={fieldCls}
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+1 (555) 000-0000"
                    />
                  </Field>
                </div>
                
                <Field label="Servicio" error={errors.service}>
                  <select
                    className={fieldCls}
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                  >
                    <option value="" className="bg-[#111] text-white">
                      Selecciona un servicio
                    </option>
                    {services.map((s) => (
                      <option key={s.name} className="bg-[#111] text-white">
                        {s.name}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="grid md:grid-cols-2 gap-7">
                  <Field label="Fecha" error={errors.date}>
                    <input
                      type="date"
                      min={today}
                      className={fieldCls}
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                    />
                  </Field>
                  <Field label="Hora" error={errors.time}>
                    <select
                      className={fieldCls}
                      value={form.time}
                      onChange={(e) => update("time", e.target.value)}
                    >
                      <option value="" className="bg-[#111] text-white">
                        Selecciona una hora
                      </option>
                      {timeSlots.map((t) => (
                        <option key={t} className="bg-[#111] text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Solicitudes Especiales">
                  <textarea
                    rows={3}
                    className={`${fieldCls} resize-none`}
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    placeholder="Algo que debamos saber..."
                  />
                </Field>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-white text-black border border-white py-4 text-xs tracking-[0.3em] uppercase font-bold hover:bg-transparent hover:text-white transition-colors mt-4"
                >
                  Confirmar Reserva
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs tracking-[0.2em] uppercase font-semibold text-white/50 block mb-1">{label}</span>
      {children}
      {error && <span className="text-xs text-red-500 mt-1 block">{error}</span>}
    </label>
  );
}
