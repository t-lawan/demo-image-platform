import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import TransparentStar from '../../assets/TransparentStar.png'
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
const HomeNavbarImage = styled.img`
  width: 20%;
  background: green;
`
const NavbarLink = styled(Link)`
  padding-left: 1rem;
`

const Navbar = props => {
  return (
    <NavbarWrapper>

      <NavbarLinkWrapper>
      <HomeNavbarImage src={TransparentStar} alt="Transparent Star" />

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
