import React from 'react'
import styled from '../util/styled-components'

interface ButtonProps {
  variant?: 'green' | 'white'
  icon?: any
}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLAnchorElement>> = ({
  variant,
  children,
  icon,
  ...rest
}) => (
  <a {...rest}>
    {children}
    {icon && <img src={icon} alt="Icon" />}
  </a>
)

export default styled(Button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  transition: box-shadow 0.2s, transform 0.2s;

  padding: 0 1rem;
  height: 2.2rem;

  border-radius: ${p => p.theme.sizes.borderRadius};
  box-shadow: ${p => p.theme.shadows.elevation100};

  &:hover {
    box-shadow: ${p => p.theme.shadows.elevation200};
    transform: translateY(-2px);
  }

  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.75px;
  text-transform: uppercase;

  background-color: ${p => p.theme.colors.primary400};
  color: white;

  ${p =>
    p.variant == 'green' &&
    `
    background-color: ${p.theme.colors.accent200};
    color: ${p.theme.colors.accent700};
  `}

  ${p =>
    p.variant == 'white' &&
    `
    background-color: white;
    color: ${p.theme.colors.primary400};
  `}

  // Icons
  img {
    height: 20px;
    width: auto;
    margin-left: 0.5rem;
  }
`
