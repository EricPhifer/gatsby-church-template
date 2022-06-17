import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const SidebarStyles = styled.aside`
  width: 100vw;
  height: 18rem;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  background-color: var(--gray);
  font-size: 1.25rem;
  .sidebarContainer {
    max-width: 1080px;
    margin: 0 auto;
    text-align: center;
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .inline {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      span {
        padding: 0 1rem;
      }
    }
    .column {
      display: flex;
      flex-flow: column nowrap;
    }
    .sidebarNav {
      margin: 3rem 2.5rem;
      font-weight: bold;
      padding: 0 0.5rem;
      li {
        padding-bottom: 1rem;
      }
      a {
        color: var(--blue);
      }
    }
    a:hover {
      color: var(--white);
    }
    a[aria-current='page'] {
      border-bottom: 1px solid var(--red);
    }
  }
`;

export default function Sidebar() {
//   const { sidebar } = useStaticQuery(graphql`
//     query {
//       sidebar: allSanitySidebar {
//           nodes {
//             id
//             title
//             date
//             forwho
//           }
//         }
//       }
//   `)
  
//   const nodes = sidebar.nodes;
  return (
    <SidebarStyles>
      {/* {nodes.map((node) => ( */}
      <div className="sidebarContainer" /* key={node.id} */>
        <ul className="sidebarCredits column">
          {/* <li>{node.title}</li>
          <li>{node.date}</li>
          <li>{node.forwho}</li> */}
        </ul>
      </div>
      {/* ))} */}
    </SidebarStyles>
  );
}
