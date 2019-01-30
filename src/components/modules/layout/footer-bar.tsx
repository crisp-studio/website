import React from 'react'
import styled from '../../../util/styled-components'
import breakpoint from 'styled-components-breakpoint'
import instagram from '../../../images/instagram.svg'
import medium from '../../../images/medium.svg'
import linkedin from '../../../images/linkedin.svg'

import { Section, Container } from '../../common/section'

export default class FooterBar extends React.Component {
  render() {
    return (
      <BlueSection>
        <FooterContainer>
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
        </FooterContainer>
      </BlueSection>
    )
  }
}

const BlueSection = styled(Section)`
  background-color: ${p => p.theme.colors.primary300};
`

const FooterContainer = styled(Container)`
  ${breakpoint('tablet')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${p => p.theme.colors.supWhite};
  padding: 1rem;
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
