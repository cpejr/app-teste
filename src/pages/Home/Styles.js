import styled from "styled-components/native";
import { colors } from "../../styles/stylesVariables";

export const Body = styled.View`
display: flex;
background-color: ${colors.background.primary};
height:100%;

`
export const Title = styled.Text`
  color: ${colors.font.title};
  margin-top:20px;
  font-size: 20px;
  align-self:center;
  text-decoration: underline ${colors.underline};
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 3px;
`
