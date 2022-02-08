import React from "react"
import styled from "styled-components"

import HeroImage from "../common/HeroImage"

const Hero = ({ data }) => {
  const bgImg = data.heroImage
  return (
    <StyledSection>
      <HeroImage bgImg={bgImg} />
      <div className="hero-content"></div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 40rem;

  @media (min-width: 768px) {
    height: 40rem;
  }

  @media (min-width: 1025px) {
    height: 45rem;
  }

  .hero-content {
    position: relative;
    width: 100%;
    max-width: 75rem;
    z-index: 100;
  }
`

export default Hero
