import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B2Blue,
  Btn1Blue,
  colors,
  standardWrapper,
} from "../../../styles/helpers"

const Bio = ({ data }) => {
  const imageDisplay = getImage(
    data.aboutBioImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.aboutBioImage.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: data.aboutBio }} />
          <div>
            <Link to={`/${data.aboutBioButtonSlug}`}>
              {data.aboutBioButtonText}
            </Link>
          </div>
        </div>
        <div className="image">
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
