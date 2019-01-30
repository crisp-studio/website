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
  <Section>
    <Container>
      <div className={className}>{children}</div>
    </Container>
  </Section>
)
export default styled(SplitContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4rem 0rem;

  p {
    max-width: 28em;
  }
`
