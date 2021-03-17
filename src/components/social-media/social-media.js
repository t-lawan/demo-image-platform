import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SocialMediaWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: space-between;
  align-items: baseline;
  margin: 2rem;
`

const NavbarFixedWrapper = styled.div`
  position: fixed;
`

const SocialMediaLink = styled(Link)``

const SocialMedia = props => {
  return (
      <SocialMediaWrapper>
        <SocialMediaLink to={"/"}>twitter</SocialMediaLink>
        <SocialMediaLink to={"/about"}>instagram</SocialMediaLink>
        <SocialMediaLink to={'/subscribe'}> facebook</SocialMediaLink>
      </SocialMediaWrapper>
  )
}

export default SocialMedia
