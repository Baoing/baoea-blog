'use client'
import { Observer, Provider as MobxProvider} from "mobx-react"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { NextUIProvider } from "@nextui-org/react"
import stores from "@/stores";

export function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider {...props}>
        <MobxProvider {...stores} >
          {children}
        </MobxProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
