import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import {FaArrowLeft} from 'react-icons/fa'
import {Mach,Mach1} from '../components/Format'

export const NiederheimbachPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet ,
}) => {
  
  const PostContent = contentComponent || Content
  console.log(helmet)
  return (
    <>
    {helmet || " "}
             
      <h1>
        <Link to="/niederheimbach">
              {title} <FaArrowLeft fontSize=".9rem" />
              </Link>     
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
               <div>
                <h4>Tags</h4>
                <ul>
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
                </div>  
            ) : null}
         </>
        
  )
}

NiederheimbachPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const NiederheimbachPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
       <Mach>
       <Mach1>
      <NiederheimbachPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        helmet= {
          <Helmet titleTemplate="%s | Bakaloni"
          >
          <title>{`${post.frontmatter.title}`}</title>
          <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
          }
          />
      </Mach1>
      </Mach>
    </Layout>
  )
}

NiederheimbachPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default NiederheimbachPost

export const pageQuery = graphql`
  query NiederheimbachPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
