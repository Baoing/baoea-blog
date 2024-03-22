import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Provider } from './provider'
import Layout from "@/layout";
const inter = Inter({ subsets: ["latin"] });
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider attribute="class" defaultTheme="dark">
          <Layout>
            <ThemeSwitcher />
            {children}
          </Layout>
        </Provider>
      </body>
    </html>
  );
}