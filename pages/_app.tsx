import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar} from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Navbar/>
    <Component {...pageProps} />    
  </>
)
}

export default MyApp
