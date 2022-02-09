import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Blue, H2Blue, medWrapper } from "../../../styles/helpers"

const ServicesList = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>{data.servicesSectionTitle}</h2>
        </div>
        {data.services && data.services.length > 0 ? (
          <div className="services">
            {data.services.map((service, index) => {
              const imageDisplay = getImage(
                service.image.localFile.childImageSharp.gatsbyImageData
              )
              const imageAlt = service.image.altText
              return (
                <ServiceItem key={index} to={`/${service.slug}`}>
                  <div className="service-image">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                  </div>
                  <div className="service-title">
                    <h3>{service.title}</h3>
                  </div>
                </ServiceItem>
              )
            })}
          </div>
        ) : null}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    margin-bottom: 7.5rem;
  }
  @media (min-width: 1025px) {
    margin-bottom: 12.5rem;
  }

  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;
    text-align: center;

    @media (min-width: 1025px) {
      text-align: left;
    }

    h2 {
      ${H2Blue};
    }
  }

  .services {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const ServiceItem = styled(Link)`
  width: calc(100% - 4rem);
  margin: 2rem;

  @media (min-width: 768px) {
    width: calc((100% / 2) - 4rem);
    margin: 1rem 2rem;
  }

  @media (min-width: 1025px) {
    width: calc((100% / 4) - 4rem);
    margin: 1rem 2rem;
  }

  .service-image {
    padding: 1rem 10rem;

    @media (min-width: 768px) {
      padding: 1rem 5rem;
    }
    @media (min-width: 1025px) {
      padding: 1rem;
    }
  }

  .service-title {
    width: 100%;
    text-align: center;

    h3 {
      ${B1Blue};
      font-weight: bold;
    }
  }
`

export default ServicesList
