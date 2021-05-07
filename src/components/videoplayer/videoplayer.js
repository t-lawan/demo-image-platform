import * as React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"
import PlayButtonImg from '../../assets/PlayButton.png'
import IMAGE from '../../assets/IMAGE.jpg'
import { Colours, size, Layers } from "../styles/styles";
const VideoTextOverlay = styled.div`
  width: 60%;
  text-align: justify;
`

const VideoPlayerWrapper = styled.div`
    width: 100%;
    height: 100%;
    /* width: ${props => (props.fullScreen ? `100vw !important` : "auto")}; */
`

const VideoPlayerElement = styled(ReactPlayer)`
  /* width: 100vw !important; */
  width: 100% !important;
  /* height:auto !important; */
  height:100% !important;
  @media (max-width: ${size.mobileL}) {
    height: 100vh !important;  
  }
`

const VideoBackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: red; */
  background-image: url(${props => props.image || "none"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

`

const PlayButton = styled.h1`
`

const PlayButtonImage = styled.img`
  cursor: pointer;
  width: 15% !important;
  z-index: ${Layers.CAROUSEL_NAVIGATION};
`

const ArtistExhibitionTitle = styled.h2`
  color: ${Colours.green};
  font-family: 'FreightBigBook';
  font-style: normal;
  font-weight: normal;
  font-size: 4rem;
  font-size: 4vw;

`

const Description = styled.p`
  color: white;
  
  font-size: 1.67rem;
  font-size: 1.66vw;
`

class VideoPlayer extends React.Component {
  state = {
    showPlayer: false
  }

  videoRef = React.createRef();

  componentDidMount() {
    if (this.props.autoPlay) {
      this.setState({
        showPlayer: true
      })
    }
  }

  playVideo = () => {
    console.log('PLAY VIDEO')
    this.setState({
      showPlayer: true
    })
  }
  render() {
    return (
      <VideoPlayerWrapper fullScreen={this.props.fullScreen}>
        {this.props.isOnLandingPage || this.state.showPlayer ? (
          <VideoPlayerElement
            // ref={this.videoRef}
            playing={this.props.autoPlay}
            url={this.props.videoUrl}
            controls={this.props.showControls}
            style={{ height: "100vh" }}
            // height={"100vh"}
            // width={"100vw"}
            muted={true}
            loop={this.props.isOnLandingPage}
            // onReady={onReady}
            
          />
        ) : (
          <VideoBackgroundWrapper onClick={() => this.playVideo()} image={this.props.backgroundImage.file.url}>
          {/* <PlayButton onClick={() => this.playVideo()}>PLAY</PlayButton> */}
            <PlayButtonImage src={PlayButtonImg} onClick={() => this.playVideo()} />
            <VideoTextOverlay>
              <ArtistExhibitionTitle> {this.props.artist}, {this.props.title}</ArtistExhibitionTitle>
              <Description> {this.props.description }</Description>
            </VideoTextOverlay>
          </VideoBackgroundWrapper>
        )}
      </VideoPlayerWrapper>
    )
  }
}

export default VideoPlayer
