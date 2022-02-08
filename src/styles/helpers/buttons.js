import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"
import fonts from "./fonts"

const Btn1Base = css`
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.8)};
  display: inline-block;
  padding: 1rem 3rem;
  border: none;
  border-radius: 0.4rem;
  transition: all 0.3s ease;
  font-family: ${fonts.fontSecondary};
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: center;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Btn1Blue = css`
  ${Btn1Base};
  background: ${colors.colorSecondary};
  border: solid 0.1rem ${colors.colorSecondary};
  color: ${colors.white};

  &:hover {
    background: ${colors.colorAccent};
    border-color: ${colors.colorAccent};
    color: ${colors.colorShad};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: ${colors.colorSecondary};
      color: ${colors.white};
      cursor: not-allowed;
    }
  }
`
