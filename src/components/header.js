import React from "react"
import { Link } from "gatsby"
import { Menu, Image } from "semantic-ui-react"
import PropTypes from "prop-types"
import logo from "../images/logo.png"
import style from "./header.module.css"

const Header = ({ siteTitle }) => {
  return (
    <div>
      <div style={{ backgroundColor: "#faeee2", padding: "15px" }}>
        <div style={{ margin: "  auto" }}>
          <Image
            src={logo}
            style={{
              objectFit: "cover",
              height: "250px",
              width: "250px",
              margin: "auto"
            }}
          />
        </div>
      </div>

      <Menu
        pointing
        secondary
        style={{
          backgroundColor: `#f08a21`,
          display: "flex",
          justifyContent: "center",
          marginTop: 0
        }}
      >
        <Link to="/" className={style.menuItem}>
          <Menu.Item
            name="home"
            style={{
              color: `white`,
              fontSize: "1.6rem"
            }}
          />
        </Link>
        <Link to="/page-2/" className={style.menuItem}>
          <Menu.Item
            name="receipes"
            style={{
              color: `white`,
              fontSize: "1.6rem"
            }}
          />
        </Link>
        <Link to="/blog" className={style.menuItem}>
          <Menu.Item
            name="blog"
            style={{
              color: `white`,
              fontSize: "1.6rem"
            }}
          />
        </Link>
        <Link to="/about" className={style.menuItem}>
          <Menu.Item
            name="about"
            style={{
              color: `white`,
              fontSize: "1.6rem"
            }}
          />
        </Link>
        <Link to="/contact" className={style.menuItem}>
          <Menu.Item
            name="contact"
            style={{
              color: `white`,
              fontSize: "1.6rem"
            }}
          />
        </Link>
      </Menu>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
