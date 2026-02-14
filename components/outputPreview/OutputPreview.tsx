import "./outputPreview.css";

type Props = {
  data: {
    companyType: string;
    ticket: string;
    salesCycle: string;
    tools: string;
    goal: string;
  };
};

export default function OutputPreview({ data }: Props) {
  return (
    <div className="output-preview">
      <h3 className="output-preview-title">
        Diagnóstico Inicial
      </h3>

      <div className="output-preview-grid">
        <p><strong>Empresa:</strong> {data.companyType}</p>
        <p><strong>Ticket:</strong> {data.ticket}</p>
        <p><strong>Ciclo:</strong> {data.salesCycle} dias</p>
        <p><strong>Objetivo:</strong> {data.goal}</p>
      </div>

      <div className="output-preview-architecture">
        <h4 className="output-preview-subtitle">
          Arquitetura Recomendada:
        </h4>
        <ul className="output-preview-list">
          <li>Camada de Aquisição com SEO estruturado</li>
          <li>Lead Scoring Automatizado</li>
          <li>Integração CRM + Automação</li>
          <li>Workflow de Nutrição Inteligente</li>
        </ul>
      </div>

      <div className="output-preview-actions">
        <button className="btn-secondary">
          Salvar Relatório
        </button>
        <button className="btn-primary">
          Abrir no Dashboard Pro
        </button>
      </div>
    </div>
  );
}
