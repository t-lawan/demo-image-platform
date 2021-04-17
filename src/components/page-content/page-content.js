import React from "react"
import styled from "styled-components"
import { size, Colours } from "../styles/styles"
import HorizontalScrollContainer from "../horizontal-scroll-container/horizontal-scroll-container"
import Navbar from "../navbar/navbar"
import { GenerateContentSection } from "../../utility/richtext"
import Ticker from "../ticker/ticker"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { connect } from "react-redux"
import SectionCarousel from "../section-carousel/section-carousel";

export const PageWrapper = styled.div`
  background-image: url(${props => props.image || "none"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 10rem;
`

export const PageSectionWrapper = styled.div`
  /* margin-top: 2rem; */
  padding: 0 0.5rem;
  width: 90%;
`

export const TwoColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr 0.15fr;
  /* height: 100vh; */
`

const ImageBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
`

const GreenBar = styled.div`
  background: ${Colours.green};
`

export const PageContent = props => {
  let page = props.page;
  console.log('PAGE', page)
  let currentProject = props.currentProject
        // {/* <HorizontalScrollContainer sections={page.content} /> */}
  return (
    <PageWrapper image={currentProject.backgroundImage.file.url}>
      {page.hasHorizontalScroll ? (
        <SectionCarousel content={page.content} />
      ) : (
        <TwoColumnWrapper>
          <Navbar />
          <PageSectionWrapper>
            {page.content
              ? page.content.map((con, index) =>
                  GenerateContentSection(con, index, page)
                )
              : null}
          </PageSectionWrapper>
          <GreenBar />
        </TwoColumnWrapper>
      )}
      <Ticker />
    </PageWrapper>
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
)(PageContent)
