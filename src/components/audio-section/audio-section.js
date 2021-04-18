import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import AudioPlayer from "../audio-player/audio-player";
import { size } from "../styles/styles";

const AudioWrapper = styled.div`
  width: 100%;
  height: 100vh;
  
  /* display: grid;
  grid-template-rows: 3fr 2fr 2fr;
  align-items: baseline;
  justify-content: center; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

`

const Grid = styled.div`
  display: grid;
  width: 50%;
  height: 85vh;
  text-align: left;
  grid-template-rows: 1fr 2fr 1.5fr 4fr;
  align-items: baseline;
  justify-content: center;
  @media (max-width: ${size.mobileL}) {
    width: 90%;
  }
`

const AudioText = styled.h1`
color: ${props => props.colour};
  /* width: 50%; */

`
const AudioDescription = styled.p`
  /* width: 50%; */
`

const AudioPlayerWrapper = styled.div`
  /* width: 50%; */
  /* background: white; */
  padding: 0.5rem 1rem;
  border: 1px solid black;
`

const AudioSection = props => {
  return (
    <AudioWrapper>
      <Grid>
      <AudioText colour={'white'}>Enchanted Lands (Barbora Dehaen Polcerova</AudioText>
      <AudioText colour={'black'}>{props.audioTitle}</AudioText>
      <AudioPlayerWrapper>
        <AudioPlayer url={props.audioUrl} />
      </AudioPlayerWrapper>
      <AudioDescription>{props.audioDescription}</AudioDescription>
      </Grid>

    </AudioWrapper>
  )
}

export default AudioSection
