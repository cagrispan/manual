import type { Metadata } from "next";
import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manual: A plataforma de destino para a saúde masculina.",
  description:
    "Tratamentos para a saúde capilar, do sono e sexual masculina com eficácia comprovada, de forma segura e prática, sem sair de casa. Conheça!",
  applicationName: "Manual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
