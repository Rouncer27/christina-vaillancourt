import { Link } from "gatsby"
import React, { useEffect } from "react"
import styled from "styled-components"
import { medWrapper, colors, B2Blue, Btn1Blue } from "../../../styles/helpers"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Appointment = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#appointment-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        `.appointment-link`,
        {
          autoAlpha: 0,
          x: -100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1.5,
        }
      )

      .fromTo(
        `.appointment-content`,
        {
          autoAlpha: 0,
          x: 100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1,
        },
        "start+=0.3"
      )
  }, [])
  return (
    <SectionStyled id="appointment-trigger">
      <div className="wrapper">
        <div className="link appointment-link">
          <Link to={`/${data.bookAppointmentButtonSlug}`}>
            {data.bookAppointmentButtonText}
          </Link>
        </div>
        <div className="content appointment-content">
          <div
            dangerouslySetInnerHTML={{ __html: data.bookAppointmentContent }}
          />
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

  .link {
    width: 100%;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      width: calc(30%);
      margin-bottom: 0;
      padding-top: 2rem;
      text-align: right;
    }

    a {
      ${Btn1Blue};
      margin-top: 1.5rem;
      margin-right: 2rem;
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
  }
`

export default Appointment
