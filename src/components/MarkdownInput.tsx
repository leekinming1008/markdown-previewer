// import the styled component library
import styled from "styled-components";
// Define a textarea styled component
const InputContainer = styled.div`
  width: 100%;
  padding-right: 40px;
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 700px;
  font-size: xx-large;
  resize: none;
`;

// define the interface for the props (one is listed below)
// onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
interface MarkdownInputProps {
  handleChangeEvent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

// destructure the props
const MarkdownInput = ({ handleChangeEvent, value }: MarkdownInputProps) => {
  // pass the props (on change and value to the StyledTextArea styled component)
  return (
    <>
      <InputContainer>
        <StyledTextArea
          onChange={handleChangeEvent}
          value={value}
        ></StyledTextArea>
      </InputContainer>
    </>
  );
};

export default MarkdownInput;
