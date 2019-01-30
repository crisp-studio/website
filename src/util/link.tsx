import { GatsbyLinkProps, Link } from 'gatsby'
import React from 'react'

import animatedScroll from './animated-scroll'

const sectionPrefix = '#'

const BetterLink = (props: GatsbyLinkProps<any>): any => {
  if (props.to.startsWith('/')) {
    const { ref, ...linkProps } = props
    return <Link {...linkProps}>{props.children}</Link>
  }

  const { activeClassName, ...anchorLinkProps } = props

  if (props.to.startsWith(sectionPrefix)) {
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
