import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
    align-items: center;
`


const StickyBackgroundImage = props => {
    console.log('IMAGE', props)
  return (
    <StickyBackgroundImageWrapper>
        <FlexWrapper>
            {props.images.map((img, index) => (
                <p key={index}> IMAGE</p>
            ))}
        </FlexWrapper>
    </StickyBackgroundImageWrapper>
  )
}

export default StickyBackgroundImage
