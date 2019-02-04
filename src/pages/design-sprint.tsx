import React from 'react'
import Layout from '../components/modules/layout'
import styled from '../util/styled-components'
import SplitContent from '../components/common/splitcontent'
import HeroHeader from '../components/common/heroheader'
import svgPostIts from '../images/design-sprint-post-its.svg'
import svgExplanation from '../images/design-sprint-explanation.svg'
import svgMonTues from '../images/design-sprint-monday-tuesday.svg'
import svgWedThr from '../images/design-sprint-wednesday-thursday.svg'
import svgFri from '../images/design-sprint-friday.svg'

const DesignSprint = () => (
  <Layout variant="light">
    <HeroHeader variant="small">
      <h1>Design Sprint</h1>
      <p>
        Solve big product challenges and test new ideas in 5 days. Get user insights
        before launching and see how customers react.{' '}
      </p>
    </HeroHeader>
    <SplitContent>
      <ImageContainer>
        <img src={svgPostIts} />
      </ImageContainer>
      <div>
        <h4>What is a Design Sprint?</h4>
        <p>
          The Design Sprint is a 5-day process to create new products or improve
          existing ones. It starts with a big challenge and ends with a high-fidelity
          prototype tested with real users at the end of the week.{' '}
        </p>
      </div>
    </SplitContent>
    <SplitContent>
      <ImageContainer>
        <img src={svgExplanation} />
      </ImageContainer>
      <div>
        <h4>Why use a Design Sprint?</h4>
        <p>
          The Design Sprint boosts the speed of progress, stops guesswork and lowers
          the risk of developing something that's not worth the effort. It helps to
          get your product right while saving a lot of time.{' '}
        </p>
      </div>
    </SplitContent>
    <SplitContent>
      <ImageContainer>
        <img src={svgMonTues} />
      </ImageContainer>
      <div>
        <h4>Generate Solutions</h4>
        <p>
          On Monday we'll work with you to define the challenges and the focus of the
          week. We’ll define a long-term goal, pick a target area in the customer
          journey and align everybody on the team. Tueday is all about having clear
          focus and creating multiple solutions to solve the challenge.{' '}
        </p>
      </div>
    </SplitContent>
    <SplitContent>
      <ImageContainer>
        <img src={svgWedThr} />
      </ImageContainer>
      <div>
        <h4>Decide & Build</h4>
        <p>
          On Wednesday we’ll decide what solution we want to test at the end of the
          week. We vote and create a clear sequence of screen drawings. Thursday is
          all about bringing the drawings to life and forming a realistic, clickable
          facade to test on Friday.{' '}
        </p>
      </div>
    </SplitContent>
    <SplitContent>
      <ImageContainer>
        <img src={svgFri} />
      </ImageContainer>
      <div>
        <h4>Test & Learn</h4>
        <p>
          On Friday real target users will come and test the prototype on a given
          device. The usability test is done in one-on-one interviews with the team
          taking notes on the insights. We’ll understand why something works or
          doesn’t work as well as where we have to readjust and iterate.{' '}
        </p>
      </div>
    </SplitContent>
  </Layout>
)

const ImageContainer = styled.div`
  display: flex;

  img {
    width: 70;
  }
`

export default DesignSprint
