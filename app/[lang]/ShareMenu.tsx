'use client';

import {
  Share2,
  Copy,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  X
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { App, Tooltip } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Home.module.css';

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 8
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04
    }
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 6,
    transition: { duration: 0.15 }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -6
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 }
  }
};

export function ShareMenu() {
  const { message } = App.useApp();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const url =
    typeof window !== 'undefined' ? window.location.href : '';
  const text = 'AI2You · Gerador de Prompts para IA 🚀';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openShare = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    message.success('Link copiado!');
    setOpen(false);
  };

  return (
    <div ref={ref} className={styles.shareContainer}>
      <Tooltip title="Compartilhar">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Compartilhar"
          className={styles.shareButton}
        >
          <Share2 className={styles.shareIcon} />
        </button>
      </Tooltip>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.shareMenu}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button
              variants={itemVariants}
              onClick={() =>
                openShare(
                  `https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `${text} ${url}`
                  )}`
                )
              }
            >
              <MessageCircle /> WhatsApp
            </motion.button>

            <motion.button
              variants={itemVariants}
              onClick={() =>
                openShare(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    text
                  )}&url=${encodeURIComponent(url)}`
                )
              }
            >
              <X /> X
            </motion.button>

            <motion.button
              variants={itemVariants}
              onClick={() =>
                openShare(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    url
                  )}`
                )
              }
            >
              <Linkedin /> LinkedIn
            </motion.button>

            <motion.button
              variants={itemVariants}
              onClick={() =>
                openShare(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    url
                  )}`
                )
              }
            >
              <Facebook /> Facebook
            </motion.button>

            <motion.button variants={itemVariants} onClick={copyLink}>
              <Instagram /> Instagram
            </motion.button>

            <motion.button variants={itemVariants} onClick={copyLink}>
              <Copy /> Copiar link
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
