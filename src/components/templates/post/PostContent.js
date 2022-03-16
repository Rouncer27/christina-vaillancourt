import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Blue,
  H2Blue,
  colors,
  fonts,
  standardWrapper,
  B2Blue,
  H1Blue,
} from "../../../styles/helpers"

const PostContent = ({ data }) => {
  console.log("PostContent", data)
  return (
    <ArticleStyled>
      <div className="wrapper">
        <div className="content">
          <div className="content__title">
            <h1>{data.title}</h1>
            <h3>{data.postTypePosts.subTitle}</h3>
          </div>
          <div className="content__wysiwyg">
            <div
              dangerouslySetInnerHTML={{
                __html: data.postTypePosts.mainContent,
              }}
            />
          </div>
        </div>
        {data.postTypePosts.sideImages &&
        data.postTypePosts.sideImages.length > 0 ? (
          <div className="images">
            {data.postTypePosts.sideImages.map((image, index) => {
              const imageDisplay = getImage(
                image.image.localFile.childImageSharp.gatsbyImageData
              )
              const imageAlt = image.image.altText
              return (
                <div className="images__imagewrap" key={index}>
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
              )
            })}
          </div>
        ) : null}
      </div>
    </ArticleStyled>
  )
}

const ArticleStyled = styled.article`
  margin-top: 5rem;

  @media (min-width: 768px) {
    margin-top: 10rem;
  }

  @media (min-width: 1025px) {
    margin-top: 15rem;
  }

  .wrapper {
    ${standardWrapper};
  }

  .content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(60%);
      padding: 0 3rem 0 0;
      border-right: 0.3rem solid ${colors.colorPrimary};
    }

    &__title {
      h1 {
        ${H2Blue};
        margin: 0;
      }

      h3 {
        ${B1Blue};
      }
    }

    &__wysiwyg {
      width: 100%;
      max-width: 100rem;
      margin-top: 2.5rem;
      margin-right: auto;
      margin-bottom: 2.5rem;
      margin-left: auto;

      &::after {
        display: table;
        clear: both;
        content: "";
      }

      .post-edit-link {
        font-size: 1.6rem;
      }

      blockquote {
        display: block;
        width: 95%;
        margin: 1.5rem auto 2rem;
        padding: 0 2.25rem;
        border-right: 5px solid ${colors.grey};
        border-left: 5px solid ${colors.grey};
        font-size: 1.6rem;
        font-style: $italic;

        @media (min-width: 768px) {
          width: 80%;
          margin: 5em auto;
          padding: 0 3rem;
        }

        p {
          margin-bottom: 0;

          &::before,
          &::after {
            font-family: ${fonts.fontAwesome};
            color: rgba($color-secondary, 1);
          }

          &::before {
            padding-right: 0.25em;
            content: "\f10d";
          }

          &::after {
            padding-left: 0.25em;
            content: "\f10e";
          }
        }
      }

      hr {
        display: block;
        height: 0.25em;
        background-color: ${colors.colorSecondary};
      }

      ul {
        margin-bottom: 2.5rem;

        li {
          ${B2Blue};
          position: relative;
          margin-bottom: 0.75em;
          padding-left: 0.75em;
          font-size: 1.6rem;

          &::before {
            font-family: ${fonts.fontAwesome};
            position: absolute;
            top: 0.1em;
            left: 0;
            padding-right: 0.5em;
            color: rgba($grey, 0.75);
            content: "\f0da";
          }
        }
      }

      ol {
        margin-bottom: 2.5rem;
        margin-left: 1.75rem;
        font-size: 1.6rem;

        li {
          ${B2Blue};
          position: relative;
          margin-bottom: 0.75em;
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
          list-style-position: outside;
          list-style-type: decimal;
        }
      }

      strong {
        font-weight: bold;
      }

      em {
        font-style: $italic;
      }

      h1,
      h2 {
        ${H1Blue};
        margin-top: 10rem;
      }

      h3 {
        ${B1Blue};
        margin-bottom: 5rem;
      }

      h4 {
        ${H2Blue}
      }

      h5 {
        ${H2Blue}
      }

      h6 {
        ${H2Blue}
      }

      p {
        ${B2Blue};

        a {
          ${B2Blue};
          transition: all 0.3s;
          color: #636466;
          font-weight: bold;
          font-size: 1em;

          &:hover {
            color: ${colors.colorSecondary};
          }
        }
      }

      a {
        ${B2Blue};
        transition: all 0.3s;
        color: #636466;
        font-weight: bold;
        font-size: 1em;

        &:hover {
          color: ${colors.colorPrimary};
        }
      }

      del {
        color: ${colors.colorSecondary};
      }

      /* WordPress Core */
      .alignnone {
        margin: 5px 20px 20px 0;
      }

      .aligncenter,
      div.aligncenter {
        display: block;
        margin: 2rem auto;
      }

      .alignright {
        float: right;
        margin: 5px 0 20px 20px;
      }

      .alignleft {
        float: left;
        margin: 5px 20px 20px 0;
      }

      a img.alignright {
        float: right;
        margin: 5px 0 20px 20px;
      }

      a img.alignnone {
        margin: 5px 20px 20px 0;
      }

      a img.alignleft {
        float: left;
        margin: 5px 20px 20px 0;
      }

      a img.aligncenter {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .wp-caption {
        background: #fff;
        border: 1px solid #f0f0f0;
        max-width: 96%; /* Image does not overflow the content area */
        padding: 5px 3px 10px;
        text-align: center;
      }

      .wp-caption.alignnone {
        margin: 5px 20px 20px 0;
      }

      .wp-caption.alignleft {
        margin: 5px 20px 20px 0;
      }

      .wp-caption.alignright {
        margin: 5px 0 20px 20px;
      }

      .wp-caption img {
        border: 0 none;
        height: auto;
        margin: 0;
        max-width: 98.5%;
        padding: 0;
        width: auto;
      }

      .wp-caption p.wp-caption-text {
        font-size: 1.1rem;
        line-height: 17px;
        margin: 0;
        padding: 0 4px 5px;
      }

      /* Text meant only for screen readers. */
      .screen-reader-text {
        clip: rect(1px, 1px, 1px, 1px);
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
      }

      .screen-reader-text:focus {
        background-color: #f1f1f1;
        border-radius: 3px;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
        clip: auto !important;
        color: #21759b;
        display: block;
        font-size: 14px;
        font-size: 0.875rem;
        font-weight: bold;
        height: auto;
        left: 5px;
        line-height: normal;
        padding: 15px 23px 14px;
        text-decoration: none;
        top: 5px;
        width: auto;
        z-index: 100000; /* Above WP toolbar. */
      }

      img {
        width: auto;
      }
    }
  }

  .images {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(40%);
      padding-left: 3.5rem;
    }

    &__imagewrap {
      margin-bottom: 3rem;
    }
  }
`

export default PostContent
