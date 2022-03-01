import React from "react"
import styled from "styled-components"
import { B1Blue, B2Blue, fonts, standardWrapper } from "../../../styles/helpers"

const Double = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        {data.doubleParagraphs.map((para, index) => {
          return (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "double-content-one" : "double-content-two"
              } double-content`}
            >
              <div>
                <h2>{para.title}</h2>
              </div>
              <div dangerouslySetInnerHTML={{ __html: para.content }} />
            </div>
          )
        })}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .double-content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 4rem);
    }
    h2 {
      ${B1Blue};
      font-family: ${fonts.fontSecondary};
      font-weight: bold;
    }

    p {
      ${B2Blue};
    }
  }

  .double-content-one {
    @media (min-width: 768px) {
      margin-right: 4rem;
    }
  }

  .double-content-two {
    @media (min-width: 768px) {
      margin-left: 4rem;
    }
  }
`

export default Double
