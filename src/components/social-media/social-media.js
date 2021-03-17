import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SocialMediaLinkWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  height: 15%;
  justify-content: space-between;
  align-items: baseline;
  margin: 2rem;
`

const SocialMediaWrapper = styled.div``

const SocialMediaLink = styled(Link)``

const SocialMedia = props => {
  return (
    <SocialMediaWrapper>
      <SocialMediaLinkWrapper>
        <SocialMediaLink to={"/"}>twitter</SocialMediaLink>
        <SocialMediaLink to={"/about"}>instagram</SocialMediaLink>
        <SocialMediaLink to={"/subscribe"}> facebook</SocialMediaLink>
      </SocialMediaLinkWrapper>
    </SocialMediaWrapper>
  )
}

export default SocialMedia
