import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StickyBackgroundImageWrapper = styled.div`
  height: 15%;
  background: green;
  width: 100%;
  bottom: 0;
  position: sticky;
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
    console.log('IMAGE', props)
  return (
    <StickyBackgroundImageWrapper>
        <FlexWrapper>
            {props.images.map((img, index) => {
                let image = getImage(img)
                return (
                <StyledImage image={image} />
            )})}
        </FlexWrapper>
    </StickyBackgroundImageWrapper>
  )
}

export default StickyBackgroundImage
