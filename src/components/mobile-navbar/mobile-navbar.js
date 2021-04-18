import React, { useState } from "react"
import styled from "styled-components"
import DEMOLOGO from "../../assets/DEMO_LOGO.png"
import { size, Colours } from "../styles/styles"
import GreenFavicon from "../../assets/green-favicon.png"
import GreenFaviconSVG from "../../assets/green-favicon.svg"
import CloseIcon from "../../assets/CloseIcon.png"
import FaviconSVG from "../../assets/favicon.svg"
import { Link } from "gatsby"
import { PageUrls } from "../../utility/helper"
import { useLocation } from "@reach/router"

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
  background: red;
  z-index: 1000;
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
    background-image: url(${props =>
      props.isActive ? GreenFaviconSVG : FaviconSVG});
    background-repeat: no-repeat;
    margin-right: 10px;
  }
`

const MobileNavbar = props => {
  const [showModal, setShowModal] = useState(false)
  let location = useLocation()

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
    console.log("TOGGLE", showModal)
    setShowModal(show)
  }
  return (
    <>
      <MobileNavbarWrapper>
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

      <MobileModal show={showModal}>
        <CloseImage src={CloseIcon} onClick={() => toggleModal(false)} />
        <MobileNavbarLinkWrapper>
          <MobileNavbarLink activeClassName={"active-link"} to={PageUrls.ABOUT}>
            <MobileNavbarTitle isActive={isCurrentUrl(PageUrls.ABOUT)}>
              {" "}
              about{" "}
            </MobileNavbarTitle>
          </MobileNavbarLink>
          <MobileNavbarLink
            activeClassName={"active-link"}
            to={PageUrls.SUBSCRIBE}
          >
            <MobileNavbarTitle isActive={isCurrentUrl(PageUrls.SUBSCRIBE)}>
              {" "}
              subscribe{" "}
            </MobileNavbarTitle>
          </MobileNavbarLink>
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

export default MobileNavbar
