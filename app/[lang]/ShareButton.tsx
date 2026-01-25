'use client';

import { Share2 } from 'lucide-react';
import { Tooltip, App } from 'antd';
import styles from './Home.module.css';

export function ShareButton() {
  const { message } = App.useApp();

  const handleShare = async () => {
    const shareData = {
      title: 'AI2You - Gerador de Prompts para IA',
      text: 'Crie prompts profissionais para IA em segundos 🚀',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        message.success('Link copiado para a área de transferência');
      }
    } catch {
      message.error('Não foi possível compartilhar');
    }
  };

  return (
    <Tooltip title="Compartilhar">
      <button
        onClick={handleShare}
        aria-label="Compartilhar página"
        className={styles.shareButton}
      >
        <Share2 className={styles.shareIcon} />
      </button>
    </Tooltip>
  );
}
