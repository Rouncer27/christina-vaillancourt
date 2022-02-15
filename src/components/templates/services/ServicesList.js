import React, { useState } from "react"
import styled from "styled-components"
import {
  B2Blue,
  H2Blue,
  H4Blue,
  medWrapper,
  colors,
} from "../../../styles/helpers"

import ServiceListItem from "./ServiceListItem"
import compass from "../../../images/icon-compass.png"

const ServicesList = ({ data }) => {
  const [isActive, setIsActive] = useState(0)
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>{data.servicesSectionTitle}</h2>
        </div>
        {data.services && data.services.length > 0 ? (
          <div className="services">
            {data.services.map((service, index) => {
              return (
                <ServiceListItem
                  key={index}
                  listactive={index === isActive}
                  service={service}
                  handleOnCLick={() => setIsActive(index)}
                />
              )
            })}
          </div>
        ) : null}

        {isActive !== null ? (
          <div className="service-content">
            <div className="service-content__icon">
              <img src={compass} alt={data.services[isActive].title} />
            </div>
            <div className="service-content__paragraph">
              <div>
                <h3>{data.services[isActive].title}</h3>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.services[isActive].content,
                }}
              />
            </div>
          </div>
        ) : null}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    margin-bottom: 7.5rem;
  }
  @media (min-width: 1025px) {
    margin-bottom: 12.5rem;
  }

  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;
    text-align: center;

    @media (min-width: 1025px) {
      text-align: left;
    }

    h2 {
      ${H2Blue};
    }
  }

  .service-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 5rem auto 2rem;

    @media (min-width: 768px) {
      margin: 7.5rem auto 2rem;
    }

    @media (min-width: 1025px) {
      margin: 10rem auto 2rem;
    }

    &__icon {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(25% - 4rem);
        margin-right: 4rem;
        padding-right: 4rem;
        border-right: 0.3rem solid ${colors.colorPrimary};
      }

      img {
        width: 15rem;
        margin-left: 0;

        @media (min-width: 768px) {
          margin: 0 auto;
        }
      }
    }

    &__paragraph {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(75%);
      }

      h3 {
        ${H4Blue};
      }

      p {
        ${B2Blue};
      }
    }
  }

  .services {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

export default ServicesList
