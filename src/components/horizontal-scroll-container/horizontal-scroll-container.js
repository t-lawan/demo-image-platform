import React from "react"
import styled from "styled-components"
import Navbar from "../navbar/navbar"
import SocialMedia from "../social-media/social-media"
import { connect } from "react-redux"
import { GenerateContentSection } from "../../utility/richtext"
import Image from '../../assets/IMAGE.jpg'
const HorizontalScrollContainerWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  /* width: 100vw; */
  overflow-x: overlay;
  overflow-y: hidden;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  white-space: nowrap;
`

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: transparent;
  flex: 0 0 auto;
  background-image: url(${props => props.image || "unset"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
const RepeaterContainerWrapper = styled.div`
    padding: 0 1rem;
`

const PageSectionWrapper = styled.div`
  /* background: red; */
  height: 100vh;
`

const ThreeColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6.5fr 0.5fr;
`

const HorizontalScrollContainer = props => {
  let currentProject = props.currentProject;
  return (
    <HorizontalScrollContainerWrapper>
      <Container>
        <ThreeColumnWrapper>
          <Navbar />
          <PageSectionWrapper></PageSectionWrapper>
          <SocialMedia />
        </ThreeColumnWrapper>
      </Container>
      {currentProject
        ? currentProject.content.map((section, index) => (
            <Container key={index} image={Image}>
                <RepeaterContainerWrapper>
                     {GenerateContentSection(section, index)}
                </RepeaterContainerWrapper>
            </Container>
          ))
        : null}
    </HorizontalScrollContainerWrapper>
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
)(HorizontalScrollContainer)
