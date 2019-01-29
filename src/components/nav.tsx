import React from 'react'
import styled from '../util/styled-components'

import { Link } from 'gatsby'
import breakpoint from 'styled-components-breakpoint'
import * as eva from 'eva-icons'

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
    window.matchMedia('(max-width: 1024px)').addListener(ev => {
      if (!ev.matches) {
        this.setState({
          mobileMenuShown: false,
        })
      }
    })
  }

  render() {
    return (
      <Container>
        <MenuToggle onClick={this.toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="menu">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                />
                <rect x="3" y="11" width="18" height="2" rx=".95" ry=".95" />
                <rect x="3" y="16" width="18" height="2" rx=".95" ry=".95" />
                <rect x="3" y="6" width="18" height="2" rx=".95" ry=".95" />
              </g>
            </g>
          </svg>
        </MenuToggle>
        <Logo viewBox="0 0 290.72 112.41" xmlns="http://www.w3.org/2000/svg">
          <g fill="#1d1d1d">
            <path d="m153 22.74a13.46 13.46 0 0 0 -17.15 5.5 13.59 13.59 0 0 0 0 13.52 13.41 13.41 0 0 0 11.7 6.7 13.68 13.68 0 0 0 5.4-1.12 15.62 15.62 0 0 0 4.7-3.08l2.9 3.15a19.43 19.43 0 0 1 -6.15 4.08 18.42 18.42 0 0 1 -16.25-.9 17.68 17.68 0 0 1 -8.95-15.53 17.21 17.21 0 0 1 2.43-9 17.47 17.47 0 0 1 6.62-6.43 19.15 19.15 0 0 1 16.33-1 17.57 17.57 0 0 1 5.92 3.87l-2.87 3.5a14.31 14.31 0 0 0 -4.63-3.26z" />
            <path d="m175.13 27.54a11.1 11.1 0 0 1 5.7-1.53v4.5a8.51 8.51 0 0 0 -9.4 8.15v14h-4.65v-26.5h4.65v5.7a9.56 9.56 0 0 1 3.7-4.32z" />
            <path d="m190.26 16.46a3 3 0 0 1 .82 2.15 2.94 2.94 0 0 1 -.82 2.15 3 3 0 0 1 -4.15 0 3 3 0 0 1 -.83-2.15 3 3 0 0 1 .83-2.15 3 3 0 0 1 4.15 0zm-4.38 9.7h4.65v26.45h-4.65z" />
            <path d="m210.41 30.41a13 13 0 0 0 -3.78-.6 6.37 6.37 0 0 0 -3.37.78 2.6 2.6 0 0 0 -1.26 2.41 2.63 2.63 0 0 0 1.43 2.43 20.17 20.17 0 0 0 4.32 1.67 35.61 35.61 0 0 1 4.5 1.6 8 8 0 0 1 3 2.35 6.42 6.42 0 0 1 1.23 4.1 6.48 6.48 0 0 1 -2.83 5.7 12.05 12.05 0 0 1 -7 1.95 17.4 17.4 0 0 1 -5.73-.95 13 13 0 0 1 -4.67-2.7l1.75-3.4a12.37 12.37 0 0 0 4.08 2.4 13.49 13.49 0 0 0 4.72.9 7 7 0 0 0 3.7-.85 2.83 2.83 0 0 0 1.4-2.6 3 3 0 0 0 -1.48-2.7 20 20 0 0 0 -4.47-1.8 29.13 29.13 0 0 1 -4.32-1.52 7.78 7.78 0 0 1 -2.86-2.28 6.16 6.16 0 0 1 -1.17-3.9 6.3 6.3 0 0 1 2.7-5.55 11.7 11.7 0 0 1 6.7-1.85 16.78 16.78 0 0 1 4.72.68 14.24 14.24 0 0 1 4 1.82l-1.72 3.5a16.24 16.24 0 0 0 -3.59-1.59z" />
            <path d="m243.88 27.71a11.77 11.77 0 0 1 4.5 4.75 14.84 14.84 0 0 1 1.6 7 14.93 14.93 0 0 1 -1.57 6.93 11.49 11.49 0 0 1 -4.46 4.7 12.74 12.74 0 0 1 -6.57 1.67 12 12 0 0 1 -5.9-1.4 10 10 0 0 1 -4-4v15h-4.65v-36.2h4.65v5.25a10.18 10.18 0 0 1 4-4 11.89 11.89 0 0 1 5.83-1.4 12.82 12.82 0 0 1 6.57 1.7zm-2.88 19.8a8.15 8.15 0 0 0 3.15-3.35 10.3 10.3 0 0 0 1.13-4.85 10 10 0 0 0 -1.15-4.8 8.55 8.55 0 0 0 -3.15-3.35 8.66 8.66 0 0 0 -4.55-1.2 8.78 8.78 0 0 0 -4.57 1.2 8.41 8.41 0 0 0 -3.18 3.35 10.76 10.76 0 0 0 0 9.68 8.4 8.4 0 0 0 3.18 3.32 9.3 9.3 0 0 0 9.14 0z" />
            <path d="m151.19 65.72a17.32 17.32 0 0 0 -4.82-.77 9 9 0 0 0 -4.88 1.17 3.67 3.67 0 0 0 -1.82 3.23 4.25 4.25 0 0 0 1.1 3 7.64 7.64 0 0 0 2.7 1.85c1.07.46 2.55 1 4.45 1.58a49 49 0 0 1 5.75 2.1 10 10 0 0 1 3.75 3 8.26 8.26 0 0 1 1.58 5.22 8.69 8.69 0 0 1 -1.63 5.25 10.33 10.33 0 0 1 -4.55 3.47 17.21 17.21 0 0 1 -6.72 1.23 19.53 19.53 0 0 1 -7.5-1.5 20.36 20.36 0 0 1 -6.3-4l2.15-4.15a18.3 18.3 0 0 0 5.55 3.78 15.6 15.6 0 0 0 6.08 1.32 9.68 9.68 0 0 0 5.52-1.38 4.27 4.27 0 0 0 2-3.72 4.36 4.36 0 0 0 -1.1-3.05 7.76 7.76 0 0 0 -2.78-1.9 46.4 46.4 0 0 0 -4.52-1.55 45.51 45.51 0 0 1 -5.7-2.05 9.89 9.89 0 0 1 -3.73-2.95 8.17 8.17 0 0 1 -1.52-5.15 8.25 8.25 0 0 1 1.55-5 9.8 9.8 0 0 1 4.35-3.3 17 17 0 0 1 6.5-1.15 21.49 21.49 0 0 1 11.55 3.4l-2 4.3a20.36 20.36 0 0 0 -5.01-2.28z" />
            <path d="m180.37 94a11.39 11.39 0 0 1 -6.2 2 7.05 7.05 0 0 1 -5.1-1.88q-1.95-1.87-1.95-5.67v-14.7h-3.75v-3.55h3.75v-7.1h4.7v7.1h8.1v3.55h-8.1v13.8a4.91 4.91 0 0 0 .8 3.15 3 3 0 0 0 2.4 1 8.45 8.45 0 0 0 4.1-1.25z" />
            <path d="m209.42 69.3v26.45h-4.7v-5.6q-2.59 5.66-9.8 5.75a9.49 9.49 0 0 1 -7.2-2.72 10.49 10.49 0 0 1 -2.6-7.53v-16.35h4.7v15.1a7.19 7.19 0 0 0 1.82 5.22 6.7 6.7 0 0 0 5 1.88 7.42 7.42 0 0 0 5.87-2.63 9.81 9.81 0 0 0 2.18-6.57v-13z" />
            <path d="m243.12 58.65v37.1h-4.65v-5.25a10.44 10.44 0 0 1 -4 4.07 11.73 11.73 0 0 1 -5.9 1.43 12.56 12.56 0 0 1 -6.63-1.73 11.77 11.77 0 0 1 -4.47-4.8 14.92 14.92 0 0 1 -1.6-7 14.58 14.58 0 0 1 1.6-6.93 11.69 11.69 0 0 1 4.47-4.72 12.72 12.72 0 0 1 6.58-1.7 12.22 12.22 0 0 1 5.95 1.4 9.94 9.94 0 0 1 4 4v-15.87zm-9 32.15a8.48 8.48 0 0 0 3.18-3.35 10.19 10.19 0 0 0 1.15-4.85 10.3 10.3 0 0 0 -1.15-4.9 8.48 8.48 0 0 0 -3.18-3.35 9.44 9.44 0 0 0 -9.25 0 8.6 8.6 0 0 0 -3.17 3.38 10.8 10.8 0 0 0 0 9.7 8.39 8.39 0 0 0 3.17 3.35 9.51 9.51 0 0 0 9.25 0z" />
            <path d="m256.84 59.6a3.2 3.2 0 0 1 0 4.3 3 3 0 0 1 -4.15 0 3.23 3.23 0 0 1 0-4.3 3 3 0 0 1 4.15 0zm-4.37 9.7h4.65v26.45h-4.65z" />
            <path d="m284.19 70.85a12.24 12.24 0 0 1 4.8 4.72 14.79 14.79 0 0 1 0 13.88 12.18 12.18 0 0 1 -4.8 4.75 15.47 15.47 0 0 1 -14.1 0 12.2 12.2 0 0 1 -4.8-4.73 14.9 14.9 0 0 1 0-13.9 12.24 12.24 0 0 1 4.8-4.72 15.47 15.47 0 0 1 14.1 0zm-11.65 3.55a8.32 8.32 0 0 0 -3.15 3.32 10.18 10.18 0 0 0 -1.12 4.83 10.41 10.41 0 0 0 1.12 4.9 8.07 8.07 0 0 0 3.15 3.32 9 9 0 0 0 4.63 1.23 8.87 8.87 0 0 0 4.57-1.18 8.07 8.07 0 0 0 3.15-3.32 10.41 10.41 0 0 0 1.13-4.9 10.19 10.19 0 0 0 -1.13-4.83 8.32 8.32 0 0 0 -3.15-3.32 8.78 8.78 0 0 0 -4.57-1.2 8.9 8.9 0 0 0 -4.63 1.15z" />
            <path d="m121.72 63.2a1.57 1.57 0 0 0 .08-.31v-.17a.43.43 0 0 1 0 0c0-.11 0-.22 0-.32a.49.49 0 0 0 0-.12 1.86 1.86 0 0 0 -.13-.46 0 0 0 0 1 0 0l-24-54.2v-.06a2.07 2.07 0 0 0 -.19-.32l-.08-.1a2 2 0 0 0 -.33-.32 2 2 0 0 0 -.41-.22h-.11a2.37 2.37 0 0 0 -.36-.09h-.08l-58.95-6.51a2.57 2.57 0 0 0 -.48 0h-.16l-.27.07-.25.17a2.26 2.26 0 0 0 -.26.16l-.14.12a1.45 1.45 0 0 0 -.21.22l-.07.08-34.94 47.86a1.88 1.88 0 0 0 -.21.37s0 0 0 0 0 .08 0 .12a2.21 2.21 0 0 0 -.08.35s0 .09 0 .13a2.54 2.54 0 0 0 0 .39s0 0 0 .08a1.86 1.86 0 0 0 .13.46 0 0 0 0 1 0 0l24 54.2a.18.18 0 0 0 .05.07 1.49 1.49 0 0 0 .18.3 1 1 0 0 0 .08.11 2.13 2.13 0 0 0 .34.33 2.23 2.23 0 0 0 .51.26h.19a1.11 1.11 0 0 0 .26.07l58.92 6.35h.21a2 2 0 0 0 .42 0h.12l.29-.11h.12l.28-.19.07-.06a2.13 2.13 0 0 0 .29-.31l35-47.86.05-.09c0-.09.1-.18.14-.27s-.04-.13-.02-.18zm-37 44-9.41-10.7 35.69-25.24zm-61.46-49.36 55.79-26.45-8.23 61.18zm-.6-4.15 15.44-48.69 39.14 22.82zm44.69 41.31-39.7 6.75-5.65-39.87zm15.65-63 33.64 30.34-41.7 29.54zm-2-6.66-34.95-20.34 46.17 5zm-62.86 29.41-13.06-5.75 26.27-36zm-.59 4.1 4.45 31.22-16-36.31zm54 39.48 8.45 9.54-39.5-4.25zm12.65-70.61 11.25-15.39 18.78 42.47z" />
          </g>
        </Logo>
        <Menu visible={this.state.mobileMenuShown}>
          <MenuItem>
            <MenuItemLink to="/another-page/">Design Sprint</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/another-page/">Dev Sprint</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/studio/">Studio</MenuItemLink>
          </MenuItem>
          {/* <li>
          <MenuItemLink href="https://medium.com/crispstudio">
            Blog
          </MenuItemExternal>
        </li> */}
        </Menu>
      </Container>
    )
  }
}

const Container = styled.div`
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
`

const Logo = styled.svg`
  width: 8rem;
  height: auto;
`

const Menu = styled.ul`
  padding: 0;
  
  /* ${props => {
    if (props.visible) {
      ;`display: flex;`
    } else {
      ;`display: none;`
    }
  }} */

  ${breakpoint('tablet')`
    display: flex;
    text-align: center;
  `}
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
