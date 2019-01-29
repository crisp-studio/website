import React, { Fragment } from 'react'
import { buildUrl } from 'react-instafeed'

import { options } from '../util/instafeed'
import { render } from 'react-dom'

import styled from '../util/styled-components'
import breakpoint from 'styled-components-breakpoint'

// import instaIcon from '../components/instagram'

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
      <GridGallery>
        <Fragment>
          {data.map(({ images, link }, index) => {
            const image = images[options.resolution]
            return (
              <a href={link}>
                <GridItem>
                  <GridImage src={image.url} />
                  <GridHoverLink>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#ffffff"
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      />
                    </svg>
                  </GridHoverLink>
                </GridItem>
              </a>
            )
          })}
        </Fragment>
      </GridGallery>
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

  /* To-Do: 1:1 Ratio auf den Posts */

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

  &:hover {
    opacity: 1;
    background-color: rgba(21, 60, 255, 0.6);
  }
`
