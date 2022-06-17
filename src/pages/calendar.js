import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { defaultComponents, PortableText } from '@portabletext/react';
import SEO from '../components/SEO';

const CalendarStyles = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding-top: 18rem;
`;

export default function CalendarPage({ data }) {
  // const calendars = data.calendars.nodes;

  return (
    <>
      <SEO title="Calendar &amp; Events" />
      <CalendarStyles>
        {/* {calendars.map((calendar) => ( */}
          <div className="calendarCard" 
            // key={calendar.id}
          >

          </div>
        {/* ))} */}
      </CalendarStyles>
    </>
  );
}

// export const query = graphql`
//   query {
//     calendar: allSanityCalendar {
//       nodes {
//         id
//         title
//         eventimage {
//           asset {
//             id
//           }
//           ...ImageWithPreview
//         }
//         eventalt
//         date
//         _rawDescription
//       }
//     }
//   }
// `;
