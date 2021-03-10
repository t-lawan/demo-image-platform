import React from "react"
import styled from "styled-components"
import Navbar from "../navbar/navbar";
import { connect } from "react-redux"
import { hideLandingPage } from "../../store/action";

const LandingPageWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: yellow;
    display: ${props => (props.show ? "inherit" : "none")};
`

const LandingPageContainer = styled.div`
    display: flex;
`


const LandingPage = (props) => {

  return (
    <LandingPageWrapper onClick={() => props.hideLandingPage()} show={props.showLandingPage}>    
        <p> VIDEO </p>
    </LandingPageWrapper>
  )
}

const mapStateToProps = state => {
    return {
    showLandingPage: state.showLandingPage,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        hideLandingPage: () => dispatch(hideLandingPage()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
