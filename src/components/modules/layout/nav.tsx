import React from 'react'
import styled from '../../../util/styled-components'

import { Link } from 'gatsby'
import breakpoint from 'styled-components-breakpoint'
import hamburgerIcon from 'eva-icons/outline/svg/menu-outline.svg'
import crispLogo from '../../../images/logo-black.svg'

import { Section, Container } from '../../common/section'

interface NavProps {
  variant?: 'light' | 'dark'
}

interface NavState {
  mobileMenuShown: boolean
}

interface MenuProps {
  visible: boolean
}

export default class Nav extends React.Component<NavProps, NavState, MenuProps> {
  constructor(props) {
    super(props)

    this.state = {
      mobileMenuShown: false,
    }
  }

  toggleMenu = () => {
    this.setState(state => ({
      mobileMenuShown: !state.mobileMenuShown,
    }))
  }

  componentDidMount() {
    window.matchMedia('(max-width: 736px)').addListener(ev => {
      if (!ev.matches) {
        this.setState({
          mobileMenuShown: false,
        })
      }
    })
  }

  render() {
    return (
      <Section>
        <NavContainer>
          <MenuToggle onClick={this.toggleMenu}>
            <img src={hamburgerIcon} alt="Hamburger Menu Icon" />
          </MenuToggle>
          <Logo>
            <img src={crispLogo} alt="Crisp Studio Logo" />
          </Logo>
          <Menu visible={this.state.mobileMenuShown}>
            <MenuItem>
              <MenuItemLink to="/design-sprint/">Design Sprint</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to="/dev-sprint/">Dev Sprint</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to="/about/">About</MenuItemLink>
            </MenuItem>
            {/* <li>
            <MenuItemLink href="https://medium.com/crispstudio">
              Blog
            </MenuItemExternal>
          </li> */}
          </Menu>
        </NavContainer>
      </Section>
    )
  }
}

const NavContainer = styled(Container)`
  padding: 0;
  font-size: 1 rem;
  font-weight: bold;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  padding-bottom: 1rem;

  ${breakpoint('tablet')`
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  `}
`

const MenuToggle = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 1rem;
  right: 2.5rem;
  cursor: pointer;
  display: block;
  ${breakpoint('tablet')`
    display: none;
  `};
`

const Logo = styled.a`
  display: block;

  img {
    width: 8rem;
    height: auto;
  }
`

const Menu = styled.ul<MenuProps>`
  ${breakpoint('tablet')`
    display: flex;
    text-align: center;
  `}

  ${p => (p.visible ? `` : `display: none`)}
`

const MenuItem = styled.li`
  ${breakpoint('mobile')`
    padding: 0.2rem 0rem;
  `}
`

// Muss ich nicht hier noch typen? styled(Link)<LinkProps>
const MenuItemLink = styled(Link)`
  color: ${p => p.theme.colors.gray700};
  text-decoration: none;

  ${breakpoint('tablet')`
    margin-left: 1rem;
  `}
`
