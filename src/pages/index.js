import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout/layout"
import HorizontalScrollContainer from "../components/horizontal-scroll-container/horizontal-scroll-container"
import { connect } from "react-redux"

const IndexPage = (props) => {
  let mainPage = props.pages.find(pg => {
    return pg.title === "Home"
  })

  console.log('MI', mainPage)

  return (
    <Layout>
      {mainPage && mainPage.hasHorizontalScroll ? <HorizontalScrollContainer sections={mainPage.content} /> : <p>..</p>}
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    pages: state.pages
  }
}

export default connect(
  mapStateToProps,
  null
)(IndexPage)
