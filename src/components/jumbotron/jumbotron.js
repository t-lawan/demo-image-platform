import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { ProjectType } from "../../models/ProjectModel"
import { DateManager } from "../../utility/date-manager"
import GreenFavicon from "../../assets/green-favicon.png"
import { Colours, size } from "../styles/styles";

const JumbotronWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: baseline;
  position: absolute;
  left: 0;
  bottom: 20%;
  font-family: "FreightBigBook";
`

const JumbotronTitle = styled.h1`
  color: ${Colours.green};
  display: inline-block;
  /* font-size: 3.5rem !important; */
  font-size: 3.5vw !important;
  @media (max-width: ${size.tablet}) {
    /* font-size: 1.5rem !important; */
    font-size: 1.5vw !important;
  }
`

const JumbotronImage = styled.img`
  width: 2.5% !important;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  @media (max-width: ${size.tablet}) {
    width: 5% !important;
  }
`
const Jumbotron = props => {
    let currentProject = props.currentProject;
  return (
    currentProject ? (
      <JumbotronWrapper>
      <JumbotronTitle>{currentProject.artist}</JumbotronTitle>
      <JumbotronImage src={GreenFavicon} />
      <JumbotronTitle>{currentProject.title}</JumbotronTitle>
      <JumbotronImage src={GreenFavicon} />
      <JumbotronTitle>
        {DateManager.createStartAndEndDateString(
          currentProject.startDate,
          currentProject.endDate
        )}{" "}
      </JumbotronTitle>
    </JumbotronWrapper>
    ) : null

  )
}


const mapStateToProps = state => {
    return {
      currentProject: state.currentProject
    }
  }
  

export default connect(
  mapStateToProps,
  null
)(Jumbotron)
