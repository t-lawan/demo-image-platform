import * as React from "react"
import { connect } from "react-redux"
import styled from "styled-components"

const TickerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7.5%;
  /* background: rgba(0, 255, 0, 0.6); */
  z-index: 100;
  mix-blend-mode: difference;
  background-image: url(${props => props.image || "unset"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* padding: 0.5rem; */
`

const MarqueeWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  position: relative;
`

const TickerText = styled.h1`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 50px;
  text-align: center;
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  -moz-animation: scroll-left 2s linear infinite;
  -webkit-animation: scroll-left 2s linear infinite;
  animation: scroll-left 20s linear infinite;
  /* mix-blend-mode: saturation; */
`
const Ticker = props => {
  let page_info = props.page_info;
  return (
    <TickerWrapper image={page_info.tickerImage? page_info.tickerImage.file.url : null}>
      <MarqueeWrapper>
        {/* <MarqueeInnerWrapper> */}
        <TickerText> {page_info.tickerText} </TickerText>
        {/* <TickerText>The Autonomist Anomaly • Felice Moramarco • 1.10 - 31.10 2020 </TickerText> */}
        {/* <TickerText>The Autonomist Anomaly • Felice Moramarco • 1.10 - 31.10 2020 </TickerText> */}
        {/* </MarqueeInnerWrapper> */}
      </MarqueeWrapper>
    </TickerWrapper>
  )
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    page_info: state.page_info
  }
}

export default connect(
  mapStateToProps,
  null
)(Ticker)
