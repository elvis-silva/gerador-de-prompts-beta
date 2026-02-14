import "./benefits.css";

export default function BenefitsSection() {
  return (
    <section className="benefits">
      <div className="benefits-container">
        <h2 className="benefits-title">
          Benefícios da Arquitetura AI2You
        </h2>

        <div className="benefits-grid">
          <div className="benefits-card">
            <h3 className="benefits-card-title">Redução de CAC</h3>
            <p className="benefits-card-text">
              Identifique gargalos e automatize pontos críticos do funil.
            </p>
          </div>

          <div className="benefits-card">
            <h3 className="benefits-card-title">Previsibilidade</h3>
            <p className="benefits-card-text">
              Transforme marketing em sistema mensurável.
            </p>
          </div>

          <div className="benefits-card">
            <h3 className="benefits-card-title">Escala Sustentável</h3>
            <p className="benefits-card-text">
              Cresça sem aumentar proporcionalmente o time.
            </p>
          </div>

          <div className="benefits-card">
            <h3 className="benefits-card-title">Governança</h3>
            <p className="benefits-card-text">
              Controle qualidade e consistência estratégica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
