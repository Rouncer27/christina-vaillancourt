import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  B2Blue,
  H2Blue,
  colors,
  medWrapper,
  Btn1Blue,
} from "../../../styles/helpers"

const getData = graphql`
  {
    posts: allWpPost {
      edges {
        node {
          postTypePosts {
            excerpt
            subTitle
            featuredImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }
          date
          title
          slug
          id
        }
      }
    }
  }
`

const DisplayPosts = ({ data }) => {
  const postsData = useStaticQuery(getData)
  const posts = postsData.posts.edges
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="posts">
          {posts.map((post, index) => {
            const reverse = index % 2 !== 0
            const imageDisplay = getImage(
              post.node.postTypePosts.featuredImage.localFile.childImageSharp
                .gatsbyImageData
            )
            const imageAlt = post.node.postTypePosts.featuredImage.altText

            return (
              <PostStyled
                reverse={reverse}
                to={`/blog/${post.node.slug}`}
                key={post.node.id}
              >
                <div className="post-image">
                  <div className="post-image__wrap">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-title">
                    <h2>{post.node.title}</h2>
                    <h3>{post.node.postTypePosts.subTitle}</h3>
                  </div>
                  <div className="post-excerpt">
                    <p>{post.node.postTypePosts.excerpt}</p>
                  </div>
                  {/* <div className="post-date">
                    <p>{postDate}</p>
                  </div> */}
                  <div className="post-link">
                    <Link to={`/blog/${post.node.slug}`}>Read It</Link>
                  </div>
                </div>
              </PostStyled>
            )
          })}
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  padding: 4rem 0;

  .wrapper {
    ${medWrapper};
  }

  .posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }
`

const PostStyled = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  width: 100%;
  margin-bottom: 5rem;
  padding: 2rem 5rem;
  background-color: #fff;
  border-bottom: 0.2rem solid ${colors.colorPrimary};

  @media (min-width: 768px) {
    width: calc(100% - 2rem);
    margin: 2rem 1rem;
    padding: 2rem 10rem;
  }

  @media (min-width: 1025px) {
    width: calc(100% - 4rem);
    margin: 3rem 2rem;
    padding: 2rem 15rem;
  }

  .post-image {
    width: 100%;

    @media (min-width: 768px) {
      width: 35%;
    }

    @media (min-width: 1025px) {
      width: 25%;
    }

    &__wrap {
      position: relative;
      min-height: 25rem;

      @media (min-width: 768px) {
        min-height: 25rem;
      }

      @media (min-width: 1025px) {
        min-height: 25rem;
      }
    }

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .post-content {
    width: 100%;

    @media (min-width: 768px) {
      width: 65%;
      padding-left: ${props => (props.reverse ? "0rem" : "7.5rem")};
      padding-right: ${props => (props.reverse ? "7.5rem" : "0rem")};
    }

    @media (min-width: 1025px) {
      width: 75%;
      max-width: 51.6rem;
      padding-left: ${props => (props.reverse ? "0rem" : "7.5rem")};
      padding-right: ${props => (props.reverse ? "7.5rem" : "0rem")};
    }
  }

  .post-title {
    h2 {
      ${H2Blue};
    }
  }

  .post-excerpt {
    p {
      ${B2Blue};
    }
  }

  .post-date {
    p {
      ${B2Blue};
      font-weight: bold;
    }
  }

  .post-link {
    a {
      ${Btn1Blue};
    }
  }
`

export default DisplayPosts
