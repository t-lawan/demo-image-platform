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
  align-self: flex-start;
`

const ProjectTitle = styled.h1`
  color: black;
  align-self: flex-start;
`
const TextWrapper = styled.div`
  padding-top: 2rem;
`
const ProjectDescriptionSection = props => {
  const project = props.project
  const section = props.section
  return (
    <ProjectDescriptionWrapper>
      <FlexColumnWrapper>
        <ProjectArtist> {project.artist}</ProjectArtist>
        <ProjectTitle> {project.title}</ProjectTitle>
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
