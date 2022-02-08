import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { medWrapper } from "../styles/helpers"

import MainLogo from "./Logos/MainLogo"
import HeaderNav from "./Navigation/HeaderNav/HeaderNav"
import MobileNav from "./Navigation/MobileNav/MobileNav"

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <div className="header__wrapper">
        <div className="headerLogo">
          <h1>
            <Link to="/">
              <MainLogo />
              <span>{siteTitle}</span>
            </Link>
          </h1>
        </div>
        <HeaderNav />
      </div>
      <MobileNav />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: relative;
  z-index: 999999;

  .header__wrapper {
    ${medWrapper};
    align-items: center;

    @media (min-width: 1025px) {
      padding-top: 5rem;
    }
  }

  .headerLogo {
    width: 100%;
    max-width: 37.5rem;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1025px) {
      width: 35%;
    }

    @media (min-width: 1100px) {
      width: 40%;
    }

    a {
      width: 100%;
      display: block;
      margin: auto;

      &:focus {
        outline: 0.4rem solid #003b49;
        transition: outline-width 0.35s ease-in-out;
      }
    }

    h1 {
      width: 100%;
      margin: 0;
      padding: 0;

      span {
        position: absolute;
        left: -999%;
      }

      @media (min-width: 768px) {
        width: calc(100%);
        max-width: 45rem;
        margin: 2rem auto;
      }

      @media (min-width: 1025px) {
        width: calc(100%);
        max-width: 100%;
        margin: auto;
      }
    }
  }
`

export default Header
