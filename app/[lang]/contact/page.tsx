import React from 'react';
import { 
  EnvelopeIcon, 
  ChatBubbleLeftRightIcon, 
  MapPinIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';
import styles from './Contact.module.css';

export default function Contato() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header no padrão das páginas institucionais */}
        <header className={styles.header}>
          <span className={styles.textOverline}>Canais de Atendimento</span>
          <h1 className={styles.textTitle}>
            Vamos construir o <span className={styles.textHighlight}>amanhã?</span>
          </h1>
          <p className={styles.textSubtitle}>
            Estamos prontos para ouvir suas ideias, resolver seus problemas técnicos ou simplesmente bater um papo sobre o futuro da IA.
          </p>
        </header>

        <div className={styles.grid}>
          {/* Coluna de Informações / Texto Atraente */}
          <section className={styles.infoSection}>
            <div className={styles.glassCard}>
              <h2 className={styles.textCardTitle}>Por que nos contatar?</h2>
              <p className={styles.textBody}>
                Na <strong>AI2You</strong>, acreditamos que a tecnologia bem feita é fruto de clareza e propósito. Se você busca:
              </p>
              <ul className={styles.list}>
                <li><SparklesIcon className={styles.listIcon} /> Parcerias em projetos de IA</li>
                <li><SparklesIcon className={styles.listIcon} /> Suporte especializado em Engenharia de Prompt</li>
                <li><SparklesIcon className={styles.listIcon} /> Consultoria para nichos específicos</li>
              </ul>
              <p className={styles.textBody}>
                Nossa equipe técnica responderá em menos de 24 horas úteis. 
                <span className={styles.textHighlight}> Sua inovação não pode esperar.</span>
              </p>
            </div>
          </section>

          {/* Coluna de Canais Diretos */}
          <section className={styles.channelsSection}>
            <div className={styles.pillCard}>
              <div className={styles.iconWrapper}>
                <EnvelopeIcon className={styles.iconPrimary} />
              </div>
              <div>
                <h3 className={styles.textCardTitle}>E-mail Oficial</h3>
                <p className={styles.textBody}>ai2you@outlook.com</p>
              </div>
            </div>

            <div className={styles.pillCard}>
              <div className={styles.iconWrapper}>
                <ChatBubbleLeftRightIcon className={styles.iconPrimary} />
              </div>
              <div>
                <h3 className={styles.textCardTitle}>Suporte Técnico</h3>
                <p className={styles.textBody}>Atendimento via Dashboard em breve</p>
              </div>
            </div>

            <div className={styles.pillCard}>
              <div className={styles.iconWrapper}>
                <MapPinIcon className={styles.iconPrimary} />
              </div>
              <div>
                <h3 className={styles.textCardTitle}>Localização</h3>
                <p className={styles.textBody}>Hub Digital - Inovação Sem Fronteiras</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}