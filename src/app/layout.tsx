import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import Header from "@/components/header/Header";
import FormularioContato from "@/components/layout/formularios/FormularioContato";
import Footer from "@/components/layout/footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Clínica Sorriso Pleno",
  description:
    "Conheça os tratamentos odontológicos da Clínica Sorriso Pleno.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}
    >
      <body>
        <Header />
        <FormularioContato />
        {children}
        <Footer />
      </body>
    </html>
  );
}
