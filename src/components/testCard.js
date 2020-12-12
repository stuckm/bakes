import React from "react"
import style from "./testCard.module.css"

const TestCard = () => {
  return (
    <div className={style.containerItem}>
      <figure className={style.figures}>
        <img
          className={style.image}
          src="https://source.unsplash.com/random/335x318"
        />
      </figure>
      <div className={style.card}>
        <h5 className={style.title}>Title</h5>
      </div>
    </div>
  )
}

export default TestCard
