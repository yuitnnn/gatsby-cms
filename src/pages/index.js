import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import indexStyles from "../components/styles/indexPage.module.scss"

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            {posts
              .map(({ node: post }) => (
                  <div
                    className={indexStyles.content}
                    style={{ padding: '2em 4em' }}
                    key={post.id}
                  >
                    <span className={indexStyles.date}>{post.frontmatter.date}</span>
                    <Link className={indexStyles.title} to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                    <p>
                      {post.excerpt}
                    </p>
                  </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            path
            title
            templateKey
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`
