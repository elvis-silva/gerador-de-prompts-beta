import React from 'react';
import Head from 'next/head';
import { 
  ScaleIcon, 
  UserGroupIcon, 
  ShieldExclamationIcon, 
  CodeBracketSquareIcon 
} from '@heroicons/react/24/outline';
import styles from './Terms.module.css';
import { useI18n } from '@/hooks/useI18n';

interface PageProps {
  params: Promise<{
    lang: 'pt' | 'en';
  }>;
}

export default async function TermosDeUso({ params }: PageProps) {
  const { lang } = await params;
  const t = useI18n(lang).terms;

  return (
    <main className={styles.main}>
      <Head>
        <title>{t.meta.title}</title>
      </Head>

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.textOverline}>{t.header.overline}</span>
          <h1 className={styles.textTitle}>
            {t.header.title}{' '}
            <span className={styles.textHighlight}>{t.header.highlight}</span>
          </h1>
          <p className={styles.textSubtitle}>
            {t.header.subtitle}
          </p>
        </header>

        {/* Aceitação */}
        <section className={styles.glassCard}>
          <div className={styles.iconWrapper}>
            <ScaleIcon className={styles.iconPrimary} />
          </div>
          <h2 className={styles.textCardTitle}>
            {t.acceptance.title}
          </h2>
          <p className={styles.textBody}>
            {t.acceptance.description.prefix}{' '}
            <span className={styles.textHighlight}>AI2You</span>
            {t.acceptance.description.suffix}
          </p>
        </section>

        {/* Cláusulas */}
        <div className={styles.grid}>
          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <CodeBracketSquareIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>
              {t.license.title}
            </h3>
            <p className={styles.textBody}>
              {t.license.description}
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <UserGroupIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>
              {t.responsibility.title}
            </h3>
            <p className={styles.textBody}>
              {t.responsibility.description}
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <ShieldExclamationIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>
              {t.limitations.title}
            </h3>
            <p className={styles.textBody}>
              {t.limitations.description}
            </p>
          </div>
        </div>

        {/* Rodapé */}
        <footer className={styles.termosFooter}>
          <h2 className={styles.textCardTitle}>
            {t.footer.title}
          </h2>
          <p className={styles.textBody}>
            {t.footer.description}
          </p>
          <p className={styles.textSmall}>
            {t.footer.validity}
          </p>
        </footer>
      </div>
    </main>
  );
}
