import React from 'react'
import styled from '../../../util/styled-components'
import breakpoint from 'styled-components-breakpoint'
import instagram from '../../../images/instagram.svg'
import medium from '../../../images/medium.svg'
import linkedin from '../../../images/linkedin.svg'

// TODO: On mobile container background is not extending to the sides
// TODO: Social Media Icons are not aligned, need to be clickable
// ? Is it better to nest inside the container or to use different styled-components?

export default class FooterBar extends React.Component {
  render() {
    return (
      <Container>
        <FooterMenu>
          <li>
            <FooterLink href="#">Disclaimer</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </li>
        </FooterMenu>
        <Social>
          <SocialIcon src={instagram} />
          <SocialIcon src={medium} />
          <SocialIcon src={linkedin} />
        </Social>
      </Container>
    )
  }
}

const Container = styled.div`
  ${breakpoint('tablet')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    `}

  display: flex;
  flex-direction: column;

  align-items: center;
  position: relative;
  color: ${p => p.theme.colors.supWhite};
  background-color: ${p => p.theme.colors.primary300};
  padding: 1rem 0rem;
  &:before {
    content: '';
    background-color: ${p => p.theme.colors.primary300};
    position: absolute;
    height: 100%;
    width: 400vw;
    left: -2000px;
    z-index: -1;
  }
`

const FooterMenu = styled.ul`
  color: white;
`

const FooterLink = styled.a`
  color: white;
  padding: 0rem 0.4rem;
  text-decoration: none;
`

const Social = styled.div``

const SocialIcon = styled.img`
  padding: 0rem 0.4rem;
`
