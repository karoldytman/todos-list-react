import { StyleSection, Title, Header, Paragraph } from "./styled";

const Section = ({ title, body, exContent }) => (
  <StyleSection>
    <Header>
      <Title>{title}</Title>
      {exContent}
    </Header>
    <Paragraph>{body}</Paragraph>
  </StyleSection>
);

export default Section;
