import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Favicon from '../../assets/favicon.png'
const NavbarWrapper = styled.div`
  height: 100vh;
`
const NavbarLinkWrapper = styled.div`
  padding: 0 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  height: 20%;
  justify-content: space-between;
  align-items: baseline;
  /* margin: 2rem; */
`
const HomeNavbarImage = styled.img`
  width: 30%;
`
const NavbarLink = styled(Link)`
  padding-left: 1rem;
`

const Navbar = props => {
  return (
    <NavbarWrapper>

      <NavbarLinkWrapper>
        <NavbarLink to={"/"}>
          <HomeNavbarImage src={Favicon} alt="Favicon" />
        </NavbarLink>
        <NavbarLink activeClassName={'active-link'} to={"/about"}>about</NavbarLink>
        <NavbarLink activeClassName={'active-link'} to={'/subscribe'}> subscribe</NavbarLink>
        <NavbarLink activeClassName={'active-link'} to={'/archive'}> archive</NavbarLink>
        <NavbarLink activeClassName={'active-link'} to={'/upcoming'}> upcoming</NavbarLink>
      </NavbarLinkWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
