import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
// import Img from "gatsby-image"
import styled from "styled-components"
import ArrowLeft from "../../assets/arrow_left.png"
import ArrowRight from "../../assets/arrow_right.png"
import { connect } from "react-redux"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { size } from "../styles/styles"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledSlider = styled(Slider)`
  max-width: 100% !important;
/* z-index: 100; */
  position: relative;
  display: grid;
  /* overflow-y: hidden;
  overflow-x: hidden; */

`

const SliderSettings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  adaptiveHeight: false

};
const StyledCarousel = styled(Carousel)``

const StyledCarouselWrapper = styled.div`
  display: grid;
  /* grid-template-columns: 0.5fr 9fr 0.5fr; */
  grid-column-gap: 1rem;
  /* position: absolute;
  height: 80%; */
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  }
  /* flex-direction: row; */
`

const NavigationButtons = styled.img`
  margin: auto;
  padding: 0 0.2rem;
  cursor: pointer;
  width: 3% !important;
  @media (max-width: ${size.tablet}) {
    padding: 0;
    display: none;
  }
`

const ImageWrapper = styled.div`
  padding: 2rem;
  /* background: pink; */
`

const ImageDescription = styled.p`
  text-align: left;
`

const ArrowImage = (image, func) => {
   return (
    <NavigationButtons
    src={image}
    onClick={func}
  />
   )
}
class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
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
    return (
      <StyledCarouselWrapper>
        <StyledSlider ref={this.carouselRef} {...SliderSettings}>

          {this.props.images.map((im, index) => {
            let img = getImage(im.gatsbyImageData)

            return (
              <ImageWrapper key={index}>
                <GatsbyImage image={img} alt={"Image Carousel"} />
                <ImageDescription> {im.description}</ImageDescription>
              </ImageWrapper>
            )
          })}
        {/* </StyledCarousel> */}
        </StyledSlider>
      </StyledCarouselWrapper>
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
)(ImageCarousel)
