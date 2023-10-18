import styled from "styled-components";

export function PortfolioItem(props) {
  return (
    <StyledPortfolioItem>
      <a href={props.link}>
        <img src={props.pic} alt="" />
      </a>

      <h3>
        <a href={props.link}>{props.title}</a>
      </h3>
    </StyledPortfolioItem>
  );
}
const StyledPortfolioItem = styled.div`
  text-decoration: underline;

  img {
    width: 100%;
    object-fit: cover;
  }

  h3 {
    margin: 45px 0px 100px 0px;
  }
`;
