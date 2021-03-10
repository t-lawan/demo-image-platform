import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"
import { isLoaded, setPages, setNavbarLinks } from "../../store/action"

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
            }
          }
        }
      }
    `
  )
  if (!props.isLoaded) {
    let { allContentfulPage } = data

    let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel)
    console.log("PAGES", pages)

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
    loaded: () => dispatch(isLoaded())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(State)
