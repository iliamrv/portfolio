import styled from "styled-components";
import { PortfolioItem } from "../components/PortfolioItem";

export function Portfolio() {
  return (
    <StyledPortfolio>
      <h2>Portfolio</h2>

      <PortfolioItem
        pic={"/portfolio/1.jpg"}
        title={"Online fashion store - Homepage"}
        link={"/"}
      />

      <PortfolioItem
        pic={"/portfolio/2.jpg"}
        title={"Reebok Store - Concept"}
        link={"/"}
      />

      <PortfolioItem
        pic={"/portfolio/3.jpg"}
        title={"Braun Landing Page - Concept"}
        link={"/"}
      />
    </StyledPortfolio>
  );
}

const StyledPortfolio = styled.section``;
