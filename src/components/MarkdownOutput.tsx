// import the styled component library
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

// Create a Output container styled component which is a div
const OutputContainer = styled.div`
  width: 100%;
  border-style: solid;
`;

// create the interface for the props
interface MarkdownOutputProps {
  markdown: string;
}

// destructure the props
const MarkdownOutput = ({ markdown }: MarkdownOutputProps) => {
  // return the OutputContainer with <ReactMarkdown>{markdown}</ReactMarkdown> as a child
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
