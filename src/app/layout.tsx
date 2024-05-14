import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Provider } from './provider'
import Layout from "@/layout";
const inter = Inter({ subsets: ["latin"] });
import type { Viewport } from 'next'
import {Toaster} from "sonner";
import ClientInit from "@/app/ClientInit";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Baoea",
  description: "Baoea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider attribute="class" defaultTheme="dark">
          <Layout>
            <ThemeSwitcher />
            {children}

            <Toaster theme={"dark"} richColors  />

            <ClientInit />
          </Layout>
        </Provider>
      </body>
    </html>
  );
}
