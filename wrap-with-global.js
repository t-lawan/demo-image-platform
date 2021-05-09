import React from "react"
import { GlobalStyle } from "./src/components/styles/styles"
const wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}

export default wrapPageElement
