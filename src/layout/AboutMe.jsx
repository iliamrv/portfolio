import styled from "styled-components";

export function AboutMe() {
  return (
    <AboutMeStyled>
      <h2>About me</h2>
      <p>
        Hi, I'm Denis - UX/UI designer from Minsk. I'm interested in design and
        everything connected with it.
      </p>

      <p>
        I'm studying at courses "Web and mobile design interfaces" in
        IT-Academy.
      </p>

      <p> Ready to implement excellent projects with wonderful people.</p>
    </AboutMeStyled>
  );
}

const AboutMeStyled = styled.section`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 50%;
    text-align: center;
  }
`;
