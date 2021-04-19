import React, { useState } from "react"
import styled from "styled-components"
import DEMOLOGO from "../../assets/DEMO_LOGO.png"
import { size, Colours, Layers } from "../styles/styles"
import GreenFavicon from "../../assets/green-favicon.png"
import GreenFaviconSVG from "../../assets/green-favicon.svg"
import CloseIcon from "../../assets/CloseIcon.png"
import FaviconSVG from "../../assets/favicon.svg"
import WhiteFaviconSVG from "../../assets/white-favicon.svg"
import { Link } from "gatsby"
import { PageUrls } from "../../utility/helper"
import { useLocation } from "@reach/router"
import { connect } from "react-redux"

const HomeNavbarImage = styled.img`
  /* width: 15%; */
  /* width: 100%; */
`

const DemoLogoWrapper = styled.div`
  width: 20%;

`

const MobileNavbarWrapper = styled.div`
  display: none;
  /* width: 100vw; */
  height: 10%;
  padding: 0.25rem;
  /* background: red; */
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: ${size.mobileL}) {
    display: flex;
  }
`

const ModalHeaderWrapper = styled.div`
  width: 10%;
`

const CloseImage = styled.img`

`


const CloseImageWrapper = styled.div`
  width: 10%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.25rem;

`
const MobileModal = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.image || "none"});
  /* background: red; */
  z-index: ${Layers.MOBILE_NAVBAR};

  display: ${props => (props.show ? "block" : "none")};
`

const MobileNavbarLinkWrapper = styled.div`
  padding: 0 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  font-family: "FreightBigBook";

  /* margin: 2rem; */
`
const MobileNavbarLink = styled(Link)`
  font-size: 1.3rem;
  padding-left: 1rem;
  color: white;
  .active-link {
    color: ${Colours.green} !important;
  }
`

const MobileNavbarTitle = styled.li`
  list-style-type: none;
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
    margin-bottom: -5px;
  }
`

const MobileNavbar = props => {
  const [showModal, setShowModal] = useState(false)
  let location = useLocation()
  let currentProject = props.currentProject
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
      case PageUrls.SUBSCRIBE: {
        response = PageUrls.SUBSCRIBE === location.pathname
        break
      }
      case PageUrls.UPCOMING: {
        response = PageUrls.UPCOMING === location.pathname
        break
      }
    }

    return response
  }
  const toggleModal = show => {
    setShowModal(show)
  }
  return (
    <>
      <MobileNavbarWrapper onClick={() => toggleModal(true)}>
        <DemoLogoWrapper>
          <MobileNavbarLink activeClassName={"active-link"} to={'/'}>
          <HomeNavbarImage src={DEMOLOGO} />
          </MobileNavbarLink>
        </DemoLogoWrapper>
        <ModalHeaderWrapper>
          <HomeNavbarImage
            onClick={() => toggleModal(true)}
            src={GreenFavicon}
          />
        </ModalHeaderWrapper>
        {/* <p> Link</p> */}
      </MobileNavbarWrapper>

      <MobileModal image={currentProject.backgroundImage.file.url} show={showModal}>
        <CloseImageWrapper>
          <CloseImage src={CloseIcon} onClick={() => toggleModal(false)} />
        </CloseImageWrapper>
        <MobileNavbarLinkWrapper>
          <MobileNavbarLink activeClassName={"active-link"} to={PageUrls.ABOUT}>
            <MobileNavbarTitle isActive={isCurrentUrl(PageUrls.ABOUT)}>
              {" "}
              about{" "}
            </MobileNavbarTitle>
          </MobileNavbarLink>
          {/* <MobileNavbarLink
            activeClassName={"active-link"}
            to={PageUrls.SUBSCRIBE}
          >
            <MobileNavbarTitle isActive={isCurrentUrl(PageUrls.SUBSCRIBE)}>
              {" "}
              subscribe{" "}
            </MobileNavbarTitle>
          </MobileNavbarLink> */}
          <MobileNavbarLink
            activeClassName={"active-link"}
            to={PageUrls.ARCHIVE}
          >
            <MobileNavbarTitle isActive={isCurrentUrl(PageUrls.ARCHIVE)}>
              {" "}
              archive{" "}
            </MobileNavbarTitle>
          </MobileNavbarLink>
          <MobileNavbarLink
            activeClassName={"active-link"}
            to={PageUrls.UPCOMING}
          >
            <MobileNavbarTitle isActive={isCurrentUrl(PageUrls.UPCOMING)}>
              {" "}
              upcoming{" "}
            </MobileNavbarTitle>
          </MobileNavbarLink>
        </MobileNavbarLinkWrapper>
      </MobileModal>
    </>
  )
}


const mapStateToProps = state => {
  return {
    currentProject: state.currentProject
  }
}

export default connect(
  mapStateToProps,
  null
)(MobileNavbar)
