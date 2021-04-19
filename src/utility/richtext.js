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
import AudioSection from "../components/audio-section/audio-section";
import PDFSection from "../components/pdf-section/pdf-section";
import ProjectDescriptionSection from "../components/project-description-section/project-description-section";
import Jumbotron from "../components/jumbotron/jumbotron";

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
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
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

const AboutTextWrapper = styled(TextWrapper)`
  color: white;
`

const CreditsWrapper = styled.div`
  padding: 2rem 0;
  color: white;
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
  color: white;
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media (max-width: ${size.mobileL}) {
    flex-direction: column;
    margin-bottom: 01rem;
  }
`

const ImageCarouselWrapper = styled.div`
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: ${size.mobileL}) {
      padding: 0rem;
  }
`

const VideoWrapper = styled.div`
  background: black;
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

    case ContentSectionModelType.PDF: {
      render = (
        <PDFSection key={index} description={section.pdfDescription} title={section.pdfTitle} image={section.pdfImage} file={section.pdfFile} />
      )
      break;
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

    case ContentSectionModelType.JUMBOTRON: {
      render = (
        <Jumbotron key={index} />
      )
      break;
    }
    case ContentSectionModelType.ABOUT_TEXT: {
        let htmlString = documentToHtmlString(
          JSON.parse(section.text.raw),
          richTextOptions
        )
        htmlString = `<li class="with-star">${htmlString}</li>`;
        render = (
        <AboutTextWrapper
          key={index}
          dangerouslySetInnerHTML={{
            __html: htmlString
          }}
        >
          {}
        </AboutTextWrapper>
      )
      break
    }

    case ContentSectionModelType.PROJECT_DESCRIPTION: { 
      render = (
        <ProjectDescriptionSection key={index} project={entity} section={section} />
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
        <AudioSection key={index} audioTitle={section.audioTitle} audioUrl={section.audioFile.file.url} audioDescription={section.audioDescription} />
      )
      break
    }

    case ContentSectionModelType.IMAGE_GALLERY: {
      render = (
        <ImageCarouselWrapper key={index}>
          <ImageCarousel images={section.imageGallery} />
        </ImageCarouselWrapper>
      )
      break
    }

    case ContentSectionModelType.VIDEO: {
      render = (
        <VideoWrapper key={index}>
          <VideoPlayer isOnLandingPage={false} autoPlay={false}  fullScreen={false} showControls={true} artist={entity.artist} title={entity.title} videoUrl={section.videoUrl} description={section.videoText} />
        </VideoWrapper>
      )
      break
    }

    default:
      break
  }

  return render
}
