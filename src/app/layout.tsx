import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Santos | Desenvolvedor Front-end",
  description: "Portfólio de Lucas Santos Nascimento — Desenvolvedor Front-end com experiência em React, Next.js, TypeScript, Design Systems e Storybook.",
  applicationName: "Lucas Santos · Portfólio",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Lucas Santos | Desenvolvedor Front-end",
    description: "Eae DEV 👋 Eu sou Lucas Santos",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#090711",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: import("react").ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
