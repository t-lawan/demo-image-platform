import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { hideLandingPage } from "../../store/action";
import VideoPlayer from "../videoplayer/videoplayer";
import Video from '../../assets/video/VIDEO.mp4'
import { Layers, size } from "../styles/styles";
const LandingPageWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: black;
    z-index: ${Layers.LANDING_PAGE};
    display: ${props => (props.show ? "inherit" : "none")};
    cursor: pointer;
    @media (max-width: ${size.mobileL}) {
        display: none;
    }
`

const LandingPageContainer = styled.div`
    display: flex;
`


const LandingPage = (props) => {
    let show = props.showLandingPage && props.isHome
  return (
    <LandingPageWrapper onTouchStart={() => props.hideLandingPage()} onClick={() => props.hideLandingPage()} show={show}>    
        {props.page_info && props.page_info.loadingVideoUrl && show ? <VideoPlayer isOnLandingPage={true} autoPlay={true} showControls={false} fullScreen={true}  videoUrl={props.page_info.loadingVideoUrl} /> : null}
    </LandingPageWrapper>
  )
}

const mapStateToProps = state => {
    return {
    showLandingPage: state.showLandingPage,
    page_info: state.page_info
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        hideLandingPage: () => dispatch(hideLandingPage()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
