import React, { useState } from 'react';
import styled from "styled-components"
import PDFReader from "../pdf-reader/pdf-reader";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Colours } from '../styles/styles';

const PDFWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* cursor: url(${props => props.image || "inherit"}) 15 15, pointer; */
`

const PDFTextWrapper = styled.div`
  cursor: pointer;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ImageWrapper = styled.div`
  border: 2px solid black;
  /* border-bottom: 0; */
`
const PDFImage = styled(GatsbyImage)`
  img {
    border-bottom: 1px solid ${Colours.green};
  }
`

const PDFText = styled.p`
  font-size: 1.667rem !important;
`

const Title = styled(PDFText)`
  /* border-top: 1px solid ${Colours.green}; */
`

const PDFSection = props => {
  const [showPDF, setShowPDF] = useState(false);
  let img = getImage(props.image.gatsbyImageData)
  console.log('PDF', props)

  return (
    <PDFWrapper image={props.image.file.url}>
    {showPDF ? (
      <PDFReader file={props.file} />
    ): (
        <PDFTextWrapper onClick={() => setShowPDF(true)}>
            <ImageWrapper>
              <PDFImage image={img} />
              <Title>{props.title}</Title>

            </ImageWrapper>
            <PDFText>{props.description}</PDFText>
        </PDFTextWrapper>
    )}


    </PDFWrapper>
  )
}

export default PDFSection
