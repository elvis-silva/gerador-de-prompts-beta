import "./faq.css";

export default function FAQ() {
  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="faq-title">
          Perguntas Frequentes
        </h2>

        <div className="faq-list">
          <div className="faq-item">
            <h3 className="faq-question">
              Isso substitui minha equipe?
            </h3>
            <p className="faq-answer">
              Não. A IA estrutura processos e aumenta eficiência, mas decisões
              estratégicas continuam humanas.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">
              Funciona para qualquer empresa B2B?
            </h3>
            <p className="faq-answer">
              Sim, desde que exista ciclo de vendas estruturado e metas claras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
