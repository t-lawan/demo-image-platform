import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { ProjectType } from "../../models/ProjectModel";
import { DateManager } from "../../utility/date-manager";
import { UpcomingWrapper } from "./upcoming-projects";
import FaviconSVG from '../../assets/favicon.svg'

const ProjectTitle = styled.li`
  list-style-type: none;
  &:before{
    content: '';
    display: inline-block;
    height: 20px;
    width: 20px;
    color: inherit;
    background-size: 20px;
    background-image: url(${FaviconSVG});
    background-repeat: no-repeat;
    margin-right: 10px;
}
  /* list-style-type: inherit; */
`
const ArchiveProjects = props => {
    let projects = props.projects;
    projects = projects.filter(project => {
        return project.type === ProjectType.ARCHIVE;
    })

  return (
    <UpcomingWrapper>
        {projects.map((project,index) => (
            <ProjectTitle key={index}> {project.artist}, {project.title}, {DateManager.createStartAndEndDateString(project.startDate, project.endDate)} </ProjectTitle>
        ))}

        {projects.length === 0 ? (
          <p> There are no archived projects</p>
        ) : null}
    </UpcomingWrapper>
  )
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    projects: state.projects
  }
}

export default connect(
  mapStateToProps,
  null
)(ArchiveProjects)
