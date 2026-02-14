import "./hero.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="section-container">
        <h1 className="hero-title">
          IA para Marketing B2B
        </h1>
        <p className="hero-subtitle">
          Transforme IA em sistema previsível de geração de demanda.
        </p>
        <button className="hero-button">
          Gerar Prompt Estratégico
        </button>
      </div>
    </section>
  );
}
