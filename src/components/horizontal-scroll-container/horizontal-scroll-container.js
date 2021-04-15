import React from "react"
import styled from "styled-components"
import Navbar from "../navbar/navbar"
import SocialMedia from "../social-media/social-media"
import { connect } from "react-redux"
import { GenerateContentSection } from "../../utility/richtext"
import Image from "../../assets/IMAGE.jpg"
import Favicon from "../../assets/favicon.png"
import GreenFavicon from "../../assets/green-favicon.png"
import { DateManager } from "../../utility/date-manager"
import StickyBackgroundImage from "../sticky-background-image/sticky-background-image";
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
  /* white-space: nowrap; */
`

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: transparent;
  flex: 0 0 auto;
  background-image: url(${props => props.image || "none"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const RepeaterContainer = styled(Container)`
  background: lightgray;
`
const RepeaterContainerWrapper = styled.div`
  /* padding: 0 1rem; */
`

const BottomImageWrapper = styled.div`
  height: 10%;
  background: red;
  width: 100%;
  bottom: 0;
  position: sticky;
`

const PageSectionWrapper = styled.div`
  /* background: red; */
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const ThreeColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* grid-template-columns: 2fr 8fr; */
  /* grid-template-columns: 8.5fr 0.5fr; */
`

const NavbarFixedWrapper = styled.div`
  /* position: fixed; */
  top: 0;
  width: 15%;
  width: 22.22%;
`

const JumbotronWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`

const JumbotronTitle = styled.h1`
  color: #00D200;
  display: inline-block;
`

const JumbotronImage = styled.img`
  width: 2.5%;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`

const HorizontalScrollContainer = props => {
  let currentProject = props.currentProject;

  return (
    <HorizontalScrollContainerWrapper>
      <Container image={currentProject.backgroundImage.file.url}>
        <ThreeColumnWrapper>
          <NavbarFixedWrapper>
            <Navbar />
          </NavbarFixedWrapper>
          <PageSectionWrapper>
            <JumbotronWrapper>
              <JumbotronTitle>{currentProject.artist}</JumbotronTitle>
              <JumbotronImage src={GreenFavicon} />
              <JumbotronTitle>{currentProject.title}</JumbotronTitle>
              <JumbotronImage src={GreenFavicon} />
              <JumbotronTitle>
                {DateManager.createStartAndEndDateString(
                  currentProject.startDate,
                  currentProject.endDate
                )}{" "}
              </JumbotronTitle>
            </JumbotronWrapper>
          </PageSectionWrapper>
          {/* <SocialMedia /> */}
        </ThreeColumnWrapper>
      </Container>
      {currentProject
        ? currentProject.content.map((section, index) => (
            <RepeaterContainer
              key={index}
              image={currentProject.backgroundImage.file.url}
            >
              <RepeaterContainerWrapper>
                {GenerateContentSection(section, index, currentProject)}
              </RepeaterContainerWrapper>
              {section.backgroundImages ? (
                <StickyBackgroundImage images={section.backgroundImages} />
              ) : null}
            </RepeaterContainer>
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
