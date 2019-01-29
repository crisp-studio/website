import React from 'react'
import { Link } from 'gatsby'
import { buildUrl } from 'react-instafeed'

import Image from '../components/image'
import Layout from '../components/layout'
import Button from '../components/button'
import Input from '../components/input'
import Instagram from '../components/instafeed'
import Nav from '../components/nav'
import FooterCTA from '../components/footerCTA'
import FooterBar from '../components/footerBar'

import icon from 'eva-icons/fill/svg/arrow-circle-right.svg'

const IndexPage = () => (
  <Layout>
    <Nav variant="light" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Button variant="green">Hey there!</Button>
    <Button>Yooo!</Button>

    <br />
    <form>
      <Input type="text" name="test" />
    </form>

    <Instagram />
    <FooterCTA />
    <FooterBar />
  </Layout>
)

export default IndexPage
