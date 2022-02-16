import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Hero from "../components/templates/contact/Hero"
import HowItWorks from "../components/templates/contact/HowItWorks"
import Inquiries from "../components/templates/contact/Inquiries"
import MeetYou from "../components/templates/contact/MeetYou"
// import Divider from "../components/templates/contact/Divider"

const Contact = props => {
  const { hero, seoInfo } = props.data
  const heroData = hero.template.contactTemplate
  const howItWorks = props.data.howItWorks.template.contactTemplate
  const inquiries = props.data.inquiries.template.contactTemplate
  const niceMeet = props.data.niceMeet.template.contactTemplate
  // const divider = props.data.divider.template.contactTemplate
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Hero data={heroData} />
      <HowItWorks data={howItWorks} />
      <Inquiries data={inquiries} />
      <MeetYou data={niceMeet} />
      {/* <Divider data={divider} /> */}
    </Layout>
  )
}

export const contactTempQuery = graphql`
  query contactTempPage($id: String!) {
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
        ... on WpTemplate_Contact {
          contactTemplate {
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

    howItWorks: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            howItWorksTitle
            howItWorksSteps {
              content
            }
            popupTitle
            popupContent
            popupButtonText
            popupButtonSlug
          }
        }
      }
    }

    inquiries: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            bookingFormTitle
            bookingFormIntro
            bookingFormId
          }
        }
      }
    }

    niceMeet: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            displayContactInformation
          }
        }
      }
    }

    divider: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
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
                  gatsbyImageData(width: 1500)
                }
              }
            }
            dividerImageFour {
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
      }
    }
  }
`

export default Contact
