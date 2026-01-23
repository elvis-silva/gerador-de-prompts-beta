"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import styles from "./navbar.module.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/pt/sobre" },
    { name: "Missão", href: "/pt/mission" },
    { name: "Privacidade", href: "/pt/privacy" },
    { name: "Contato", href: "/pt/contact" },
  ];

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo com Identidade Visual */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>AI</div>
          <span className={styles.logoText}>
            AI2You
          </span>
        </Link>

        {/* Navegação Desktop */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
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
              key={link.href} 
              href={link.href} 
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