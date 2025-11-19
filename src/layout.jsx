export const metadata = {
  metadataBase: new URL('https://anesl.vercel.app'),
  title: 'Anes Lachachi - Developer & Digital Experience Architect',
  description: 'Passionate developer specializing in React, WordPress, UI/UX design. Creating elegant digital experiences in Tlemcen, Algeria.',
  keywords: ['web developer', 'react developer', 'wordpress developer', 'UI/UX designer', 'frontend developer', 'Tlemcen', 'Algeria', 'portfolio', 'web design'],
  authors: [{ name: 'Anes Lachachi', url: 'https://anesl.vercel.app' }],
  creator: 'Anes Lachachi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anesl.vercel.app',
    title: 'Anes Lachachi - Developer Portfolio',
    description: 'Creating elegant digital experiences with React, WordPress, and modern web technologies',
    siteName: 'Anes Lachachi Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anes Lachachi Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anes Lachachi - Developer Portfolio',
    description: 'Creating elegant digital experiences',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://anesl.vercel.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Anes Lachachi',
              url: 'https://anesl.vercel.app',
              jobTitle: 'Developer & Digital Experience Architect',
              description: 'Passionate developer specializing in React, WordPress, and UI/UX design',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tlemcen',
                addressCountry: 'DZ',
              },
              sameAs: [
                'https://www.linkedin.com/in/aneslachachi/',
                'https://github.com/anes-l',
              ],
              knowsAbout: ['React', 'WordPress', 'UI/UX Design', 'Frontend Development', 'Web Development'],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}