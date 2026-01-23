import React from 'react';
import Head from 'next/head';
import { 
  LightBulbIcon, 
  CpuChipIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';
import styles from './Mission.module.css';



export default function Missao() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Nossa Missão | AI2You</title>
      </Head>

      <div className={styles.container}>
        {/* Header da Página */}
        <header className={styles.header}>
          <span className={styles.textOverline}>Propósito & Inovação</span>
          <h1 className={styles.textTitle}>
            Nossa Missão: <span className={styles.textHighlight}>O Futuro, Agora.</span>
          </h1>
          <p className={styles.textSubtitle}>
            Não estamos apenas criando ferramentas; estamos redesenhando a forma como humanos e máquinas colaboram para resolver os problemas mais complexos da atualidade.
          </p>
        </header>

        {/* Bloco de Visão Geral */}
        <section className={styles.visionCard}>
          <div className={styles.glassEffect}>
            <h2 className={styles.textCardTitle}>Excelência na Era da Inteligência</h2>
            <p className={styles.textBody}>
              A <strong>AI2You</strong> nasceu da convicção de que a Inteligência Artificial não deve ser uma barreira técnica, mas uma extensão da capacidade humana. Nossa missão é desenvolver ferramentas modernas que atuem como um multiplicador de força para profissionais em qualquer nicho.
            </p>
            <p className={styles.textBody}>
              Do marketing à medicina, da programação ao setor jurídico, nossa arquitetura de prompts e ferramentas é desenhada para entregar clareza onde há ruído e eficiência onde há burocracia.
            </p>
          </div>
        </section>

        {/* Pilares Estratégicos */}
        <div className={styles.grid}>
          <div className={styles.pillCard}>
            <CpuChipIcon className={styles.iconPrimary} />
            <h3 className={styles.textCardTitle}>Resolução de Problemas</h3>
            <p className={styles.textBody}>
              Focamos em dores reais. Criamos soluções que reduzem horas de trabalho manual em segundos de processamento inteligente, adaptando frameworks globais para necessidades locais.
            </p>
          </div>

          <div className={styles.pillCard}>
            <LightBulbIcon className={styles.iconPrimary} />
            <h3 className={styles.textCardTitle}>Vanguarda Tecnológica</h3>
            <p className={styles.textBody}>
              Monitoramos tendências futuras em tempo real. Nossa plataforma evolui com os modelos de linguagem mais avançados, garantindo que nossos usuários nunca fiquem obsoletos.
            </p>
          </div>

          <div className={styles.pillCard}>
            <ShieldCheckIcon className={styles.iconPrimary} />
            <h3 className={styles.textCardTitle}>Acessibilidade Técnica</h3>
            <p className={styles.textBody}>
              Democratizamos o acesso ao "State-of-the-Art" da IA. Transformamos comandos complexos em interfaces intuitivas, onde a tecnologia bem feita é silenciosa e impactante.
            </p>
          </div>
        </div>

        {/* Manifesto Final */}
        <footer className={styles.manifesto}>
          <RocketLaunchIcon className={styles.iconPrimary} />
          <h2 className={styles.textCardTitle}>Impacto, não Barulho.</h2>
          <p className={styles.textBody}>
            "Nossa jornada é sobre equipar a próxima geração de líderes, criadores e pensadores com o intelecto aumentado pela IA, garantindo que o progresso tecnológico seja sinônimo de progresso humano."
          </p>
        </footer>
      </div>
    </main>
  );
}