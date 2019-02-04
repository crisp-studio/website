import React from 'react'
import styled from '../../util/styled-components'
import breakpoint from 'styled-components-breakpoint'

import { Section, Container } from './section'

const Gallery: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
}) => (
  <Section>
    <Container>
      <div className={className}>{children}</div>
    </Container>
  </Section>
)
export default styled(Gallery)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 10px;
  grid-auto-rows: minmax(180px, auto);
  grid-auto-flow: dense;
  padding: 10px;

  .grid-item {
    border-radius: 6px;
    grid-column: span 1;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .span-2 {
    grid-column: span 2;
    /* grid-column-end: span 2;
    grid-row-end: span 2; */
  }

  .span-3 {
    grid-column: span 3;
    /* grid-column-end: span 3;
    grid-row-end: span 4; */
  }
`
