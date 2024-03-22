import type { ReactNode } from 'react';
import React from 'react';
import NavBar from "@/layout/NavBar";

interface MainLayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: MainLayoutProps) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
