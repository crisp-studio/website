import React from 'react'
import Layout from '../components/modules/layout'
import styled from '../util/styled-components'

import Button from '../components/common/button'
import Input from '../components/common/input'
import Instagram from '../components/modules/instagram-feed'
import HeroHeader from '../components/common/heroheader'
import Card, { CardHeader } from '../components/common/card'
import targetIcon from '../images/icons/target.svg'
import codeIcon from '../images/icons/code.svg'
import { Section, Container } from '../components/common/section'

const IndexPage = () => (
  <Layout variant="dark">
    <StyledHeroHeader bgColor="primary" variant="large">
      <h1>Launch better products faster.</h1>
      <p>Get your product right and move faster by testing ideas super early. </p>
    </StyledHeroHeader>
    <StyledSection>
      <StyledContainer>
        <StyledCard>
          <CardHeader icon={targetIcon}>Design Sprints</CardHeader>
          <p>
            Create new products or improve existing ones. Go from a big challenge to
            realistic prototype tested by real users in 5 days.
          </p>
          <Button variant="green" to="/design-sprint/">
            Design Sprint
          </Button>
        </StyledCard>
        <StyledCard>
          <CardHeader icon={codeIcon}>Dev Sprints</CardHeader>
          <p>
            Create new products or improve existing ones. Go from a big challenge to
            realistic prototype tested by real users in 5 days.
          </p>
          <Button variant="green" to="/dev-sprint/">
            Dev Sprint
          </Button>
        </StyledCard>
      </StyledContainer>
    </StyledSection>
    <StyledInstagram />
  </Layout>
)

const StyledInstagram = styled(Instagram)``

const StyledSection = styled(Section)`
  margin-top: -8rem;
  margin-bottom: 4rem;
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: -8rem;

  > div:first-child {
    margin-right: 2rem;
  }
`

const StyledCard = styled(Card)`
  p {
    margin-bottom: 1rem;
  }
`

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
