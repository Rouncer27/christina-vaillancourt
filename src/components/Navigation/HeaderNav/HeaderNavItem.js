import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { colors, Nav1Blue } from "../../../styles/helpers"

import HeaderSubMenu from "./HeaderSubMenu"

const HeaderNavItem = ({ item }) => {
  let slug = item.url
    .split("/")
    .filter(item => item !== "")
    .filter(item => item !== "https:")
    .filter(item => item !== "http:")
    .filter(item => item !== process.env.GATSBY_WORDPRESS_URL)
    .join("/")
  const [subActive, setSubActive] = useState(false)

  if (item.target !== null) {
    slug = item.url
  }

  const handleIsActiveOn = () => {
    setSubActive(true)
  }

  const handleIsActiveOff = () => {
    setSubActive(false)
  }

  return (
    <HeaderNavItemStyled>
      {item.target === null ? (
        <Link
          to={`/${slug}`}
          onMouseEnter={handleIsActiveOn}
          onMouseLeave={handleIsActiveOff}
          onFocus={handleIsActiveOn}
        >
          {item.label}
        </Link>
      ) : (
        <a target="_blank" rel="noreferrer" href={slug}>
          {item.label}
        </a>
      )}

      {item.subItems.length > 0 && (
        <>
          <span className="subIndicator">&#x25BC;</span>
          <HeaderSubMenu
            handleIsActiveOn={handleIsActiveOn}
            handleIsActiveOff={handleIsActiveOff}
            handleIsActiveOffBlur={handleIsActiveOff}
            subActive={subActive}
            items={item.subItems}
          />
        </>
      )}
    </HeaderNavItemStyled>
  )
}

const HeaderNavItemStyled = styled.li`
  padding: 0;
  position: relative;
  align-self: center;
  text-align: center;

  a,
  button {
    ${Nav1Blue};
    margin: 0 auto;
    padding: 0 3rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    transition: all 0.35s ease-in-out;

    &:hover {
      color: ${colors.colorTertiary};
    }

    &[aria-current="page"] {
      color: ${colors.colorSecondary};

      &:hover {
        cursor: default;
      }
    }

    &:focus {
      outline: 0.4rem solid ${colors.colorSecondary};
      transition: all 0.35s ease-in-out;
    }
  }

  .subIndicator {
    display: inline-block;
    color: ${colors.white};
    font-size: 1rem;
    padding-left: 0.5rem;
  }
`

export default HeaderNavItem
