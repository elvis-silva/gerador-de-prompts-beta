import { Typography, Row, Col, Card, Divider } from 'antd';
import Link from 'next/link';
import styles from './Home.module.css';
import { ShareMenu } from './ShareMenu';
import pt from '@/i18n/pt.json';
import en from '@/i18n/en.json';
import { loadDictionary } from '@/lib/i18n';
import '@/styles/globals.css'
// import { useParams } from 'next/navigation';
// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'
// import { useHomeDictionary } from '../utils/utils';

 import { 
   SparklesIcon,
   CommandLineIcon,
   CpuChipIcon,
   CheckBadgeIcon,
   ArrowRightIcon
 } from '@heroicons/react/24/outline';

// import nichesJson from '@/i18n/niches.json';
import { IconName, iconRegistry } from '@/components/iconRegistry';

// const niches = Object.entries(nichesJson).map(([slug, data]) => {
//   const Icon = iconRegistry[data.icon];

//   return {
//     slug,
//     title: data.title,
//     icon: data.icon
//   };
// });


const dictionaries = { 'pt': pt, 'en': en };

// export function useHomeDictionary() {
//   const { lang } = useParams();
//   return dictionaries[lang as keyof typeof dictionaries] ?? pt;
// }

const { Title, Text, Paragraph } = Typography;

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  // const cookieStore = await cookies()
  // const lang = cookieStore.get('lang')?.value ?? 'pt'

  // if (lang === 'en') redirect('/en')
  // redirect('/pt')
  const dict = dictionaries[lang as keyof typeof dictionaries] ?? pt;//useHomeDictionary();

  return (
    <main className="container">
      <section className="hero">    
        {/* <div className="heroGradient" /> */}
        
        <div className="centeredContainer">
          <div className={styles.heroBadge}>
            <SparklesIcon className="iconAccent" />
            <span className={styles.textSmall}>{dict.home.badge}
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
          <span>{lang === 'pt' ? 'Ver Nichos Disponíveis' : 'Browse Niches'}</span>
          <ArrowRightIcon className={styles.ctaIcon} />
        </Link>
      </section>

      <section className={styles.glassCard}>
        <div className="sectionHeader">
          <h1 className={styles.textCardTitle}>{dict.home.how_does_ai2you_enhence_your_work}</h1>
          <p className={styles.textSubtitle}>{dict.home.our_platform_acts}</p>
        </div>
      </section>

      <div className={styles.grid}>
        
        <div className={styles.featureCard}>
          <div className={styles.stepIcon}>1</div>
          <div className={styles.iconWrapper}>
            <CommandLineIcon className={styles.iconPrimary} />
          </div>
          <h1 className={styles.textCardTitle}>{dict.home.reverse_engineering}</h1>
          <h2 className={styles.quoteText}>{dict.home.the_right_command}</h2>
          <p className={styles.textBody}>{dict.home.we_structured_roles}</p>
        </div>
      

    
        <div className={styles.featureCard}>
          <div className={styles.stepIcon}>2</div>
          <div className={styles.iconWrapper}>
            <CpuChipIcon className={styles.iconPrimary} />
          </div>
          <h1 className={styles.textCardTitle}>{dict.home.specialization}</h1>
          <h2 className={styles.quoteText}>{dict.home.each_niche_has}</h2>
          <p className={styles.textBody}>{dict.home.we_use_frameworks}</p>
        </div>
    

    
        <div className={styles.featureCard}>
          <div className={styles.stepIcon}>3</div>
          <div className={styles.iconWrapper}>
            <CheckBadgeIcon className={styles.iconPrimary} />
          </div>
          <h1 className={styles.textCardTitle}>{dict.home.magic_prompt}</h1>
          <h2 className={styles.quoteText}>{dict.home.copy_and_past}</h2>
          <p className={styles.textBody}>{dict.home.optmized_command}</p>
        </div>
      
      </div>
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
        <p className={styles.textCardTitle}>{dict.home.ai2you_structured_prompt_engineering}</p>
        <p className={styles.textHighlight}>{dict.home.optimized_for_high_performance}</p>
      </footer>
      <ShareMenu />
    </main>
  );
}
