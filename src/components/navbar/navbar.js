import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import WhiteFaviconSVG from "../../assets/white-favicon.svg"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import GreenFaviconSVG from "../../assets/green-favicon.svg"
import DEMOLOGO from "../../assets/DEMO_LOGO.png"
import SocialMedia from "../social-media/social-media"
import { useLocation } from "@reach/router"
import { PageUrls } from "../../utility/helper"
import { Colours, size } from "../styles/styles"
import { connect } from "react-redux"

const NavbarWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${size.mobileL}) {

     display: none;

  }
`

const SocialMediaWrapper = styled.div`
  /* align-self: flex-end; */
`
const NavbarLinkWrapper = styled.div`
  padding: 0 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  height: 20%;
  justify-content: space-between;
  align-items: baseline;
  font-family: "FreightBigBook";

  /* margin: 2rem; */
`
const HomeNavbarImage = styled(GatsbyImage)`
  /* width: 15%; */
  /* width: 100%; */
`
const NavbarLink = styled(Link)`
  padding-left: 1rem;
  color: white;
  .active-link {
    color: ${Colours.green} !important;
  }
`


const NavbarTitle = styled.li`
  list-style-type: none;
  font-size: 2rem !important;
  &:before {
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;
    color: inherit;
    background-size: 20px;
    background-image: url(${props => props.isActive ? GreenFaviconSVG : WhiteFaviconSVG});
    background-repeat: no-repeat;
    margin-right: 10px;
    margin-bottom: -2.5px;
  }
`

const Navbar = props => {
  let location = useLocation()
  let image = getImage(props.pageInfo.navbarImage.gatsbyImageData);
  console.log('IMAGE', image)

  const isCurrentUrl = url => {
    let response = false

    switch (url) {
      case PageUrls.ABOUT: {
        response = PageUrls.ABOUT === location.pathname
        break
      }
      case PageUrls.ARCHIVE: {
        response = PageUrls.ARCHIVE === location.pathname
        break
      }
      case PageUrls.NEWSLETTER: {
        response = PageUrls.NEWSLETTER === location.pathname
        break
      }
      case PageUrls.UPCOMING: {
        response = PageUrls.UPCOMING === location.pathname
        break
      }
    }

    return response
  }
  return (
    <NavbarWrapper>
      <NavbarLinkWrapper>
        <NavbarLink to={"/"}>
          <HomeNavbarImage image={image} />
        </NavbarLink>
        <NavbarLink activeClassName={"active-link"} to={PageUrls.ABOUT}>
          <NavbarTitle isActive={isCurrentUrl(PageUrls.ABOUT)}>
            {" "}
            about{" "}
          </NavbarTitle>
        </NavbarLink>
        <NavbarLink activeClassName={"active-link"} to={PageUrls.NEWSLETTER}>
          <NavbarTitle isActive={isCurrentUrl(PageUrls.NEWSLETTER)}>
            {" "}
            newsletter{" "}
          </NavbarTitle>
        </NavbarLink>
        <NavbarLink activeClassName={"active-link"} to={PageUrls.ARCHIVE}>
          <NavbarTitle isActive={isCurrentUrl(PageUrls.ARCHIVE)}>
            {" "}
            archive{" "}
          </NavbarTitle>
        </NavbarLink>
        <NavbarLink activeClassName={"active-link"} to={PageUrls.UPCOMING}>
          <NavbarTitle isActive={isCurrentUrl(PageUrls.UPCOMING)}>
            {" "}
            upcoming{" "}
          </NavbarTitle>
        </NavbarLink>
      </NavbarLinkWrapper>
      <SocialMediaWrapper>
        <SocialMedia />
      </SocialMediaWrapper>
    </NavbarWrapper>
  )
}
const mapStateToProps = state => {
  return {
    pageInfo: state.page_info
  }
}
export default connect(
  mapStateToProps,
  null
)(Navbar)
