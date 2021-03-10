import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Navbar from "../navbar/navbar";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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

const ContainerY = styled.div`
    height: 100vh;
    width: 100vw;
    background: transparent;
    flex: 0 0 auto;
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
            <Navbar />
            <ImageBackground>
                <GatsbyImage  image={image} alt={'Hi'} />
            </ImageBackground>
        </Container>
        {/* <ContainerY></ContainerY> */}
    </HorizontalScrollContainerWrapper>
  )
}


export default HorizontalScrollContainer
