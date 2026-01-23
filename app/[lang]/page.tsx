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