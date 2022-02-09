import React from "react"
import styled from "styled-components"
import { fonts, H1Blue, H3Blue, H4Blue } from "../../../styles/helpers"

import HeroImage from "../common/HeroImage"

const Hero = ({ data }) => {
  const bgImg = data.heroImage
  return (
    <StyledSection>
      <HeroImage bgImg={bgImg} />
      <div className="hero-content">
        <div className="hero-content__main">
          <h2>
            <span className="title-side-top">{data.heroSideTitle}</span>{" "}
            <span className="title-side-bottom">{data.heroSideSubTitle}</span>
          </h2>
          <div className="hero-content__items">
            <ul>
              {data.heroList.map((item, index) => {
                return <li key={index}>{item.item}</li>
              })}
            </ul>
          </div>
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
    height: 60rem;
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
        bottom: -2.5rem;
        right: 7.5%;
        margin-bottom: 2.5rem;
        transform-origin: center left;
        transform: rotate(-90deg);
      }

      @media (min-width: 1025px) {
        position: absolute;
        bottom: -2.5rem;
        right: 5%;
        margin-bottom: 0;
        transform-origin: center left;
        transform: rotate(-90deg);
      }

      h2 {
        margin: 0;

        span {
          display: block;
        }

        .title-side-top {
          ${H1Blue}
        }
        .title-side-bottom {
          ${H3Blue};
          @media (min-width: 768px) {
            text-align: right;
          }
        }
      }

      .hero-content__items {
        @media (min-width: 768px) {
          margin-top: -50%;
          transform: rotate(90deg);
          transform-origin: bottom left;
        }

        @media (min-width: 1025px) {
          margin-top: -15rem;
        }

        ul {
          li {
            ${H4Blue};
            list-style: disc;
            font-family: ${fonts.fontPrimary};
          }
        }
      }
    }
  }
`

export default Hero
