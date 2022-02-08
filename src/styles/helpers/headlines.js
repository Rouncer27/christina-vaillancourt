import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"
import fonts from "./fonts"

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(6, 10, 76.8, 150, 4)};
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`

export const H1Black = css`
  ${H1Base};
  color: ${colors.black};
`

export const H1White = css`
  ${H1Base};
  color: ${colors.white};
`

export const H1Blue = css`
  ${H1Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #2 //
export const H2Base = css`
  ${fontSizer(4, 7.5, 76.8, 150, 3)};
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
`

export const H2White = css`
  ${H2Base};
  color: ${colors.white};
`

export const H2Black = css`
  ${H2Base};
  color: ${colors.black};
`

export const H2Blue = css`
  ${H2Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #3 //
export const H3Base = css`
  ${fontSizer(3, 5.5, 76.8, 150, 3)}
  font-family: ${fonts.fontTertiary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
`

export const H3White = css`
  ${H3Base};
  color: ${colors.white};
`

export const H3Black = css`
  ${H3Base};
  color: ${colors.black};
`

export const H3Blue = css`
  ${H3Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #4 //
export const H4Base = css`
  ${fontSizer(2, 3, 76.8, 160, 2)};
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
`

export const H4White = css`
  ${H4Base};
  color: ${colors.white};
`

export const H4Black = css`
  ${H4Base};
  color: ${colors.black};
`

export const H4Blue = css`
  ${H4Base};
  color: ${colors.colorSecondary};
`
