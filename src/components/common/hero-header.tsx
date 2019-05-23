import React from 'react'
import styled from '../../util/styled-components'
import { Section, Container } from './section'
import diagonalClip from '../../images/diagonal-clip.svg'
import breakpoint from 'styled-components-breakpoint'

interface HeroHeaderProps {
  variant: 'large' | 'small'
}

const HeroHeader: React.FC<HeroHeaderProps & React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
}) => (
  <Section className={className}>
    <Container className="children">{children}</Container>
  </Section>
)

export default styled(HeroHeader)<HeroHeaderProps>`
  position: relative;
  padding: 12rem 0 8rem 0;
  background-color: ${p => p.theme.colors.gray100};

  ${breakpoint('mobile', 'tablet')`
    padding: 10rem 0 6rem 0;
  `}

  .children {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ${breakpoint('mobile', 'tablet')`
      flex-direction: column;
      align-items: flex-start;
  `}
  }

  h1 {
    color: ${p => p.theme.colors.supWhite};
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.1);
    background-color: ${p => p.theme.colors.primary400};
    color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: tesxt;
    background-clip: text;

    ${breakpoint('mobile', 'tablet')`
      font-size: 3rem;
      line-height: 4rem;
      margin-bottom: 1rem;
    `}
  }

  p {
    color: ${p => p.theme.colors.gray600};
    max-width: 24rem;

    ${breakpoint('mobile', 'tablet')`
      text-align: center;
    `}
  }

  ${p =>
    p.variant == 'large' &&
    `
    background-color: ${p.theme.colors.primary400};
    padding: 18rem 0 18rem 0;

    .children {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    h1 {
      color: ${p.theme.colors.supWhite};
      margin-bottom: 1rem;

      text-shadow: none;
      background-color: none;
      -webkit-background-clip: none;
      -moz-background-clip: none;
      background-clip: none;
    }

    p {
      color: ${p.theme.colors.gray100};
      font-size: 1.5rem;
      line-height: 1.7rem;
      max-width: 30rem;
    }

    @media(max-width: 1025px) {
      padding: 12rem 0 12rem 0;
    }
  `}

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 4vw;
    background-position: bottom;
    background: url(${diagonalClip});
  }
`
