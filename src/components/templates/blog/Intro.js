import React from "react"
import styled from "styled-components"
import { B1Blue, standardWrapper } from "../../../styles/helpers"

const Intro = ({ data }) => {
  return (
    <StyledDiv>
      <div className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: data.blogIntro }} />
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  padding: 4rem 0 0;

  .wrapper {
    ${standardWrapper};
    text-align: center;
  }

  p {
    ${B1Blue};
  }
`

export default Intro
