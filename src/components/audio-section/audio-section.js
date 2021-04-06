import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import AudioPlayer from "../audio-player/audio-player";

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

const AudioSection = props => {
  return (
    <AudioWrapper>
      <AudioText>{props.audioTitle}</AudioText>
      <AudioPlayerWrapper>
        <AudioPlayer url={props.audioUrl} />
      </AudioPlayerWrapper>
      <AudioDescription>{props.audioDescription}</AudioDescription>
    </AudioWrapper>
  )
}

export default AudioSection
