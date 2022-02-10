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
  const imageThreeDisplay = getImage(
    data.dividerImageThree.localFile.childImageSharp.gatsbyImageData
  )
  const imageThreeAlt = data.dividerImageThree.altText

  const imageFourDisplay = getImage(
    data.dividerImageFour.localFile.childImageSharp.gatsbyImageData
  )
  const imageFourAlt = data.dividerImageFour.altText
  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="image image-short">
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
        <div className="image image-short">
          <GatsbyImage
            image={imageThreeDisplay}
            alt={imageThreeAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="image image-short">
          <GatsbyImage
            image={imageFourDisplay}
            alt={imageFourAlt}
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
      min-height: 25rem;
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
    width: calc(50%);

    @media (min-width: 768px) {
      width: calc(25% - 1.5rem);
      margin-right: 1.5rem;
    }

    &:last-of-type {
      width: calc(25%);
      margin-right: 0;
    }
  }

  .image-long {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
    }
  }
`

export default Divider
