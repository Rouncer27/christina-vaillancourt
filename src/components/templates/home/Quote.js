import React from "react"
import styled from "styled-components"
import {
  B1Blue,
  B2Blue,
  H2Blue,
  medWrapper,
  colors,
} from "../../../styles/helpers"

const Quote = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="quote">
          <p className="quote__content">{data.quoteContent}</p>
          <p className="quote__author">
            <span>&mdash; </span>
            {data.quoteAuthor}
          </p>
        </div>
        <div className="quoteTitle">
          <h2>{data.quoteTitle}</h2>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin-bottom: 10rem;

  .wrapper {
    ${medWrapper};
    flex-direction: column-reverse;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .quote {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 2rem);
      margin-right: 2rem;
      padding-top: 2rem;
      padding-right: 2rem;
      border-right: 0.3rem solid ${colors.colorPrimary};
    }

    &__content {
      ${B2Blue};
    }

    &__author {
      ${B1Blue};
      margin: 0;
    }
  }

  .quoteTitle {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 2rem);
      margin-left: 2rem;
      padding-left: 2rem;
    }

    h2 {
      ${H2Blue};
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        margin: 0;
      }
    }
  }
`

export default Quote
