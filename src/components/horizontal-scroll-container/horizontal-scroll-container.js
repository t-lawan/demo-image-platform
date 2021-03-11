import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Navbar from "../navbar/navbar";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { TwoColumnWrapper } from "../page-content/page-content";

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
`

const PageSectionWrapper = styled.div`
    background: red;
    height: 100vh;
`

const SocialMediaWrapper = styled.div`
    background: blue;
`

const ThreeColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6.5fr 0.5fr;
`

const ImageBackground = styled.div`
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
`

const HorizontalScrollContainer = (props) => {

    let image = getImage(props.sections[0].backgroundImage)
    
console.log('PROPS', props.sections[0])
  return (
    <HorizontalScrollContainerWrapper>
        <Container>
            <ImageBackground>
                <GatsbyImage  image={image} alt={'Hi'} />
            </ImageBackground>
            <ThreeColumnWrapper>
                <Navbar />
                <PageSectionWrapper>

                </PageSectionWrapper>
                <SocialMediaWrapper>

                </SocialMediaWrapper>
            </ThreeColumnWrapper>
        </Container>
    </HorizontalScrollContainerWrapper>
  )
}


export default HorizontalScrollContainer
