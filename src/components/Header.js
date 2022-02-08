import React from "react"
import { Link } from "gatsby"

import MainLogo from "./Logos/MainLogo"
import HeaderNav from "./Navigation/HeaderNav/HeaderNav"
import MobileNav from "./Navigation/MobileNav/MobileNav"

const Header = ({ siteTitle }) => {
  return (
    <header>
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
    </header>
  )
}

export default Header
