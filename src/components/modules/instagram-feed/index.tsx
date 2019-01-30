import React, { Fragment } from 'react'
import { buildUrl } from 'react-instafeed'

import { options } from '../../../util/instafeed'
import { render } from 'react-dom'

import styled from '../../../util/styled-components'
import breakpoint from 'styled-components-breakpoint'

// import instaIcon from '../components/instagram'
import instagram from '../../../images/instagram.svg'

import { Section, Container } from '../../common/section'

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
    console.log(data)

    return (
      <Section>
        <Container>
          <GridGallery>
            <Fragment>
              {data.map(({ images, link }, index) => {
                const image = images[options.resolution]
                return (
                  <a href={link} target="_blank">
                    <GridItem>
                      <GridImage src={image.url} />
                      <GridHoverLink>
                        <img src={instagram} />
                      </GridHoverLink>
                    </GridItem>
                  </a>
                )
              })}
            </Fragment>
          </GridGallery>
        </Container>
      </Section>
    )
  }
}

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
  cursor: pointer;

  height: 0;
  padding-bottom: 100%;

  transition: all 0.3s ease-in-out;
  box-shadow: ${p => p.theme.shadows.elevation100};
  border-radius: ${p => p.theme.sizes.borderRadius};

  &:hover {
    transform: scale(1.025);
    box-shadow: ${p => p.theme.shadows.elevation300};
  }
`

const GridImage = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const GridHoverLink = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(21, 60, 255, 0);
  z-index: 20;
  opacity: 0;

  transition: all 0.5s ease;

  img {
    width: 3rem;
    height: auto;
  }

  &:hover {
    opacity: 1;
    background-color: rgba(21, 60, 255, 0.6);
  }
`
