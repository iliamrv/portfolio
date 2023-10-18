import styled from "styled-components";
import { SkillApp } from "../components/SkillApp";

export function Skills() {
  return (
    <StyledSkills>
      <h2>Skills</h2>

      <p>I work in such programs as</p>

      <Apps>
        <SkillApp pic={"/icons/1.png"} title={"Adobe Photoshop"} stars="4" />
        <SkillApp pic={"/icons/2.png"} title={"Adobe Illustrator"} stars="3" />
        <SkillApp
          pic={"/icons/3.png"}
          title={"Adobe After Effects"}
          stars="4"
        />
        <SkillApp pic={"/icons/4.png"} title={"Figma"} stars="4" />
      </Apps>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`
  p {
    width: 50%;
    text-align: center;
  }
`;

const Apps = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
