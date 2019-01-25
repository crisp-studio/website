import React from 'react'
import { Link } from 'gatsby'

import Image from '../components/image'
import Layout from '../components/layout';
import Button from '../components/button';

import icon from '../images/icons/arrow-circle-right.svg';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Button variant="green">Hey there!</Button>
    <Button>Yooo!</Button>
    <Button variant="white" icon={icon}>Contact Us</Button>
    <Instagram />
  </Layout>
)

export default IndexPage
