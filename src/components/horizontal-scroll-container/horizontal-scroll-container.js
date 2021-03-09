import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Navbar from "../navbar/navbar";

const HorizontalScrollContainerWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    /* width: 100vw; */
    overflow-x: overlay;
    overflow-y: hidden;
    flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  white-space: nowrap;
`

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: red;
    flex: 0 0 auto;
`

const ContainerY = styled.div`
    height: 100vh;
    width: 100vw;
    background: yellow;
    flex: 0 0 auto;

`

const HorizontalScrollContainer = (props) => {

  return (
    <HorizontalScrollContainerWrapper>
        <Container>
            <Navbar />
        </Container>
        <ContainerY></ContainerY>
    </HorizontalScrollContainerWrapper>
  )
}


export default HorizontalScrollContainer
