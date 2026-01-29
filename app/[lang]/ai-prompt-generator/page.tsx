import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import styles from './AiPromptGenerator.module.css';
import nichesJson from '@/i18n/niches.json';
import { iconRegistry } from '@/components/iconRegistry';
import { Typography, Row, Col, Card, Divider } from 'antd';

type PageProps = {
  params: {
    lang: string;
  };
};

const niches = Object.entries(nichesJson).map(([slug, data]) => {
  const Icon = iconRegistry[data.icon];

  return {
    slug,
    title: data.title,
    icon: Icon ? <Icon /> : null
  };
});

const { Title, Text, Paragraph } = Typography;

/**
 * SEO dinâmico por idioma
 */
async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const lang = params.lang;
  const isPT = lang === 'pt';

  return {
    title: isPT
      ? 'Gerador de Prompt para IA | AI2You'
      : 'AI Prompt Generator | AI2You',
    description: isPT
      ? 'Crie prompts avançados e profissionais para inteligência artificial em diversos nichos.'
      : 'Create advanced and professional AI prompts across multiple niches.',
    alternates: {
      canonical: `/${params.lang}/ai-prompt-generator`,
    },
  };
}

export default async function AiPromptGeneratorPage({ params }: PageProps) {
  const { lang } = await params;
  const isPT = lang === 'pt';

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>
          <SparklesIcon className={styles.heroIcon} />
          <span>
            {isPT
              ? 'Engenharia de Prompt Profissional'
              : 'Professional Prompt Engineering'}
          </span>
        </div>

        <h1 className={styles.title}>
          {isPT ? 'Gerador de Prompt para IA' : 'AI Prompt Generator'}
          <br />
          <span className={styles.highlight}>
            {isPT ? 'Resultados de Alto Nível' : 'High-Quality Results'}
          </span>
        </h1>

        <p className={styles.subtitle}>
          {isPT
            ? 'Crie prompts otimizados para diferentes nichos e extraia o máximo da inteligência artificial.'
            : 'Create optimized prompts for different niches and get the most out of artificial intelligence.'}
        </p>

        <Link
          href={`/${params.lang}/ai-prompt-generator/niches`}
          className={styles.ctaButton}
        >
          {isPT ? 'Ver Nichos Disponíveis' : 'Browse Niches'}
          <ArrowRightIcon className={styles.ctaIcon} />
        </Link>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h3>
            {isPT ? 'Prompts Especializados' : 'Specialized Prompts'}
          </h3>
          <p>
            {isPT
              ? 'Cada nicho possui estruturas e estratégias próprias.'
              : 'Each niche has its own structure and strategies.'}
          </p>
        </div>

        <div className={styles.featureCard}>
          <h3>
            {isPT ? 'Foco em Resultados' : 'Results-Oriented'}
          </h3>
          <p>
            {isPT
              ? 'Prompts pensados para performance, clareza e conversão.'
              : 'Prompts designed for performance, clarity and conversion.'}
          </p>
        </div>

        <div className={styles.featureCard}>
          <h3>
            {isPT ? 'Simples e Poderoso' : 'Simple and Powerful'}
          </h3>
          <p>
            {isPT
              ? 'Interface intuitiva com controle total do prompt.'
              : 'Intuitive interface with full control over the prompt.'}
          </p>
        </div>
      </section>

      {/* --- NICHE GRID --- */}
      <section className={styles.sectionContainer}>
        <div className={styles.sectionHeaderRow}>
          <h1 className={styles.headingPrimary}>{"dict.home.select_your_niche"}</h1>
          <div className={styles.desktopFlex}>
            <span className={styles.badgeText}>Role-Based Prompts</span>
            {/* <Divider orientation="vertical" className={styles.dividerSmall} /> */}
            <span className={styles.badgeText}>Multi-Model Ready</span>
          </div>
        </div>

        <Row gutter={[24, 24]}>
          {niches.map((niche) => {
            const Icon = niche.icon;

            return (
              <Col xs={24} sm={12} md={8} lg={6} key={niche.slug}>
                <Link href={`/${lang}${"dict.home.prompt_slug}${niche.slug"}`}>
                  <div className={styles.marginBottom2Rem}>
                    <div className={styles.featureCard}>
                      <div className={styles.nicheContent}>
                        <div className={`${styles.iconWrapper} ${styles.nicheIcon}`}>
                          {/* <Icon className={styles.nicheIcon} /> */}
                          {niche.icon}
                        </div>

                        <h3 className={styles.nicheTitle}>
                          {niche.title}
                        </h3>

                        <div className={styles.ctaText}>
                          {"dict.home.generate_engineering"}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </section>

            {/* --- FOOTER INFORMATIVO --- */}
      <footer className={styles.heroContainer}>
        {/* <Divider className={styles.dividerSmall} /> */}
        <p className={styles.footerText}>{"dict.home.ai2you_structured_prompt_engineering"}</p>
        <p className={styles.helperText}>{"dict.home.optimized_for_high_performance"}</p>
      </footer>
    </main>
  );
}
