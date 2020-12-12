import React from "react"
import TestCard from "./testCard"
import { Image } from "semantic-ui-react"
import style from "./recipies.module.css"

const Recipies = () => {
  return (
    <div className={style.cardRow}>
      <TestCard />
      <TestCard />
      <TestCard />
      <Image
        className={style.banner}
        fluid
        src="https://source.unsplash.com/random/900x200"
      />
      <TestCard />
      <TestCard />
      <TestCard />
    </div>
  )
}

export default Recipies
