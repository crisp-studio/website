import React from 'react'
import styled from '../../../util/styled-components'

import breakpoint from 'styled-components-breakpoint'
import hamburgerIcon from 'eva-icons/outline/svg/menu-outline.svg'
import contactIcon from 'eva-icons/fill/svg/arrow-circle-right.svg'
import crispLogo from '../../../images/logo-black.svg'

import { Section, Container } from '../../common/section'
import Button from '../../common/button'
import Link from '../../../util/link'

interface NavProps {
  variant?: 'light' | 'dark'
}

interface NavState {
  mobileMenuShown: boolean
}

interface MenuProps {
  visible: boolean
}

export default class Nav extends React.Component<NavProps, NavState> {
  state = {
    mobileMenuShown: false,
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
      <HeaderSection variant={this.props.variant}>
        <NavContainer as="nav">
          <MenuToggle onClick={this.toggleMenu}>
            <img src={hamburgerIcon} alt="Hamburger Menu Icon" />
          </MenuToggle>
          <Logo to="/">
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
            <MenuItem>
              <MenuItemLink to="https://medium.com/crispstudio">Blog</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <Button
                href="/contact/"
                variant={this.props.variant === 'dark' ? 'white' : undefined}
                icon={contactIcon}
              >
                Contact Us
              </Button>
            </MenuItem>
          </Menu>
        </NavContainer>
      </HeaderSection>
    )
  }
}

const HeaderSection = styled(Section)<NavProps>`
  color: ${p => p.theme.colors.gray700};

  ${p =>
    p.variant === 'dark' &&
    `
    color: ${p.theme.colors.supWhite};

    img {
      filter: invert(100%) brightness(200%);
    }
  `}
`

const NavContainer = styled(Container)`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  padding-bottom: 1rem;

  ${breakpoint('tablet')`
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    padding-top: 4rem;
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

const Logo = styled(Link)`
  display: block;

  img {
    width: 8rem;
    height: auto;
  }
`

const Menu = styled.ul<MenuProps>`
  ${breakpoint('tablet')`
    display: flex;
    align-items: center;
    text-align: center;
  `}

  ${p => (p.visible ? `` : `display: none`)}
`

const MenuItem = styled.li`
  ${Button} {
    margin-left: 4rem;
  }

  ${breakpoint('mobile')`
    padding: 0.2rem 0rem;
  `}
`

const MenuItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  ${breakpoint('tablet')`
    margin-left: 1rem;
  `}
`
