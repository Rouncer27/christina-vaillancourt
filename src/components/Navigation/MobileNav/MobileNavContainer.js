import React from "react"
import styled from "styled-components"
import MobileNavItem from "./MobileNavItem"

const MobileNavContainer = ({ navitems }) => {
  const topNavItems = navitems.filter(item => item.parentDatabaseId === 0)
  const subNavItems = navitems.filter(item => item.parentDatabaseId !== 0)
  const navItemsWithSubs = topNavItems.map(item => {
    const itemWithSubs = subNavItems.filter(
      subItem => subItem.parentDatabaseId === item.databaseId
    )
    item.subItems = itemWithSubs
    return item
  })

  return (
    <MobileNavContainerStyled>
      <ul>
        {navItemsWithSubs.map(item => (
          <MobileNavItem key={item.id} item={item} />
        ))}
      </ul>
    </MobileNavContainerStyled>
  )
}

const MobileNavContainerStyled = styled.nav`
  display: block;
  width: 100%;
  padding-bottom: 5rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

export default MobileNavContainer
