import React from 'react'
import styled from '../../util/styled-components'
import breakpoint from 'styled-components-breakpoint'

import { Section, Container } from './section'
import diagonalClip from '../../images/diagonal-clip.svg'

interface HeroHeaderProps {
  bgColor: 'primary' | 'gray'
  variant: 'large' | 'small'
}

const HeroHeader: React.FC<HeroHeaderProps & React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
}) => (
  <div className={className}>
    <Section>
      <Container className="children">{children}</Container>
    </Section>
  </div>
)

export default styled(HeroHeader)<HeroHeaderProps>`
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4vw;
    background-position: bottom;
    background: url(${diagonalClip});
  }


  ${Section} {
    width: 100%;
    ${p => p.variant == 'large' && `padding: 20rem 0 18rem 0;`}
    ${p => p.variant == 'small' && `padding: 12rem 0 8rem 0;`}
      ${p =>
        p.bgColor == 'primary' && `background-color: ${p.theme.colors.primary400};`}
      ${p => p.bgColor == 'gray' && `background-color: ${p.theme.colors.gray100};`}
  }
`
