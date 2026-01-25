'use client';

import styles from './Article.module.css';

export default function ArticlePage() {
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <p className={styles.kicker}>Blog AI2You</p>
          <h1 className={styles.title}>
            Entendendo a IA e a Engenharia de Prompt
          </h1>
          <p className={styles.subtitle}>
            Como a Inteligência Artificial evoluiu e por que saber se comunicar
            com ela é o verdadeiro diferencial competitivo.
          </p>
        </header>

        {/* Conteúdo */}
        <section className={styles.content}>
          <h2>Uma breve história da Inteligência Artificial</h2>
          <p>
            O conceito de Inteligência Artificial surgiu na década de 1950, quando
            pesquisadores começaram a questionar se máquinas poderiam simular o
            raciocínio humano. Durante muitos anos, a evolução foi limitada pela
            falta de dados e poder computacional.
          </p>
          <p>
            Esse cenário mudou drasticamente com o avanço dos modelos de linguagem,
            a explosão de dados e o aumento da capacidade de processamento. Hoje,
            a IA é capaz de gerar textos, códigos, estratégias e análises complexas
            em segundos.
          </p>

          <h2>As vantagens da IA em nichos altamente pesquisados</h2>

          <h3>Marketing Digital</h3>
          <p>
            No marketing digital, a IA permite criar campanhas mais eficientes,
            gerar copies persuasivas, analisar o comportamento do público e otimizar
            funis de conversão com rapidez e precisão.
          </p>

          <h3>Desenvolvimento de Software</h3>
          <p>
            Desenvolvedores utilizam IA para gerar código, revisar implementações,
            documentar sistemas e acelerar processos, mantendo qualidade técnica
            elevada.
          </p>

          <h3>Criação de Conteúdo</h3>
          <p>
            Criadores de conteúdo usam IA como apoio criativo para roteiros, artigos,
            ideias para redes sociais e adaptação de textos para diferentes canais.
          </p>

          <h2>Uso responsável e eficiente da Inteligência Artificial</h2>
          <p>
            Apesar de poderosa, a IA deve ser usada com responsabilidade. É
            fundamental revisar respostas, evitar a propagação de informações
            incorretas e compreender que a IA é uma ferramenta de apoio, não uma
            fonte absoluta de verdade.
          </p>

          <h2>A importância da Engenharia de Prompt</h2>
          <p>
            A Engenharia de Prompt consiste em estruturar instruções claras,
            contextuais e bem definidas para obter respostas mais precisas e úteis.
            Prompts genéricos geram respostas superficiais. Prompts bem elaborados
            geram estratégias completas.
          </p>

          <h2>Exemplos de prompts avançados</h2>

          <div className={styles.promptBox}>
            <h4>Marketing Digital</h4>
            <pre>
{`Atue como um estrategista sênior de marketing digital especializado em tráfego pago.
Contexto: e-commerce de produtos fitness.
Objetivo: criar uma estratégia de campanha focada em conversão.
Inclua público-alvo, estrutura de campanhas, palavras-chave e métricas.`}
            </pre>
          </div>

          <div className={styles.promptBox}>
            <h4>Desenvolvimento de Software</h4>
            <pre>
{`Atue como um desenvolvedor sênior especialista em Next.js.
Explique a melhor arquitetura usando App Router, Server Components e boas práticas de SEO.
Inclua exemplos de código e explicações didáticas.`}
            </pre>
          </div>

          <div className={styles.promptBox}>
            <h4>Criação de Conteúdo</h4>
            <pre>
{`Atue como um redator profissional especialista em SEO.
Crie um artigo educativo sobre os benefícios da IA para pequenas empresas.
Use linguagem clara, exemplos práticos e estrutura otimizada.`}
            </pre>
          </div>

          <h2>Conclusão</h2>
          <p>
            A verdadeira vantagem competitiva não está apenas em usar Inteligência
            Artificial, mas em saber como se comunicar com ela. A Engenharia de Prompt
            transforma a IA em uma aliada estratégica.
          </p>
          <p>
            A AI2You foi criada para ajudar você a extrair o máximo potencial da IA
            por meio de prompts bem estruturados, inteligentes e prontos para uso
            profissional.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.cta}>
          <h3>Pronto para criar prompts profissionais?</h3>
          <p>
            Use o Gerador de Prompts da AI2You e leve seus resultados para o próximo
            nível.
          </p>
          <a href="/" className={styles.ctaButton}>
            Acessar Gerador de Prompts
          </a>
        </footer>
      </div>
    </article>
  );
}
