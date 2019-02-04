import React from 'react'
import styled from '../../util/styled-components'
import Link from '../../util/link'

interface ButtonProps {
  variant?: 'green' | 'white'
  icon?: any
  disabled?: boolean
}

const Button: React.FC<ButtonProps & React.ComponentProps<typeof Link>> = ({
  variant,
  children,
  icon,
  ...rest
}) => (
  <Link {...rest}>
    {children}
    {icon && <div className="icon" />}
  </Link>
)

export default styled(Button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  cursor: ${p => (p.disabled ? 'default' : 'pointer')};

  transition: box-shadow 0.2s, transform 0.2s;

  padding: 0 1rem;
  height: 2rem;

  border-radius: ${p => p.theme.sizes.borderRadius};
  box-shadow: ${p => (p.disabled ? 'none' : p.theme.shadows.elevation100)};

  ${p =>
    !p.disabled &&
    `&:hover {
      box-shadow: ${p.theme.shadows.elevation200};
      transform: translateY(-2px);
    }
  `}

  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  text-decoration: none;

  background-color: ${p => p.theme.colors.primary400};
  color: white;

  // Icons
  .icon {
    height: 20px;
    width: 20px;
    margin-left: 0.5rem;

    background-color: white;
    mask-size: contain;
    mask-image: url('${p => p.icon}')
  }

  // Variants
  ${p =>
    p.variant == 'green' &&
    `
    background-color: ${p.theme.colors.accent200};
    color: ${p.theme.colors.accent700};

    .icon {
      background-color: ${p.theme.colors.accent700};
    }
  `}

  ${p =>
    p.variant == 'white' &&
    `
    background-color: white;
    color: ${p.theme.colors.primary400};

    .icon {
      background-color: ${p.theme.colors.primary400};
    }
  `}

`
