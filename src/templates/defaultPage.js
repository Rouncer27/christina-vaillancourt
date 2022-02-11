import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Wysiwyg from "../components/templates/default/Wysiwyg"

const DefaultPage = props => {
  const seoInfo = props.data.seoInfo
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Wysiwyg
        title={props.data.wysiwyg.title}
        content={props.data.wysiwyg.template.defaultTemplate.content}
      />
    </Layout>
  )
}

export const defaultPageTempQuery = graphql`
  query defaultTempPage($id: String!) {
    seoInfo: wpPage(id: { eq: $id }) {
      seoFields {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }

    wysiwyg: wpPage(id: { eq: $id }) {
      title
      template {
        ... on WpDefaultTemplate {
          defaultTemplate {
            content
          }
        }
      }
    }
  }
`

export default DefaultPage
