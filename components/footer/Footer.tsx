import React from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Mail, 
  Globe
} from 'lucide-react'; // Padronizado com o uso do PromptForm
import '@/components/footer/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerContainer">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Banner de Destaque */}
        <div className="highlightBanner">
          <h2 className="text-blue-400 font-bold text-lg md:text-xl mb-2 text-center">
            Criamos experiências digitais com propósito, clareza e excelência técnica.
          </h2>
          <p className="text-slate-400 text-sm md:text-base text-center">
            Tecnologia bem feita não é barulho, é impacto.
          </p>
        </div>

        {/* Grid de Links e Social */}
        <div className="footerGrid">
          
          {/* Coluna 1: Institucional */}
          <div className='footerColumn'>
            <h3 className="columnTitle">Institucional</h3>
            <ul className="linkList">
              <li><Link href="/pt/sobre" className="navLink">Sobre</Link></li>
              <li><Link href="/pt/privacy" className="navLink">Política de Privacidade</Link></li>
              <li><Link href="/pt/lgpd" className="navLink">LGPD</Link></li>
            </ul>
          </div>

          {/* Coluna 2: A Empresa */}
          <div className='footerColumn'>
            <h3 className="columnTitle">A Empresa</h3>
            <ul className="linkList">
              <li><Link href="/pt/mission" className="navLink">Missão</Link></li>
              <li><Link href="/pt/terms" className="navLink">Termos de Uso</Link></li>
              <li><Link href="/pt/cookies" className="navLink">Cookies</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Conecte-se */}
          <div className="footerColumn">
            <h3 className="columnTitle">Conecte-se</h3>
            <div className="footerColumn footerColumn__social sm:justify-center space-x-6 mb-6">
              {/* Ícone Facebook atualizado */}
              <a href="https://www.facebook.com/ai2you.online" className="socialIcon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              {/* Ícone Instagram atualizado */}
              <a href="https://www.instagram.com/elvissilva.dev" className="socialIcon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              {/* Ícone Mail atualizado */}
              <a href="mailto:ai2you.com.br" className="socialIcon" aria-label="Mail">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="copywrite">              
          <p className="text-slate-500 text-xs text-center">
            © {currentYear} AI2You. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};