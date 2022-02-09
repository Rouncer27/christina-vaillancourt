import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  colors,
  B1Blue,
  medWrapper,
  H4Blue,
  fontSizer,
} from "../styles/helpers"

import MainLogo from "./Logos/MainLogo"
import Facebook from "./Icons/Facebook"
import Instagram from "./Icons/Instagram"

const getData = graphql`
  {
    footerData: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          instagramUrl
          facebookUrl
          address
          phoneNumber
        }
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(getData)
  const { instagramUrl, facebookUrl, address, phoneNumber } =
    data.footerData.acfOptionsSiteWideSettings.acfSiteWideSettings
  return (
    <FooterStyled>
      <div className="wrapper">
        <div className="footer-logo">
          <div className="footer-logo__wrapper">
            <MainLogo />
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-contact__address">
            <div dangerouslySetInnerHTML={{ __html: address }} />
            <p>
              <a href={`tel:1+${phoneNumber}`}>{phoneNumber}</a>
            </p>
          </div>
          <div className="footer-contact__social">
            <p>Follow Me</p>
            <ul>
              <StyledIcon>
                <a
                  title="Follow us on Facebook - Link will open in new window"
                  target="_blank"
                  rel="noreferrer"
                  href={facebookUrl}
                >
                  <i>
                    <Facebook />
                    <span className="visuallyhidden">Facebook</span>
                  </i>
                </a>
              </StyledIcon>

              <StyledIcon>
                <a
                  title="Follow us on Instagram - Link will open in new window"
                  target="_blank"
                  rel="noreferrer"
                  href={instagramUrl}
                >
                  <i>
                    <Instagram />
                    <span className="visuallyhidden">Instagram</span>
                  </i>
                </a>
              </StyledIcon>
            </ul>
          </div>
        </div>
        <div className="footer-copy">
          <p>
            Christina Vaillancourt © 2022. Designed, and developed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://switchbackcreative.ca/"
            >
              Switchback Creative
            </a>
            , Built with ♡ and{" "}
            <a target="_blank" rel="noreferrer" href="https://www.gatsbyjs.com">
              Gatsby
            </a>
            {" -- "}
            <Link to="/disclaimer">Disclaimer</Link>
            {" | "}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  .wrapper {
    ${medWrapper};
    align-items: flex-start;
    padding-top: 4rem;
    border-top: 0.3rem solid ${colors.colorPrimary};
  }

  .footer-logo {
    display: flex;
    justify-content: flex-start;
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }

    &__wrapper {
      max-width: 33.5rem;
      margin: 0 auto 4rem;

      @media (min-width: 768px) {
        margin: 0;
      }
    }
  }

  .footer-contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }

    &__address {
      width: 100%;

      p,
      a {
        ${B1Blue};
        margin: 0;
        font-weight: bold;
        text-align: center;

        @media (min-width: 768px) {
          text-align: right;
        }
      }
    }

    &__social {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      margin-top: 2.5rem;

      @media (min-width: 768px) {
        flex-wrap: nowrap;
      }

      p {
        ${H4Blue};
        width: 100%;
        margin: 0;
        text-align: center;

        @media (min-width: 768px) {
          width: auto;
          text-align: right;
        }
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;

        @media (min-width: 768px) {
          width: auto;
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    }
  }

  .footer-copy {
    width: 100%;
    margin-top: 2rem;
    text-align: center;

    p,
    a {
      ${B1Blue};
      ${fontSizer(1.2, 1.4, 76.8, 150, 1.2)}
      margin: 0;
    }

    a:hover {
      color: ${colors.colorPrimary};
    }
  }
`

const StyledIcon = styled.li`
  display: inline-block;
  margin-right: 1rem;
  margin-left: 1rem;

  a {
    display: block;
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 2rem;
      height: 2rem;
    }
    @media (min-width: 1025px) {
      width: 4rem;
      height: 4rem;
    }

    &:focus {
      outline: 0.4rem solid #003b49;
      transition: outline-width 0.35s ease-in-out;
    }

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    svg {
      display: block;
      width: 4rem;
      height: 4rem;
      margin: auto;
      transition: all 0.3s ease-out;
      fill: ${colors.colorSecondary};

      @media (min-width: 768px) {
        width: 2rem;
        height: 2rem;
      }
      @media (min-width: 1025px) {
        width: 4rem;
        height: 4rem;
      }

      &:hover {
        fill: ${colors.colorTertiary};
      }
    }
  }
`

export default Footer
