const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  console.log("START HERE TREVOR.....")
  const { createPage } = actions
  try {
    console.log("MADE IT HERE TREVOR.....")
    const { data } = await graphql(`
      {
        pages: allWpPage {
          edges {
            node {
              template {
                templateName
              }
              slug
              databaseId
              uri
              id
            }
          }
        }

        posts: allWpPost {
          edges {
            node {
              id
              slug
              uri
            }
          }
        }
      }
    `)

    console.log("2nd MADE IT HERE TREVOR.....")

    const pages = data.pages.edges
    pages.forEach(({ node }) => {
      console.log("MADE IT HERE TREVOR.....", node.template.templateName)
      console.log("MADE IT HERE TREVOR.....", node.slug)

      if (node.slug === "home") {
        createPage({
          path: `/`,
          component: path.resolve(`./src/pages/index.js`),
        })
      } else if (node.template.templateName === "About") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/about.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Home") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/home.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Contact") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/contact.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Blog") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Services") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/services.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Default") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/defaultPage.js`),
          context: {
            id: node.id,
          },
        })
      }
    })

    console.log("3nd MADE IT HERE TREVOR.....")

    const posts = data.posts.edges
    posts.forEach(({ node }, index) => {
      createPage({
        path: `/blog/${node.slug}/`,
        component: path.resolve("./src/templates/post.js"),
        context: {
          id: node.id,
          slug: node.slug,
          next: index === 0 ? null : posts[index - 1].node.slug,
          prev: index === posts.length - 1 ? null : posts[index + 1].node.slug,
        },
      })
    })
    console.log("4nd MADE IT HERE TREVOR.....")
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
