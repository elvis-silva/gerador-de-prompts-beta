import { App, ConfigProvider, theme } from 'antd';
import StyledComponentsRegistry from '@/lib/antd-registry';
import '@/styles/globals.css';
import Footer from '@/components/footer/Footer';
import { Navbar } from '@/components/navbar/Navbar';
import { PageTransition } from '@/components/PageTransition';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  metadataBase: new URL('https://ai2you.online'),
  alternates: {
    canonical: '/', 
  },
  title: {
    default: 'AI2You | Engenharia de Prompt de Elite',
    template: '%s | AI2You'
  },
  description: 'A plataforma definitiva para engenharia de prompt. Gere comandos estruturados para marketing, programação e negócios com privacidade absoluta.',
  keywords: ['IA', 'Prompts', 'Engenharia de Prompt', 'ChatGPT', 'Produtividade', 'LGPD', 'Gerador de Prompt', 'Prompts para IA', 'AI Prompt Generator'],
  authors: [{ name: 'AI2You Team' }],
  creator: 'AI2You',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ai2you.online',
    siteName: 'AI2You',
    title: 'AI2You | Domine a IA com Prompts de Elite',
    description: 'Aumente sua produtividade em 10x com comandos profissionais e seguros.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AI2You Platform' }],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default async function RootLayout({ 
  children, 
  params 
}: { 
  children: React.ReactNode, 
  params: Promise<{ lang: string }> 
}) {

  const { lang } = await params;

  return (
    <html lang={lang || 'pt'}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4768510961285493"
     crossOrigin="anonymous"></script>
      </head>
      <body className="antialiased text-slate-200">
        <Navbar />
        <StyledComponentsRegistry>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
              token: {
                borderRadius: 12,
                colorPrimary: '#3b82f6', 
                colorBgBase: '#ffffff',
                },
              }}
            >
            <PageTransition>
              <App>
                <div className="min-h-screen flex flex-col">
                  <div className="flex-grow">
                    {children}
                  </div>
                  <Footer />
                </div>
              </App>
            </PageTransition>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
      <GoogleAnalytics gaId="G-8TMK294LL0" />
    </html>
  );
}
