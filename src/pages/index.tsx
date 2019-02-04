import React from 'react'
import Layout from '../components/modules/layout'
import styled from '../util/styled-components'

import Button from '../components/common/button'
import Instagram from '../components/modules/instagram-feed'
import HeroHeader from '../components/common/hero-header'
import Card, { CardHeader } from '../components/common/card'
import targetIcon from '../images/icons/target.svg'
import codeIcon from '../images/icons/code.svg'
import { Section, Container } from '../components/common/section'
import SplitContent from '../components/common/split-content'
import svgUi from '../images/design-sprint-ui.svg'
import breakpoint from 'styled-components-breakpoint'

const IndexPage = () => (
  <Layout variant="dark">
    <HeroHeader variant="large">
      <h1>Launch better products faster.</h1>
      <p>Get your product right and move faster by testing ideas super early. </p>
    </HeroHeader>
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
            You want it, we make it. If you are sure about an idea, we develop a
            minimum viable product for you in two weeks or less.
          </p>
          <Button variant="green" to="/dev-sprint/" disabled>
            Coming Soon
          </Button>
        </StyledCard>
      </StyledContainer>
    </StyledSection>
    <StyledSplitContent>
      <ImageContainer>
        <img src={svgUi} />
      </ImageContainer>
      <div>
        <h4>Who we are</h4>
        <p>
          We’re a Digital Product Studio helping product teams to get their products
          right. It’s our job to compress the pre-launch process, test new ideas and
          validate existing ones. With the aim to create engaging products which
          delight both you and your users.
        </p>
      </div>
    </StyledSplitContent>
    <Section>
      <Container>
        <InstagramIntro>
          <h4>Our Journey</h4>
          <p>
            Enjoy the backstage view and learn how we work. We’re driven to share
            everything we learn with you.
          </p>
        </InstagramIntro>
      </Container>
    </Section>
    <StyledInstagram />
  </Layout>
)

const InstagramIntro = styled.div`
  padding: 2rem 0;
`

const ImageContainer = styled.div`
  display: flex;

  img {
    width: 70%;
  }
`

const StyledInstagram = styled(Instagram)`
  padding: 4rem;
`

const StyledSection = styled(Section)`
  margin-top: -8rem;
  margin-bottom: 4rem;
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: -8rem;

  ${breakpoint('mobile', 'tablet')`
    flex-wrap: wrap;
  `}

  > div:first-child {
    margin-right: 2rem;

    ${breakpoint('mobile', 'tablet')`
    margin-right: 0;
    margin-bottom: 1rem;
  `}
  }
`

const StyledCard = styled(Card)`
  p {
    margin-bottom: 1rem;
  }
`

const StyledSplitContent = styled(SplitContent)`
  padding: 6rem 1rem;
`

export default IndexPage
