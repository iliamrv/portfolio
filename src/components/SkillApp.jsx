import styled from "styled-components";

export function SkillApp(props) {
  return (
    <div>
      <img src={props.pic} alt="" />
      <br />
      <p>{props.title}</p>
      <br />
      <span>{props.stars}</span>
    </div>
  );
}
