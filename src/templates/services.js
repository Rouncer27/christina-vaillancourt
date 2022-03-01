import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Hero from "../components/templates/services/Hero"
import Growth from "../components/templates/services/Growth"
import Double from "../components/templates/services/Double"
import ServicesList from "../components/templates/services/ServicesList"
import Divider from "../components/templates/services/Divider"
import HowItWorks from "../components/templates/services/HowItWorks"
import Appointment from "../components/templates/services/Appointment"
import Fees from "../components/templates/services/Fees"

const Services = props => {
  const { hero, seoInfo } = props.data
  const heroData = hero.template.servicesTemplate
  const growth = props.data.growth.template.servicesTemplate
  const double = props.data.double.template.servicesTemplate
  const services = props.data.services.template.servicesTemplate
  const divider = props.data.divider.template.servicesTemplate
  const howItWorks = props.data.howItWorks.template.servicesTemplate
  const appointment = props.data.appointment.template.servicesTemplate
  const fees = props.data.fees.template.servicesTemplate

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
      <Double data={double} />
      <ServicesList data={services} />
      <Divider data={divider} />
      <HowItWorks data={howItWorks} />
      <Appointment data={appointment} />
      <Fees data={fees} />
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

    double: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Services {
          servicesTemplate {
            doubleParagraphs {
              title
              content
            }
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
              content
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

    howItWorks: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Services {
          servicesTemplate {
            howItWorksTitle
            howItWorksSteps {
              content
            }
          }
        }
      }
    }

    appointment: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Services {
          servicesTemplate {
            bookAppointmentContent
            bookAppointmentButtonText
            bookAppointmentButtonSlug
          }
        }
      }
    }

    fees: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Services {
          servicesTemplate {
            feesTitle
            feesContent
          }
        }
      }
    }
  }
`

export default Services
