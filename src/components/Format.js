
import Hbild from './hbild.jpg'
import styled, {keyframes} from 'styled-components'



const faden=keyframes`

    from {
      opacity:0;
    }  
    to {
      opacity:1;
    }  

`
const hfaden=keyframes`
    from {
      opacity:0;
      height:0;
    }  
    to {
      opacity:1;
      height:100vh;
    }  

`
const sprize=keyframes`
    from {
      opacity:0;
      letter-spacing:0;
    }  
    to {
      opacity:1;
      letter-spacing:0.75rem;
    }  

`
export const Start = styled.div`
display:flex;
flex-direction: row;
flex-wrap:wrap;



max-width:45rem;
width:100%;
justify-content:center;
align-items:center;
figure {width:100%};

}
`
export const Menu = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:start;
  align-items:center;
  overflow:scroll;
  
  ul {
    animation: ${hfaden} 1s ease-in-out;
    padding:70px 0;
    margin: 0;
    width:100%;
    max-width:500px;
      list-style:none;
      text-align:center;
      height:100%;
      
      background:rgba(122,122,122,.3);
      li {
          margin:40px 0;
          a {
              font-family:Roboto,sans-serif;
              text-align:center;
              font-size:1.7rem;
              text-decoration:none;
              text-transform:uppercase;
              letter-spacing:.9rem;
              color:white;
              font-weight:200;
          }
      }

  }
  
`
export const Menuitem = styled.div`
 position:fixed;

 left:90%;
 top:50px;
 width:40px;
 z-index:15000;
 font-weight:100;
 font-size:2rem;
 color:black;
 @media (max-width:600px) {
    left:88%;
    font-size:1.8rem;
 }
 
`
export const Mach = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${Hbild});
    background-size: cover;
    background-position: 50% 50%;
    justify-content: center;
    align-items: center;
    margin:auto;
    width:100vw;
    padding:0;
    margin:0; 
    overflow:hidden;
    
    
    p{color:white;font-size:1.3rem;line-height:1.5;}
    
  }
`
export const Heading1 = styled.h1`
display:block;
max-width:45rem;
width:100%;
 marginTop:20px;
 font-family:Roboto,sans-serif;
  font-size:1.7rem;
  letter-spacing:0.09rem;
  font-weight:100;
  animation: ${sprize} 1s linear;
  @media (max-width:600px){
    font-size:1.4rem;
  }
`
export const Mach1 = styled.div`
    display: flex;
    
    flex-direction: column;
    animation: ${faden} .5s linear;
    justify-content: flex-start;
    align-items: flex-start;
    background: rgba(255,255,255,.8);
    height: 100vh;
    padding: 20px;
   
      max-width:45rem;
   
   
    padding-top:70px;
    overflow-y:scroll;
    margin:auto;
    a{text-decoration:none;}
    h1 a {
      color:black;
      text-decoration:none;
      font-size:1.8rem;
      font-weight:500;
      letter-spacing:.09rem;
      :hover {
        letter-spacing:.1rem;
      }
      
    }
    p a{
      font-size:.9rem;
    }
    li,li a {
      font-size:1rem;
      padding:2px;
      color:black;
    }
    
    p{color:black;font-size:1.3rem;line-height:1.5;}
    `