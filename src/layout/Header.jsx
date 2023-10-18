import styled from "styled-components";
import Navbar from "../components/Navbar";

export const Header = () => {
  return (
    <StyledHeader>
      <Navbar />

      <AuthorProfile>
        <h1>Denis Novik</h1>

        <span>UX | UI designer 24 years old, Minsk</span>
        <LangSwitcher>
          <a href="#">RU</a> | <a href="#">ENG</a>
        </LangSwitcher>
      </AuthorProfile>

      <img src="/header.jpg" alt="author pic" />
    </StyledHeader>
  );
};

const LangSwitcher = styled.div`
  transform: rotate(-90deg);

  color: #828282;

  font-size: 16px;
`;

const AuthorProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeader = styled.header`
  img {
    width: 100%;
    object-fit: cover;
  }
  h1 {
    font-size: 45px;
  }
`;
