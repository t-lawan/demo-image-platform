import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import styled from "styled-components"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { ContentSectionModelType } from "../models/ContentSectionModel"
import { size } from "../components/styles/styles"
import SubscriptionForm from "../components/subscription/subscription-form"
import UpcomingProjects from "../components/projects/upcoming-projects"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ArchiveProjects from "../components/projects/archive-projects"
import AudioPlayer from "../components/audio-player/audio-player"
import ImageCarousel from "../components/image-carousel/image-carousel"
import VideoPlayer from "../components/videoplayer/videoplayer";
import Video from '../assets/video/VIDEO.mp4'
const PARAGRAPH = styled.p``

const EXTERNALLINK = styled.a`
  margin-bottom: 1rem;
  text-decoration: underline;
  :hover {
    cursor: url("../images/surfer.png");
  }
`
export const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <PARAGRAPH>{children}</PARAGRAPH>
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <EXTERNALLINK href={node.data.uri} target="__blank">
        {children}
      </EXTERNALLINK>
    )
  }
}

export const ModalTypes = {
  PROJECTS: "PROJECTS",
  CONTACT: "CONTACT"
}

const TextWrapper = styled.div`
  padding-top: 2rem;
`
const ProjectDescriptionWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
`

const CreditsWrapper = styled.div`
  padding: 2rem 0;
`
const FlexImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  flex-wrap: wrap;
  /* align-items: flex-end; */
`
const ImageWrapper = styled.div`
  width: 30%;
`

const Image = styled(GatsbyImage)``

const MediaWrapper = styled.div`
  padding: 2rem 0;
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`
const AudioWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const AudioText = styled.h1`
  width: 50%;
`
const AudioDescription = styled.p`
  width: 50%;
`

const AudioPlayerWrapper = styled.div`
  width: 50%;
  background: white;
  padding: 1rem;
  border: 1px solid black;
`

const ImageCarouselWrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProjectArtist = styled.h1`
  color: white;
  align-self: flex-start;
`

const ProjectTitle = styled.h1`
  color: black;
  align-self: flex-start;
`

const VideoWrapper = styled.div`
  background: black;

`

const VideoBackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const VideoPlayerWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  /* top: 0;
  position: fixed; */

`
const VideoTextOverlay = styled.div`
  width: 50%;
`
export const GenerateContentSection = (section, index, entity) => {
  let render

  switch (section.type) {
    case ContentSectionModelType.BACKGROUND_IMAGE: {
      render = (
        <TextWrapper key={index}>
          <p> Images</p>
        </TextWrapper>
      )
      break
    }

    case ContentSectionModelType.TEXT: {
      render = (
        <TextWrapper
          key={index}
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(
              JSON.parse(section.text.raw),
              richTextOptions
            )
          }}
        >
          {}
        </TextWrapper>
      )
      break
    }

    case ContentSectionModelType.PROJECT_DESCRIPTION: {
      console.log("TITLE", section)
      render = (
        <ProjectDescriptionWrapper>
          <FlexColumnWrapper>
            <ProjectArtist> {entity.artist}</ProjectArtist>
            <ProjectTitle> {entity.title}</ProjectTitle>
            <TextWrapper
              key={index}
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
      break
    }
    case ContentSectionModelType.SUBSCRIPTION_FORM: {
      render = <SubscriptionForm key={index} />
      break
    }
    case ContentSectionModelType.UPCOMING_PROJECTS: {
      render = <UpcomingProjects key={index} />
      break
    }
    case ContentSectionModelType.ARCHIVE_PROJECTS: {
      render = <ArchiveProjects key={index} />
      break
    }
    case ContentSectionModelType.CREDITS: {
      render = (
        <CreditsWrapper key={index}>
          {section.credits.map((credit, i) => (
            <FlexWrapper key={i}>
              <p> {credit.title} </p>
              <p> {credit.name} </p>
            </FlexWrapper>
          ))}
        </CreditsWrapper>
      )
      break
    }
    case ContentSectionModelType.MEDIA_PARTNERS: {
      render = (
        <MediaWrapper key={index}>
          <p> Media Partners </p>
          <FlexImagesWrapper>
            {section.mediaPartners.map((mp, i) => {
              let image = getImage(mp.gatsbyImageData)
              return (
                <ImageWrapper key={i}>
                  <Image image={image} />
                </ImageWrapper>
              )
            })}
          </FlexImagesWrapper>
        </MediaWrapper>
      )
      break
    }

    case ContentSectionModelType.AUDIO: {
      render = (
        <AudioWrapper key={index}>
          <AudioText>{section.audioTitle}</AudioText>
          <AudioPlayerWrapper>
            <AudioPlayer url={section.audioFile.file.url} />
          </AudioPlayerWrapper>
          <AudioDescription>{section.audioDescription}</AudioDescription>
        </AudioWrapper>
      )
      break
    }

    case ContentSectionModelType.IMAGE_GALLERY: {
      render = (
        <ImageCarouselWrapper>
          <ImageCarousel images={section.imageGallery} />
        </ImageCarouselWrapper>
      )
      break
    }

    case ContentSectionModelType.VIDEO: {
      console.log("VIDEO", entity)

      render = (
        <VideoWrapper>
          {/* <VideoBackgroundWrapper>
            <VideoTextOverlay>
              <p> Artist name</p>
              <p> Exhibition</p>
            </VideoTextOverlay>

          </VideoBackgroundWrapper> */}
          {/* <VideoPlayerWrapper> */}
            <VideoPlayer showControls={true} videoUrl={Video} artist={entity.artist} title={entity.title} url={Video} />
          {/* </VideoPlayerWrapper> */}

        </VideoWrapper>
      )
      break
    }

    default:
      break
  }

  return render
}
