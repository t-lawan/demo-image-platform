import * as React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"

const VideoPlayerWrapper = styled.div`
    /* width: ${props => (props.fullScreen ? `100vw !important` : "auto")}; */
`

class VideoPlayer extends React.Component {
  render() {
    return (
      <VideoPlayerWrapper fullScreen={this.props.fullScreen}>
        <ReactPlayer
          url={this.props.videoUrl}
          controls={this.props.showControls}
          style={{ height: "100vh" }}
          height={"100vh"}
          width={"100vw"}
          playing={this.props.autoPlay}
          muted={!this.props.autoPlay}
        />
      </VideoPlayerWrapper>
    )
  }
}

export default VideoPlayer
