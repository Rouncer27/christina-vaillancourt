import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  medWrapper,
  H2Blue,
  B2Blue,
  Btn1Blue,
  colors,
} from "../../../styles/helpers"

const Welcome = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>{data.welcomeTitle}</h2>
        </div>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: data.welcomeContent }} />
          <div>
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
