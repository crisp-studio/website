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
            <MenuItem variant={this.props.variant}>
              <MenuItemLink to="/design-sprint/">Design Sprint</MenuItemLink>
            </MenuItem>
            {/*<MenuItem variant={this.props.variant}>
              <MenuItemLink to="/dev-sprint/">Dev Sprint</MenuItemLink>
            </MenuItem>*/}
            <MenuItem variant={this.props.variant}>
              <MenuItemLink to="/about/">About</MenuItemLink>
            </MenuItem>
            <MenuItem variant={this.props.variant}>
              <MenuItemLink to="https://betterinbetween.com">Blog</MenuItemLink>
            </MenuItem>
            <MenuItem variant={this.props.variant}>
              <Button
                to="https://crispstudio.typeform.com/to/fYqiES"
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
  position: absolute;
  width: 100%;
  z-index: 2;

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
  font-weight: 500;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  padding-bottom: 1rem;
  padding-top: 1rem;

  ${breakpoint('desktop')`
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
  top: 1.5rem;
  right: 2.5rem;
  cursor: pointer;
  display: block;

  ${breakpoint('desktop')`
    display: none;
    top: 1rem;
  `};
`

const Logo = styled(Link)<NavProps>`
  display: inline-block;

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

  @media (max-width: 1024px) {
    display: ${p => (p.visible ? 'flex' : 'none')};
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    color: ${p => p.theme.colors.primary400};

    li:last-child {
      display: none;
    }
  }
`

const MenuItem = styled.li<NavProps>`
  ${Button} {
    margin-left: 4rem;
  }

  @media (max-width: 1024px) {
    padding: 0.5rem 0.4rem;
    margin: 0.4rem 0.4rem 0 0;
    border-radius: 6px;

    color: ${p =>
      p.variant == 'light' ? p.theme.colors.supWhite : p.theme.colors.primary400};
    background-color: ${p =>
      p.variant == 'light' ? p.theme.colors.primary400 : p.theme.colors.supWhite};
  }
`

const MenuItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  ${breakpoint('desktop')`
    margin-left: 2rem;
  `}
`
