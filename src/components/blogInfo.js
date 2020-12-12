import React from "react"
import { Container } from "semantic-ui-react"
import TestCard from "./testCard"
import style from "./blogInfo.module.css"

const BlogInfo = () => {
  return (
    <div style={{ backgroundColor: "#faeee2", height: "auto" }}>
      <Container>
        <div className={style.cardRow}>
          <TestCard />
          <TestCard />
          <TestCard />
        </div>
      </Container>
    </div>
  )
}

export default BlogInfo
