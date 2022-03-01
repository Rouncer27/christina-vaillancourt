import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Hero from "../components/templates/blog/Hero"
import DisplayPosts from "../components/templates/blog/DisplayPosts"
import Intro from "../components/templates/blog/Intro"

const Blog = props => {
  const { hero, seoInfo } = props.data
  const heroData = hero.template.blogTemplate
  const intro = props.data.intro.template.blogTemplate
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Hero data={heroData} />
      <Intro data={intro} />
      <DisplayPosts data="" />
    </Layout>
  )
}

export const blogTempQuery = graphql`
  query blogTempPage($id: String!) {
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

    hero: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Blog {
          blogTemplate {
            titleSmall
            titleLarge
            heroImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }
        }
      }
    }

    intro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Blog {
          blogTemplate {
            blogIntro
          }
        }
      }
    }
  }
`

export default Blog
