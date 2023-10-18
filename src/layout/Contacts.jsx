import styled from "styled-components";

export function Contacts() {
  return (
    <StyledContacts>
      <h2>Contacts</h2>

      <p>Want to know more or just chat? You are welcome!</p>

      <Button>Send message</Button>

      <SocialIcons>
        <Icon>
          <a href="#">
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
              <use xlinkHref="/icons/sprite.svg#1" />
            </svg>
          </a>
        </Icon>

        <Icon>
          <a href="#">
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
              <use xlinkHref="/icons/sprite.svg#2" />
            </svg>
          </a>
        </Icon>

        <Icon>
          <a href="#">
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
              <use xlinkHref="/icons/sprite.svg#3" />
            </svg>
          </a>
        </Icon>

        <Icon>
          <a href="#">
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
              <use xlinkHref="/icons/sprite.svg#4" />
            </svg>
          </a>
        </Icon>
      </SocialIcons>

      <FooterText>Like me on LinkedIn, Instagram, Behance, Dribble</FooterText>
    </StyledContacts>
  );
}

const StyledContacts = styled.section``;

const Button = styled.button`
  width: 180.5px;
  height: 42px;
  flex-shrink: 0;
  background-color: black;
  border-radius: 35px;

  color: #fff;

  text-align: center;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    opacity: 90%;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
`;

const Icon = styled.button`
  background: none;
  border: none;
`;

const FooterText = styled.p`
  color: #828282;

  font-size: 14px;

  font-weight: 400;
`;
