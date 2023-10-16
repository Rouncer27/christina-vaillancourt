import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
  B2Blue,
  B2White,
  Btn1Blue,
  colors,
  H2Blue,
  H2White,
  medWrapper,
} from "../../../styles/helpers"
import stepOne from "../../../images/step-1.png"
import stepTwo from "../../../images/step-2.png"
import stepThree from "../../../images/step-3.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const HowItWorks = ({ data }) => {
  const [popupActive, setPopupActive] = useState(false)
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#how-it-works-trigger",
          markers: false,
          start: "top 35%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        ".how-it-works-title",
        {
          autoAlpha: 0,
          x: -150,
          duration: 0.5,
        },
        {
          autoAlpha: 1,
          x: 0,
        }
      )
      .fromTo(
        ".how-it-works-item",
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: {
            each: 0.3,
          },
        }
      )
  }, [])
  return (
    <SectionStyled id="#how-it-works-trigger">
      <div className="wrapper">
        <div className="title how-it-works-title">
          <h2>{data.howItWorksTitle}</h2>
        </div>
        <div className="steps">
          {data.howItWorksSteps.map((item, index) => {
            const StepImage =
              index === 0 ? (
                <img src={stepOne} alt="step one" />
              ) : index === 1 ? (
                <img src={stepTwo} alt="step two" />
              ) : (
                <img src={stepThree} alt="step three" />
              )

            return (
              <Step className="how-it-works-item" key={index}>
                <div className="step-image">{StepImage}</div>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </Step>
            )
          })}
        </div>
        <div className="popup-btn">
          <div>
            <button
              type="button"
              onClick={() => {
                setPopupActive(true)
              }}
            >
              Fee Information
            </button>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://portal.owlpractice.ca/christinav/booking"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
      {popupActive && (
        <div
          onClick={() => {
            setPopupActive(false)
          }}
          className="popup-modal"
        >
          <div className="popup-modal__inner">
            <div className="popup-modal__inner--wrapper">
              <div className="popup-modal__inner--title">
                <h3>{data.popupTitle}</h3>
              </div>
              <div
                className="popup-modal__inner--content"
                dangerouslySetInnerHTML={{ __html: data.popupContent }}
              />
              <div className="popup-modal__button">
                <button
                  onClick={() => {
                    setPopupActive(false)
                  }}
                >
                  &#10005;
                </button>
              </div>
            </div>
          </div>

          <div className="popup-modal__background" />
        </div>
      )}
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin-top: 5rem;

  @media (min-width: 768px) {
    margin-top: 7.5rem;
  }
  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;

    h2 {
      ${H2Blue};

      @media (min-width: 768px) {
        padding-left: 2.5rem;
      }

      @media (min-width: 1025px) {
        padding-left: 5rem;
      }
    }
  }

  .steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .popup-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 7.5rem auto;
    text-align: center;

    button {
      ${Btn1Blue};
    }

    a {
      ${Btn1Blue};
      margin-top: 4rem;

      @media (min-width: 768px) {
        margin-top: 0;
        margin-left: 1rem;
      }
    }
  }

  .popup-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999999;
    overflow: scroll;

    &__inner {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      background-color: ${colors.colorSecondary};
      z-index: 9999;

      &--wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        position: relative;
        max-width: 120rem;
        margin: 2rem auto;
        padding: 5rem 2rem;

        @media (min-width: 768px) {
          padding: 5rem 2rem;
        }

        @media (min-width: 1025px) {
          padding: 7.5rem 2rem;
        }
      }

      &--title {
        width: 100%;

        @media (min-width: 768px) {
          width: calc(40%);
          padding-right: 4rem;
          border-right: 0.3rem solid ${colors.white};
        }

        h3 {
          ${H2White};

          @media (min-width: 768px) {
            text-align: right;
          }
        }
      }

      &--content {
        width: 100%;

        @media (min-width: 768px) {
          width: calc(60%);
          padding-left: 4rem;
        }

        p {
          ${B2White};
        }
      }
    }

    &__button {
      position: absolute;
      top: 0;
      right: 5rem;

      button {
        color: ${colors.white};
        transition: all 0.3s ease-out;
        border: none;
        background-color: transparent;
        font-weight: bold;
        font-size: 3.2rem;
        cursor: pointer;

        &:hover {
          color: ${colors.colorPrimary};
        }
      }
    }

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.4);
      z-index: 999;
    }
  }
`

const Step = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: calc(33.3333333% - 5rem);
    margin: 0 2.5rem;
  }

  .step-image {
    max-width: 13rem;
    margin: 0 auto 3rem;
  }

  p {
    ${B2Blue};
  }
`

export default HowItWorks
