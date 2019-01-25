import React, { Fragment } from 'react'
import { buildUrl } from 'react-instafeed'

import { options } from '../util/instafeed'
import { render } from 'react-dom'

import styled from '../util/styled-components'
import breakpoint from 'styled-components-breakpoint'

export default class Instagram extends React.Component {
  initialState = {
    loading: true,
    error: false,
    json: {} as Record<string, any>,
  }

  state = this.initialState

  componentDidMount() {
    fetch(buildUrl(options))
      .then(response => response.json())
      .then(json => {
        this.setState({
          loading: false,
          json: json,
        })
      })
      .catch(error => this.setState({ error: error }))
  }

  render() {
    if (this.state.loading) {
      return <Fragment>'Loading...'</Fragment>
    }

    if (this.state.error) {
      return <Fragment>`Error: ${this.state.error}`</Fragment>
    }

    if (!this.state.json) return null

    const { data } = this.state.json

    return (
      <GridGallery>
        <Fragment>
          {data.map(({ caption, id, images, tags }, index) => {
            const image = images[options.resolution]
            return (
              <GridItem>
                <GridImage src={image.url} />
                <GridHoverLink>
                  <StyledP> CLICK ME</StyledP>
                </GridHoverLink>
              </GridItem>
            )
          })}
        </Fragment>
      </GridGallery>
    )
  }
}

const StyledP = styled.p`
  color: white;
  font-size: 2rem;
`

const GridGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(4rem, 1fr));
  grid-gap: 1rem;
  grid-template-rows: repeat(2, 1fr);
  text-align: center;
  grid-auto-flow: row dense;

  ${breakpoint('mobile', 'tablet')`
    grid-template-columns: repeat(2, minmax(4rem, 1fr));
  `}
`

const GridItem = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  grid-column-start: auto;
  grid-row-start: auto;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  box-shadow: ${p => p.theme.shadows.elevation100};
  border-radius: ${p => p.theme.sizes.borderRadius};

  &:hover {
    transform: scale(1.025);
    box-shadow: ${p => p.theme.shadows.elevation300};
  }

`

const GridImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const GridHoverLink = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  /* To-Do: Switch for semi transparent color instead of making the whole thing trasparent */
  background-color: ${p => p.theme.colors.primary400};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.5;
  }

`
