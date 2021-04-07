import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Soy from '../../assets/soy.png'
import Zero from '../../assets/zeros.jpg'
const PDFWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: url(${props => props.image || "inherit"}) 15 15, pointer;
`


const PDFSection = props => {
  return (
    // <PDFWrapper image={props.file}>
    <PDFWrapper image={props.image.file.url}>
        <a href={props.file} target="__blank">
            <p>{props.title}</p>
            <p>{props.description}</p>
        </a>

    </PDFWrapper>
  )
}

export default PDFSection
