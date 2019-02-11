import React from 'react'
import Button from '../components/common/button'
import styled, { ThemeProvider } from '../util/styled-components'
import theme from '../theme'

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <FullScreen>
      <h1>404</h1>
      <h4>The page you're looking for doesn't seem to exist here.</h4>
      <Button to="/" variant="white">
        Back to the homepage
      </Button>
    </FullScreen>
  </ThemeProvider>
)

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${p => p.theme.colors.primary400};

  color: #fff;

  h1,
  h4 {
    color: #fff;
    margin-bottom: 4rem;
    max-width: 30rem;
    text-align: center;
  }
`

export default NotFoundPage
