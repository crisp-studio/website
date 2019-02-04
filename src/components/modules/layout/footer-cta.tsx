import React from 'react'
import styled from '../../../util/styled-components'

import breakpoint from 'styled-components-breakpoint'
import Button from '../../common/button'
import { Section, Container } from '../../common/section'

import phoneIcon from 'eva-icons/outline/svg/phone-call-outline.svg'
import nextIcon from 'eva-icons/fill/svg/arrow-circle-right.svg'

const FooterCta: React.FC = () => (
  <CtaSection>
    <CtaContainer>
      <div>
        <h4>Ready to get started?</h4>
        <p>Get in touch, we are happy to help out or just have a chat.</p>
      </div>
      <div>
        <Button to="https://calendly.com/crisp-studio" icon={phoneIcon}>
          Schedule call
        </Button>
        <Button
          to="https://crispstudio.typeform.com/to/fYqiES"
          icon={nextIcon}
          variant="white"
        >
          Contact us
        </Button>
      </div>
    </CtaContainer>
  </CtaSection>
)

export default FooterCta

const CtaSection = styled(Section)`
  background-color: ${p => p.theme.colors.gray100};
  padding: 3rem 0;
`

const CtaContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  position: relative;
  justify-content: center;
  align-items: center;

  > div {
    margin: 1rem 0;
  }

  ${Button} {
    margin: 0.5rem 0;
    margin-left: 1rem;
  }

  h4 {
    color: ${p => p.theme.colors.primary400};
  }

  ${breakpoint('tablet')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}

  ${breakpoint('mobile', 'tablet')`
    > div {
      text-align: center;
    }
  `}
`
