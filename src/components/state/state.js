import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"
import { isLoaded, setPages, setNavbarLinks, setPageInfo } from "../../store/action"

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
      }
    `
  )
  if (!props.isLoaded) {
    let { allContentfulPage,  contentfulPageInfo} = data;

    let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel)
    let pageInfo = Convert.toPageInfoModel(contentfulPageInfo);
    props.setPageInfo(pageInfo)
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
    setPageInfo: page_info => dispatch(setPageInfo(page_info)),
    loaded: () => dispatch(isLoaded())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(State)
