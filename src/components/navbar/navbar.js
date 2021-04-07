import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Favicon from '../../assets/favicon.png'
import FaviconSVG from '../../assets/favicon.svg'
import DEMOLOGO from '../../assets/DEMO_LOGO.png'
import SocialMedia from "../social-media/social-media";
const NavbarWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SocialMediaWrapper = styled.div`
  align-self: flex-end;
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
  /* width: 15%; */
  width: 100%;
`
const NavbarLink = styled(Link)`
  padding-left: 1rem;
  .active-link {
    color: green !important;
  }
`

const NavbarTitle = styled.li`
  list-style-type: none;
  &:before{
    content: '';
    display: inline-block;
    color: inherit;
    background-size: 20px;
    background-image: url(${FaviconSVG});
    background-repeat: no-repeat;
    margin-right: 10px;
 }

`

const Navbar = props => {
  return (
    <NavbarWrapper>

      <NavbarLinkWrapper>
        <NavbarLink to={"/"}>
          <HomeNavbarImage src={DEMOLOGO} alt="Favicon" />
        </NavbarLink>
        <NavbarLink activeClassName={'active-link'} to={"/about"}>
          <NavbarTitle> about </NavbarTitle>
        </NavbarLink>
        <NavbarLink activeClassName={'active-link'} to={'/subscribe'}> 
          <NavbarTitle> subscribe </NavbarTitle>
        </NavbarLink>
        <NavbarLink activeClassName={'active-link'} to={'/archive'}> 
          <NavbarTitle> archive </NavbarTitle>
        </NavbarLink>
        <NavbarLink activeClassName={'active-link'} to={'/upcoming'}> 
          <NavbarTitle> upcoming </NavbarTitle>
        </NavbarLink>
      </NavbarLinkWrapper>
      <SocialMediaWrapper>
        <SocialMedia />

      </SocialMediaWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
