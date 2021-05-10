import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"
import { connect } from "react-redux"
import { GenerateContentSection } from "../../utility/richtext"
import Navbar from "../navbar/navbar";
import GreenFavicon from "../../assets/green-favicon.png"
import WhiteFavicon from "../../assets/white-favicon.png"
import { DateManager } from "../../utility/date-manager";
import StickyBackgroundImage from "../sticky-background-image/sticky-background-image";
import Jumbotron from "../jumbotron/jumbotron";
import { Colours, size, Layers } from "../styles/styles";
import MobileNavbar from "../mobile-navbar/mobile-navbar";


const StyledCarousel = styled(Carousel)``

const SectionCarouselWrapper = styled.div`
font-family: 'AkzidenzGrotesk';
`

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: transparent;
  flex: 0 0 auto;
  position: relative;
  /* background-image: url(${props => props.image || "none"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
`
const NavbarWrapper = styled.div`
  text-align: left;
  /* top: 0; */
  width: 22.2%;
  @media (max-width: ${size.mobileL}) {
    width: 50%;
    
  }
`
const RepeaterContainer = styled(Container)`
  background: lightgray;
  position:relative;
  z-index: 0;
  /* background-image: url(${props => props.image || "none"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
`
const FaviconImageWrapper = styled.div`
  width: 10% !important;
    position: absolute;
    top: 0;
    left: 4vw;
    padding: 1rem;
    cursor: pointer;
`
const FaviconImage = styled.img`
  /* width: 10% !important;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    cursor: pointer; */
`


const RepeaterContainerWrapper = styled.div`
  /* padding: 0 1rem; */
`
const NavigationWrapper = styled.div`
    width: 100%;
    height: 7.5%;
    position: absolute;
    bottom: 0;
    z-index: auto;
    /* z-index: 0; */
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
    z-index: ${Layers.CAROUSEL_NAVIGATION};
    visibility: ${props => props.hide ? 'hidden' : 'visible'};
`

const FlexRowWrapper = styled.div`
  /* display: flex;
  flex-direction: row; */
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
    this.carouselRef = React.createRef();
    this.state = {
      currentSlide: 0
    }
  }

  isFirst = () => {

    return this.state.currentSlide === 0;
  }

  isLast = () => {
    return this.state.currentSlide === this.props.currentProject.content.length;
  }

  previousSlide = () => {
    if (this.state.currentSlide >= 0) {
      this.setState({
        currentSlide: this.state.currentSlide - 1
      })
    }
  }

  goToFirstSlide = () => {
    console.log('XXXX')
    this.setState({
      currentSlide: 0
    })
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

  onSwipeEnd(){
    this.carouselRef.current.clearAutoPlay()
    console.log('SWIPE', this.carouselRef.current)

  }

  render() {
    let currentProject = this.props.currentProject;
    return (
      <SectionCarouselWrapper>
        <StyledCarousel
          ref={this.carouselRef}
          autoPlay={false}
          useKeyboardArrows={true}
          swipeable={true}
          centerMode={false}
          emulateTouch={false}
          dynamicHeight={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          stopOnHover={true}
          infiniteLoop={false}
          onChange={this.onChange.bind(this)}
          onSwipeEnd={this.onSwipeEnd.bind(this)}
          selectedItem={this.state.currentSlide}
        >
        <Container image={currentProject.backgroundImage.file.url}>
          <MobileNavbar />
          
          {/* <FlexRowWrapper> */}
            <NavbarWrapper>
              <Navbar />
            </NavbarWrapper>
            <PageSectionWrapper>
                <Jumbotron />
            </PageSectionWrapper>
            {/* <SocialMedia /> */}
          {/* </FlexRowWrapper> */}
        </Container>
        {currentProject.content.map((section, index) => (
          <RepeaterContainer
            key={index}
            image={currentProject.backgroundImage.file.url}
          >
            <FaviconImageWrapper  onClick={this.goToFirstSlide.bind(this)}>
            <FaviconImage src={WhiteFavicon} />

            </FaviconImageWrapper>
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
                    <NavigationText hide={this.isFirst()} onClick={this.previousSlide.bind(this)}> Back</NavigationText>
                    <NavigationText hide={this.isLast()} onClick={this.nextSlide.bind(this)}> Next</NavigationText>
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
