import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Hero from "../components/templates/services/Hero"
import Growth from "../components/templates/services/Growth"
import ServicesList from "../components/templates/services/ServicesList"
import Divider from "../components/templates/services/Divider"

const Services = props => {
  const { hero, seoInfo } = props.data
  const heroData = hero.template.servicesTemplate
  const growth = props.data.growth.template.servicesTemplate
  const services = props.data.services.template.servicesTemplate
  const divider = props.data.divider.template.servicesTemplate

  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Hero data={heroData} />
      <Growth data={growth} />
      <ServicesList data={services} />
      <Divider data={divider} />
    </Layout>
  )
}

export const servicesTempQuery = graphql`
  query servicesTempPage($id: String!) {
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
        ... on WpTemplate_Services {
          servicesTemplate {
            heroSideTitle
            heroSideSubTitle
            heroList {
              item
            }
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

    growth: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Services {
          servicesTemplate {
            growthTitle
            growthContent
          }
        }
      }
    }

    services: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Services {
          servicesTemplate {
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
            }
          }
        }
      }
    }

    divider: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Services {
          servicesTemplate {
            dividerImageOne {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }

            dividerImageTwo {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }

            dividerImageThree {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Services
