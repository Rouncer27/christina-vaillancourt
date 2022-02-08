import React from "react"
import styled from "styled-components"
import { colors, standardWrapper } from "../styles/helpers"
import {
  H1Black,
  H1White,
  H1Blue,
  H2White,
  H2Black,
  H2Blue,
  H3White,
  H3Black,
  H3Blue,
  H4White,
  H4Black,
  H4Blue,
  B1Black,
  B1White,
  B1Blue,
  B2Black,
  B2White,
  B2Blue,
  B3Black,
  B3White,
  B3Blue,
} from "../styles/helpers"

const Typography = () => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <h1>Typography</h1>
        <div className="headlines">
          <span>Headlines.....</span>
          <span>Headline Style One</span>
          <h1 className="h1a">healing</h1>
          <h1 className="h1b">healing</h1>
          <h1 className="h1c">healing</h1>
          <span>Headline Style Two</span>
          <h1 className="h2a">welcome</h1>
          <h1 className="h2b">welcome</h1>
          <h1 className="h2c">welcome</h1>
          <span>Headline Style Three</span>
          <h1 className="h3a">we focus on</h1>
          <h1 className="h3b">we focus on</h1>
          <h1 className="h3c">we focus on</h1>
          <span>Headline Style Four</span>
          <h1 className="h4a">psychologist in</h1>
          <h1 className="h4b">psychologist in</h1>
          <h1 className="h4c">psychologist in</h1>
        </div>
        <div className="paragraphs">
          <span>Paragraphs......</span>
          <span>Body Style One</span>
          <p className="b1a">
            Are you struggling with negative feelings such as anxiety and
            depression? Or perhaps one of your children is acting out and you
            need help with how to cope as a parent? I can help with providing
            assessment and counselling to help put your life back on track.
          </p>
          <p className="b1b">
            Are you struggling with negative feelings such as anxiety and
            depression? Or perhaps one of your children is acting out and you
            need help with how to cope as a parent? I can help with providing
            assessment and counselling to help put your life back on track.
          </p>
          <p className="b1c">
            Are you struggling with negative feelings such as anxiety and
            depression? Or perhaps one of your children is acting out and you
            need help with how to cope as a parent? I can help with providing
            assessment and counselling to help put your life back on track.
          </p>
          <span>Body Style Two</span>
          <p className="b2a">
            Are you struggling with negative feelings such as anxiety and
            depression? Or perhaps one of your children is acting out and you
            need help with how to cope as a parent? I can help with providing
            assessment and counselling to help put your life back on track.
          </p>
          <p className="b2b">
            Are you struggling with negative feelings such as anxiety and
            depression? Or perhaps one of your children is acting out and you
            need help with how to cope as a parent? I can help with providing
            assessment and counselling to help put your life back on track.
          </p>
          <p className="b2c">
            Are you struggling with negative feelings such as anxiety and
            depression? Or perhaps one of your children is acting out and you
            need help with how to cope as a parent? I can help with providing
            assessment and counselling to help put your life back on track.
          </p>
          <span>Body Style Three</span>
          <p className="b3a">
            Are you struggling with negative feelings such as anxiety and
            depression? Or perhaps one of your children is acting out and you
            need help with how to cope as a parent? I can help with providing
            assessment and counselling to help put your life back on track.
          </p>
          <p className="b3b">
            Are you struggling with negative feelings such as anxiety and
            depression? Or perhaps one of your children is acting out and you
            need help with how to cope as a parent? I can help with providing
            assessment and counselling to help put your life back on track.
          </p>
          <p className="b3c">
            Are you struggling with negative feelings such as anxiety and
            depression? Or perhaps one of your children is acting out and you
            need help with how to cope as a parent? I can help with providing
            assessment and counselling to help put your life back on track.
          </p>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .headlines {
    width: 100%;

    .h1a {
      ${H1Black};
    }
    .h1b {
      ${H1White};
      background-color: ${colors.black};
    }
    .h1c {
      ${H1Blue};
    }

    .h2a {
      ${H2Black};
    }
    .h2b {
      ${H2White};
      background-color: ${colors.black};
    }
    .h2c {
      ${H2Blue};
    }

    .h3a {
      ${H3Black};
    }
    .h3b {
      ${H3White};
      background-color: ${colors.black};
    }
    .h3c {
      ${H3Blue};
    }

    .h4a {
      ${H4Black};
    }
    .h4b {
      ${H4White};
      background-color: ${colors.black};
    }
    .h4c {
      ${H4Blue};
    }
  }

  .paragraphs {
    width: 100%;
    margin-top: 5rem;

    .b1a {
      ${B1Black};
    }
    .b1b {
      ${B1White};
      background-color: ${colors.black};
    }
    .b1c {
      ${B1Blue};
    }

    .b2a {
      ${B2Black};
    }
    .b2b {
      ${B2White};
      background-color: ${colors.black};
    }
    .b2c {
      ${B2Blue};
    }

    .b3a {
      ${B3Black};
    }
    .b3b {
      ${B3White};
      background-color: ${colors.black};
    }
    .b3c {
      ${B3Blue};
    }
  }
`

export default Typography
