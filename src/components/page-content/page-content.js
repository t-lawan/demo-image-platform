import React from "react"
import styled from "styled-components"
import { size, Colours } from "../styles/styles"
import HorizontalScrollContainer from "../horizontal-scroll-container/horizontal-scroll-container"
import Navbar from "../navbar/navbar"
import { GenerateContentSection } from "../../utility/richtext"
import Ticker from "../ticker/ticker"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { connect } from "react-redux"
import SectionCarousel from "../section-carousel/section-carousel"
import MobileNavbar from "../mobile-navbar/mobile-navbar"
import { getCorrectBackgroundImage, PageUrls } from "../../utility/helper"

export const PageWrapper = styled.div`
  background-image: url(${props => props.image || "none"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 10rem;
  /* height: 100%; */
  width: 100%;
  /* min-height: 100vh; */
  height: 100vh;
  overflow-y: overlay;
}
`

export const PageSectionWrapper = styled.div`
  /* margin-top: 2rem; */
  /* padding: 0 0.5rem; */
  width: 90%;
  /* padding-top: ${props => props.top}; */
    padding-top: ${props => (props.page === PageUrls.ABOUT ? "calc(16.6vh + 2vh)" : "")};
    padding-top: ${props => (props.page === PageUrls.NEWSLETTER ? "calc(25vh + 2vh)" : "")};
    padding-top: ${props => (props.page === PageUrls.ARCHIVE ? "calc(35.23vh + 2vh)" : "")};
    padding-top: ${props => (props.page === PageUrls.UPCOMING ? "calc(41.7vh + 2vh)" : "")};
    /* margin-top: 1rem; */
  /* @media screen and (max-width: ${size.desktop}) {
    padding-top: ${props => (props.page === PageUrls.ABOUT ? "23.5vh" : "")};
    padding-top: ${props => (props.page === PageUrls.NEWSLETTER ? "31vh" : "")};
    padding-top: ${props => (props.page === PageUrls.ARCHIVE ? "35.23vh" : "")};
    padding-top: ${props => (props.page === PageUrls.UPCOMING ? "46vh" : "")};
  }
  @media screen and (max-width: ${size.laptopL}) {
    padding-top: ${props => (props.page === PageUrls.ABOUT ? "22vh" : "")};
    padding-top: ${props => (props.page === PageUrls.NEWSLETTER ? "30vh" : "")};
    padding-top: ${props => (props.page === PageUrls.ARCHIVE ? "35.23vh" : "")};
    padding-top: ${props => (props.page === PageUrls.UPCOMING ? "45.5vh" : "")};
  }
*/
  @media screen and (min-width: ${size.desktopS}) {
    padding-top: ${props => (props.page === PageUrls.ABOUT ? "calc(16.6vh)" : "")};
    padding-top: ${props => (props.page === PageUrls.NEWSLETTER ? "calc(25vh)" : "")};
    padding-top: ${props => (props.page === PageUrls.ARCHIVE ? "calc(35.23vh)" : "")};
    padding-top: ${props => (props.page === PageUrls.UPCOMING ? "calc(41.7vh)" : "")};
  } 
  
  @media (max-width: ${size.mobileL}) {
    width: 100%;
    padding-top: 0;
  }
`

export const TwoColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  /* height: 100vh; */
  @media (max-width: ${size.mobileL}) {
    grid-template-columns: 1fr;
    padding: 0.25rem;
  }
`

const GreenBar = styled.div`
  background: ${Colours.green};
`

const SetPageWrapperPadding = url => {
  let response
  switch (url) {
    case PageUrls.ABOUT: {
      response = "22vh"
      break
    }
    case PageUrls.NEWSLETTER: {
      response = "19.1vh"
      response = "22.4vh"
      response = "27.4vh"
      response = "30vh"
      break
    }
    case PageUrls.ARCHIVE: {
      response = "29.3vh"
      response = "28.2vh"
      response = "35.23vh"
      break
    }
    case PageUrls.UPCOMING: {
      //HDPI
      response = "43.1vh"
      // MDPI
      response = "45.5vh"
      break
    }

    default: {
      response = "0"
      break
    }
  }

  return response
}

export const PageContent = props => {
  let page = props.page
  let currentProject = props.currentProject
  let pageInfo = props.pageInfo
  // {/* <HorizontalScrollContainer sections={page.content} /> */}
  return (
    <PageWrapper
      image={getCorrectBackgroundImage(props.pageInfo, currentProject)}
    >
      {page.hasHorizontalScroll && pageInfo.showCurrentProject ? (
        <SectionCarousel content={page.content} />
      ) : (
        <>
          <MobileNavbar />
          <TwoColumnWrapper>
            <Navbar />
            <PageSectionWrapper
              page={page.url}
              top={SetPageWrapperPadding(page.url)}
            >
              {page.content
                ? page.content.map((con, index) =>
                    GenerateContentSection(con, index, page)
                  )
                : null}
            </PageSectionWrapper>
            {/* <GreenBar /> */}
          </TwoColumnWrapper>
        </>
      )}
      <Ticker />
    </PageWrapper>
  )
}

const mapStateToProps = state => {
  return {
    currentProject: state.currentProject,
    pageInfo: state.page_info
  }
}

export default connect(
  mapStateToProps,
  null
)(PageContent)
