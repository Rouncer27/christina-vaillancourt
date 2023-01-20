import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/templates/about/Hero"
import Bio from "../components/templates/about/Bio"
import Team from "../components/templates/about/Team"
import Quote from "../components/templates/about/Quote"
import Divider from "../components/templates/about/Divider"

const About = props => {
  const { hero, seoInfo } = props.data
  const heroData = hero.template.aboutTemplate
  const bio = props.data.bio.template.aboutTemplate
  const team = props.data.team.template.aboutTemplate
  const quote = props.data.quote.template.aboutTemplate
  const divider = props.data.divider.template.aboutTemplate
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Hero data={heroData} />
      <Bio data={bio} />
      <Team data={team} />
      <Quote data={quote} />
      <Divider data={divider} />
    </Layout>
  )
}

export const aboutTempQuery = graphql`
  query aboutTempPage($id: String!) {
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
        ... on WpTemplate_About {
          aboutTemplate {
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

    bio: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            aboutBio
            aboutBioButtonText
            aboutBioButtonSlug
            aboutBioImage {
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

    team: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            aboutTeam {
              aboutBioName
              aboutBioContent
              aboutBioImage {
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

    quote: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            quoteTitle
            quoteContent
            quoteAuthor
          }
        }
      }
    }

    divider: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
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
          }
        }
      }
    }
  }
`

export default About
