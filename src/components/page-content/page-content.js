import React from "react"
import styled from "styled-components"
import { size } from "../styles/styles"
import HorizontalScrollContainer from "../horizontal-scroll-container/horizontal-scroll-container"
import Navbar from "../navbar/navbar"
import { GenerateContentSection } from "../../utility/richtext"
import Ticker from "../ticker/ticker"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import IMAGE from '../../assets/IMAGE.jpg'
import { connect } from "react-redux"

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
  grid-template-columns: 2fr 7fr;
  /* height: 100vh; */
`

const ImageBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
`

export const PageContent = props => {
  let page = props.page;
  let currentProject = props.currentProject

  let image = page.backgroundImage ? getImage(page.backgroundImage) : null
  return (
    <PageWrapper image={currentProject.backgroundImage.file.url}>
      {/* {image ? (
        <ImageBackground>
          <GatsbyImage image={image} alt={"Image"} />
        </ImageBackground>
      ) : null} */}
      {page.hasHorizontalScroll ? (
        <HorizontalScrollContainer sections={page.content} />
      ) : (
        <TwoColumnWrapper>
          <Navbar />
          <PageSectionWrapper>
            {page.content
              ? page.content.map((con, index) =>
                  GenerateContentSection(con, index)
                )
              : null}
          </PageSectionWrapper>
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
