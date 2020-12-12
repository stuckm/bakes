import React from "react"
import { Card, Image, Icon } from "semantic-ui-react"

const SemanticCard = () => {
  return (
    <Card>
      <Image
        src="https://source.unsplash.com/random/290x290"
        wrapped
        ui={false}
      />
      <Card.Content
        style={{
          transform: "translateY(-20px)",
          zIndex: 1,
          backgroundColor: "white"
        }}
      >
        <Card.Header style={{ textAlign: "center" }}>Recipe</Card.Header>
        <Card.Meta>
          <Icon name="clock outline" />2 Hours
        </Card.Meta>
        <Card.Description>
          Recipe Description will give a short description of the recipe being
          made.
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default SemanticCard
