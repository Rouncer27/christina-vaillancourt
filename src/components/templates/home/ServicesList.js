import React, { useEffect } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Blue, H2Blue, medWrapper, colors } from "../../../styles/helpers"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ServicesList = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#services-trigger",
          markers: false,
          start: "top 35%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        ".services-title",
        {
          autoAlpha: 0,
          x: -150,
          duration: 1,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
        }
      )
      .fromTo(
        ".service-item",
        {
          autoAlpha: 0,
          y: 100,
          duration: 2,
        },
        {
          autoAlpha: 1,
          y: 0,
          stagger: {
            each: 0.4,
          },
        }
      )
  }, [])

  return (
    <SectionStyled>
      <div id="services-trigger" className="wrapper">
        <div className="title services-title">
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
                <ServiceItem className="service-item" key={index}>
                  <Link to={`/${service.slug}`}>
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
                  </Link>
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

const ServiceItem = styled.div`
  display: block;
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

  &:hover {
    .service-image__wrapper {
      box-shadow: 0rem 0rem 0 0.5rem ${colors.colorPrimary};
    }
    .service-title {
      h3 {
        border-bottom: 0.5rem solid ${colors.colorPrimary};
      }
    }
  }

  .service-image {
    padding: 1rem 10rem;

    @media (min-width: 768px) {
      padding: 1rem 5rem;
    }
    @media (min-width: 1025px) {
      padding: 1rem;
    }

    &__wrapper {
      transition: all 0.3s ease;
      border-radius: 50%;
    }
  }

  .service-title {
    width: 100%;
    text-align: center;

    h3 {
      ${B1Blue};
      transition: all 0.3s ease;
      border-bottom: 0.5rem solid transparent;
      font-weight: bold;
    }
  }
`

export default ServicesList
