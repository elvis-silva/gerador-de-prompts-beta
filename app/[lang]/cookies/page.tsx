import React from 'react';
import Head from 'next/head';
import { 
  CookieIcon, 
  ChartBarIcon, 
  LucideAlignHorizontalDistributeCenter, 
  LucidePrinter 
} from 'lucide-react';
import styles from './Cookies.module.css';

export default function CookiesPage() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Política de Cookies | AI2You</title>
      </Head>

      <div className={styles.container}>
        {/* Header Padronizado */}
        <header className={styles.header}>
          <span className={styles.textOverline}>Experiência Personalizada</span>
          <h1 className={styles.textTitle}>
            Uso de <span className={styles.textHighlight}>Cookies</span>
          </h1>
          <p className={styles.textSubtitle}>
            Entenda como utilizamos tecnologias de armazenamento para otimizar sua interação com nossos geradores de IA.
          </p>
        </header>

        {/* Card Informativo de Destaque */}
        <section className={styles.glassCard}>
          <div className={styles.iconWrapper}>
            <CookieIcon className={styles.iconPrimary} />
          </div>
          <h2 className={styles.textCardTitle}>O que são Cookies?</h2>
          <p className={styles.textBody}>
            Cookies são pequenos arquivos de texto enviados pelo nosso servidor para o seu navegador. Eles nos permitem reconhecer seu dispositivo e lembrar de suas preferências de nicho (como Marketing ou Programação), garantindo que você não precise configurar tudo do zero a cada visita.
          </p>
        </section>

        {/* Grid de Categorias de Cookies */}
        <div className={styles.grid}>
          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <LucidePrinter className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>Essenciais</h3>
            <p className={styles.textBody}>
              Necessários para o funcionamento básico do site, como autenticação e segurança. Sem eles, a plataforma AI2You não operaria corretamente.
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <ChartBarIcon className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>Analíticos</h3>
            <p className={styles.textBody}>
              Nos ajudam a entender quais nichos de prompt são os mais acessados, permitindo que nossa equipe de engenharia foque em melhorias relevantes.
            </p>
          </div>

          <div className={styles.pillCard}>
            <div className={styles.iconWrapper}>
              <LucideAlignHorizontalDistributeCenter className={styles.iconPrimary} />
            </div>
            <h3 className={styles.textCardTitle}>Funcionais</h3>
            <p className={styles.textBody}>
              Utilizados para lembrar escolhas feitas por você, como o idioma selecionado ou temas visuais aplicados ao dashboard.
            </p>
          </div>
        </div>

        {/* Seção de Gestão */}
        <footer className={styles.footerSection}>
          <div className={styles.glassCard}>
            <h2 className={styles.textCardTitle}>Como gerenciar suas preferências?</h2>
            <p className={styles.textBody}>
              Você pode desativar os cookies nas configurações do seu navegador a qualquer momento. No entanto, lembre-se que isso pode impactar a precisão das sugestões personalizadas da nossa IA.
            </p>
            <p className={styles.textSmall}>
              Para suporte técnico sobre privacidade, contate <span className={styles.textHighlight}>ai2you@outlook.com</span>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}