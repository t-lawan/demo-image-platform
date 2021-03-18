import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"
import {
  isLoaded,
  setPages,
  setNavbarLinks,
  setPageInfo,
  setProjects
} from "../../store/action"

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
              }
              backgroundImage {
                gatsbyImageData(resizingBehavior: FILL, layout: FULL_WIDTH)
              }
            }
          }
        }
        contentfulPageInfo {
          contentful_id
          tickerImage {
            gatsbyImageData(layout: FULL_WIDTH, resizingBehavior: FILL)
          }
          title
          description {
            description
          }
          tickerText {
            tickerText
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
            }
          }
        }
      }
    `
  )
  if (!props.isLoaded) {
    let { allContentfulPage, contentfulPageInfo, allContentfulProject } = data

    let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel)
    let projects = Convert.toModelArray(allContentfulProject, Convert.toProjectModel)
    let pageInfo = Convert.toPageInfoModel(contentfulPageInfo)
    props.setPageInfo(pageInfo)
    props.setProjects(projects)
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
    setPageInfo: page_info => dispatch(setPageInfo(page_info)),
    loaded: () => dispatch(isLoaded())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(State)
