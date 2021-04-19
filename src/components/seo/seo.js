/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO() {
  const { contentfulPageInfo } = useStaticQuery(
    graphql`
      query {
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
  }
      }
    `
  )

  let title = contentfulPageInfo.title
  let url =  "https://demomovingimage.net/";
  console.log("DATA", contentfulPageInfo)

  const metaDescription = contentfulPageInfo.description
  // const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      title={title}
      // titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
            rel: "canonical",
            href: `${url}`
        },
        {
          property: `og:title`,
          content: title
        },
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
            property: `og:image`,
            content: contentfulPageInfo.sharingImage.file.url
          },
          {
            property: `og:image:width`,
            content: contentfulPageInfo.sharingImage.file.details.image.width
          },
          {
            property: `og:image:height`,
            content: contentfulPageInfo.sharingImage.file.details.image.height
          },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
            property: `og:url`,
            content: `${url}`
          },
        {
          name: `twitter:creator`,
          content: title
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
