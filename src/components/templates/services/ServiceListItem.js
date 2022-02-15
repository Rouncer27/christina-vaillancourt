import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Blue, colors } from "../../../styles/helpers"

const ServiceListItem = ({ listactive, handleOnCLick, service }) => {
  const imageDisplay = getImage(
    service.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = service.image.altText
  return (
    <ServiceItem active={listactive} onClick={handleOnCLick}>
      <div className="service-image">
        <div className="service-image__wrapper">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
      <div className="service-title">
        <h3>{service.title}</h3>
      </div>
    </ServiceItem>
  )
}

const ServiceItem = styled.div`
  width: calc(100% - 4rem);
  margin: 0 auto;
  cursor: pointer;

  @media (min-width: 768px) {
    width: calc((100% / 2) - 4rem);
    margin: 1rem 2rem;
  }

  @media (min-width: 1025px) {
    width: calc((100% / 4) - 4rem);
    margin: 1rem 2rem;
  }

  &:hover {
    .service-title {
      h3 {
        border-bottom: 0.5rem solid ${colors.colorPrimary};
      }
    }
  }

  .service-image {
    display: none;
    padding: 1rem 10rem;

    @media (min-width: 768px) {
      display: block;
      padding: 1rem 10rem;
    }
    @media (min-width: 1025px) {
      padding: 1rem;
    }

    &__wrapper {
      border-radius: 50%;
      box-shadow: ${props =>
        props.active ? `0rem 0rem 0 0.5rem ${colors.colorPrimary}` : `none`};
    }
  }

  .service-title {
    width: 100%;
    text-align: center;

    h3 {
      ${B1Blue};
      transition: all 0.3s ease;
      border-bottom: ${props =>
        props.active
          ? `0.5rem solid ${colors.colorPrimary}`
          : `0.5rem solid transparent`};
      font-weight: bold;
    }
  }
`

export default ServiceListItem
