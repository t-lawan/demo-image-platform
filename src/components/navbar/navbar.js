import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const NavbarWrapper = styled.div`
  height: 100%;
`
const NavbarLinkWrapper = styled.div`
  padding: 0 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  height: 40%;
  justify-content: space-between;
  align-items: baseline;
  /* margin: 2rem; */
`

const NavbarLink = styled(Link)``

const Navbar = props => {
  return (
    <NavbarWrapper>
      <NavbarLinkWrapper>
        <NavbarLink to={"/"}>home</NavbarLink>
        <NavbarLink to={"/about"}>about</NavbarLink>
        <NavbarLink to={'/subscribe'}> subscribe</NavbarLink>
        <NavbarLink to={'/'}> archive</NavbarLink>
        <NavbarLink to={'/upcoming'}> upcoming</NavbarLink>
      </NavbarLinkWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
