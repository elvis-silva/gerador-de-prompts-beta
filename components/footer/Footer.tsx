"use client";

import { useState } from "react";
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Mail
} from 'lucide-react'; 
import '@/components/footer/footer.css';
import { usePathname, useParams } from 'next/navigation';
import pt from "@/i18n/pt.json";
import en from "@/i18n/en.json";

const dictionaries = { 'pt': pt, 'en': en };

export function useFooterDicitionary() {
  const { lang } = useParams();
  return dictionaries[lang as keyof typeof dictionaries] ?? pt;
}

type FooterProps = {
  lang: string;
};

export function Footer({ lang } : FooterProps) {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const dict = useFooterDicitionary();

  return (
    <footer className="footerContainer">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Banner de Destaque */}
        <div className="highlightBanner">
          <h2 className="text-blue-400 font-bold text-lg md:text-xl mb-2 text-center">
            {dict.footer.we_create_digital_experiences}
          </h2>
          <p className="text-slate-400 text-sm md:text-base text-center">
            {dict.footer.well_made_technology}
          </p>
        </div>

        {/* Grid de Links e Social */}
        <div className="footerGrid">
          
          {/* Coluna 1: Institucional */}
          <div className='footerColumn'>
            <h3 className="columnTitle">{dict.footer.institutional}</h3>
            <ul className="linkList">
              <li><Link href={`/${lang}${dict.footer.about.href}`} className="navLink">{dict.footer.about.name}</Link></li>
              <li><Link href={`/${lang}${dict.footer.privacy.href}`} className="navLink">{dict.footer.privacy.name}</Link></li>
              <li><Link href={`/${lang}${dict.footer.lgpd.href}`} className="navLink">{dict.footer.lgpd.name}</Link></li>
            </ul>
          </div>

          {/* Coluna 2: A Empresa */}
          <div className='footerColumn'>
            <h3 className="columnTitle">{dict.footer.the_company}</h3>
            <ul className="linkList">
              <li><Link href={`/${lang}${dict.footer.mission.href}`} className="navLink">{dict.footer.mission.name}</Link></li>
              <li><Link href={`/${lang}${dict.footer.terms.href}`} className="navLink">{dict.footer.terms.name}</Link></li>
              <li><Link href={`/${lang}${dict.footer.cookies.href}`} className="navLink">{dict.footer.cookies.name}</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Conecte-se */}
          <div className="footerColumn">
            <h3 className="columnTitle">{dict.footer.connect}</h3>
            <div className="footerColumn footerColumn__social sm:justify-center space-x-6 mb-6">
              {/* Ícone Facebook atualizado */}
              <a href={dict.footer.facebook.href} className="socialIcon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              {/* Ícone Instagram atualizado */}
              <a href={dict.footer.instagram.href} className="socialIcon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              {/* Ícone Mail atualizado */}
              <a href={dict.footer.email.href} className="socialIcon" aria-label="Mail">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="copywrite">              
          <p className="text-slate-500 text-xs text-center">
            © {currentYear} {dict.footer.copywrite}
          </p>
        </div>
      </div>
    </footer>
  );
};