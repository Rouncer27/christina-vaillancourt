import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Hero from "../components/templates/post/Hero"
import PostContent from "../components/templates/post/PostContent"
import PostNav from "../components/templates/post/PostNav"

const Post = props => {
  const { post, seoInfo, hero } = props.data
  const heroData =
    hero.acfOptionsSiteWideSettings.acfSiteWideSettings.heroImageSingleBlog
  const prevPost = props.pageContext.prev
  const nextPost = props.pageContext.next
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Hero data={heroData} />
      <PostContent data={post} />
      <PostNav data={{ prev: prevPost, next: nextPost }} />
    </Layout>
  )
}

export const query = graphql`
  query singlePostQuery($slug: String!) {
    seoInfo: wpPost(slug: { eq: $slug }) {
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

    hero: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          heroImageSingleBlog {
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

    post: wpPost(slug: { eq: $slug }) {
      postTypePosts {
        subTitle
        mainContent
        sideImages {
          image {
            altText
            sourceUrl
            localFile {
              url
              childImageSharp {
                gatsbyImageData(width: 1500)
              }
            }
          }
        }
      }
      date
      title
      slug
      id
    }
  }
`

export default Post
