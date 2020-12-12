import React from "react"
import { Form } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input type="text"></input>
        </Form.Field>
      </Form>
    </Layout>
  )
}

export default Contact
