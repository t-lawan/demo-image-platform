import React from "react"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import styled from 'styled-components';
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { ContentSectionModelType } from "../models/ContentSectionModel";
import { size } from "../components/styles/styles";
import SubscriptionForm from "../components/subscription/subscription-form";

const PARAGRAPH = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.2rem;
`

const EXTERNALLINK = styled.a`
  margin-bottom: 1rem;
  text-decoration: underline;
  :hover {
    cursor: url('../images/surfer.png');
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
      [INLINES.HYPERLINK]: (node, children) => <EXTERNALLINK href={node.data.uri} target="__blank">{children}</EXTERNALLINK>
    },
  };

export const ModalTypes = {
  PROJECTS: 'PROJECTS',
  CONTACT: 'CONTACT'
}

const TextWrapper = styled.div`
`
export const GenerateContentSection = (section, index) => {
    let render
    console.log('INFO', section)

    switch (section.type) {
      case ContentSectionModelType.BACKGROUND_IMAGE:
        render = (
          <TextWrapper key={index}>
            <p> Images</p>
          </TextWrapper>
        )
        break;
      case ContentSectionModelType.TEXT:
        render = (
          <TextWrapper key={index} dangerouslySetInnerHTML={{__html: documentToHtmlString(
            JSON.parse(section.text.raw),
            richTextOptions
          )}}>
            {}
          </TextWrapper>
        )
      case ContentSectionModelType.SUBSCRIPTION_FORM:
            render = (
              <SubscriptionForm />
            )
        break;
      default:
        break
    }
  
    return render
}