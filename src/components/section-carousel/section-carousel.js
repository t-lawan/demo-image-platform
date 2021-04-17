import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"
import { connect } from "react-redux"
import { GenerateContentSection } from "../../utility/richtext"
import Navbar from "../navbar/navbar";
import GreenFavicon from "../../assets/green-favicon.png"
import { DateManager } from "../../utility/date-manager";
import StickyBackgroundImage from "../sticky-background-image/sticky-background-image";
import Jumbotron from "../jumbotron/jumbotron";
import { Colours } from "../styles/styles";


const StyledCarousel = styled(Carousel)``

const SectionCarouselWrapper = styled.div``

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
const NavbarWrapper = styled.div`
  top: 0;
  width: 25%;
`
const RepeaterContainer = styled(Container)`
  background: lightgray;
`


const RepeaterContainerWrapper = styled.div`
  /* padding: 0 1rem; */
`
const NavigationWrapper = styled.div`
    width: 100%;
    height: 7.5%;
    position: absolute;
    bottom: 0;
`

const NavigationFlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem;
  
`

const NavigationText = styled.p`
    color: ${Colours.green} !important;
    cursor: pointer;
`

const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* grid-template-columns: 2fr 8fr; */
  /* grid-template-columns: 8.5fr 0.5fr; */
`
const PageSectionWrapper = styled.div`
  /* background: red; */
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

class SectionCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 0
    }
  }

  previousSlide = () => {
    if (this.state.currentSlide >= 0) {
      this.setState({
        currentSlide: this.state.currentSlide - 1
      })
    }
  }

  nextSlide = () => {
    this.setState({
      currentSlide: this.state.currentSlide + 1
    })
  }
  onChange(slideNumber) {
    this.setState({
      currentSlide: slideNumber
    })
  }

  render() {
    let currentProject = this.props.currentProject;
    return (
      <SectionCarouselWrapper>
        <StyledCarousel
          centerMode={false}
          swipeable={true}
          dynamicHeight={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          autoPlay={false}
          stopOnHover={true}
          infiniteLoop={true}
          onChange={this.onChange.bind(this)}
          selectedItem={this.state.currentSlide}
        >
        <Container image={currentProject.backgroundImage.file.url}>
          <FlexRowWrapper>
            <NavbarWrapper>
              <Navbar />
            </NavbarWrapper>
            <PageSectionWrapper>
                <Jumbotron />
            </PageSectionWrapper>
            {/* <SocialMedia /> */}
          </FlexRowWrapper>
        </Container>
        {currentProject.content.map((section, index) => (
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
        ))}

        </StyledCarousel>
        <NavigationWrapper>
                <NavigationFlexRowWrapper>
                    <NavigationText onClick={this.previousSlide.bind(this)}> Back</NavigationText>
                    <NavigationText onClick={this.nextSlide.bind(this)}> Next</NavigationText>
                </NavigationFlexRowWrapper>
        </NavigationWrapper>
      </SectionCarouselWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentProject: state.currentProject
  }
}

export default connect(
  mapStateToProps,
  null
)(SectionCarousel)
