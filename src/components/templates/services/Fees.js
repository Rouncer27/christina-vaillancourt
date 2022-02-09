import React from "react"
import styled from "styled-components"
import { medWrapper, colors, H2White, B2White } from "../../../styles/helpers"

const Fees = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>{data.feesTitle}</h2>
        </div>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: data.feesContent }} />
        </div>
      </div>
    </SectionStyled>
  )
}
const SectionStyled = styled.section`
  margin-bottom: 5rem;
  padding: 2.5rem 0;
  background-color: ${colors.colorSecondary};

  @media (min-width: 768px) {
    margin-bottom: 8.5rem;
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
      text-align: right;
    }

    h2 {
      ${H2White};
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
      border-left: 0.3rem solid ${colors.white};
    }

    p {
      ${B2White};
    }
  }
`

export default Fees
