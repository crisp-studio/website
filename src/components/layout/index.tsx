import React from 'react'

import './global-styles.css'
import 'inter-ui/inter-ui.css'
import { ThemeProvider } from '../../util/styled-components'
import theme from '../../theme'

export default ({ children }) => (
  <ThemeProvider theme={theme}><>{children}</></ThemeProvider>
)
