import React from 'react'
import styled from '../../util/styled-components'
import breakpoint from 'styled-components-breakpoint'

import { Section, Container } from './section'

interface SplitContentProps {
  variant?: 'left' | 'right'
}

const SplitContent: React.FC<
  SplitContentProps & React.HTMLProps<HTMLDivElement>
> = ({ variant, children, className }) => (
  <Section className={className}>
    <Container className="children">{children}</Container>
  </Section>
)
export default styled(SplitContent)`
  &:nth-child(2n) .children {
    ${breakpoint('desktop')`
    flex-direction: row-reverse;
    justify-content: space-between;

    div {
      justify-content: flex-end;
    }
    `}
  }

  .children {
    display: flex;
    align-items: center;

    ${breakpoint('mobile', 'tablet')`
      flex-direction: column; 

      div {
        justify-content: center;
      }
      


    `}

    > div {
      flex-grow: 1;
      flex-basis: 0;
    }

    padding: 4rem 1rem;

    p {
      max-width: 28em;
    }
  }
`
