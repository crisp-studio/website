import React from 'react'
import Layout from '../components/layout'
import styled from '../util/styled-components'
import Nav from '../components/nav'
import FooterCTA from '../components/footerCTA'
import FooterBar from '../components/footerBar'
import SplitContent from '../components/splitcontent'
import svgDesignSprint from '../images/design-sprint-illustration.svg'

// TODO: Titles need a different color, could change between components

const DesignSprint = () => (
  <Layout>
    <Nav />

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
    <FooterCTA />
    <FooterBar />
  </Layout>
)

export default DesignSprint
