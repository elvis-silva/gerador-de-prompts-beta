import React from 'react';
import Head from 'next/head';
import { 
  ShieldCheckIcon, 
  NoSymbolIcon, 
  LockClosedIcon, 
  ArrowsRightLeftIcon 
} from '@heroicons/react/24/outline';
import styles from './Lgpd.module.css';

export default function Lgpd() {
  return (
    <main className={styles.main}>
      <Head>
        <title>LGPD | AI2You</title>
      </Head>

      <div className={styles.container}>
        {/* Header no padrão de Elite */}
        <header className={styles.header}>
          <span className={styles.textOverline}>Conformidade Nacional</span>
          <h1 className={styles.textTitle}>
            Compromisso <span className={styles.textHighlight}>LGPD</span>
          </h1>
          <p className={styles.textSubtitle}>
            Como a AI2You se enquadra na Lei 13.709/2018 e protege sua soberania digital.
          </p>
        </header>

        {/* Destaque: A política de Não-Armazenamento */}
        <section className={styles.glassCard}>
          <div className={styles.iconWrapper}>
            <NoSymbolIcon className={styles.iconPrimary} />
          </div>
          <h2 className={styles.textCardTitle}>Privacidade por Design: Zero Dados Armazenados</h2>
          <p className={styles.textBody}>
            O diferencial técnico da <span className={styles.textHighlight}>AI2You</span> é a nossa arquitetura de fluxo efêmero. 
            <strong> Não coletamos, não processamos em nossos servidores e não armazenamos dados pessoais</strong> dos usuários que utilizam nossos geradores de prompts.
          </p>
        </section>

        {/* Pilares da Responsabilidade */}
        <div className={styles.grid}>
          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <LockClosedIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>Finalidade Única</h3>
            <p className={styles.textBody}>
              Os dados inseridos nos campos de configuração de prompt servem exclusivamente para a montagem do comando em tempo de execução no seu navegador.
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <ArrowsRightLeftIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>Livre Acesso</h3>
            <p className={styles.textBody}>
              Como não mantemos banco de dados de usuários, você detém 100% do controle sobre as informações inseridas em nossa interface local.
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <ShieldCheckIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>Segurança Técnica</h3>
            <p className={styles.textBody}>
              Utilizamos protocolos HTTPS de última geração para garantir que, enquanto você navega, sua conexão esteja blindada contra interceptações.
            </p>
          </div>
        </div>

        {/* FAQ LGPD */}
        <footer className={styles.lgpdFooter}>
          <h2 className={styles.textCardTitle}>Responsabilidade do Agente</h2>
          <p className={styles.textBody}>
            A AI2You atua apenas como facilitadora tecnológica. Nos enquadramos como uma plataforma que respeita o princípio da 
            <span className={styles.textHighlight}> minimização de dados</span>, coletando zero informações identificáveis (PII).
          </p>
          <div className={styles.contactBox}>
            <p className={styles.textBody}>Encarregado de Dados (DPO): <strong>ai2you@outlook.com</strong></p>
          </div>
        </footer>
      </div>
    </main>
  );
}