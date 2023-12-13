// chakra only works in client-side components
// converts server-side components to client-side components
'use client'

import { ChakraProvider } from "@chakra-ui/react"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>{ children }</ChakraProvider>
  )
}