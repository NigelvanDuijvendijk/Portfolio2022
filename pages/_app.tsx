import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar} from '../components/navbar'
import { ThemeProvider } from 'next-themes'
import {PageFooter} from '../components/footer'
import React, { useState, useEffect } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
    return (
      <ThemeProvider>
        <Navbar/>
        <Component {...pageProps} /> 
        <PageFooter/>   
      </ThemeProvider>
    )
}

export default MyApp
