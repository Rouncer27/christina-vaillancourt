import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  medWrapper,
  H2Blue,
  B2Blue,
  Btn1Blue,
  colors,
} from "../../../styles/helpers"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Welcome = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#welcome-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        `.welcome-title`,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 1.5,
        }
      )

      .fromTo(
        `.welcome-content`,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 1,
        },
        "start+=0.3"
      )

      .fromTo(
        `.welcome-button`,
        {
          autoAlpha: 0,
          x: 100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1.5,
        },
        "start+=0.75"
      )
  }, [])
  return (
    <SectionStyled id="welcome-trigger">
      <div className="wrapper">
        <div className="title welcome-title">
          <h2>{data.welcomeTitle}</h2>
        </div>
        <div className="content welcome-content">
          <div dangerouslySetInnerHTML={{ __html: data.welcomeContent }} />
          <div className="welcome-button">
            <Link to={`/${data.welcomeButtonSlug}`}>
              {data.welcomeButtonText}
            </Link>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      width: calc(30%);
      margin-bottom: 0;
      padding-top: 2rem;
    }

    h2 {
      ${H2Blue};
      margin: 0;
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(70% - 2.5rem);
      margin-left: 2.5rem;
      padding-top: 2.5rem;
      padding-left: 5rem;
      padding-bottom: 2.5rem;
      border-left: 0.3rem solid ${colors.colorPrimary};
    }

    p {
      ${B2Blue};
    }

    a {
      ${Btn1Blue};
    }
  }
`

export default Welcome
