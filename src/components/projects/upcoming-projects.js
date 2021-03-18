import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { ProjectType } from "../../models/ProjectModel";

const UpcomingWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  height: 15%;
  justify-content: space-between;
  align-items: baseline;
  margin: 2rem;
`


const UpcomingProjects = props => {
    let projects = props.projects;
    projects = projects.filter(project => {
        return project.type === ProjectType.UPCOMING;
    })

    
    console.log('PRO', projects)
  return (
    <UpcomingWrapper>
        {projects.map((project,index) => (
            <p key={index}> {project.artist}, {project.title}</p>
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
