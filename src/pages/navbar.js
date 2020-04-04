import React from 'react'
import { Link } from 'gatsby'
import { FaHome } from 'react-icons/fa'
import Layout from '../components/Layout'
import HB from './hbild.jpg'
import {Menu} from '../components/Format'
//import { Router, Link, Location } from '@reach/router';
//import posed, { PoseGroup } from 'react-pose';
const Hbilder = {
  backgroundImage: `url(${HB})`,
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat',
  height:'100vh',
  width: '100vw',
 marginBottom: '50px',
 overflow:'scroll'
}






const Navbar = ({location}) => (
  <Layout location={location}>
  
    <Menu style={Hbilder}>
      <ul > 
      <li><h1 style={{fontSize:'3rem',letterSpacing:'.95rem',fontWeight:'100',color:'white',padding:'0 10px'}}>Bakaloni  </h1>
   </li>   
      <li><Link className="navbar-item" to="/">
         <FaHome fontSize="2.4rem" />
        </Link></li>
        <li><Link className="navbar-item" to="/blog">
         Bakalonis
        </Link></li>
        <li><Link className="navbar-item" to="/bacharach">
         Bacharach
        </Link></li>
        <li><Link className="navbar-item" to="/kaub">
         Kaub
        </Link></li>
        <li><Link className="navbar-item" to="/lorch">
         Lorch
        </Link></li>
        <li><Link className="navbar-item" to="/niederheimbach">
           Niederheimbach
        </Link></li>
        <li style={{marginTop:'100px'}}>><Link style={{fontSize:'.9rem'}} className="navbar-item" to="/about">
          Über Bakaloni 
        </Link></li>
        <li><Link style={{fontSize:'1.1rem'}} className="navbar-item" to="/datenschutz">
         Datenschutz
        </Link></li>
        <li> <Link style={{fontSize:'1.1rem'}} className="navbar-item" to="/impressum">
           Impressum
        </Link></li>
        <li><Link style={{fontSize:'1.1rem'}} className="navbar-item" to="/kontakt">
           Kontakt
        </Link></li>
        </ul>
       

      </Menu>
      </Layout>
      

)

export default Navbar
