import React from 'react'

import './global-styles.css'
import 'inter-ui/inter-ui.css'
import { ThemeProvider } from '../../util/styled-components'
import theme from '../../theme'
import styled from 'styled-components';

export default ({ children }) => (
  <ThemeProvider theme={theme}><Container>{children}</Container></ThemeProvider>
)

const Container = styled.div`
    max-width: 60rem;
    margin: 0 auto;
    padding: 0 2rem;
`


