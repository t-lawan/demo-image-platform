import React, { useState } from 'react';
import styled from "styled-components"
import PDFReader from "../pdf-reader/pdf-reader";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Colours, size } from '../styles/styles';

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
    height: 90vh;
`
const ImageWrapper = styled.div`
  border: 2px solid black;
  /* border-bottom: 0; */
  margin-bottom: 2vh;
  width: 25%;
  /* height: 100%; */
  @media (max-width: ${size.mobileL}) {
    width: 60%;
  }
`
const PDFImage = styled(GatsbyImage)`
    width: 100%;
    border-bottom: 1px solid ${Colours.green} !important;

  img {
    object-fit: fill !important;
  }
`

const PDFText = styled.p`
  /* font-size: 1.667vw !important; */
  font-size: 1.2vw;
`

const Title = styled(PDFText)`
  /* border-top: 1px solid ${Colours.green}; */
`

const TitleWrapper = styled.div`

`

const PDFSection = props => {
  const [showPDF, setShowPDF] = useState(false);
  let img = getImage(props.image.gatsbyImageData)

  return (
    <PDFWrapper image={props.image.file.url}>
    {showPDF ? (
      <PDFReader file={props.file} />
    ): (
        <PDFTextWrapper onClick={() => setShowPDF(true)}>
            <ImageWrapper>
              <PDFImage image={img} />
              <TitleWrapper>
                <Title>{props.title}</Title>
              </TitleWrapper>

            </ImageWrapper>
            <PDFText>{props.description}</PDFText>
        </PDFTextWrapper>
    )}


    </PDFWrapper>
  )
}

export default PDFSection
