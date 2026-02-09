import React from 'react';
import Head from 'next/head';
import { 
  CookieIcon, 
  ChartBarIcon, 
  LucideAlignHorizontalDistributeCenter, 
  LucidePrinter 
} from 'lucide-react';
import styles from './Cookies.module.css';
import { useI18n } from '@/hooks/useI18n';

interface PageProps {
  params: Promise<{
    lang: 'pt' | 'en';
  }>;
}

export default async function CookiesPage({ params }: PageProps) {
  const { lang } = await params;
  const t = useI18n(lang).cookies;

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

        {/* Destaque */}
        <section className={styles.glassCard}>
          <div className={styles.iconWrapper}>
            <CookieIcon className={styles.iconPrimary} />
          </div>
          <h2 className={styles.textCardTitle}>
            {t.intro.title}
          </h2>
          <p className={styles.textBody}>
            {t.intro.description}
          </p>
        </section>

        {/* Categorias */}
        <div className={styles.grid}>
          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <LucidePrinter className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>
              {t.categories.essential.title}
            </h3>
            <p className={styles.textBody}>
              {t.categories.essential.description}
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <ChartBarIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>
              {t.categories.analytics.title}
            </h3>
            <p className={styles.textBody}>
              {t.categories.analytics.description}
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <LucideAlignHorizontalDistributeCenter className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>
              {t.categories.functional.title}
            </h3>
            <p className={styles.textBody}>
              {t.categories.functional.description}
            </p>
          </div>
        </div>

        {/* Gestão */}
        <footer className={styles.footerSection}>
          <div className={styles.glassCard}>
            <h2 className={styles.textCardTitle}>
              {t.management.title}
            </h2>
            <p className={styles.textBody}>
              {t.management.description}
            </p>
            <p className={styles.textSmall}>
              {t.management.support}{' '}
              <span className={styles.textHighlight}>
                ai2you@outlook.com
              </span>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
