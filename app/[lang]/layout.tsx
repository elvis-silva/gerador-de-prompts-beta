import { App, ConfigProvider, theme } from 'antd';
import Footer from '@/components/footer/Footer';
import { Navbar } from '@/components/navbar/Navbar';
import { PageTransition } from '@/components/PageTransition';
import { GoogleAnalytics } from '@next/third-parties/google';
import styles from './Home.module.css';
import { getDictionary } from '@/lib/getDictionary';
import type { Metadata } from 'next';
import AntdRegistry from '@/lib/antd-registry';
import { loadDictionary } from '@/lib/i18n'
import { AppManagerProvider } from '@/core/AppManagerProvider';
import { PWARegister } from '@/components/PWARegister';
import { InstallPWAButton } from '@/components/InstallPWAButton';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { PersistLang } from '@/components/persistLang';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import '@/styles/globals.css'

const SUPPORTED_LOCALES = ['pt', 'en'];

export const viewport = {
  themeColor: '#0B0F1A'
};

export const metadata = {
  applicationName: 'AI Prompt Generator',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'AI2You'
  },
  formatDetection: {
    telephone: false
  }
};

// export const metadata: Metadata = {
//   title: 'AI2You | Gerador de Prompts de Elite',
//   description: 'Gerador de Prompts com IA',
//   manifest: '/manifest.json',
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: 'black-translucent',
//     title: 'AI2You'
//   }
// };

// export async function generateMetadata({ params }: { params: { lang: any } }): Promise<Metadata> {
//   const dict = await getDictionary( params.lang );
  
//   return {
//     metadataBase: new URL('https://ai2you.online'), 
//     alternates: {
//       canonical: `/${params.lang}`,
//       languages: {
//         'pt-BR': '/pt',
//         'en-US': '/en',
//       },
//     },
//     title: {
//       default: dict.seo.home.title,
//       template: '%s | AI2You'
//     },
//     description: dict.seo.home.description,
//     keywords: [dict.seo.home.keywords],
//     openGraph: {
//       type: 'website',
//       locale: params.lang === 'pt' ? 'pt_BR' : 'en_US',
//       url: `https://ai2you.online/${params.lang}`,
//       siteName: 'AI2You',
//       title: 'AI2You | Domine a IA com Prompts de Elite',
//       description: 'Aumente sua produtividade em 10x com comandos profissionais e seguros.',
//       images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AI2You Platform' }],
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         'max-video-preview': -1,
//         'max-image-preview': 'large',
//         'max-snippet': -1,
//       },
//     }
//   };
// }

type LayoutProps = {
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

export const dynamic = 'auto';

export default async function RootLayout({ 
  children, 
  params
}: LayoutProps) {
  const { lang } = await params;

  if (!SUPPORTED_LOCALES.includes(lang)) {
    notFound();
  }

  //   const cookieStore = await cookies()
  //   const savedLang = cookieStore.get('lang')?.value

  // // Apenas leitura
  //  const lang = params.lang ?? savedLang ?? 'pt'

  // const lang = (await params).lang
  const dict = loadDictionary(lang, 'prompt-form');

// cookieStore.set('lang', lang, {
//     path: '/',
//     maxAge: 60 * 60 * 24 * 365
//   })
    // if (lang === 'en') redirect('/en')
    // redirect('/pt')
  const safeLang = lang === 'en' ? 'en' : 'pt';

  return (
    <html suppressHydrationWarning lang={safeLang}>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={styles.appBody}>
        {/* <PersistLang lang={lang}/> */}
        {/* <PWARegister /> */}
        {/* <InstallPWAButton /> */}
        <AppManagerProvider lang={lang} dict={dict}>
        <AntdRegistry>
          
            <App>
              <div className={styles.pageLayout}>
                <Navbar lang={lang}/> 
                {/* <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
              token: {
                borderRadius: 12,
                colorPrimary: '#3b82f6', 
                colorBgBase: '#0f172a', 
                },
              }}
            > */}
                <PageTransition>
                  <main className={styles.pageContent}>
                    {children}
                  </main>
                </PageTransition>
                {/* </ConfigProvider> */}
                <Footer />
              </div>
            </App>
        </AntdRegistry>
        </AppManagerProvider>
        {/* Analytics deve estar no final do body */}
        <GoogleAnalytics gaId="G-8TMK294LL0" />
      </body>
    </html>
  );
}


// import { App, ConfigProvider, theme } from 'antd';
// import StyledComponentsRegistry from '@/lib/antd-registry';
// import Footer from '@/components/footer/Footer';
// import { Navbar } from '@/components/navbar/Navbar';
// import { PageTransition } from '@/components/PageTransition';
// import { GoogleAnalytics } from '@next/third-parties/google'
// import styles from './Home.module.css'
// import { getDictionary } from '@/lib/getDictionary';
// import type { Metadata } from 'next';

// export const metadata = {
//   metadataBase: new URL('https://ai2you.online'),
//   alternates: {
//     canonical: '/', 
//   },
//   title: {
//     default: 'AI2You | Engenharia de Prompt de Elite',
//     template: '%s | AI2You'
//   },
//   description: 'A plataforma definitiva para engenharia de prompt. Gere comandos estruturados para marketing, programação e negócios com privacidade absoluta.',
//   keywords: ['IA', 'Prompts', 'Engenharia de Prompt', 'ChatGPT', 'Produtividade', 'LGPD', 'Gerador de Prompt', 'Prompts para IA', 'AI Prompt Generator'],
//   authors: [{ name: 'AI2You Team' }],
//   creator: 'AI2You',
//   openGraph: {
//     type: 'website',
//     locale: 'pt_BR',
//     url: 'https://ai2you.online',
//     siteName: 'AI2You',
//     title: 'AI2You | Domine a IA com Prompts de Elite',
//     description: 'Aumente sua produtividade em 10x com comandos profissionais e seguros.',
//     images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AI2You Platform' }],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   }
// };

// export default async function RootLayout({ 
//   children, 
//   params 
// }: { 
//   children: React.ReactNode, 
//   params: { lang: string } 
// }) {

//   const { lang } = params;

//   return (
//     <html lang={lang}>
//       <head>
//         {/*<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4768510961285493"
//      crossOrigin="anonymous"></script>*/}
//       </head>
//       <body className={styles.appBody}>
//         <Navbar />
//         <StyledComponentsRegistry>
//           <ConfigProvider
//             theme={{
//               algorithm: theme.darkAlgorithm,
//               token: {
//                 borderRadius: 12,
//                 colorPrimary: '#3b82f6', 
//                 colorBgBase: '#ffffff',
//                 },
//               }}
//             >
//             <PageTransition>
//               <App>
//                 <div className={styles.pageLayout}>
//                   <div className={styles.pageContent}>
//                     {children}
//                   </div>
//                   <Footer />
//                 </div>
//               </App>
//             </PageTransition>
//           </ConfigProvider>
//         </StyledComponentsRegistry>
//       </body>
//       {/* <GoogleAnalytics gaId="G-8TMK294LL0" /> */}
//     </html>
//   );
// }


// import type { Metadata } from 'next';
// import { ConfigProvider, App, theme } from 'antd';
// import {Navbar} from '@/components/navbar/Navbar';
// import Footer from '@/components/footer/Footer';
// import {PageTransition} from '@/components/PageTransition';
// import StyledComponentsRegistry from '@/lib/antd-registry';
// import { getDictionary } from '@/lib/getDictionary';
// import styles from './Home.module.css'

// export async function generateMetadata({
//   params
// }: {
//   params: { lang: string };
// }): Promise<Metadata> {
//   const dict = await getDictionary(params.lang);
//   const seo = dict.seo;

//   return {
//     title: {
//       default: seo.title,
//       template: `%s | AI2You`
//     },
//     description: seo.description,
//     alternates: {
//       canonical: `/${params.lang}`,
//       languages: {
//         'pt-BR': '/pt',
//         'en-US': '/en'
//       }
//     },
//     openGraph: {
//       title: seo.title,
//       description: seo.description,
//       locale: params.lang === 'pt-BR' ? 'pt_BR' : 'en_US',
//       siteName: 'AI2You',
//       type: 'website'
//     }
//   };
// }

// export default async function RootLayout({
//   children,
//   params
// }: {
//   children: React.ReactNode;
//   params: { lang: string };
// }) {
//   const { lang } = params;

//   return (
//     <html lang={lang}>
//       <body className={styles.appBody}>
//         <Navbar />
//         <StyledComponentsRegistry>
//           <ConfigProvider
//             theme={{
//               algorithm: theme.darkAlgorithm,
//               token: {
//                 borderRadius: 12,
//                 colorPrimary: '#3b82f6',
//                 colorBgBase: '#ffffff'
//               }
//             }}
//           >
//             <PageTransition>
//               <App>
//                 <div className={styles.pageLayout}>
//                   <div className={styles.pageContent}>
//                     {children}
//                   </div>
//                   <Footer />
//                 </div>
//               </App>
//             </PageTransition>
//           </ConfigProvider>
//         </StyledComponentsRegistry>
//       </body>
//     </html>
//   );
// }