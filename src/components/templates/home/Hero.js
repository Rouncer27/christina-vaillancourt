import React from "react"
import styled from "styled-components"
import { H1Blue, H3Blue, H4Blue } from "../../../styles/helpers"

import HeroImage from "../common/HeroImage"

const Hero = ({ data }) => {
  const bgImg = data.heroImage
  return (
    <StyledSection>
      <HeroImage bgImg={bgImg} />
      <div className="hero-content">
        <div className="hero-content__main">
          <h2>
            <span className="title-top">{data.titleSmall}</span>{" "}
            <span className="title-bottom">{data.titleLarge}</span>
          </h2>
        </div>
        <div className="hero-content__sub">
          <p>
            <span className="sub-title">{data.subTitle}</span>{" "}
            <span className="sub-script">{data.subTitleScript}</span>
          </p>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 30rem;

  @media (min-width: 768px) {
    height: 45rem;
  }

  @media (min-width: 1025px) {
    height: 50rem;
  }

  .hero-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    padding: 2.5rem;
    transform: translate(-50%, -50%);
    z-index: 100;
    text-align: center;

    @media (min-width: 768px) {
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 0;
      transform: translate(0%, 0%);
      text-align: left;
    }

    &__main {
      @media (min-width: 768px) {
        position: absolute;
        top: 25%;
        left: 5%;
        margin-bottom: 0;
      }

      h2 {
        margin: 0;

        span {
          display: block;
        }

        .title-top {
          ${H3Blue};
        }
        .title-bottom {
          ${H1Blue}
        }
      }
    }

    &__sub {
      position: absolute;
      right: 0;
      bottom: 1.5rem;
      left: 0;
      width: 100%;

      @media (min-width: 768px) {
        position: absolute;
        right: 5%;
        bottom: 5rem;
        left: auto;
        width: auto;
      }

      p {
        margin: 0;

        span {
          display: inline-block;
        }

        .sub-title {
          ${H4Blue};
        }
        .sub-script {
          ${H3Blue}
        }
      }
    }
  }
`

export default Hero
