import styled from "styled-components";
import { Section } from "../ui/PageLayout";
import Form from "../components/Form";

// const GridSpan = styled.div`
//   ${(props) => css`
//     grid-row: ${props.row || "1fr"};
//     grid-column: ${props.column || "1fr"};
//   `}

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: start;
// `;

const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const ContactRow = styled.div`
  display: flex;
`;

export default function Contact() {
  return (
    <Section colSize="1fr 1fr" rowSize="1fr 1fr">
      <ContactDiv>
        <ContactInfoDiv>
          <h1>Contact Us</h1>
        </ContactInfoDiv>
        <ContactInfoDiv>
          <h1>+1 210 754 2546</h1>
          <h1>info@xerxesio.com</h1>
        </ContactInfoDiv>
        <ContactRow>
          <ContactInfoDiv>
            <h1>Texas, USA</h1>
            <p>Pugnacious LLC 305 S. Main Street,</p>
            <p>Fort Worth, TX 76014</p>
          </ContactInfoDiv>
          <ContactInfoDiv>
            <h1>Winchester, UK</h1>
            <p>Winchester SO23 0EJ,</p>
            <p>Bridge St</p>
          </ContactInfoDiv>
        </ContactRow>
      </ContactDiv>
      <Form />
    </Section>
  );
}
