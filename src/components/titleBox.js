import React from "react"

const TitleBox = ({ title, color, offset }) => {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        padding: "15px",
        fontSize: "32px",
        outline: `3px solid ${color}`,
        outlineOffset: "5px",
        maxWidth: "40%",
        margin: " 15px auto",
        transform: `translateY(${offset})`,
        zIndex: 100
      }}
    >
      <h2 style={{ textAlign: "center", color: "white" }}>{title}</h2>
    </div>
  )
}

export default TitleBox
