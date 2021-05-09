import React from "react"
import { Convert } from "../utility/convert";
import Layout from "../components/layout/layout";
import PageContent from "../components/page-content/page-content";
import { connect } from "react-redux"
import { hideLandingPage } from "../store/action";

const Page = props => {
    let page= Convert.toPageModel(props.pageContext)
    if(props.showLandingPage){
      props.hideLandingPage();
    }
  return (
    <Layout>
        <PageContent page={page} />
    </Layout>
  )
}


const mapStateToProps = state => {
  return {
    currentProject: state.currentProject,
    showLandingPage: state.showLandingPage
  }
}
const mapDispatchToProps = dispatch => {
  return {
      hideLandingPage: () => dispatch(hideLandingPage()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
