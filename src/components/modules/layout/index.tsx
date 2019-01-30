import React from 'react'

import './global-styles.css'
import 'inter-ui/inter-ui.css'
import { ThemeProvider } from '../../../util/styled-components'
import theme from '../../../theme'

import FooterBar from './footer-bar'
import Nav from './nav'

interface LayoutProps {
  variant: 'light' | 'dark'
}

const Layout: React.FC<LayoutProps> = ({ children, variant }) => (
  <ThemeProvider theme={theme}>
    <>
      <Nav variant={variant} />
      <main>{children}</main>
      <FooterBar />
    </>
  </ThemeProvider>
)

export default Layout
