import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/templates/home/Hero"
import Welcome from "../components/templates/home/Welcome"

const IndexPage = props => {
  const { hero, seoInfo } = props.data
  const heroData = hero.template.homeTemplate
  const welcome = props.data.welcome.template.homeTemplate

  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Hero data={heroData} />
      <Welcome data={welcome} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    seoInfo: wpPage(slug: { eq: "home" }) {
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
    hero: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            titleSmall
            titleLarge
            subTitle
            subTitleScript
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

    welcome: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            welcomeTitle
            welcomeContent
            welcomeButtonText
            welcomeButtonSlug
          }
        }
      }
    }
  }
`

export default IndexPage
