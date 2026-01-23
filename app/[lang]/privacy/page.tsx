import React from 'react';
import Head from 'next/head';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  EyeIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline';
import styles from './Privacy.module.css';

export default function Privacidade() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Privacidade | AI2You</title>
      </Head>

      <div className={styles.container}>
        {/* Header no padrão da página Sobre */}
        <header className={styles.header}>
          <span className={styles.textOverline}>Segurança de Dados</span>
          <h1 className={styles.textTitle}>
            Política de <span className={styles.textHighlight}>Privacidade</span>
          </h1>
          <p className={styles.textSubtitle}>
            Transparência e proteção absoluta no tratamento das suas informações.
          </p>
        </header>

        {/* Card Principal: Compromisso */}
        <section className={styles.glassCard}>
          <div className={styles.iconWrapper}>
            <ShieldCheckIcon className={styles.iconPrimary} />
          </div>
          <h2 className={styles.textCardTitle}>Nosso Compromisso</h2>
          <p className={styles.textBody}>
            Na <span className={styles.textHighlight}>AI2You</span>, a privacidade não é apenas uma obrigação legal, é um pilar da nossa engenharia. Esta política detalha como coletamos, protegemos e utilizamos seus dados para oferecer a melhor experiência em engenharia de prompts.
          </p>
        </section>

        {/* Grid de Detalhes Técnicos */}
        <div className={styles.grid}>
          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <LockClosedIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>Coleta de Dados</h3>
            <p className={styles.textBody}>
              Coletamos apenas o essencial para o funcionamento dos nossos geradores, como preferências de nicho e logs técnicos para otimização de performance.
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <EyeIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>Uso das Informações</h3>
            <p className={styles.textBody}>
              Seus dados nunca são vendidos. Eles são utilizados exclusivamente para personalizar seus prompts e melhorar a precisão dos nossos modelos de IA.
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <DocumentTextIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>Seus Direitos</h3>
            <p className={styles.textBody}>
              Você possui controle total. A qualquer momento, pode solicitar o acesso, retificação ou exclusão definitiva dos seus dados de nossa base.
            </p>
          </div>
        </div>

        {/* Rodapé Interno de Contato */}
        <footer className={styles.privacyFooter}>
          <h2 className={styles.textCardTitle}>Dúvidas sobre sua segurança?</h2>
          <p className={styles.textBody}>
            Nossa equipe de Proteção de Dados está disponível através do e-mail: 
            <span className={styles.textHighlight}> ai2you@outlook.com</span>
          </p>
          <p className={styles.textSmall}>Última atualização: Janeiro de 2026</p>
        </footer>
      </div>
    </main>
  );
}