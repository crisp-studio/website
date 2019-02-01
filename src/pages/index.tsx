import React from 'react'

import Layout from '../components/modules/layout'
import styled from '../util/styled-components'

import Button from '../components/common/button'
import Input from '../components/common/input'
import Instagram from '../components/modules/instagram-feed'
import HeroHeader from '../components/common/heroheader'

const IndexPage = () => (
  <Layout variant="light">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StyledHeroHeader bgColor="primary" variant="large">
      <h1>Launch better products faster.</h1>
      <p>Get your product right and move faster by testing ideas super early. </p>
    </StyledHeroHeader>

    <Button variant="green">Hey there!</Button>

    <br />
    <form>
      <Input type="text" name="test" />
    </form>

    <Instagram />
  </Layout>
)
const StyledHeroHeader = styled(HeroHeader)`
  .children {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    h1 {
      color: ${p => p.theme.colors.supWhite};
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.5rem;
      max-width: 30rem;
      color: ${p => p.theme.colors.gray100};
    }
  }
`

export default IndexPage
