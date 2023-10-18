import styled from "styled-components";

function Navbar() {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="#"></a>Home
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  border-bottom: 1px solid #828282;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    list-style: none;
    padding: 30px;
    font-size: 18px;
  }
  li a {
    padding: 0px;
    color: #828282;
  }
`;

export default Navbar;
