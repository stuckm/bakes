import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { Container } from "semantic-ui-react"
import sliderStyles from "./slider.module.css"

const Slider = () => {
  return (
    <div
      style={{
        margin: "auto ",
        backgroundColor: "#faeee2",
        paddingBottom: "60px",
        fontSize: " 0px"
      }}
    >
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className={`d-block w-100 ${sliderStyles.carouselImage}`}
              src="https://source.unsplash.com/random/1024X450"
              alt="First slide"
              style={{ height: "450px", width: "1024px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <div
                className={sliderStyles.carouselMove}
                style={{
                  backgroundColor: "#f08a21",
                  padding: "15px",
                  fontSize: "32px"
                }}
              >
                <h3>First slide label</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={`d-block w-100 ${sliderStyles.carouselImage}`}
              src="https://source.unsplash.com/random/1024X450"
              alt="Third slide"
              style={{ height: "450px", width: "1024px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <div
                className={sliderStyles.carouselMove}
                style={{
                  backgroundColor: "#f08a21",
                  padding: "15px",
                  fontSize: "32px"
                }}
              >
                <h3>Second slide label</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={`d-block w-100 ${sliderStyles.carouselImage}`}
              src="https://source.unsplash.com/random/1024X450"
              alt="Third slide"
              style={{ height: "450px", width: "1024px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <div
                className={sliderStyles.carouselMove}
                style={{
                  backgroundColor: "#f08a21",
                  padding: "15px",
                  fontSize: "32px"
                }}
              >
                <h3>Third slide label</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default Slider
