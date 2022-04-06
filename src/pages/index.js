import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/templates/home/Hero"
import Welcome from "../components/templates/home/Welcome"
import Quote from "../components/templates/home/Quote"
import ServicesList from "../components/templates/home/ServicesList"

const IndexPage = props => {
  console.log(props)
  const { seoInfo } = props.data
  const heroData = props.data.hero.template.homeTemplate
  const welcome = props.data.welcome.template.homeTemplate
  const quote = props.data.quote.template.homeTemplate
  const services = props.data.services.template.homeTemplate

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
      <Quote data={quote} />
      <ServicesList data={services} />
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

    quote: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            quoteTitle
            quoteContent
            quoteAuthor
          }
        }
      }
    }

    services: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            servicesSectionTitle
            services {
              image {
                altText
                sourceUrl
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 1000)
                  }
                }
              }
              title
              slug
            }
          }
        }
      }
    }
  }
`

export default IndexPage
