import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B2Blue,
  Btn1Blue,
  colors,
  H3Blue,
  standardWrapper,
} from "../../../styles/helpers"

const Team = ({ data }) => {
  console.log("Team", data)
  return (
    <SectionStyled>
      {data.aboutTeam.map((team, index) => {
        console.log("team: ", team)
        const imageDisplay = getImage(
          team.aboutBioImage.localFile.childImageSharp.gatsbyImageData
        )
        const imageAlt = team.aboutBioImage.altText
        return (
          <div key={index} className="wrapper">
            <div className="content bio-content">
              <div>
                <h2>{team.aboutBioName}</h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: team.aboutBioContent }} />
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
        )
      })}
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
    align-items: center;
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

    h2 {
      ${H3Blue};
      margin-bottom: 1rem;
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

export default Team
