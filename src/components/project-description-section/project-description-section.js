import React from "react"
import styled from "styled-components"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { richTextOptions } from "../../utility/richtext"
import { size } from "../styles/styles"

const ProjectDescriptionWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  @media (max-width: ${size.mobileL}) {
    padding: 0.25rem;
  }
`
const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  @media (max-width: ${size.mobileL}) {
    width: 90%;
  }
`
const ProjectArtist = styled.h1`
  color: white;
  margin: 0;
  /* font-size: 3rem; */
  font-size: 3vw;
  /* @media (max-width: ${size.mobileL}) {
      font-size: 6vw;
  } */

`

const ProjectTitleWrapper = styled.div`
  text-align: left;
  align-self: flex-start;
  font-family: "FreightBigBook";
  margin-bottom: 5vh;
  margin-top: 2vh;
`


const ProjectTitle = styled(ProjectArtist)`
  color: black;
  /* font-size: 3rem;
  font-size: 3vw;
  @media (max-width: ${size.mobileL}) {
      font-size: 6vw;
  } */
`
const TextWrapper = styled.div`
  padding-top: 2rem;
  text-align: justify;
  p {
    /* font-size: 1.67rem;
    font-size: 1.67vw; */
    font-size: 1.4vw;
    letter-spacing: 0;
    line-height: 1.5;
    @media (max-width: ${size.mobileL}) {
      font-size: 3vw;
  }
  }
`
const ProjectDescriptionSection = props => {
  const project = props.project
  const section = props.section
  return (
    <ProjectDescriptionWrapper>
      <FlexColumnWrapper>
        <ProjectTitleWrapper>
          <ProjectArtist> {project.artist}</ProjectArtist>
          <ProjectTitle> {project.title}</ProjectTitle>
        </ProjectTitleWrapper>
        <TextWrapper
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(
              JSON.parse(section.text.raw),
              richTextOptions
            )
          }}
        ></TextWrapper>
      </FlexColumnWrapper>
    </ProjectDescriptionWrapper>
  )
}

export default ProjectDescriptionSection
