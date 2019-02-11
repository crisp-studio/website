import React from 'react'

import './global-styles.css'
import 'inter-ui/inter-ui.css'
import { ThemeProvider } from '../../../util/styled-components'
import theme from '../../../theme'

import FooterBar from './footer-bar'
import Nav from './nav'
import FooterCta from './footer-cta'
import Helmet from 'react-helmet'

interface LayoutProps {
  variant: 'light' | 'dark'
}

const Layout: React.FC<LayoutProps> = ({ children, variant }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <html lang="en-us" />
        <meta charSet="utf-8" />
        <meta property="og:locale" content="en-us" />
      </Helmet>

      <Nav variant={variant} />
      <main>{children}</main>
      <FooterCta />
      <FooterBar />
    </>
  </ThemeProvider>
)

export default Layout
