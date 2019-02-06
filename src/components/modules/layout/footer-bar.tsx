import React from 'react'
import styled from '../../../util/styled-components'
import breakpoint from 'styled-components-breakpoint'
import instagram from '../../../images/instagram.svg'
import medium from '../../../images/medium.svg'
import linkedin from '../../../images/linkedin.svg'
import Link from '../../../util/link'

import { Section, Container } from '../../common/section'

export default class FooterBar extends React.Component {
  render() {
    return (
      <BlueSection as="footer">
        <FooterContainer>
          <FooterMenu>
            <li>
              <FooterLink to="/pdf/disclaimer.pdf" external>
                Disclaimer
              </FooterLink>
            </li>
            <li>
              <FooterLink to="/pdf/privacy.pdf" external>
                Privacy Policy
              </FooterLink>
            </li>
            <li>
              <FooterLink to="https://playbook.crisp.studio">
                Our Playbook
              </FooterLink>
            </li>
          </FooterMenu>
          <Social>
            <SocialLink to="https://www.instagram.com/crispstudio/">
              <SocialIcon src={instagram} />
            </SocialLink>
            <SocialLink to="https://medium.com/crispstudio">
              <SocialIcon src={medium} />
            </SocialLink>
            <SocialLink to="https://www.linkedin.com/company/18551677/admin/">
              <SocialIcon src={linkedin} />
            </SocialLink>
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
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${p => p.theme.colors.supWhite};
  padding: 2rem;

  ${breakpoint('tablet')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  `}
`

const FooterMenu = styled.ul`
  color: white;
  list-style: none;
  margin: 0;
  display: flex;
  margin-bottom: 1rem;

  ${breakpoint('tablet')`
    margin-bottom: 0;
  `}
`

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;

  margin: 0.5rem;

  ${breakpoint('tablet')`
    margin-left: 0;
    margin-right: 1rem;
  `}
`

const Social = styled.div`
  display: flex;
`

const SocialLink = styled(Link)`
  margin: 0 0.5rem;

  ${breakpoint('tablet')`
    margin-left: 1rem;
    margin-right: 0;
  `}
`

const SocialIcon = styled.img``
