import React from 'react'
import styled from '../../util/styled-components'

interface CardProps {}

export default styled.div`
  display: block;

  transition: box-shadow 0.2s, transform 0.2s;

  padding: 2rem 2rem;
  overflow: hidden;

  border-radius: ${p => p.theme.sizes.borderRadius};
  box-shadow: ${p => p.theme.shadows.elevation100};

  background-color: white;

  color: ${p => p.theme.colors.gray500};
`

interface HeaderProps {
  icon?: any
  iconAlt?: string
}

const Header: React.FC<HeaderProps> = ({ icon, iconAlt, children, ...rest }) => (
  <div {...rest}>
    {icon && <img src={icon} alt={iconAlt} />}
    <h5>{children}</h5>
  </div>
)

export const CardHeader = styled(Header)`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  h5 {
    margin: 0;
    color: ${p => p.theme.colors.gray700};
  }

  img {
    margin-right: 1rem;
    width: auto;
    height: 2.5rem;
  }
`
