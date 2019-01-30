import React from 'react'
import styled from '../../../util/styled-components'

import breakpoint from 'styled-components-breakpoint'
import Button from '../../common/button'

export default class FooterCTA extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <h4>Ready to get started?</h4>
          <p>Get in touch, we are happy to help out or just have a chat.</p>
        </div>
        <div>
          <Button variant="white">Schedule call</Button>
          <Button variant="white">Contact us</Button>
        </div>
      </Container>
    )
  }
}

const Container = styled.div`
  ${breakpoint('tablet')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    `}
  ${breakpoint('mobile', 'tablet')`
    div {
        text-align: center;
    }
  `}

  display: flex;
  flex-direction: column;

  position: relative;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.gray100};

  padding: 4rem 0rem;

  h4 {
    color: ${p => p.theme.colors.primary400};
  }

  &:before {
    content: '';
    background-color: ${p => p.theme.colors.gray100};
    position: absolute;
    height: 100%;
    width: 400vw;
    left: -2000px;
    z-index: -1;
  }
`
