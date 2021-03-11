import React from "react"
import styled from "styled-components"
import { size } from "../styles/styles"
import HorizontalScrollContainer from "../horizontal-scroll-container/horizontal-scroll-container"
import Navbar from "../navbar/navbar"
import { GenerateContentSection } from "../../utility/richtext"

export const PageWrapper = styled.div`
`

export const PageSectionWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 0.5rem;
`

export const TwoColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
`
export const PageContent = props => {
  let page = props.page
  return (
    <PageWrapper>
      {page.hasHorizontalScroll ? (
        <HorizontalScrollContainer sections={page.content} />
      ) : (
        <TwoColumnWrapper>
          <Navbar />
          <PageSectionWrapper>
            {page.content
              ? page.content.map((con, index) =>
                  GenerateContentSection(con, index)
                )
              : null}
          </PageSectionWrapper>
        </TwoColumnWrapper>
      )}
    </PageWrapper>
  )
}

export default PageContent
