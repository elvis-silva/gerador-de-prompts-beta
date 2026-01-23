"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Mail, Code2, BrainCircuit, Rocket, Smartphone, 
  Globe, Database, CheckCircle2, Send 
} from 'lucide-react';

// Validação do formulário com Zod
const contactSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const TechStack = [
  { name: 'Next.js', icon: <Globe className="w-5 h-5" /> },
  { name: 'TypeScript', icon: <Code2 className="w-5 h-5" /> },
  { name: 'AI/LLMs', icon: <BrainCircuit className="w-5 h-5" /> },
  { name: 'Android', icon: <Smartphone className="w-5 h-5" /> },
  { name: 'Node.js', icon: <Database className="w-5 h-5" /> },
];

export default function AboutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulação de envio - aqui você integraria com sua API ou serviço de email
    console.log("Dados enviados:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSent(true);
    reset();
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" />
            {/*<Image
              src="" // Coloque sua foto em public/elvis-silva.jpg
              alt="Elvis Silva"
              width={140}
              height={140}
              className="rounded-full border-4 border-white shadow-2xl relative z-10 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />*/}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-950 mb-6">
            Inteligência que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              impulsiona negócios.
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Olá, eu sou <strong>Elvis Silva</strong>. Através da <strong>AI2You</strong>, transformo anos de experiência em engenharia de software em soluções inteligentes e escaláveis.
          </p>
        </div>
      </section>

      {/* Grid de Conteúdo */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12">
        {/* Lado Esquerdo: Texto e Techs */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3 italic">
              <Rocket className="text-blue-600 w-8 h-8" /> Nossa Missão
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Desde 2017, minha jornada no desenvolvimento de software foca em um único objetivo: 
              <strong> resolver o impossível.</strong> Na AI2You, unimos o rigor técnico do 
              desenvolvimento Full Stack com o potencial disruptivo da IA Generativa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TechStack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                  {tech.icon}
                </div>
                <span className="font-semibold text-slate-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lado Direito: Formulário de Contato Profissional */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-100/50 border border-slate-100 relative">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Vamos conversar?</h3>
              <p className="text-slate-500 text-sm">Respostas em até 24 horas úteis.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">Nome</label>
                <input 
                  {...register("name")}
                  className={`w-full p-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-400 focus:ring-red-100' : 'border-slate-100 focus:ring-blue-100 focus:border-blue-400'}`}
                  placeholder="Seu nome"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">E-mail</label>
                <input 
                  {...register("email")}
                  className={`w-full p-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-400 focus:ring-red-100' : 'border-slate-100 focus:ring-blue-100 focus:border-blue-400'}`}
                  placeholder="ai2you@outlook.com"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">Mensagem</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className={`w-full p-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 transition-all resize-none ${errors.message ? 'border-red-400 focus:ring-red-100' : 'border-slate-100 focus:ring-blue-100 focus:border-blue-400'}`}
                  placeholder="Como posso ajudar seu projeto?"
                />
                {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isSent ? 'bg-green-500 text-white' : 'bg-slate-900 hover:bg-blue-600 text-white shadow-lg'}`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSent ? (
                  <><CheckCircle2 className="w-5 h-5" /> Enviado!</>
                ) : (
                  <><Send className="w-4 h-4" /> Enviar Proposta</>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="py-12 border-t border-slate-100 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-blue-600">AI</span>2You
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="mailto:ai2you@outlook.com" className="hover:text-blue-600 transition-colors">ai2you@outlook.com</a>
            <span className="hidden md:inline text-slate-300">|</span>
            <span>Elvis Silva © 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}