import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { size, Colours } from "../styles/styles";

const StickyBackgroundImageWrapper = styled.div`
  height: 15%;
  /* background: green; */
  border-top: 1px solid ${Colours.green};
  width: 100%;
  bottom: 0;
  position: sticky;
  @media (max-width: ${size.mobileL}) {
    height: 10%;
  }
`

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: normal;
`

const StyledImage = styled(GatsbyImage)`
    height: 100%;
`


const StickyBackgroundImage = props => {
  return (
    <StickyBackgroundImageWrapper>
        <FlexWrapper>
            {props.images.map((img, index) => {
                let image = getImage(img)
                return (
                <StyledImage key={index} image={image} alt={'Image'}/>
            )})}
        </FlexWrapper>
    </StickyBackgroundImageWrapper>
  )
}

export default StickyBackgroundImage
