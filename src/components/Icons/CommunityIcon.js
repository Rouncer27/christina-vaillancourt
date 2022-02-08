import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const IconWrap = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    image: file(relativePath: { eq: "community-graphic.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1500)
      }
    }
  }
`

const CommunityIcon = () => {
  const data = useStaticQuery(getData)
  const image = getImage(data.image.childImageSharp.gatsbyImageData)
  return (
    <IconWrap>
      <GatsbyImage image={image} alt="Key" layout="fixed" />
    </IconWrap>
  )
}

export default CommunityIcon
