import React from "react"
import styled from "styled-components"

const NavbarWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  width: 30%;
  /* width: 100vw; */
  justify-content: space-between;
  align-items: baseline;
`

const Navbar = props => {
  return (
  <NavbarWrapper>
    <p> about</p>
    <p> subscribe</p>
    <p> archive</p>
    <p> upcoming</p>
  </NavbarWrapper>
  )
}

export default Navbar
