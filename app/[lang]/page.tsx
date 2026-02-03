"use client";

import { Typography, Row, Col, Card, Divider } from 'antd';
import Link from 'next/link';
import styles from './Home.module.css';
import { ShareMenu } from './ShareMenu';
import { useParams } from 'next/navigation';
import pt from '@/i18n/pt.json';
import en from '@/i18n/en.json';

 import { 
   SparklesIcon,
   CommandLineIcon,
   CpuChipIcon,
   CheckBadgeIcon,
   ArrowRightIcon
 } from '@heroicons/react/24/outline';

import nichesJson from '@/i18n/niches.json';
import { IconName, iconRegistry } from '@/components/iconRegistry';

const niches = Object.entries(nichesJson).map(([slug, data]) => {
  const Icon = iconRegistry[data.icon];

  return {
    slug,
    title: data.title,
    icon: data.icon
  };
});


const dictionaries = { 'pt': pt, 'en': en };

export function useHomeDictionary() {
  const { lang } = useParams();
  return dictionaries[lang as keyof typeof dictionaries] ?? pt;
}

const { Title, Text, Paragraph } = Typography;

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = useParams();
  const dict = useHomeDictionary();

  return (
    <main className={styles.container}>
      <section className={styles.hero}>    
        <div className={styles.heroGradient} />
        
        <div className={styles.centeredContainer}>
          <div className={`${styles.badge} ${styles.animateFadeIn}`}>
            <SparklesIcon className={styles.iconAccent} />
            <span className={styles.badgeText}>{dict.home.badge}
            </span>
          </div>
          
          <h1 className={styles.textTitle}>
            {dict.home.title}
        <br />
            <span className={styles.textHighlight}>{dict.home.highlight}</span>
          </h1>

          <p className={styles.textSubtitle}>
            {dict.home.stop_try_and_start}<strong>{dict.home.doing}</strong>{dict.home.we_transform_text}
          </p>
        </div>

        <Link
          href={lang === 'pt' ? `/${lang}/gerador-de-prompt/` : `/${lang}/ai-prompt-generator/`}
          className={styles.ctaButton}
        >
          {lang === 'pt' ? 'Ver Nichos Disponíveis' : 'Browse Niches'}
          <ArrowRightIcon className={styles.ctaIcon} />
        </Link>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.infoGlassCard}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>{dict.home.how_does_ai2you_enhence_your_work}</h1>
            <p className={styles.paragraphMutedLarge}>{dict.home.our_platform_acts}</p>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <div className={styles.featureCard}>
                <div className={styles.stepIcon}>1</div>
                <div className={styles.iconWrapper}>
                  <CommandLineIcon className={styles.iconLargeAccent} />
                </div>
                <h1 className={styles.titleWhite}>{dict.home.reverse_engineering}</h1>
                <h2 className={styles.quoteText}>{dict.home.the_right_command}</h2>
                <p className={styles.mutedText}>{dict.home.we_structured_roles}</p>
              </div>
            </Col>

            <Col xs={24} md={8}>
              <div className={styles.featureCard}>
                <div className={styles.stepIcon}>2</div>
                <div className={styles.iconWrapper}>
                  <CpuChipIcon className={styles.iconLargeAccent} />
                </div>
                <h1 className={styles.titleWhite}>{dict.home.specialization}</h1>
                <h2 className={styles.quoteText}>{dict.home.each_niche_has}</h2>
                <p className={styles.mutedText}>{dict.home.we_use_frameworks}</p>
              </div>
            </Col>

            <Col xs={24} md={8}>
              <div className={styles.featureCard}>
                <div className={styles.stepIcon}>3</div>
                <div className={styles.iconWrapper}>
                  <CheckBadgeIcon className={styles.iconLargeAccent} />
                </div>
                <h1 className={styles.titleWhite}>{dict.home.magic_prompt}</h1>
                <h2 className={styles.quoteText}>{dict.home.copy_and_past}</h2>
                <p className={styles.mutedText}>{dict.home.optmized_command}</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

{/* 
      <section className={styles.sectionContainer}>
        <div className={styles.sectionHeaderRow}>
          <h1 className={styles.headingPrimary}>{dict.home.select_your_niche}</h1>
          <div className={styles.desktopFlex}>
            <span className={styles.badgeText}>Role-Based Prompts</span>
            
            <span className={styles.badgeText}>Multi-Model Ready</span>
          </div>
        </div>

        <Row gutter={[24, 24]}>
          {niches.map((niche) => {
            const Icon = iconRegistry[niche.icon]

            return (
              <Col xs={24} sm={12} md={8} lg={6} key={niche.slug}>
                <Link href={`/${lang}${dict.home.prompt_slug}${niche.slug}`}>
                  <div className={styles.marginBottom2Rem}>
                    <div className={styles.featureCard}>
                      <div className={styles.nicheContent}>
                        <div className={`${styles.nicheIcon}`}>
                          <Icon size={48}/> 
                        </div>

                        <h3 className={styles.nicheTitle}>
                          {niche.title}
                        </h3>

                        <div className={styles.ctaText}>
                          {dict.home.generate_engineering}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </section> */}

      <footer className={styles.heroContainer}>
        {/* <Divider className={styles.dividerSmall} /> */}
        <p className={styles.footerText}>{dict.home.ai2you_structured_prompt_engineering}</p>
        <p className={styles.helperText}>{dict.home.optimized_for_high_performance}</p>
      </footer>
      <ShareMenu />
    </main>
  );
}
