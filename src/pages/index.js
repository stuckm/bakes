import React from "react"
import "semantic-ui-css/semantic.min.css"
import Layout from "../components/layout"
import { Container } from "semantic-ui-react"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import Slider from "../components/slider"
import TitleBox from "../components/titleBox"
import Recipes from "../components/recipies"
import BlogInfo from "../components/blogInfo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />

    <div style={{ backgroundColor: "#fbe5b9", transform: "translateY(-15px)" }}>
      <Container>
        <TitleBox title="Latest Recipies" color="#f0b21a" offset="-36px" />

        <Recipes />
        <TitleBox title="Latest Blogs" color="#f0b21a" offset="42px" />
      </Container>
      <BlogInfo />
    </div>
  </Layout>
)

export default IndexPage
