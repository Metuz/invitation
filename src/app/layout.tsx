import { Montserrat } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata = {
  title: 'Invitaciones Digitales',
  description: 'Sitio de invitaciones digitales para eventos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
