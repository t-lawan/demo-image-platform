import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Favicon from '../../assets/favicon.png'
import FaviconSVG from '../../assets/favicon.svg'
import GreenFaviconSVG from '../../assets/green-favicon.svg'
import DEMOLOGO from '../../assets/DEMO_LOGO.png'
import SocialMedia from "../social-media/social-media";
import { useLocation } from "@reach/router";
import { PageUrls } from "../../utility/helper";
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
    color: rgb(0,255,0) !important;
  }
`

const NavbarTitle = styled.li`
  list-style-type: none;
  &:before{
    content: '';
    display: inline-block;
    color: inherit;
    background-size: 20px;
    background-image: url(${props => props.isActive ? GreenFaviconSVG: FaviconSVG});
    background-repeat: no-repeat;
    margin-right: 10px;
 }

`

const Navbar = props => {
  let location = useLocation()


  const isCurrentUrl = (url) => {
    console.log('LOCATION', location)
    let response = false;

    switch(url) {
      case PageUrls.ABOUT: {
        response = PageUrls.ABOUT === location.pathname;
        break
      }
      case PageUrls.ARCHIVE: {
        response = PageUrls.ARCHIVE === location.pathname;
        break
      }
      case PageUrls.SUBSCRIBE: {
        response = PageUrls.SUBSCRIBE === location.pathname;
        break
      }
      case PageUrls.UPCOMING: {
        response = PageUrls.UPCOMING === location.pathname;
        break
      }
   
    }

    return response;

  }
  return (
    <NavbarWrapper>

      <NavbarLinkWrapper>
        <NavbarLink to={"/"}>
          <HomeNavbarImage src={DEMOLOGO} alt="Favicon" />
        </NavbarLink>
        <NavbarLink activeClassName={'active-link'} to={PageUrls.ABOUT}>
          <NavbarTitle isActive={isCurrentUrl(PageUrls.ABOUT)}> about </NavbarTitle>
        </NavbarLink>
        <NavbarLink activeClassName={'active-link'} to={PageUrls.SUBSCRIBE}> 
          <NavbarTitle isActive={isCurrentUrl(PageUrls.SUBSCRIBE)}> subscribe </NavbarTitle>
        </NavbarLink>
        <NavbarLink activeClassName={'active-link'} to={PageUrls.ARCHIVE}> 
          <NavbarTitle isActive={isCurrentUrl(PageUrls.ARCHIVE)}> archive </NavbarTitle>
        </NavbarLink>
        <NavbarLink activeClassName={'active-link'} to={PageUrls.UPCOMING}> 
          <NavbarTitle isActive={isCurrentUrl(PageUrls.UPCOMING)}> upcoming </NavbarTitle>
        </NavbarLink>
      </NavbarLinkWrapper>
      <SocialMediaWrapper>
        <SocialMedia />

      </SocialMediaWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
