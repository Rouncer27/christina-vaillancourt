import React from "react"
import styled from "styled-components"
import { colors, H1White, H3White } from "../../../styles/helpers"

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
        right: 5%;
        margin-bottom: 0;
        transform: rotate(-90deg);
      }

      h2 {
        margin: 0;

        span {
          display: block;
        }

        .title-top {
          ${H3White};
          display: block;
          position: relative;
          @media (min-width: 768px) {
            &::after {
              position: absolute;
              top: 50%;
              right: -9rem;
              width: 100%;
              height: 0.2rem;
              background-color: ${colors.white};
              content: "";
            }
          }

          @media (min-width: 1025px) {
            &::after {
              right: -12rem;
            }
          }
        }
        .title-bottom {
          ${H1White}
        }
      }
    }
  }
`

export default Hero
