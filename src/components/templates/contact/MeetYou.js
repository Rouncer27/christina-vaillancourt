import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import {
  B1Blue,
  colors,
  H2Blue,
  standardWrapper,
} from "../../../styles/helpers"

import phone from "../../../images/icon-phone.png"
import email from "../../../images/icon-email.png"

const getData = graphql`
  {
    contactData: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          address
          phoneNumber
          emailAddress
          googleMapLink
          googleMapImage {
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
`

const MeetYou = ({ data }) => {
  const contactData = useStaticQuery(getData)
  const { address, phoneNumber, emailAddress, googleMapLink, googleMapImage } =
    contactData.contactData.acfOptionsSiteWideSettings.acfSiteWideSettings
  const imageDisplay = getImage(
    googleMapImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = googleMapImage.altText
  if (!data.displayContactInformation) return null

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>nice to meet you</h2>
        </div>
        <div className="contact-info">
          <div className="details">
            <div>
              <p className="phone-number">
                <span>
                  <img src={phone} alt="phone number" />
                </span>
                <a href={`tel:+1${phoneNumber}`}>{phoneNumber}</a>
              </p>
            </div>
            <div
              className="street-address"
              dangerouslySetInnerHTML={{ __html: address }}
            />
          </div>
          <div className="image">
            <a target="_blank" rel="noreferrer" href={googleMapLink}>
              <GatsbyImage
                image={imageDisplay}
                alt={imageAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </a>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-top: 12.5rem;
    margin-bottom: 8rem;
  }

  @media (min-width: 1025px) {
    margin-top: 12.5rem;
    margin-bottom: 8rem;
  }

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;

    h2 {
      ${H2Blue};
    }
  }

  .contact-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    .details {
      width: 100%;
      margin-bottom: 5rem;

      @media (min-width: 768px) {
        width: 45%;
        margin-bottom: 0;
      }

      p,
      a {
        ${B1Blue};
        margin: 0;

        span {
          display: inline-block;
          width: 3rem;
          margin-right: 1rem;

          img {
            width: 100%;
          }
        }
      }

      a:hover {
        color: ${colors.colorPrimary};
      }

      .phone-number {
        display: flex;
        margin-bottom: 1rem;
      }

      .email-address {
        display: flex;
        margin-bottom: 2.5rem;
      }

      .street-address {
        padding-left: 4rem;
        p {
          font-weight: bold;
        }
      }
    }

    .image {
      width: 100%;

      @media (min-width: 768px) {
        width: 55%;
      }
    }
  }
`

export default MeetYou
