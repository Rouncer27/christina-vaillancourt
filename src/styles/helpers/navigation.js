import { colors } from "./index"
import { fontSizer } from "./index"

export const Nav1Base = `
  ${fontSizer(1.2, 1.4, 76.8, 150, 1.8)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 0.5rem ${colors.colorSecondary};
  }

  &:hover {
    color: ${colors.colorAccent};
  }
`
export const Nav1White = `
  ${Nav1Base};
  color: ${colors.white};
`

export const Nav1Black = `
  ${Nav1Base};
  color: ${colors.black};
`

export const Nav1Blue = `
  ${Nav1Base};
  color: ${colors.colorPrimary};
`

export const Nav2Base = `
  ${fontSizer(1.2, 1.2, 76.8, 150, 1.6)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 0.5rem ${colors.colorSecondary};
  }

  &:hover {
    color: ${colors.colorTertiary};
  }
`

export const Nav2White = `
  ${Nav2Base};
  color: ${colors.white};
`
