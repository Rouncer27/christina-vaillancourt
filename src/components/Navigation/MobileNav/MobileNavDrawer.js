import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { colors } from "../../../styles/helpers"
import MainLogo from "../../Logos/MainLogo"
import MobileNavContainer from "./MobileNavContainer"

const getData = graphql`
  {
    mobileMenu: wpMenu(name: { eq: "Mobile Menu" }) {
      name
      menuItems {
        nodes {
          label
          url
          parentDatabaseId
          parentId
          id
          databaseId
        }
      }
    }
  }
`

const MobileNavDrawer = ({ isOpen, setIsOpen }) => {
  const data = useStaticQuery(getData)
  const menuItems = data.mobileMenu.menuItems.nodes
  return (
    <NavDrawer isOpen={isOpen}>
      <div className="wrapper">
        <div className="mobileLogo">
          <MainLogo />
        </div>
        <MobileNavContainer navitems={menuItems} setIsOpen={setIsOpen} />
      </div>
    </NavDrawer>
  )
}

const NavDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in;
  transform: translateX(${props => (props.isOpen ? "0%" : "-100%")});
  background: ${colors.colorPrimary};
  background-image: linear-gradient(
    to bottom,
    ${colors.white} 0%,
    ${colors.white} 10.5rem,
    ${colors.colorSecondary} 10.5rem,
    ${colors.colorSecondary} 100%
  );
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: ${props => (props.isOpen ? 9999999 : -9999999)};
  overflow-y: scroll;

  @media (min-width: 768px) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-self: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  .mobileLogo {
    width: 100%;
    max-width: 30rem;
    margin: 3rem auto 1rem;
    padding: 0 2rem;
  }
`

export default MobileNavDrawer
