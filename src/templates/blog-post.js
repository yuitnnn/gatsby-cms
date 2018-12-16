import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Share from '../components/Share'
import Content, { HTMLContent } from '../components/Content'
import indexStyles from "../components/styles/indexPage.module.scss"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  date,
  path,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className={indexStyles.postContent}>
              <span className={indexStyles.date}>{date}</span>
              <h1 className={indexStyles.postTitle}>
                {title}
              </h1>
              <p>{description}</p>
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <Share
                twitterUrl={`http://twitter.com/share?url=https%3A%2F%2Fyuis-webmemo.org${path}%2F&;text=${title}%20-%20YuiTech&amp;via=yu_webmemo`}
                fbUrl={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyuis-webmemo.org${path}%2F&">Facebook</a>`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Blog"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
            <meta property="og:title" content={`${post.frontmatter.title}`} />
            <meta property="og:description" content={`${post.frontmatter.description.slice(0,120)}`} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`https://yuis-webmemo.org/${post.frontmatter.path}`} />
            <meta property="og:image" content="https://yuis-webmemo.org/img/site-ogp-img.png" />
            <meta property="og:site_name" content="YuiTech" />
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        path={post.frontmatter.path}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
