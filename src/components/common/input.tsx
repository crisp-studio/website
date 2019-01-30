import styled from '../../util/styled-components'

interface InputProps {
  variant?: 'light' | 'dark'
}

export default styled.input<InputProps>`
  padding: 0.5rem 1rem;
  border-radius: ${p => p.theme.sizes.borderRadius};
  outline: none;
  border: none;
  box-shadow: ${p => p.theme.shadows.inset100};
  background-color: ${p => p.theme.colors.gray100};
  color: ${p => p.theme.colors.gray500};

  ${p =>
    p.variant == 'dark' &&
    `
    background-color: ${p.theme.colors.gray500};
    color: ${p.theme.colors.gray100};
  `};
`
