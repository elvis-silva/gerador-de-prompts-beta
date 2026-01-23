import React from 'react';
import Head from 'next/head';
import { 
  ScaleIcon, 
  UserGroupIcon, 
  ShieldExclamationIcon, 
  CodeBracketSquareIcon 
} from '@heroicons/react/24/outline';
import styles from './Terms.module.css';

export default function TermosDeUso() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Termos de Uso | AI2You</title>
      </Head>

      <div className={styles.container}>
        {/* Header no padrão AI2You */}
        <header className={styles.header}>
          <span className={styles.textOverline}>Acordo Legal</span>
          <h1 className={styles.textTitle}>
            Termos de <span className={styles.textHighlight}>Uso</span>
          </h1>
          <p className={styles.textSubtitle}>
            As diretrizes que regem nossa relação e garantem a integridade da nossa engenharia de prompts.
          </p>
        </header>

        {/* Card de Aceite Rápido */}
        <section className={styles.glassCard}>
          <div className={styles.iconWrapper}>
            <ScaleIcon className={styles.iconPrimary} />
          </div>
          <h2 className={styles.textCardTitle}>Aceitação dos Termos</h2>
          <p className={styles.textBody}>
            Ao acessar a <span className={styles.textHighlight}>AI2You</span>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. Nossas ferramentas são destinadas a potencializar o trabalho humano através da IA, e o seu uso implica na ciência dessas condições.
          </p>
        </section>

        {/* Grid de Cláusulas */}
        <div className={styles.grid}>
          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <CodeBracketSquareIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>Licença de Uso</h3>
            <p className={styles.textBody}>
              É concedida permissão para gerar e utilizar os prompts para fins pessoais ou comerciais. No entanto, é proibido tentar descompilar ou fazer engenharia reversa do software da plataforma.
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <UserGroupIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>Responsabilidade</h3>
            <p className={styles.textBody}>
              A IA é uma ferramenta de auxílio. A AI2You não se responsabiliza por decisões tomadas com base nos prompts gerados; a revisão final do conteúdo é sempre do usuário humano.
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <ShieldExclamationIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>Limitações</h3>
            <p className={styles.textBody}>
              Em nenhum caso a AI2You será responsável por danos decorrentes do uso ou da incapacidade de usar os materiais em nosso site, mesmo que notificados.
            </p>
          </div>
        </div>

        {/* Rodapé Interno */}
        <footer className={styles.termosFooter}>
          <h2 className={styles.textCardTitle}>Modificações</h2>
          <p className={styles.textBody}>
            A AI2You pode revisar estes termos de serviço a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos.
          </p>
          <p className={styles.textSmall}>Vigência a partir de: 23 de Janeiro de 2026</p>
        </footer>
      </div>
    </main>
  );
}