import React from "react"
import styled from "styled-components"
import { B2Blue, H2Blue, medWrapper } from "../../../styles/helpers"

import stepOne from "../../../images/step-1.png"
import stepTwo from "../../../images/step-2.png"
import stepThree from "../../../images/step-3.png"

const HowItWorks = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
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
              <Step key={index}>
                <div className="step-image">{StepImage}</div>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </Step>
            )
          })}
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
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
