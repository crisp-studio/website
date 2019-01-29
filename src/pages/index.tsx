import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import Input from '../components/input'
import Instagram from '../components/instafeed'
import Nav from '../components/nav'
import FooterCTA from '../components/footerCTA'
import FooterBar from '../components/footerBar'

const IndexPage = () => (
  <Layout>
    <Nav variant="light" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Button variant="green">Hey there!</Button>
    <Button icon={icon}>Yooo!</Button>

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
