import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Divider = ({ data }) => {
  const imageOneDisplay = getImage(
    data.dividerImageOne.localFile.childImageSharp.gatsbyImageData
  )
  const imageOneAlt = data.dividerImageOne.altText
  const imageTwoDisplay = getImage(
    data.dividerImageTwo.localFile.childImageSharp.gatsbyImageData
  )
  const imageTwoAlt = data.dividerImageTwo.altText
  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="image image-long">
          <GatsbyImage
            image={imageOneDisplay}
            alt={imageOneAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="image image-short">
          <GatsbyImage
            image={imageTwoDisplay}
            alt={imageTwoAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image {
    position: relative;
    min-height: 30rem;

    @media (min-width: 768px) {
      min-height: 35rem;
    }

    @media (min-width: 1025px) {
      min-height: 40rem;
    }

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .image-short {
    width: calc(40% - 1.5rem);
    margin-left: 1.5rem;

    @media (min-width: 768px) {
      width: calc(40% - 1.5rem);
      margin-left: 1.5rem;
    }
  }

  .image-long {
    width: calc(60%);

    @media (min-width: 768px) {
      width: calc(60%);
    }
  }
`

export default Divider
