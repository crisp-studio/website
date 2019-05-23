import React from 'react'
import styled from '../../util/styled-components'
import breakpoint from 'styled-components-breakpoint'

import Card from './card'
import Button from './button'
import { StaticQuery, graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'

import msxLogo from '../../images/cases/msx-logo.svg'

const FeaturedCard = styled(Card)`
  padding: 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  ${breakpoint('desktop')`
    flex-direction: row;
  `}
`

const Image = styled.div`
  margin-bottom: 0;
  flex-basis: 0;
  flex-grow: 1;
  display: block;
  min-width: 300px;
  max-width: 600px;
  padding: 0 4rem;

  display: none;

  ${breakpoint('desktop')`
    display: block;
    align-self: flex-end;
  `}
`

const Content = styled.div`
  flex-basis: 0;
  flex-grow: 2;
  padding: 2rem;

  h2 {
    color: ${p => p.theme.colors.accent700};
    text-transform: uppercase;
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  img {
    max-width: 18rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${p => p.theme.colors.gray500};
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
`

const Featured: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "cases/msx-assistant.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
  >
    {data => (
      <FeaturedCard>
        <Image>
          <GatsbyImage fluid={data.file.childImageSharp.fluid} />
        </Image>
        <Content>
          <h2>Case Study</h2>
          <img src={msxLogo} />
          <p>
            We used the Design Sprint process to help Europe's most successful online
            optician to solve a bold challenge. In the course of one week we built a
            3D prototype and validated the idea.
          </p>
          <Button
            variant="green"
            to="https://betterinbetween.com/mister-spex-%E2%80%93-rethinking-the-way-we-buy-eyewear-today/"
          >
            View Case Study
          </Button>
        </Content>
      </FeaturedCard>
    )}
  </StaticQuery>
)

export default Featured
