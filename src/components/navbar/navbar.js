import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavbarWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: space-between;
  align-items: baseline;
  margin: 2rem;
`

const NavbarFixedWrapper = styled.div`
  position: fixed;
`

const NavbarLink = styled(Link)``

const Navbar = props => {
  return (
      <NavbarWrapper>
        <NavbarLink to={"/"}>home</NavbarLink>
        <NavbarLink to={"/about"}>about</NavbarLink>
        <p> subscribe</p>
        <p> archive</p>
        <p> upcoming</p>
      </NavbarWrapper>
  )
}

export default Navbar
