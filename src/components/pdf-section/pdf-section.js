import React, { useState } from 'react';
import styled from "styled-components"
import PDFReader from "../pdf-reader/pdf-reader";
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
`

const PDFSection = props => {
  const [showPDF, setShowPDF] = useState(false);

  return (
    // <PDFWrapper image={props.file}>
    <PDFWrapper image={props.image.file.url}>
    {showPDF ? (
      <PDFReader />
    ): (
        <PDFTextWrapper onClick={() => setShowPDF(true)}>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </PDFTextWrapper>
    )}


    </PDFWrapper>
  )
}

export default PDFSection
