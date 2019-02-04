import React from 'react'
import Layout from '../components/modules/layout'
import styled from '../util/styled-components'
import SplitContent from '../components/common/splitcontent'
import HeroHeader from '../components/common/heroheader'
import Gallery from '../components/common/gallery'
import gallery1 from '../images/gallery-1.jpg'
import gallery2 from '../images/gallery-2.jpg'
import gallery3 from '../images/gallery-3.jpg'
import gallery4 from '../images/gallery-4.jpg'
import gallery5 from '../images/gallery-5.jpg'
import gallery6 from '../images/gallery-6.jpg'

const About = () => (
  <Layout variant="light">
    <StyledHeroHeader bgColor="gray" variant="small">
      <h1>About</h1>
      <p>
        Crisp Studio is a design sprint and development studio that helps product
        teams to learn and move faster.{' '}
      </p>
    </StyledHeroHeader>
    <SplitContentWrapper>
      <SplitContent>
        <div>
          <h4>Small & Focused</h4>
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
      <SplitContent>
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
            better answers.{' '}
          </p>
        </div>
      </SplitContent>
    </SplitContentWrapper>
    <Gallery>
      <div class="grid-item grid-item-1>">
        <img src={gallery1} />
      </div>
      <div class="grid-item span-2 grid-item-2>">
        <img src={gallery2} />
      </div>
      <div class="grid-item grid-item-3>">
        <img src={gallery3} />
      </div>
      <div class="grid-item grid-item-4>">
        <img src={gallery4} />
      </div>
      <div class="grid-item grid-item-5>">
        <img src={gallery5} />
      </div>
      <div class="grid-item grid-item-6>">
        <img src={gallery6} />
      </div>
      {/* <div class="grid-item grid-item-2">item 2</div>
      <div class="grid-item grid-item-3">item 3</div>
      <div class="grid-item grid-item-4">item 4</div>
      <div class="grid-item span-2 grid-item-3">item 3</div>
      <div class="grid-item grid-item-4">item 4</div> */}
    </Gallery>
  </Layout>
)

export default About

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
