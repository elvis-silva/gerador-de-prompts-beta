import React from 'react';
import Head from 'next/head';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  EyeIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline';
import styles from './Privacy.module.css';
import { useI18n } from '@/hooks/useI18n';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Privacidade({ params }: PageProps) {
  const { lang } = await params;
  const t = useI18n(lang).privacy;
  return (
     <main className={styles.main}>
      <Head>
        <title>{t.meta.title}</title>
      </Head>

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.textOverline}>
            {t.header.overline}
          </span>

          <h1 className={styles.textTitle}>
            {t.header.title}{' '}
            <span className={styles.textHighlight}>
              {t.header.highlight}
            </span>
          </h1>

          <p className={styles.textSubtitle}>
            {t.header.subtitle}
          </p>
        </header>

        {/* Main Card */}
        <section className={styles.glassCard}>
          <div className={styles.iconWrapper}>
            <ShieldCheckIcon className={styles.iconPrimary} />
          </div>

          <h2 className={styles.textCardTitle}>
            {t.sections.primary.title}
          </h2>

          <p className={styles.textBody}>
            {t.sections.primary.description}
          </p>
        </section>

        {/* Grid */}
        <div className={styles.grid}>
          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <LockClosedIcon className={styles.iconPrimary} />
            </div>

            <h3 className={styles.textCardTitle}>
              {t.sections.grid[0].title}
            </h3>

            <p className={styles.textBody}>
              {t.sections.grid[0].description}
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <EyeIcon className={styles.iconPrimary} />
            </div>

            <h3 className={styles.textCardTitle}>
              {t.sections.grid[1].title}
            </h3>

            <p className={styles.textBody}>
              {t.sections.grid[1].description}
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <DocumentTextIcon className={styles.iconPrimary} />
            </div>

            <h3 className={styles.textCardTitle}>
              {t.sections.grid[2].title}
            </h3>

            <p className={styles.textBody}>
              {t.sections.grid[2].description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.privacyFooter}>
          <h2 className={styles.textCardTitle}>
            {t.footer.title}
          </h2>

          <p className={styles.textBody}>
            {t.footer.description}
            <span className={styles.textHighlight}>
              {' '}ai2you@outlook.com
            </span>
          </p>

          <p className={styles.textSmall}>
            {t.footer.extra}
          </p>
        </footer>
      </div>
    </main>
  );
}