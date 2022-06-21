import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100vw;
  height: 18rem;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  background-color: #000;
  color: #fff;
  font-size: 1.5rem;
  .footerContainer {
    max-width: 1080px;
    margin: 0 auto;
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .inline {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .column {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
    .footerCredits {
      margin: 3rem 2.5rem;
      a {
        color: #fff;
        padding-left: 0.5rem;
      }
    }
    .footerCredits > li {
      padding-bottom: 0.5rem;
    }
    .linkParser {
      line-height: 0.7;
      padding-left: 5px;
    }
    .linkParser li:last-child {
      &::before, &::after {
        content: '  |  ';
        color: var(--orange);
        font-weight: bold;
        font-size:1.75rem;
      }
    }
    a:hover {
      color: var(--orange);
    }
    a[aria-current='page'] {
      border-bottom: 1px solid var(--yellow);
    }
  }
  @media only screen and (max-width: 325px) {
    .footerCredits {
      font-size: 1.25rem;
    }
  }
`;

export default function Footer() {
  const { footer } = useStaticQuery(graphql`
    query {
      footer: allSanityFooter {
        nodes {
          title
          id
          devlink
          dev
          links {
            pagelink
            pagename
            _key
          }
        }
      }
    }
  `)
  
  const nodes = footer.nodes;
  return (
    <FooterStyles>
      {nodes.map((node) => (
        <div className="footerContainer" key={node.id}>
          <ul className="footerCredits column">
            <li>
              &copy; {node.title} {new Date().getFullYear()}
            </li>
            <li>
              <ul className="inline privTerms">
                {node.links.map((link) => (
                  <span className='linkParser' key={link._key}>
                    <Link to={link.pagelink}>
                      <li>
                        {link.pagename}
                      </li>
                    </Link> 
                  </span>
                ))}
              </ul>
            </li>
            <li> 
              <a href={node.devlink} target="_blank" rel="noreferrer">
                Designed &amp; Developed by {node.dev}
              </a>
            </li>
          </ul>
        </div>
      ))}
    </FooterStyles>
  );
}
