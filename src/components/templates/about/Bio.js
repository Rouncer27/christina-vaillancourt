import { Link } from "gatsby"
import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B2Blue,
  Btn1Blue,
  colors,
  standardWrapper,
} from "../../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Bio = ({ data }) => {
  const imageDisplay = getImage(
    data.aboutBioImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.aboutBioImage.altText
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#bio-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        `.bio-content`,
        {
          autoAlpha: 0,
          x: -100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1.5,
        }
      )

      .fromTo(
        `.bio-image`,
        {
          autoAlpha: 0,
          y: 200,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 2,
        },
        "start+=0.3"
      )
  }, [])
  return (
    <SectionStyled id="bio-trigger">
      <div className="wrapper">
        <div className="content bio-content">
          <div dangerouslySetInnerHTML={{ __html: data.aboutBio }} />
          <div>
            <Link to={`/${data.aboutBioButtonSlug}`}>
              {data.aboutBioButtonText}
            </Link>
          </div>
        </div>
        <div className="image bio-image">
          <div className="image__wrap">
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 1025px) {
    margin-top: 11rem;
    margin-bottom: 11rem;
  }
  .wrapper {
    ${standardWrapper};
  }

  .content {
    width: 100%;
    margin-bottom: 5rem;

    @media (min-width: 768px) {
      width: calc(50%);
      margin-bottom: 0;
      border-left: 0.3rem solid ${colors.colorPrimary};
      padding-left: 5rem;
    }

    @media (min-width: 1025px) {
      padding-left: 7.5rem;
    }

    p {
      ${B2Blue};
    }

    a {
      ${Btn1Blue};
    }
  }

  .image {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    &__wrap {
      max-width: 25rem;
      margin: auto;
      @media (min-width: 768px) {
        max-width: 40rem;
      }
    }
  }
`

export default Bio
