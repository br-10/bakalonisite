import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => (
  <div  dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div style={{overflow:'hidden'}}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
