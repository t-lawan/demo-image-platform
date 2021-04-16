import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Twitter from "../../assets/Twitter.png"
import Instagram from "../../assets/Instagram.png"
import Facebook from "../../assets/Facebook.png"
import Email from "../../assets/email.png"

const SocialMediaLinkWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  /* height: 30%; */
  justify-content: center;
  align-items: baseline;
  margin: 1rem 0;
`

const SocialMediaWrapper = styled.div``

const SocialMediaLink = styled(Link)``

const SocialMediaImage = styled.img`
  width: 25% !important;
`

const SocialMedia = props => {
  return (
    <SocialMediaWrapper>
      <SocialMediaLinkWrapper>
        <SocialMediaLink to={"/"}>
          <SocialMediaImage src={Facebook} alt="Email" />
        </SocialMediaLink>
        <SocialMediaLink to={"/"}>
          <SocialMediaImage src={Twitter} alt="Twitter" />
        </SocialMediaLink>
        <SocialMediaLink to={"/about"}>
          <SocialMediaImage src={Instagram} alt="Instagram" />
        </SocialMediaLink>
        <SocialMediaLink to={"/subscribe"}>
          {/* Facebook */}
          <SocialMediaImage src={Facebook} alt="Facebook" />
        </SocialMediaLink>
      </SocialMediaLinkWrapper>
    </SocialMediaWrapper>
  )
}

export default SocialMedia
