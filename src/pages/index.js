import * as React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import PageContent from "../components/page-content/page-content";

const IndexPage = (props) => {
  let mainPage = props.pages.find(pg => {
    return pg.title === "Home"
  })

  return (
    <Layout isHome>
      {mainPage ? <PageContent page={mainPage} /> : <p>..</p>}
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
