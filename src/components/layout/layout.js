import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { GlobalStyle } from "../styles/styles";
import LandingPage from "../landing-page/landing-page";
import State from "../state/state";
const LayoutWrapper = styled.div`
    /* padding: 1rem; */
    padding-top: 0;
    max-height: 100vh;
    /* max-width: 100vw; */
`

const Layout = (props) => {

  return (
    <LayoutWrapper>
      <GlobalStyle />
      <State />
      <LandingPage />

      {props.children}
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
