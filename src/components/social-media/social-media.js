import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Twitter from "../../assets/Twitter.png"
import Instagram from "../../assets/Instagram.png"
import Facebook from "../../assets/Facebook.png"
import Email from "../../assets/Mail.png"
import { connect } from "react-redux"

const SocialMediaLinkWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  /* height: 30%; */
  justify-content: center;
  align-items: baseline;
  margin: 1rem 0;
  width: 80%;
`

const SocialMediaWrapper = styled.div`
  padding: 0 2rem;
`

const SocialMediaLink = styled.a``

const ExternalLink = styled.a``
const SocialMediaImage = styled.img`
  width: 50% !important;
`

const SocialMedia = props => {
  let pageInfo = props.page_info
  return (
    <SocialMediaWrapper>
      <SocialMediaLinkWrapper>
        <SocialMediaLink target={"__blank"} href={`mailto:${pageInfo.email}`}>
          {/* Facebook */}
          <SocialMediaImage src={Email} alt="Email" />
        </SocialMediaLink>
        <SocialMediaLink target={"__blank"} href={pageInfo.instagramUrl}>
          <SocialMediaImage src={Instagram} alt="Instagram" />
        </SocialMediaLink>
        <SocialMediaLink target={"__blank"} href={pageInfo.twitterUrl}>
          <SocialMediaImage src={Twitter} alt="Twitter" />
        </SocialMediaLink>
        <SocialMediaLink target={"__blank"} href={pageInfo.facebookUrl}>
          <SocialMediaImage src={Facebook} alt="Email" />
        </SocialMediaLink>


      </SocialMediaLinkWrapper>
    </SocialMediaWrapper>
  )
}

const mapStateToProps = state => {
  return {
    page_info: state.page_info
  }
}

export default connect(
  mapStateToProps,
  null
)(SocialMedia)
