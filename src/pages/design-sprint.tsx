import React from 'react'
import Layout from '../components/modules/layout'
import styled from '../util/styled-components'
import SplitContent from '../components/common/splitcontent'
import svgDesignSprint from '../images/design-sprint-illustration.svg'
import HeroHeader from '../components/common/heroheader'

const DesignSprint = () => (
  <Layout variant="light">
    <StyledHeroHeader bgColor="gray" variant="small">
      <h1>Design Sprint</h1>
      <p>
        Solve big product challenges and test new ideas in 5 days. Get user insights
        before launching and see how customers react.{' '}
      </p>
    </StyledHeroHeader>
    <SplitContent>
      <div>
        <h4>What is a Design Sprint?</h4>
        <p>
          The Design Sprint is a 5-day process to create new products or improve
          existing ones. It starts with a big challenge and ends with a high-fidelity
          prototype tested with real users at the end of the week.{' '}
        </p>
      </div>
      <div>
        <img src={svgDesignSprint} />
      </div>
    </SplitContent>
    <SplitContent>
      <div>
        <img src={svgDesignSprint} />
      </div>
      <div>
        <h4>What is a Design Sprint?</h4>
        <p>
          The Design Sprint is a 5-day process to create new products or improve
          existing ones. It starts with a big challenge and ends with a high-fidelity
          prototype tested with real users at the end of the week.{' '}
        </p>
      </div>
    </SplitContent>
  </Layout>
)

const StyledHeroHeader = styled(HeroHeader)`
  .children {
    display: flex;
    align-items: center;

    h1 {
      text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.1);
      background-color: ${p => p.theme.colors.primary400};
      color: transparent;
      -webkit-background-clip: text;
      -moz-background-clip: tesxt;
      background-clip: text;
    }

    p {
      max-width: 30rem;
    }
  }
`

export default DesignSprint
