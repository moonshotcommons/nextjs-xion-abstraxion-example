"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import {AbstraxionProvider} from "@burnt-labs/abstraxion";

import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";

const inter = Inter({ subsets: ['latin'] })


const treasuryConfig = {
  treasury: "xion1hvnn3368h3wl3yxvtf5pylkxxzsdv2qjdkd7tc2jgm55wln8tz4s6ma06u",
};

export const mathOperationContractAddress = "xion1vvddpg4drp34k388xej297duptgwasac832xmpan2je799nwp3uqnzf29j";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AbstraxionProvider
          config={treasuryConfig}>
          {children}
        </AbstraxionProvider>
      </body>
    </html>
  )
}