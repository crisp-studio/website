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

export const GalleryItem = styled.div<{
  rowSpan?: number
  colSpan?: number
}>`
  border-radius: ${p => p.theme.sizes.borderRadius};
  overflow: hidden;

  @media (min-width: 769px) {
    grid-row-end: span ${p => p.rowSpan || 1};
    grid-column-end: span ${p => p.colSpan || 1};
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }
`

export default styled(Gallery)`
  display: grid;
  margin-bottom: 4rem;

  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;

  ${breakpoint('desktop')`
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  `}
`
