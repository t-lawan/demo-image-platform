import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { ProjectType } from "../../models/ProjectModel";
import { DateManager } from "../../utility/date-manager";

export const UpcomingWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
`

const ProjectTitle = styled.li`
  list-style-type: inherit;
`


const UpcomingProjects = props => {
    let projects = props.projects;
    projects = projects.filter(project => {
        return project.type === ProjectType.UPCOMING;
    })

  return (
    <UpcomingWrapper>
        {projects.map((project,index) => (
            <ProjectTitle key={index}> {project.artist}, {project.title}, {DateManager.createStartAndEndDateString(project.startDate, project.endDate)} </ProjectTitle>
        ))}
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
)(UpcomingProjects)
