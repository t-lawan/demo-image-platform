import * as React from "react"
import { connect } from "react-redux"
import styled from "styled-components"

const TickerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7.5%;
  background: rgba(0,255, 0, 0.6);
  z-index: 100;
  padding: 0.5rem;
`

const MarqueeWrapper = styled.div`
  overflow: hidden;
  height: 100%;
    position: relative;
`

const TickerText = styled.h1`
@-moz-keyframes scroll-left {
            0% {
                -moz-transform: translateX(100%);
            }
            100% {
                -moz-transform: translateX(-100%);
            }
        }
        
        @-webkit-keyframes scroll-left {
            0% {
                -webkit-transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-100%);
            }
        }
        
        @keyframes scroll-left {
            0% {
                -moz-transform: translateX(100%);
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -moz-transform: translateX(-100%);
                -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
            }
        }
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
`
const Ticker = (props) => {

  return (
        <TickerWrapper>
        <MarqueeWrapper>
            {/* <MarqueeInnerWrapper> */}
                <TickerText>The Autonomist Anomaly • Felice Moramarco • 1.10 - 31.10 2020 </TickerText>
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
    pages: state.pages
  }
}

export default connect(
  mapStateToProps,
  null
)(Ticker)
