'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import './sobre.css';

import {
  RocketLaunchIcon,
  SparklesIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

interface FeatureCardProps {
  title: string;
  description: string;
  extraInfo?: string;
  variant: 'emerald' | 'indigo';
  icon: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  extraInfo,
  variant,
  icon: Icon,
}) => {
  return (
    <div className={`featureCard featureCard--${variant}`}>
      <div className={`featureCard__icon featureCard__icon--${variant}`}>
        <Icon />
      </div>
      <h3 className="featureCard__title">{title}</h3>
      <p className="featureCard__description">{description}</p>

      {extraInfo && (
        <p className="featureCard__extra">
          <span>Diferencial:</span> {extraInfo}
        </p>
      )}
    </div>
  );
};

export default function SobreNos() {
  return (
    <div className="sobre">
      <Head>
        <title>Sobre Nós | AI2You - Engenharia de Prompts</title>
        <meta
          name="description"
          content="Conheça a AI2You, a plataforma líder em prompts estruturados para marketing, negócios e tecnologia."
        />
      </Head>

      <main className="sobre__container">
        {/* Hero */}
        <header className="hero">
          <span className="hero__tag">Tecnologia com Propósito</span>
          <h1 className="hero__title">
            Sobre Nós: <span>AI2You</span>
          </h1>
          <p className="hero__subtitle">
            Transformando a interação entre humanos e Inteligência Artificial
            através da engenharia de precisão.
          </p>
        </header>

        {/* Visão */}
        <section className="vision">
          <div className="vision__bar" />
          <h2>Nossa Visão</h2>

          <div className="vision__content">
            <p>
              No <strong>AI2You</strong>, acreditamos que a Inteligência Artificial
              é a ferramenta mais poderosa da nossa era.
            </p>
            <p>
              Nosso foco é eliminar a fricção entre humanos e IA, entregando
              prompts estruturados que convertem intenção em resultado.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="features">
          <FeatureCard
            title="Nossa Missão"
            description="Simplificar a complexidade da IA para que qualquer profissional alcance resultados de nível especialista."
            variant="emerald"
            icon={RocketLaunchIcon}
          />

          <FeatureCard
            title="O Que Fazemos"
            description="Criamos prompts estruturados por nicho, guiando a IA com precisão cirúrgica."
            extraInfo="Frameworks internacionais e psicologia do consumidor."
            variant="indigo"
            icon={SparklesIcon}
          />
        </section>

        {/* Branding */}
        <section className="branding">
          <div className="branding__content">
            <div className="branding__icon">
              <PuzzlePieceIcon />
            </div>
            <h2>Por Que “AI2You”?</h2>
            <p>
              AI para você. Cada prompt segue os pilares de Contexto, Tarefa e
              Formato para resultados previsíveis e escaláveis.
            </p>
          </div>
        </section>

        {/* CTA */}
        <footer className="cta">
          <UserGroupIcon className="branding__icon" />
          <h2>O Futuro é Colaborativo</h2>
          <p>
            A IA não substitui pessoas. Ela amplia capacidades quando bem
            direcionada.
          </p>

          <Link
            href="/pt/gerador-de-prompt" className="ctaButton"
          >
            <span>Acessar Gerador de Prompts</span>
            <ArrowRightIcon className="ctaIcon" />
          </Link>

          <span className="cta__note">
            Pare de lutar com a tecnologia. Domine os resultados.
          </span>
        </footer>
      </main>
    </div>
  );
}
