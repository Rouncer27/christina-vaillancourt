import React from "react"
import styled from "styled-components"

import HeaderMenuMain from "./HeaderMenuMain"

const HeaderNav = () => {
  return (
    <HeaderNavStyled>
      <div className="">
        <div className="">
          <HeaderMenuMain />
        </div>
      </div>
    </HeaderNavStyled>
  )
}

const HeaderNavStyled = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1025px) {
    width: 85%;
  }

  @media (min-width: 1100px) {
    width: 80%;
  }
`

export default HeaderNav
