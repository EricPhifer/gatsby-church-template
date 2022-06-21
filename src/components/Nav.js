import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SanityImage from 'gatsby-plugin-sanity-image';
import mobileBG from '../assets/images/mobile-nav-ffbc.jpg';

const NavStyles = styled.div`
  width: 100vw;
  position: relative;
  .full {
    width: 100vw;
    position: relative;
  }
  .maxWidth {
    max-width: 1080px;
    margin: 0 auto;
  }
  a {
    cursor: pointer;
  }
  nav ul {
    list-style-type: none;
    a {
      padding: 2rem;
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      &:hover {
        color: var(--orange);
        text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff;
      }
      &[aria-current='page'] {
        background-color: var(--orange);
      }
    }
  }
  .navImg {
    height: 30vmin;
    background-image: linear-gradient(to bottom, var(--orange), var(--brown));
    box-shadow: 0 5px 10px #000;
    z-index: 1;
  }
  .navBG {
    background-color: var(--brown);
    box-shadow: 0 5px 10px #000;
  }
  .inline {
    display: inline-flex;
    margin: 0;
    padding: 0;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
    margin: 0;
    padding: 0;
  }
  .center {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const TabletNavStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 901px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  .navContainer {
    width: 100vw;
    height: 7rem;
    background-color: var(--brown);
    box-shadow: 0 10px 10px #000;
    position: fixed;
    z-index: 1;
  }
  .inline {
    display: inline-flex;
    a, span {
      padding-left: 1rem;
    }
  }
  #menuToggle {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    bottom: 5px;
  }
  #menuToggle span {
    display: flex;
    position: relative;
    width: 40px;
    height: 5px;
    margin-bottom: 5px;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0;
    background: #fff;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(3) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-10px, -10px);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    transform: rotate(-45deg) translate(1px, 0);
  }
  #menu {
    height: 100vh;
    width: 100vw;
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-image: url(${mobileBG});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 0 0 10px #85888c;
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  #menu li {
    position: relative;
    transition-delay: 2s;
  }
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0 2rem;
    box-shadow: none;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  ul {
    list-style-type: none;
    max-width: 75%;
    display: flex;
    flex-flow: column nowrap;
    margin: 10rem auto 0;
    padding: 0;
    justify-content: center;
    button a {
      font-size: 3rem;
      font-weight: bold;
    }
    @media only screen and (max-height: 450px) {
      flex-flow: row wrap;
    }
  }
  
  /* ----------- iPhone 4 and 4S ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
      
    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
     
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
    
    }

  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
      
    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
    
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
   
    }

  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
      
    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
     
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
    
    }

  /* ----------- iPhone 6+, 7+ and 8+ ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3) { 

    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
    
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 736px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
    
    }

  /* ----------- iPhone X ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3) { 

    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
     
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
     
    } 

  /* ----------- iPhone 11 Pro ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 896px) 
    and (-webkit-min-device-pixel-ratio: 3) { 

    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 896px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
    
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 896px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
 
    } 

  /* ----------- iPhone 12/13+ Pro ----------- */

  /* Portrait and Landscape */
  @media only screen 
    and (min-device-width: 390px) 
    and (max-device-width: 844px) 
    and (-webkit-min-device-pixel-ratio: 3) { 

    }

  /* Portrait */
  @media only screen 
    and (min-device-width: 390px) 
    and (max-device-width: 844px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: portrait) {
     
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 390px) 
    and (max-device-width: 844px) 
    and (-webkit-min-device-pixel-ratio: 3)
    and (orientation: landscape) {
  
    } 
`;

const MobileNavStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }

  .navContainer {
    width: 100vw;
    height: 7rem;
    background: var(--brown);
    box-shadow: 0 10px 10px #000;
    position: fixed;
    z-index: 1;
  }
  .inline {
    display: inline-flex;
    a, span {
      padding-left: 1rem;
    }
  }
  #menuToggle {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    bottom: 5px;
    right: 5px;
  }
  #menuToggle span {
    display: flex;
    position: relative;
    width: 40px;
    height: 5px;
    margin-bottom: 5px;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0;
    background: #fff;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-6px, -12px);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    transform: rotate(-45deg) translate(1px, 0);
  }
  #menu {
    height: 100vh;
    width: 100vw;
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-image: url(${mobileBG});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 0 0 10px #85888c;
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  #menu li {
    transition-delay: 2s;
  }
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    text-shadow: 1px 1px 5px #c2c2c2;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  ul {
    list-style-type: none;
    max-width: 75%;
    display: flex;
    flex-flow: row wrap;
    margin: 10rem auto 0;
    padding: 0;
    justify-content: center;
    button {
      width: 100%;
        a {
        font-size: 3rem;
        font-weight: bold;
      }
    }
  }
`;


export default function Nav() {
  const { navigation } = useStaticQuery(graphql`
    query {
      navigation: allSanityNavigation {
          nodes {
            id
            mainalt
            mainlogo {
              asset {
                id
              }
            }
            mobilebg {
              asset {
                id
              }
            }
            links {
              pagename
              pagelink
              _key
            }
          }
        }
      }
  `)

const nodes = navigation.nodes;
const [checked, setChecked] = React.useState(false || '');

  return (
    <>
      {nodes.map((node) => (
        <div className="nodeParser" key={node.id}>
          <NavStyles>
            <div className="navImg full">
              {/* <SanityImage 
                {...node.mainlogo}
                alt={node.mainalt}
                style={{
                  objectFit: 'cover',
                  auto: 'format',
                }}
              /> */}
            </div>
            <div className="full navBG">
              <div className="maxWidth center">
                <nav>
                  <ul className='inline center'>
                    {node.links.map((link) => (
                      <Link to={link.pagelink} key={link._key}>
                        <li>
                          <span>{link.pagename}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </NavStyles>
          <TabletNavStyles>
            <div className="navContainer">
              <div id="menuToggle">
                <input 
                  type="checkbox" 
                  checked={checked}
                  onClick={() => {setChecked(old => !old)}} 
                />
                <span />
                <span />
                <span />
                <div id="menu" className="menuContainer">
                  <nav className="upperNav">
                    <ul>
                      {node.links.map((link) => (
                        <button 
                          type="button" 
                          onClick={
                            () => {setChecked(old => !old)}
                          }
                          key={link._key}
                        >
                          <Link to={link.pagelink} className="mobileLink">
                            <li>
                              <p>{link.pagename}</p>
                            </li>
                          </Link>
                        </button>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </TabletNavStyles>
          <MobileNavStyles>
            <div className="navContainer">
              <div id="menuToggle">
              <input 
                  type="checkbox" 
                  checked={checked}
                  onClick={() => {setChecked(old => !old)}} 
                />
                <span />
                <span />
                <span />
                <div id="menu" className="menuContainer">
                  <nav className="upperNav">
                    <ul>
                      {node.links.map((link) => (
                        <button 
                          type="button" 
                          onClick={
                            () => {setChecked(old => !old)}
                          }
                          key={link._key}
                        >
                          <Link to={link.pagelink} className="mobileLink">
                            <li>
                              <p>{link.pagename}</p>
                            </li>
                          </Link>
                        </button>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </MobileNavStyles>
        </div>
      ))} 
    </>
  );
}

// Credit to https://css-tricks.com/snippets/css/media-queries-for-standard-devices/ for responsive design template