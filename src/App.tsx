import { useState } from "react";
import Header from "./components/Hearder";
import MarkdownCheatSheet from "./components/MarkdownCheatSheet";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const App = () => {
  // Create a state to manage the markdown text
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);
  const [value, setValue] = useState<string>(`# Hello World`);

  const handleToggleGuide = () => {
    setShowCheatSheet(!showCheatSheet);
  };

  const handleChangeEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Header onToggleGuide={handleToggleGuide} />
      {showCheatSheet && <MarkdownCheatSheet />}
      {/* Wrapped within a styled component div named Container */}
      <Container>
        {/* MarkdownInput (pass the markdown text as a value to this component as well as the handle change function) */}
        <MarkdownInput value={value} handleChangeEvent={handleChangeEvent} />
        {/* MarkdownOutput (pass the markdown text as a prop to this component*/}
        <MarkdownOutput markdown={value} />
      </Container>
    </>
  );
};

export default App;
