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
import { getCorrectBackgroundImage } from "../../utility/helper";

export const PageWrapper = styled.div`
  background-image: url(${props => props.image || "none"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 10rem;
  height: 100%;
  width: 100%;
  min-height: 100vh;
`

export const PageSectionWrapper = styled.div`
  /* margin-top: 2rem; */
  padding: 0 0.5rem;
  width: 90%;
  @media (max-width: ${size.mobileL}) {
    width: 100%;
  }
`

export const TwoColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 7fr;
  /* height: 100vh; */
  @media (max-width: ${size.mobileL}) {
    grid-template-columns: 1fr;
  }
`

const GreenBar = styled.div`
  background: ${Colours.green};
`

export const PageContent = props => {
  let page = props.page;
  let currentProject = props.currentProject;
  let pageInfo = props.pageInfo;
  // {/* <HorizontalScrollContainer sections={page.content} /> */}
  return (
    <PageWrapper image={getCorrectBackgroundImage(props.pageInfo, currentProject)}>
      {true ? (
        <SectionCarousel content={page.content} />
      ) : (
        <>
          <MobileNavbar />
          <TwoColumnWrapper>
            <Navbar />
            <PageSectionWrapper>
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
