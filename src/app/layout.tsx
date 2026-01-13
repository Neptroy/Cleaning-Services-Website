```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MANSKI - Limpeza Técnica e Conservação",
  description: "Especialistas em limpeza técnica, manutenção de fachadas e conservação predial para empresas e condomínios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${ geistSans.variable } ${ geistMono.variable } antialiased`}
      >
        <GoogleTagManager gtmId="GTM-XXXXXXX" /> {/* Substitua pelo ID real */}
        {children}
      </body>
    </html>
  );
}
```
