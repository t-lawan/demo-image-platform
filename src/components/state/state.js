import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"
import {
  isLoaded,
  setPages,
  setNavbarLinks,
  setPageInfo,
  setProjects,
  setCurrentProject
} from "../../store/action"
import { ProjectType } from "../../models/ProjectModel"

const State = props => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulPage {
          edges {
            node {
              contentful_id
              title
              url
              hasHorizontalScroll
              contentSections {
                backgroundImage {
                  gatsbyImageData(resizingBehavior: FILL, layout: FULL_WIDTH)
                }
                audioFile {
                  file {
                    url
                  }
                }
                text {
                  raw
                }
                type
                credits {
                  title
                  name
                }
                mediaPartners {
                  gatsbyImageData(resizingBehavior: FILL)
                }
                audioDescription {
                  audioDescription
                }
                audioTitle
                imageGallery {
                  gatsbyImageData
                }
              }
            }
          }
        }
        contentfulPageInfo {
          contentful_id
          tickerImage {
            gatsbyImageData(layout: FULL_WIDTH, resizingBehavior: FILL)
            file {
              url
            }
          }
          title
          description {
            description
          }
          tickerText {
            tickerText
          }
          instagramUrl
          facebookUrl
          twitterUrl
          showTicker
          loadingVideoUrl
          showCurrentProject
          sharingImage {
            gatsbyImageData
            file {
              url
              details {
                image {
                  height
                  width
                }
              }
            }
          }
          backgroundImage {
            gatsbyImageData
            file {
              url
            }
          }
          email
          navbarImage {
            gatsbyImageData
            file {
              url
            }
          }
        }
        allContentfulProject {
          edges {
            node {
              artist
              contentful_id
              endDate
              startDate
              title
              type
              contentSection {
                backgroundImage {
                  gatsbyImageData(resizingBehavior: FILL, layout: FULL_WIDTH)
                }
                audioFile {
                  file {
                    url
                  }
                }
                text {
                  raw
                }
                type
                credits {
                  title
                  name
                }
                mediaPartners {
                  gatsbyImageData(resizingBehavior: FILL)
                }
                audioDescription {
                  audioDescription
                }
                audioTitle
                imageGallery {
                  gatsbyImageData(resizingBehavior: FILL)
                  description
                }
                pdf {
                  file {
                    url
                  }
                }
                pdfImage {
                  gatsbyImageData
                  file {
                    url
                  }
                }
                pdfDescription {
                  pdfDescription
                }
                pdfTitle
                backgroundImages {
                  gatsbyImageData(resizingBehavior: FILL)
                }
                videoUrl
                videoText {
                  videoText
                }
                videoBackgroundImage {
                  gatsbyImageData
                  file {
                    url
                  }
                }
              }
              backgroundImage {
                gatsbyImageData
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  )
  if (!props.isLoaded) {
    let { allContentfulPage, contentfulPageInfo, allContentfulProject } = data

    let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel)
    let projects = Convert.toModelArray(
      allContentfulProject,
      Convert.toProjectModel
    )
    let pageInfo = Convert.toPageInfoModel(contentfulPageInfo)
    pageInfo.showCurrentProject = true
    props.setPageInfo(pageInfo)
    props.setProjects(projects)
    let currentProject = projects.find(project => {
      return project.type === ProjectType.CURRENT
    })
    if (currentProject) {
      props.setCurrentProject(currentProject)
    }

    props.setPages(pages)
    props.loaded()
  }

  return <></>
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNavbarLinks: navbar_links => dispatch(setNavbarLinks(navbar_links)),
    setPages: pages => dispatch(setPages(pages)),
    setProjects: projects => dispatch(setProjects(projects)),
    setCurrentProject: project => dispatch(setCurrentProject(project)),
    setPageInfo: page_info => dispatch(setPageInfo(page_info)),
    loaded: () => dispatch(isLoaded())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(State)
