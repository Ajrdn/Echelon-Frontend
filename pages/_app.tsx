import React from "react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import { UserStyle } from "../styles/userStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
