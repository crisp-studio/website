import React from 'react'

import Layout from '../components/modules/layout'
import Button from '../components/common/button'
import Input from '../components/common/input'
import Instagram from '../components/modules/instagram-feed'

const IndexPage = () => (
  <Layout variant="light">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Button variant="green">Hey there!</Button>

    <br />
    <form>
      <Input type="text" name="test" />
    </form>

    <Instagram />
  </Layout>
)

export default IndexPage
