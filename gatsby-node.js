const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  const results = await graphql(`
    {
      allAirtable {
        edges {
          node {
            data {
              Short_Link
              Redirect
            }
          }
        }
      }
    }
  `)

  for (const edge of results.data.allAirtable.edges) {
    const { Short_Link, Redirect } = edge.node.data

    if (!Short_Link || !Redirect) {
      continue
    }

    createRedirect({
      fromPath: path.join('/', Short_Link),
      toPath: Redirect,
      isPermanent: false,
    })
  }
}
