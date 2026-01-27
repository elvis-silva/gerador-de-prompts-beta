"use client";

import { Typography, Row, Col, Card, Divider } from 'antd';
import Link from 'next/link';
import { 
  MegaphoneIcon, 
  CodeBracketIcon, 
  CurrencyDollarIcon, 
  PencilSquareIcon, 
  ScaleIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  HeartIcon, 
  HomeModernIcon, 
  PresentationChartLineIcon,
  SparklesIcon,
  CommandLineIcon,
  CpuChipIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import styles from './Home.module.css';
import { ShareMenu } from './ShareMenu';
import { useParams } from 'next/navigation';
import pt from '@/i18n/pt.json';
import en from '@/i18n/en.json';

const dictionaries = { 'pt': pt, 'en': en };

export function useHomeDictionary() {
  const { lang } = useParams();
  return dictionaries[lang as keyof typeof dictionaries] ?? pt;
}

const { Title, Text, Paragraph } = Typography;

// Mapeamento original de nichos
const niches = [
  { slug: 'digital-marketing', title: 'Marketing', icon: MegaphoneIcon, color: 'text-blue-500' },
  { slug: 'software-development', title: 'Programação', icon: CodeBracketIcon, color: 'text-emerald-500' },
  { slug: 'sales-expert', title: 'Vendas', icon: CurrencyDollarIcon, color: 'text-amber-500' },
  { slug: 'content-creator', title: 'Conteúdo', icon: PencilSquareIcon, color: 'text-purple-500' },
  { slug: 'legal-assistant', title: 'Jurídico', icon: ScaleIcon, color: 'text-slate-600' },
  { slug: 'human-resources', title: 'RH', icon: UserGroupIcon, color: 'text-pink-500' },
  { slug: 'education-tutor', title: 'Educação', icon: AcademicCapIcon, color: 'text-indigo-500' },
  { slug: 'medical-health', title: 'Saúde', icon: HeartIcon, color: 'text-red-500' },
  { slug: 'real-estate', title: 'Imobiliário', icon: HomeModernIcon, color: 'text-cyan-600' },
  { slug: 'finances', title: 'Finanças', icon: PresentationChartLineIcon, color: 'text-green-600' },
];

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = useParams();
  const dict = useHomeDictionary();

  return (
   <main className={styles.container}>
  {/* --- HERO SECTION REFINADA --- */}
  <section className={styles.hero}>
    {/* Background Glow dinâmico via CSS Module */}
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
  </section>

  {/* --- NOVA SEÇÃO: GUIA PROFISSIONAL DE USO (Glassmorphism) --- */}
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

  {/* --- NICHE GRID ORIGINAL COM ESTILO REFORÇADO --- */}
  <section className={styles.sectionContainer}>
    <div className={styles.sectionHeaderRow}>
      <h1 className={styles.headingPrimary}>{dict.home.select_your_niche}</h1>
      <div className={styles.desktopFlex}>
        <span className={styles.badgeText}>Role-Based Prompts</span>
        <Divider orientation="vertical" className={styles.dividerSmall} />
        <span className={styles.badgeText}>Multi-Model Ready</span>
      </div>
    </div>

    <Row gutter={[24, 24]}>
      {niches.map((niche) => {
        const Icon = niche.icon;

        return (
          <Col xs={24} sm={12} md={8} lg={6} key={niche.slug}>
            <Link href={`/${lang}${dict.home.prompt_slug}${niche.slug}`}>
              <div className={styles.marginBottom2Rem}>
                <div className={styles.featureCard}>
                  <div className={styles.nicheContent}>
                    <div className={`${styles.iconWrapper} ${styles[niche.color]}`}>
                      <Icon className={styles.nicheIcon} />
                    </div>

                    <h3 className={styles.nicheTitle}>
                      {niche.title}
                    </h3>

                    <div className={styles.ctaText}>
                      Gerar Engenharia
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
    <Divider className={styles.dividerSmall} />
    <p className={styles.footerText}>{dict.home.ai2you_structured_prompt_engineering}</p>
    <p className={styles.helperText}>{dict.home.optimized_for_high_performance}</p>
  </footer>
  <ShareMenu />
</main>
  );
}

/*
"use client";

import React from 'react';
import { Typography, Row, Col, Card, Divider } from 'antd';
import Link from 'next/link';
import { 
  MegaphoneIcon, 
  CodeBracketIcon, 
  CurrencyDollarIcon, 
  PencilSquareIcon, 
  ScaleIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  HeartIcon, 
  HomeModernIcon, 
  PresentationChartLineIcon,
  SparklesIcon,
  CommandLineIcon,
  CpuChipIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import styles from './Home.module.css';

const { Title, Text, Paragraph } = Typography;

const niches = [
  { slug: 'digital-marketing', title: 'Marketing', icon: MegaphoneIcon, color: 'text-blue-500' },
  { slug: 'software-development', title: 'Programação', icon: CodeBracketIcon, color: 'text-emerald-500' },
  { slug: 'sales-expert', title: 'Vendas', icon: CurrencyDollarIcon, color: 'text-amber-500' },
  { slug: 'content-creator', title: 'Conteúdo', icon: PencilSquareIcon, color: 'text-purple-500' },
  { slug: 'legal-assistant', title: 'Jurídico', icon: ScaleIcon, color: 'text-slate-600' },
  { slug: 'human-resources', title: 'RH', icon: UserGroupIcon, color: 'text-pink-500' },
  { slug: 'education-tutor', title: 'Educação', icon: AcademicCapIcon, color: 'text-indigo-500' },
  { slug: 'medical-health', title: 'Saúde', icon: HeartIcon, color: 'text-red-500' },
  { slug: 'real-estate', title: 'Imobiliário', icon: HomeModernIcon, color: 'text-cyan-600' },
  { slug: 'finances', title: 'Finanças', icon: PresentationChartLineIcon, color: 'text-green-600' },
];

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = React.use(params);

  return (
    <main className="bg-[#0f172a] min-h-screen pb-20 overflow-x-hidden">
      <section className={`${styles.hero} relative py-24 px-6`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <SparklesIcon className="h-5 w-5 text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">O Futuro da Engenharia de Prompt</span>
          </div>
          
          <h1 className={`${styles.textTitle} text-white mb-6`}>
            A Inteligência Artificial precisa de <br />
            <span className={styles.textHighlight}>Instruções de Elite</span>
          </h1>

          <p className={`${styles.textSubtitle} !text-slate-400 max-w-3xl mx-auto mb-12`}>
            A AI2You é a sua camada de especialização técnica. Não apenas "conversamos" com a IA; nós a <strong>configuramos</strong> através de comandos estruturados que eliminam alucinações e maximizam resultados profissionais.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} lg={10}>
              <Title level={2} className="!text-white !mb-6">Como funciona a <span className="text-blue-500">AI2You?</span></Title>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">1</div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Escolha sua Especialidade</h4>
                    <p className="text-slate-400">Selecione o nicho de mercado que deseja atuar. Cada categoria possui lógica própria.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">2</div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Defina o Contexto Profissional</h4>
                    <p className="text-slate-400">Informe o cargo, tom de voz e o objetivo. Nosso motor gera a engenharia por trás do comando.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">3</div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Execute com Perfeição</h4>
                    <p className="text-slate-400">Copie o "Prompt Mágico" e cole no ChatGPT ou Claude para obter respostas de nível sênior.</p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col xs={24} lg={14}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-slate-800/40 border-slate-700 hover:border-blue-500/50 transition-colors">
                  <CommandLineIcon className="h-8 w-8 text-blue-400 mb-4" />
                  <h5 className="text-white font-bold mb-2">Engenharia Estruturada</h5>
                  <p className="text-slate-400 text-sm">Usamos frameworks como Framework AIDA e Chain-of-Thought para guiar a IA.</p>
                </Card>
                <Card className="bg-slate-800/40 border-slate-700 hover:border-emerald-500/50 transition-colors">
                  <CheckBadgeIcon className="h-8 w-8 text-emerald-400 mb-4" />
                  <h5 className="text-white font-bold mb-2">Zero Alucinação</h5>
                  <p className="text-slate-400 text-sm">Instruções que limitam a criatividade indesejada em contextos técnicos.</p>
                </Card>
                <Card className="bg-slate-800/40 border-slate-700 hover:border-amber-500/50 transition-colors">
                  <CpuChipIcon className="h-8 w-8 text-amber-400 mb-4" />
                  <h5 className="text-white font-bold mb-2">Agnóstico a Modelos</h5>
                  <p className="text-slate-400 text-sm">Otimizado para GPT-4o, Claude 3.5 Sonnet e Google Gemini Pro.</p>
                </Card>
                <Card className="bg-slate-800/40 border-slate-700 hover:border-purple-500/50 transition-colors">
                  <SparklesIcon className="h-8 w-8 text-purple-400 mb-4" />
                  <h5 className="text-white font-bold mb-2">Prompt Dinâmico</h5>
                  <p className="text-slate-400 text-sm">O código se adapta em tempo real conforme suas necessidades de projeto.</p>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Title level={3} className="!text-white !mb-2">Selecione seu campo de atuação</Title>
          <p className="text-slate-500">Clique em uma categoria para iniciar a geração do seu prompt especializado.</p>
        </div>

        <Row gutter={[24, 24]} className="niche-grid">
          {niches.map((niche) => {
            const Icon = niche.icon;
            return (
              <Col xs={24} sm={12} md={8} lg={6} xl={4.8} key={niche.slug}>
                <Link href={`/${lang}/ai-prompt-generate/${niche.slug}`}>
                  <Card
                    hoverable
                    className="niche-card group !bg-slate-900/40 !border-slate-800 hover:!border-blue-500/50 hover:!shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 rounded-2xl"
                  >
                    <div className="card-content flex flex-col items-center py-4">
                      <div className={`icon-container ${niche.color} group-hover:scale-110 transition-transform bg-slate-800 p-4 rounded-xl mb-4`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {niche.title}
                      </h3>
                      <div className="mt-2 text-xs text-slate-500 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        Acessar Prompt →
                      </div>
                    </div>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </section>

      <section className="max-w-4xl mx-auto mt-32 px-6">
        <div className="text-center p-12 border-t border-slate-800">
          <Paragraph className="!text-slate-500 !text-sm italic">
            "A qualidade da resposta da IA é diretamente proporcional à qualidade do seu comando."
          </Paragraph>
          <div className="flex justify-center gap-6 mt-6 grayscale opacity-50">
             <span className="text-white font-bold text-xl">AI2You</span>
          </div>
        </div>
      </section>
    </main>
  );
}
*/
/*
"use client";

import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import Link from 'next/link';
import { 
  MegaphoneIcon, 
  CodeBracketIcon, 
  CurrencyDollarIcon, 
  PencilSquareIcon, 
  ScaleIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  HeartIcon, 
  HomeModernIcon, 
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';
import styles from './Home.module.css';


const niches = [
  { slug: 'digital-marketing', title: 'Marketing', icon: MegaphoneIcon, color: 'text-blue-500' },
  { slug: 'software-development', title: 'Programação', icon: CodeBracketIcon, color: 'text-emerald-500' },
  { slug: 'sales-expert', title: 'Vendas', icon: CurrencyDollarIcon, color: 'text-amber-500' },
  { slug: 'content-creator', title: 'Conteúdo', icon: PencilSquareIcon, color: 'text-purple-500' },
  { slug: 'legal-assistant', title: 'Jurídico', icon: ScaleIcon, color: 'text-slate-600' },
  { slug: 'human-resources', title: 'RH', icon: UserGroupIcon, color: 'text-pink-500' },
  { slug: 'education-tutor', title: 'Educação', icon: AcademicCapIcon, color: 'text-indigo-500' },
  { slug: 'medical-health', title: 'Saúde', icon: HeartIcon, color: 'text-red-500' },
  { slug: 'real-estate', title: 'Imobiliário', icon: HomeModernIcon, color: 'text-cyan-600' },
  { slug: 'finances', title: 'Finanças', icon: PresentationChartLineIcon, color: 'text-green-600' },
];

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = React.use(params);

  return (
    <main>
      <section className={styles.hero}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={styles.textSubtitle}>
            Engenharia de Prompt Avançada
          <br />     
          </p>
          
          <h1 className={styles.textTitle}>
            Domine a IA com <br />
            <span className={styles.textHighlight}>Prompts de Elite</span>
          </h1>

          <p className={styles.textSubtitle}>
            Pare de "tentar" e comece a <strong>executar</strong>. Transformamos a complexidade da IA em comandos estruturados para diversos nichos estratégicos. 
          
          </p>

          <Row gutter={[24, 24]} className="niche-grid">
            {niches.map((niche) => {
              const Icon = niche.icon;
              return (
                <Col xs={24} sm={12} md={8} lg={6} xl={4.8} key={niche.slug}>
                  <Link href={`/${lang}/ai-prompt-generate/${niche.slug}`}>
                    <Card
                      hoverable
                      className="niche-card group"
                    >
                      <div className="card-content">
                        <div className={`icon-container ${niche.color} group-hover:scale-110 transition-transform`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-bold text-ai2you-dark mt-4 mb-2">
                          {niche.title}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </main>
  );
}
*/
/*
'use client';

import React from 'react';
import { Typography, Button, Row, Col, Card, Space, Divider } from 'antd';
import { 
  Zap, ShieldCheck, Cpu, Code2, 
  ArrowRight, MousePointerClick, MessageSquareText 
} from 'lucide-react';
import PromptForm from '@/components/promptForm/PromptForm'; 

const { Title, Paragraph, Text } = Typography;

export default function LandingPage({ dict }: { dict: any }) {
  const tCommon = dict?.common || {};

  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8">
            <Zap size={16} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium tracking-wide">AI Generativa ao seu alcance</span>
          </div>
          
          <Title className="!text-white !text-5xl md:!text-7xl !font-extrabold !mb-6 !leading-tight">
            Domine a IA com <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Prompts de Elite
            </span>
          </Title>
          
          <Paragraph className="!text-slate-400 text-xl max-w-3xl mx-auto mb-10">
            A **AI2You** elimina a tentativa e erro. Nossa plataforma transforma suas ideias em instruções precisas para extrair o máximo de performance do ChatGPT, Claude e Midjourney.
          </Paragraph>

          <Space size="middle">
            <Button type="primary" size="large" className="h-14 px-8 rounded-xl font-bold bg-blue-600">
              Começar Agora
            </Button>
            <Button ghost size="large" className="h-14 px-8 rounded-xl font-bold border-slate-700 hover:!border-blue-400">
              Ver Projetos
            </Button>
          </Space>
        </div>
      </section>

      <section className="py-24 bg-white/5 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Title level={2} className="!text-white">Por que usar a AI2You?</Title>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          </div>

          <Row gutter={[32, 32]}>
            {[
              {
                icon: <Cpu className="text-blue-400" size={32} />,
                title: "Engenharia de Prompt",
                desc: "Criamos a estrutura lógica (Role, Context, Task) para que a IA não sofra alucinações."
              },
              {
                icon: <Code2 className="text-indigo-400" size={32} />,
                title: "Soluções Customizadas",
                desc: "Desenvolvimento de softwares que já nascem integrados com as APIs de LLMs mais modernas."
              },
              {
                icon: <ShieldCheck className="text-emerald-400" size={32} />,
                title: "Eficiência Operacional",
                desc: "Reduza o tempo de criação de conteúdo e código em até 70% com automações inteligentes."
              }
            ].map((item, i) => (
              <Col xs={24} md={8} key={i}>
                <Card className="bg-slate-900/50 border-slate-800 h-full hover:border-blue-500/50 transition-all group">
                  <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <Title level={4} className="!text-white !mb-3">{item.title}</Title>
                  <Text className="text-slate-400">{item.desc}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl text-left">
              <Title level={2} className="!text-white !mb-4">Experimente na Prática</Title>
              <Paragraph className="!text-slate-400 text-lg">
                Utilize nosso gerador profissional abaixo para ver como uma estruturação correta muda o jogo.
              </Paragraph>
            </div>
            <div className="hidden md:block">
              <ArrowRight className="text-slate-700 animate-bounce-x" size={40} />
            </div>
          </div>
          
          <div className="bg-slate-900/30 p-4 md:p-8 rounded-[2rem] border border-white/5 shadow-2xl">
            <PromptForm dict={dict} />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-blue-600 to-indigo-700 p-12 rounded-[3rem] shadow-blue-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <MessageSquareText size={120} />
          </div>
          <Title level={2} className="!text-white !mb-6">Pronto para elevar seu nível técnico?</Title>
          <Paragraph className="!text-blue-100 text-lg mb-8">
            Seja para automação de processos ou consultoria em IA, Elvis Silva está pronto para ajudar seu projeto.
          </Paragraph>
          <Button size="large" className="h-16 px-12 rounded-full font-bold bg-white text-blue-600 hover:bg-slate-100 border-none scale-110">
            Fale Conosco Agora
          </Button>
        </div>
      </section>
    </div>
  );
}
*/ 

/*
"use client";
import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import Link from 'next/link';
import { 
  MegaphoneIcon, 
  CodeBracketIcon, 
  CurrencyDollarIcon, 
  PencilSquareIcon, 
  ScaleIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  HeartIcon, 
  HomeModernIcon, 
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';
import styles from './Home.module.css';


const niches = [
  { slug: 'digital-marketing', title: 'Marketing', icon: MegaphoneIcon, color: 'text-blue-500' },
  { slug: 'software-development', title: 'Programação', icon: CodeBracketIcon, color: 'text-emerald-500' },
  { slug: 'sales-expert', title: 'Vendas', icon: CurrencyDollarIcon, color: 'text-amber-500' },
  { slug: 'content-creator', title: 'Conteúdo', icon: PencilSquareIcon, color: 'text-purple-500' },
  { slug: 'legal-assistant', title: 'Jurídico', icon: ScaleIcon, color: 'text-slate-600' },
  { slug: 'human-resources', title: 'RH', icon: UserGroupIcon, color: 'text-pink-500' },
  { slug: 'education-tutor', title: 'Educação', icon: AcademicCapIcon, color: 'text-indigo-500' },
  { slug: 'medical-health', title: 'Saúde', icon: HeartIcon, color: 'text-red-500' },
  { slug: 'real-estate', title: 'Imobiliário', icon: HomeModernIcon, color: 'text-cyan-600' },
  { slug: 'finances', title: 'Finanças', icon: PresentationChartLineIcon, color: 'text-green-600' },
];

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = React.use(params);

  return (
    <main>
      <section className={styles.hero}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={styles.textSubtitle}>
            Engenharia de Prompt Avançada
          <br />     
          </p>
          
          <h1 className={styles.textTitle}>
            Domine a IA com <br />
            <span className={styles.textHighlight}>Prompts de Elite</span>
          </h1>

          <p className={styles.textSubtitle}>
            Pare de "tentar" e comece a <strong>executar</strong>. Transformamos a complexidade da IA em comandos estruturados para diversos nichos estratégicos. 
          
          </p>

          <Row gutter={[24, 24]} className="niche-grid">
            {niches.map((niche) => {
              const Icon = niche.icon;
              return (
                <Col xs={24} sm={12} md={8} lg={6} xl={4.8} key={niche.slug}>
                  <Link href={`/${lang}/ai-prompt-generate/${niche.slug}`}>
                    <Card
                      hoverable
                      className="niche-card group"
                    >
                      <div className="card-content">
                        <div className={`icon-container ${niche.color} group-hover:scale-110 transition-transform`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-bold text-ai2you-dark mt-4 mb-2">
                          {niche.title}
                        </h3>
                      </div>
                    </Card>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </main>
  );
}
*/