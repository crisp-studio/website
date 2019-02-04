import { GatsbyLinkProps, Link } from 'gatsby'
import React from 'react'

import animatedScroll from './animated-scroll'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import theme from '../theme'

const sectionPrefix = '#'

const BetterLink = (props: GatsbyLinkProps<any>): any => {
  if (props.to && props.to.startsWith('/')) {
    const { ref, ...linkProps } = props
    return (
      <AniLink cover bg={theme.colors.primary400} {...linkProps}>
        {props.children}
      </AniLink>
    )
  }

  const { activeClassName, ...anchorLinkProps } = props

  if (props.to && props.to.startsWith(sectionPrefix)) {
    const scrollToElement = (ev: React.MouseEvent<HTMLAnchorElement>) => {
      const id = props.to.replace(sectionPrefix, '')
      const element = document.getElementById(id)

      if (element) {
        ev.preventDefault()
        animatedScroll(element)
        window.history.replaceState('', '', `#${id}`)
      }
    }

    return (
      <a
        {...anchorLinkProps}
        href={props.to.replace(sectionPrefix, '#')}
        target={props.target || 'blank'}
        onClick={scrollToElement}
      >
        {props.children}
      </a>
    )
  }

  return (
    <a {...anchorLinkProps} href={props.to}>
      {props.children}
    </a>
  )
}

export default BetterLink
