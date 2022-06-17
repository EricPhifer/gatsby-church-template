import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { defaultComponents, PortableText } from '@portabletext/react';

const AboutStyles = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  position: relative;
  padding-top: 18rem;
  .head {
    width: 100%;
    height: 10rem;
  }
  text-align: left;
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
  }
  .upper {
    text-transform: uppercase;
  }
  .left {
    width: calc(60% - 10rem);
    background-color: var(--black);
    color: var(--white);
    font-size: 2.5rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    padding-right: 10rem;
    padding-bottom: 1rem;
    h1 {
      margin: 0;
    }
  }
  .right {
    width: calc(40% - 4rem);
    padding: 2rem;
    background-color: #D3D3D3;
    .textImg {
      height: 3vmin;
    }
  }
  .content {
    width: 100%;
  }
  .staffContainer {
    width: 60%;
    .staff { 
      width: 100%;
      margin-top: 2rem;
    }
    .staffImg {
      width: 30%;
      margin: 0 2rem 0 0;
      img {
        width: 20rem;
        height: 20rem;
        box-shadow: 5px 5px 10px #000;
      }
    }
    .staffInfo {
      width: 70%;
      margin-right: 2rem;
      h3 {
        text-align: left;
        font-weight: bold;
        font-size: 2.5rem;
      }
      p {
        margin: 0.3rem 0;
      }
    }
  }
  .missionContainer {
    width: 40%;
    .mission {
      width: 100%;
      background-color: var(--blue);
      color: var(--white);
      h3 {
        padding-top: 1rem;
        font-weight: bold; 
      }
      p {
        padding: 1.5rem;
        margin: 0;
      }
    }
    .info {
      background-color: #D3D3D3;
      padding: 0.1rem 2.5rem;
      font-size: 1.75rem;
      letter-spacing: 0.6px;
    }
    .contact {
      text-align: center;
      justify-content: center;
      align-items: center;
      .tagline {
        font-size: 3rem;
        max-width: 260px;
      }
      .phone {
         font-weight: bold;
         font-size: 2rem;
         &:hover {
           color: var(--blue);
         }
       }
      .buttonesque {
        display: flex;
        place-items: center center;
        place-content: center center;
        padding: 1rem;
        color: var(--white);
        font-size: 1.5rem;
        font-weight: bold;
        width: 12.5rem;
        margin: 2rem 0;
        background-color: var(--blue);
        border-right: 4px double var(--green);
        border-bottom: 2px double var(--green);
        &:hover {
          background-color: var(--white);
          color: var(--blue);
          border-right: 4px double var(--blue);
          border-bottom: 2px double var(--blue);
        }
        .arrowRight {
          font-size: 2.5rem;
          color: var(--green);
        }
      }
    }
  }
  #randy {
    order: 1;
  }
  #c {
    order: 2;
  }
  #rhonda {
    order: 3;
  }
  @media only screen and (max-width: 900px) {
    padding-top: 3rem;
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const TabletAboutStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  position: relative;
  padding-top: 16rem;
  text-align: left;
  .head {
    width: 100%;
  }
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column wrap;
  }
  .upper {
    text-transform: uppercase;
  }
  .left {
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    font-size: 2.5rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 0;
    }
  }
  .right {
    width: 40%;
    background-color: #D3D3D3;
    font-size: 1.5rem;
    align-items: end;
    justify-content: center; 
    padding-right: 1rem;
  }
  .content {
    width: 100%;
  }
  .staffContainer {
    width: 100%;
    margin-left: 2rem;
    .staff { 
      width: 100%;
      margin-top: 5rem;
      justify-content: center;
      align-items: center;
    }
    .staffImg {
      width: 30%;
      margin: 0 2rem 0 0;
      text-align: center;
      img {
        width: 25rem;
        height: 25rem;
        box-shadow: 5px 5px 10px #000;
      }
      @media only screen and (max-width: 400px) {
        width: 65%;
      }
    }
    .staffInfo {
      width: 70%;
      max-width: 600px;
      margin-top: 3rem;
      h3 {
        text-align: left;
        font-weight: bold;
        font-size: 2.5rem;
      }
      p {
        margin: 0.3rem 4rem 0 0;
      }
    }
  }
  .missionContainer {
    width: 100%;
    .mission {
      background-color: var(--blue);
      color: var(--white);
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        padding-top: 1rem;
        font-weight: bold; 
      }
      p {
        max-width: 500px;
        padding: 1.5rem;
        margin: 0;
      }
    }
    .info {
      background-color: #D3D3D3;
      margin: 2rem 0;
      padding: 2rem 1.5rem;
      font-size: 1.75rem;
      letter-spacing: 0.6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        max-width: 500px;
        margin: 0.5rem;
      }
    }
  }
  .contact {
    align-items: center;
    .tagline {
      max-width: 260px;
      font-size: 3rem;
      text-align: center;
    }
    .nextTo {
      justify-content: center;
      align-items: center;
       @media only screen and (max-width: 320px) {
        display: flex;
        flex-direction: column;
      }
    }
    .phone {
      margin: 2rem;
      font-size: 2rem;
      font-weight: bold;
      &:hover {
        color: var(--blue);
      }
     
    }
    .buttonesque {
      display: flex;
      place-items: center center;
      place-content: center center;
      margin: 2rem;
      padding: 1rem;
      color: var(--white);
      font-size: 1.5rem;
      font-weight: bold;
      width: 12.5rem;
      background-color: var(--blue);
      border-right: 4px double var(--green);
      border-bottom: 2px double var(--green);
      &:hover {
        background-color: var(--white);
        color: var(--blue);
        border-right: 4px double var(--blue);
        border-bottom: 2px double var(--blue);
      }
      .arrowRight {
        font-size: 2.5rem;
        color: var(--green);
      }
    }
  }
  #randy {
    order: 1;
  }
  #c {
    order: 2;
  }
  #rhonda {
    order: 3;
  }
`;

const MobileAboutStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  position: relative;
  padding-top: 13rem;
  text-align: left;
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
  }
  .upper {
    text-transform: uppercase;
  }
  .left {
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    font-size: 2rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 0;
    }
  }
  .right {
    width: 40%;
    background-color: #D3D3D3;
    font-size: 1.5rem;
    align-items: end;
    justify-content: center; 
    padding-right: 1rem;
  }
  .content {
    width: 100%;
  }
  .staffContainer {
    width: 100%;
    .staff { 
      width: 100%;
      margin-top: 5rem;
      justify-content: center;
      align-items: center;
    }
    .staffImg {
      width: 50%;
      margin: 0 1rem 0 0;
      text-align: center;
      img {
        width: 25rem;
        height: 25rem;
        box-shadow: 5px 5px 10px #000;
      }
      @media only screen and (max-width: 400px) {
        width: 65%;
      }
    }
    .staffInfo {
      width: 90%;
      margin-top: 3rem;
      h3 {
        text-align: left;
        font-weight: bold;
      }
      p {
        margin: 0.3rem 0;
      }
    }
  }
  .missionContainer {
    width: 100%;
    .mission {
      background-color: var(--blue);
      color: var(--white);
      h3 {
        padding-top: 1rem;
        font-weight: bold; 
      }
      p {
        padding: 1.5rem;
        margin: 0;
      }
    }
    .info {
      background-color: #D3D3D3;
      margin: 2rem 0;
      padding: 2rem 1.5rem;
      font-size: 1.75rem;
      letter-spacing: 0.6px;
    }
  }
  .contact {
    align-items: center;
    .tagline {
      max-width: 260px;
      font-size: 3rem;
      text-align: center;
    }
    .nextTo {
      justify-content: center;
      align-items: center;
       @media only screen and (max-width: 320px) {
        display: flex;
        flex-direction: column;
      }
    }
    .phone {
      font-size: 2rem;
      margin: 2.5rem;
      font-weight: bold;
      &:hover {
        color: var(--blue);
      }
     
    }
    .buttonesque {
      display: flex;
      place-items: center center;
      place-content: center center;
      margin: 2rem;
      padding: 1rem;
      color: var(--white);
      font-size: 1.5rem;
      font-weight: bold;
      width: 12.5rem;
      background-color: var(--blue);
      border-right: 4px double var(--green);
      border-bottom: 2px double var(--green);
      &:hover {
        background-color: var(--white);
        color: var(--blue);
        border-right: 4px double var(--blue);
        border-bottom: 2px double var(--blue);
      }
      .arrowRight {
        font-size: 2.5rem;
        color: var(--green);
      }
    }
  }
  #randy {
    order: 1;
  }
  #c {
    order: 2;
  }
  #rhonda {
    order: 3;
  }
`;

export default function AboutPage({ data }) {
  // const contents = data.contents.nodes;
  return (
    <>
      <SEO title="About Us" />
        <AboutStyles>
          <div className="content inline">
              <section className="missionContainer flex">
                {/* {contents.map((c) => (
                  <div key={c.id} className='info flex'>
                    <PortableText 
                      value={c._rawContent}
                      components={defaultComponents}
                      className="flex"
                    />
                  </div>
                ))} */}
            </section>
          </div>
        </AboutStyles>
        <TabletAboutStyles>
          <div className="content flex">
            <section className="container flex">
              {/* {contents.map((c) => (
                <div key={c.id} className='info flex'>
                  <PortableText 
                    value={c._rawContent}
                    components={defaultComponents}
                    className="flex"
                  />
                </div>
              ))} */}
            </section>
          </div>
        </TabletAboutStyles>
        <MobileAboutStyles>
          <div className="content flex">  
            <section className="container flex">
              {/* {contents.map((c) => (
                <div key={c.id} className='info flex'>
                  <PortableText 
                    value={c._rawContent}
                    components={defaultComponents}
                    className="flex"
                  />
                </div>
              ))} */}
            </section>
          </div>
        </MobileAboutStyles>
    </>
  );
}

// export const query = graphql`
//   query {
//     contents: allSanityAbout {
//       nodes {
//         id
//         title
//         _rawContent
//         imgalt
//         image {
//           asset {
//             id
//           }
//           ...ImageWithPreview
//         }
//         aboutnav
//       }
//     }
 
//   }
// `;
