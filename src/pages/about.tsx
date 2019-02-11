import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import Layout from '../components/modules/layout'
import styled from '../util/styled-components'
import SplitContent from '../components/common/split-content'
import HeroHeader from '../components/common/hero-header'
import Gallery, { GalleryItem } from '../components/common/gallery'
import Helmet from 'react-helmet'

interface AboutProps {
  images: { [k: string]: FluidObject }
}

const About: React.FC<AboutProps> = ({ images }) => (
  <Layout variant="light">
    <Helmet>
      <title>About – Crisp Studio</title>
      <meta
        name="description"
        content="Crisp Studio is a design sprint and development studio that helps product teams to learn and move faster."
      />
    </Helmet>

    <StyledHeroHeader variant="small">
      <h1>About</h1>
      <p>
        Crisp Studio is a design sprint and development studio that helps product
        teams to learn and move faster.
      </p>
    </StyledHeroHeader>
    <SplitContentWrapper>
      <SplitContent alignItems="flex-start">
        <div>
          <h4>Small &amp; Focused</h4>
          <p>
            Every project gets 100% of our attention. We don’t do overlapping
            projects, no 2 clients at the same time. To avoid half-hearted projects
            and to keep focused on results. We favour a clear process and a clean
            schedule. Being small makes us faster.
          </p>
        </div>
        <div>
          <h4>Tangible</h4>
          <p>
            Problem solving implies the pursuit of tangible outcomes. Tangible
            outcomes lead to better insights. Once we’re actively involved in solving
            problems that have tangible outcomes, we become more invested in solving
            other problems as well.
          </p>
        </div>
      </SplitContent>
      <SplitContent alignItems="flex-start">
        <div>
          <h4>User-Centered</h4>
          <p>
            Observing and understanding why users interact the way they do gives
            valuable feedback towards a chosen solution. We build prototypes and
            conduct user tests to win user insights before commiting to the idea. It
            strenghtens empathy and ensures customer success in the long run.
          </p>
        </div>
        <div>
          <h4>Answer oriented</h4>
          <p>
            Are the efforts are really worh it? Seeking clear answers before
            investing the resources lowers risk, allows better decision making and
            leads to better results. Integrating stakeholders, aligning
            cross-functional teams lead to better questions which in turn lead to
            better answers.
          </p>
        </div>
      </SplitContent>
    </SplitContentWrapper>
    <Gallery>
      <GalleryItem>
        <GatsbyImage fluid={images['gallery-1.jpg']} />
      </GalleryItem>
      <GalleryItem rowSpan={2} colSpan={2}>
        <GatsbyImage fluid={images['gallery-2.jpg']} />
      </GalleryItem>
      <GalleryItem rowSpan={2}>
        <GatsbyImage fluid={images['gallery-3.jpg']} />
      </GalleryItem>
      <GalleryItem rowSpan={2}>
        <GatsbyImage fluid={images['gallery-4.jpg']} />
      </GalleryItem>
      <GalleryItem>
        <GatsbyImage fluid={images['gallery-5.jpg']} />
      </GalleryItem>
      <GalleryItem colSpan={2}>
        <GatsbyImage fluid={images['gallery-6.jpg']} />
      </GalleryItem>
    </Gallery>
  </Layout>
)

const generateImageMap = (data: any) =>
  data.allFile.edges.reduce(
    (acc: { [k: string]: object }, cur: any) => ({
      ...acc,
      [cur.node.base]: cur.node.childImageSharp.fluid,
    }),
    {},
  )

const AboutImages: React.FC = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { relativePath: { glob: "gallery/*" } }) {
          edges {
            node {
              base
              relativePath
              childImageSharp {
                fluid(maxWidth: 500, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
  >
    {data => <About images={generateImageMap(data)} />}
  </StaticQuery>
)

export default AboutImages

const SplitContentWrapper = styled.div`
  padding: 4rem 0;

  ${SplitContent} {
    display: flex;
    align-items: flex-start;
    padding: 2rem 0;
  }
`

const StyledHeroHeader = styled(HeroHeader)`
  .children {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.1);
      background-color: ${p => p.theme.colors.primary400};
      color: transparent;
      -webkit-background-clip: text;
      -moz-background-clip: tesxt;
      background-clip: text;
    }

    p {
      max-width: 24rem;
    }
  }
`
