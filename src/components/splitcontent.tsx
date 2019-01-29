import React from 'react'
import styled from '../util/styled-components'
import breakpoint from 'styled-components-breakpoint'

interface SplitContentProps {
  variant?: 'left' | 'right'
}

// ! Styled-Components not working

const SplitContent: React.FC<
  SplitContentProps & React.HTMLProps<HTMLDivElement>
> = ({ variant, children, className }) => <div className={className}>{children}</div>

export default styled(SplitContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4rem 0rem;

  p {
    max-width: 28em;
  }
`
