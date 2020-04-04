import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

import Helmet from 'react-helmet'
import {Mach,Mach1,Heading1} from '../../components/Format'
export default class BacharachPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
    return (
      <Layout>
      <Mach>
      <Mach1>
      <Helmet
            htmlAttributes={{ lang: 'de' }}
            meta={[{ name:'description' , content: `${siteDescription}`}]}
            title={`${siteTitle}`}
          />
            <Heading1>News aus Bacharach</Heading1>
        
          {posts
            .map(({ node: post }) => (
              <div key={post.id}>
               <h1 style={{textAlign:"left"}}>
                  <Link to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                 
                 
                  </h1>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <small>{post.frontmatter.date}</small><br/>
                  <Link style={{fontSize:'.86rem'}}  to={post.fields.slug}>
                    weiterlesen →
                  </Link>
                </p>
              </div>
            ))}
        
      </Mach1></Mach>
    </Layout>
    
  )
}
}

BacharachPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const query = graphql`
  query BachQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
    allImageSharp{
      edges{
        node {
          fluid {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "bacharach-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 40)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD-MM-YYYY:hh:mm")
          }
        }
      }
    }
  }
  
`
