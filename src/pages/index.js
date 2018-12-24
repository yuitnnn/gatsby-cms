import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import indexStyles from "../components/styles/indexPage.module.scss"

import { library } from '@fortawesome/fontawesome-svg-core'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(
  // faIgloo,
  faTwitter,
  faFacebookF
)

// top-page
export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Helmet>
          <title>YuiTech</title>
          <meta name="description" content="フロントエンドエンジニアの備忘録" />
          <meta property="og:title" content="YuiTech" />
          <meta property="og:description" content="フロントエンドエンジニアの備忘録" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://yuis-webmemo.org/" />
          <meta property="og:image" content="https://yuis-webmemo.org/img/site-ogp-img.png" />
          <meta property="og:site_name" content="YuiTech" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <section className="section">
        <div className="container content">
          <div className="columns">
            <div className={indexStyles.column + ' ' + 'column' + ' ' + 'is-10' + ' ' + 'is-offset-1'}>
              {posts
                .map(({ node: post }) => (
                    <div
                      className={indexStyles.content}
                      // style={{ padding: '2em 4em' }}
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
            </div>
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
          excerpt(pruneLength: 150)
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
