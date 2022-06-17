import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const ServiceStyles = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 18rem;
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
    width: 50%;
  }
  .right {
    width: 50%;
  }
  .head {
    background-color: var(--black);
    color: var(--white);
    font-size: 2.5rem;
    h1 {
      margin-left: 5rem;
    }
  }
  .sermonContainer {
    width: 100%;
  }
  .mainimg {
    width: 100%;
    height: 36rem;
    box-shadow: 5px 5px 10px #000;
  }
  .textImg {
    width: 100%;
    height: 9rem;
    margin: 4rem 0;
  }
  #Medicare {
    display: none;
  }
  .serviceCard {
    margin-top: 3rem;
    .dotContainer {
      width: 10%;
      .dot {
        background-color: var(--blue);
        width: 2.5rem;
        height: 2.5rem;
        margin: 1rem 1.5rem;
      }
    }
    .serviceInfo {
      width: 90%;
      h2 {
        text-align: left;
        font-size: 3.5rem;
        padding: 0 3rem 1rem 0; 
      }
      p {
        padding: 0 5rem 0 0;
        margin: 0;
      }
    }
  }
  .contact {
    text-align: center;
    justify-content: center;
    align-items: center;
    .tagline {
      font-size: 3rem;
      margin: 0;
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
      font-size: 1.25rem;
      font-weight: bold;
      width: 11.5rem;
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
  /* Hide menu on small screens */
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const TabletSermonStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  padding-top: 16rem;
  .noNineUnder {
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
  .noNineOver {
    @media only screen and (min-width: 901px) {
      display: none;
    }
  }
  #Medicare {
    display: none;
  }
  .flexSwitch {
    @media only screen and (min-width: 901px) {
      display: inline-flex;
    }
    @media only screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
    }
  }
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
  .head {
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    h1 {
      font-size: 5rem;
      font-weight: bold;
      margin-left: 2rem;
      @media only screen and (max-width: 900px) {
        margin: 0.6rem auto;
      }
    }
  }
  .sermonContainer {
    width: 100%;
  }
  .mainimg {
    width: 100%;
    height: 36rem;
    box-shadow: 5px 5px 10px #000;
    @media only screen and (max-width: 900px) {
      height: 60vmin;
    }
  }
  .textImg {
    width: 100%;
    height: 10rem;
    margin: 2rem 0;
  }
  .sermonContainer {
    padding: 3rem 1rem 0;
  }
  .serviceCard {
    width: 100%;
    justify-content: center;
    .dotContainer {
      width: 5%;
      padding: 0.5rem 2rem;
      .dot {
        background-color: var(--blue);
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    .serviceInfo {
      width: 90%;
      h2 {
        text-align: left;
        font-size: 2.25rem;
        padding: 0 3rem 1rem 0;
        @media only screen and (min-width: 800px) {
          font-size: 3rem;
        }
      }
      p {
        padding: 0 5rem 0 0;
        margin: 0;
      }
    }
  }
  .contact {
    text-align: center;
    justify-content: center;
    align-items: center;
    .tagline {
      max-width: 260px;
      font-size: 3rem;
      margin: 0;
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
      font-size: 1.25rem;
      font-weight: bold;
      width: 11.5rem;
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
  @media only screen and (min-width: 901px) {
    padding-top: 18rem;
    .left {
      width: 50%;
    }
    .right {
      width: 50%;
    }
    .textImg {
      height: 7rem;
    }
  }
`;

const MobileSermonStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  padding-top: 14rem;
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
  .head {
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    h1 {
      font-size: 3.5rem;
      font-weight: bold;
      margin: 2rem auto;
    }
  }
  #Medicare {
    display: none;
  }
  .sermonContainer {
    width: 100%;
  }
  .mainimg {
    width: 100%;
    height: 36rem;
    box-shadow: 5px 5px 10px #000;
  }
  .textImg {
    width: 100%;
    height: 5rem;
    margin: 2rem 0;
  }
  .sermonContainer {
    padding: 3rem 1rem 0;
  }
  .serviceCard {
    width: 100%;
    justify-content: center;
    .dotContainer {
      width: 5%;
      padding: 0.5rem 2rem;
      .dot {
        background-color: var(--blue);
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    .serviceInfo {
      width: 90%;
      h2 {
        text-align: left;
        font-size: 2.25rem;
        padding: 0 3rem 1rem 0; 
      }
      p {
        padding: 0 5rem 0 0;
        margin: 0;
      }
    }
  }
  .contact {
    text-align: center;
    justify-content: center;
    align-items: center;
    .tagline {
      max-width: 260px;
      margin: 0;
      font-size: 3rem;
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
      font-size: 1.25rem;
      font-weight: bold;
      width: 11.5rem;
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
`;

export default function ServicePage({ data }) {
  // const sermons = data.sermons.nodes;
  // const guestsermons = data.guestsermons.nodes;
  return (
    <>
      <SEO title="Sermons" />
      <ServiceStyles>
        <div className="sermonContainer inline">
          <div className="flex">
            Sermon Content...
          </div>
        </div>
      </ServiceStyles>
      <TabletSermonStyles>
        <div className="flexSwitch">
          <div className="flex">
            <div className="sermonContainer">
              Sermon Content...
            </div>
          </div>
        </div>
      </TabletSermonStyles>
      <MobileSermonStyles>
        <div className="flex">
          <div className="sermonContainer">
            Sermon Content...
          </div>
        </div>
      </MobileSermonStyles>
    </>
  );
}

// export const query = graphql`
//   query {
//     sermons: allSanitySermons {
//       nodes {
//         id
//         title
//         _rawDescription
//         _rawVideo
//       }
//     }
//     guestsermons: allSanityGuestSermons {
//       nodes {
//         id
//         title
//         _rawDescription
//         _rawVideo
//       }
//     }
//   }
// `;
