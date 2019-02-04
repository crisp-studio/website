import React from 'react'
import styled from '../../util/styled-components'
import breakpoint from 'styled-components-breakpoint'

import { Section, Container } from './section'

interface SplitProps {
  alternateSides?: boolean
  alignItems?: 'flex-start' | 'center' | 'flex-end'
}

const SplitContent: React.FC<SplitProps & React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
}) => (
  <Section className={className}>
    <Container className="children">{children}</Container>
  </Section>
)
export default styled(SplitContent)`
  .children {
    display: flex;
    flex-grow: 1;
    align-items: ${p => p.alignItems || 'center'};

    > div {
      flex-grow: 1;
      flex-basis: 0;
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }
    }

    ${breakpoint('mobile', 'tablet')`
      flex-direction: column;

      > div {
        justify-content: center;
        margin-bottom: 4rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    `}
  }

  ${p =>
    p.alternateSides &&
    `&:nth-child(2n) .children {
      @media(min-width: 1025px) {
        flex-direction: row-reverse;
      }
    }
  `}
`
