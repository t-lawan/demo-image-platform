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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

`

const Grid = styled.div`
  display: grid;
  width: 50%;
  height: 85vh;
  text-align: left;
  grid-template-rows: 3fr 0.75fr 4fr;
  align-items: baseline;
  justify-content: center;
  @media (max-width: ${size.mobileL}) {
    width: 90%;
  }
`

const AudioTextWrapper = styled.div`

`
const AudioText = styled.h1`
color: ${props => props.colour};
font-family: "FreightBigBook";
margin: 0;
font-size: 3vw;

  /* width: 50%; */

`
const AudioDescription = styled.p`
  /* width: 50%; */
  /* font-size: 1.67rem; */
  font-size: 1.67vw;
  font-size: 1.2vw;
`

const AudioPlayerWrapper = styled.div`
  /* width: 50%; */
  /* background: white; */
  padding: 0.5rem 1rem;
  border: 1px solid black;
`

const AudioTitleWrapper = styled.div`
  text-align: left;
  align-self: flex-start;
  font-family: "FreightBigBook";
  margin-bottom: 5vh;
  margin-top: 2vh;
`

const AudioSection = props => {
  return (
    <AudioWrapper>
      <Grid>
      <AudioTitleWrapper>
      <AudioText colour={'white'}>{props.whiteAudioTitle}</AudioText>
      <AudioText colour={'black'}>{props.blackAudioTitle}</AudioText>
      </AudioTitleWrapper>

      <AudioPlayerWrapper>
        <AudioPlayer url={props.audioUrl} />
      </AudioPlayerWrapper>
      <AudioDescription>{props.audioDescription}</AudioDescription>
      </Grid>

    </AudioWrapper>
  )
}

export default AudioSection
