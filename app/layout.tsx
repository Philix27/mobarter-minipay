import './globals.css';
import { AppProviders, fontSans, cn } from './lib';

import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

const APP_NAME = 'Mobarter';
const APP_DEFAULT_TITLE = 'An off-ramping platform';
const APP_TITLE_TEMPLATE = '%s - Mobarter';
const APP_DESCRIPTION = 'Easy swap and p2p exchange';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  icons: '/logo.png',
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#151718',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overscrollBehavior: 'none' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
      </head>
      <body
        style={{ overscrollBehavior: 'none', overflow: 'hidden' }}
        className={cn(
          `min-h-screen bg-background overscroll-none overflow-hidden 
          font-sans antialiased`,
          fontSans.variable
        )}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
