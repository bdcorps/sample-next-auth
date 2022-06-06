import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import React from "react"
import "./styles.css"

const theme = extendTheme({
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  )
}
