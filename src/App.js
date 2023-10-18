import styled from "styled-components";
import { Header } from "./layout/Header";
import { Skills } from "./layout/Skills";
import { AboutMe } from "./layout/AboutMe";
import { Portfolio } from "./layout/Portfolio";
import { Contacts } from "./layout/Contacts";

function App() {
  return (
    <Container>
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
    </Container>
  );
}

const Container = styled.div`
  flex-direction: row;

  padding: 0px 300px 0px 300px;
  p {
    font-size: 18px;
  }

  a {
    color: var(--Black, #070707);
  }
`;

export default App;
