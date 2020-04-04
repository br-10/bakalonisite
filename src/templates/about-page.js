import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import Helmet from 'react-helmet'
import {Mach,Mach1} from '../components/Format'


export const AboutPageTemplate = ({ title, description,content, contentComponent,location }) => {
  const PageContent = contentComponent || Content
  
  console.log(title)
  return (
    <Layout location={location} >
    <Mach>
    <Helmet
          htmlAttributes={{ lang: 'de' }}
          meta={[{ name: 'description', content: {description} }]}
          title={title || ''}
        />
        
            <Mach1>
              <h1>
                {title}
              </h1>
              <PageContent className="content" content={content} />
            </Mach1>
            </Mach>
    </Layout>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  description: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
   const inhalt = post.frontmatter.description
  return (
    <Layout>
      <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: `${inhalt}`}]}
          title= {data.site.siteMetadata.title}
        />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        description={post.frontmatter.description}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    site{
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
