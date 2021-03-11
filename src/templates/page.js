import React from "react"
import { Convert } from "../utility/convert";
import Layout from "../components/layout/layout";
import PageContent from "../components/page-content/page-content";

const Page = props => {
    let page= Convert.toPageModel(props.pageContext)
  return (
    <Layout>
        <PageContent page={page} />
    </Layout>
  )
}

export default Page
