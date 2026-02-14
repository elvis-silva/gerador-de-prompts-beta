"use client";

import { useState } from "react";
import OutputPreview from "../outputPreview/OutputPreview";
import "./promptform.css";

export default function InteractivePromptForm() {
  const [formData, setFormData] = useState<any>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as any;

    setFormData({
      companyType: form.companyType.value,
      ticket: form.ticket.value,
      salesCycle: form.salesCycle.value,
      tools: form.tools.value,
      goal: form.goal.value,
    });
  }

  return (
    <section id="promptform" className="promptform">
      <div className="promptform-container">
        <h2 className="promptform-title">
          Gere sua Arquitetura Personalizada
        </h2>

        <form onSubmit={handleSubmit} className="promptform-form">
          <input
            name="companyType"
            placeholder="Tipo de empresa"
            required
            className="promptform-input"
          />
          <input
            name="ticket"
            placeholder="Ticket médio"
            required
            className="promptform-input"
          />
          <input
            name="salesCycle"
            placeholder="Ciclo de vendas (dias)"
            required
            className="promptform-input"
          />
          <input
            name="tools"
            placeholder="Ferramentas atuais"
            className="promptform-input"
          />
          <input
            name="goal"
            placeholder="Objetivo principal"
            required
            className="promptform-input"
          />

          <button type="submit" className="promptform-button">
            Gerar Arquitetura
          </button>
        </form>

        {formData && <OutputPreview data={formData} />}
      </div>
    </section>
  );
}
