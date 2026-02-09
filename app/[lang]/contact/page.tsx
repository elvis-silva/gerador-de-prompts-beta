import React from 'react';
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import styles from './Contact.module.css';
import { useI18n } from '@/hooks/useI18n';

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function Contact({ params }: PageProps) {
  const { lang } = await params;
  const t = useI18n(lang).contact;

  return (
    <main className={styles.main}>
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

        <div className={styles.grid}>
          {/* Info Section */}
          <section className={styles.infoSection}>
            <div className={styles.glassCard}>
              <h2 className={styles.textCardTitle}>
                {t.sections.primary.title}
              </h2>

              <p className={styles.textBody}>
                {t.sections.primary.description}
              </p>

              <ul className={styles.list}>
                {t.sections.primary.list.map((item: any, index: any) => (
                  <li key={index}>
                    <SparklesIcon className={styles.listIcon} /> {item}
                  </li>
                ))}
              </ul>

              <p className={styles.textBody}>
                {t.sections.primary.footer}{' '}
                <span className={styles.textHighlight}>
                  {t.sections.primary.highlight}
                </span>
              </p>
            </div>
          </section>

          {/* Channels Section */}
          <section className={styles.channelsSection}>
            <div className={styles.pillCard}>
              <div className={styles.iconWrapper}>
                <EnvelopeIcon className={styles.iconPrimary} />
              </div>
              <div>
                <h3 className={styles.textCardTitle}>
                  {t.sections.channels[0].title}
                </h3>
                <p className={styles.textBody}>
                  {t.sections.channels[0].value}
                </p>
              </div>
            </div>

            <div className={styles.pillCard}>
              <div className={styles.iconWrapper}>
                <ChatBubbleLeftRightIcon className={styles.iconPrimary} />
              </div>
              <div>
                <h3 className={styles.textCardTitle}>
                  {t.sections.channels[1].title}
                </h3>
                <p className={styles.textBody}>
                  {t.sections.channels[1].value}
                </p>
              </div>
            </div>

            <div className={styles.pillCard}>
              <div className={styles.iconWrapper}>
                <MapPinIcon className={styles.iconPrimary} />
              </div>
              <div>
                <h3 className={styles.textCardTitle}>
                  {t.sections.channels[2].title}
                </h3>
                <p className={styles.textBody}>
                  {t.sections.channels[2].value}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
