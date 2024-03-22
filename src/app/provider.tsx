'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { NextUIProvider } from "@nextui-org/react"

export function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider {...props}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
