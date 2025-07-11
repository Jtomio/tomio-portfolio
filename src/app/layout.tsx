import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/Header'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata = {
  title: 'Tomio / Dev — Portfólio Front-end',
  description:
    'Portfólio de Tomio, desenvolvedor front-end focado em experiências modernas com Next.js, Tailwind e TypeScript.',
  keywords: [
    'Desenvolvedor Front-end',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Portfólio Dev',
    'Tomio',
    'Web Design',
    'UX/UI',
  ],
  authors: [{ name: 'Tomio', url: 'https://tomio.dev' }],
  themeColor: '#74D79F',
  creator: 'Tomio',
  openGraph: {
    title: 'Tomio / Dev',
    description: 'Desenvolvedor Front-end focado em interfaces modernas.',
    url: 'https://tomio.dev',
    siteName: 'Tomio / Dev',
    images: ['/public/main-logo.png'], // imagem para preview
    locale: 'pt_PT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container-base">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
