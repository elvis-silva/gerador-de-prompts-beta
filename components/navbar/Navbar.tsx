"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useParams } from 'next/navigation';
import styles from "./navbar.module.css";
import pt from "@/i18n/pt.json";
import en from "@/i18n/en.json";
import LanguageSwitcher from "../LanguageSwitcher";

const dictionaries = { 'pt': pt, 'en': en };

export function useNavDictionary() {
  const { lang } = useParams();
  return dictionaries[lang as keyof typeof dictionaries] ?? pt;
}

type HeaderProps = {
  lang: string;
};

export function Navbar({ lang }: HeaderProps) {

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dict = useNavDictionary();

  const navLinks = dict.navbar.nav_links;
  
  
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo com Identidade Visual */}
        <Link href={`/${lang}`} className={styles.logo}>
          <img src="/logo.svg" alt="AI2You"  className={styles.logo}/>
        </Link>

        <LanguageSwitcher />

        {/* Navegação Desktop */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link 
              key={`/${lang}${link.href}`} 
              href={`/${lang}${link.href}`}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Ações e Mobile Toggle */}
        <div className={styles.actions}>
          {/*
          <Link href="/gerador" className={styles.ctaButton}>
            <span className="hidden sm:inline">Começar Agora</span>
            <RocketLaunchIcon className="h-4 w-4 ml-2" />
          </Link>
          */}

          <button
            className={`${styles.mobileToggle} ${isOpen ? styles.isOpen : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >

            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Menu Mobile com Glassmorphism */}
      {isOpen && (
        <nav className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link 
              key={`/${lang}${link.href}`} 
              href={`/${lang}${link.href}`} 
              onClick={() => setIsOpen(false)}
              className={styles.mobileLink}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}