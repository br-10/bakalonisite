import React from 'react'
import Helmet from 'react-helmet'

import VNavbar from '../components/VNavbar'







const TemplateWrapper = ({ children }) => (
  
  
 
  <div >
    
    <Helmet title="Bakaloni" />
    
    <VNavbar />
   
    <div>
    
    {children}
    </div>
    </div>

  
  
)

export default TemplateWrapper
