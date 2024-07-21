import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px; 
  cursor: pointer;
  margin: 10px;
  font-family: ${(props) => props.theme.fonts.body};
`;

const SecondButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

function ThemeProvider() {
  return (
    <div>
      <StyledButton>Primary Button</StyledButton>
      <StyledButton>Primary 2</StyledButton>
      <SecondButton>Secondary 1</SecondButton>
    </div>
  );
}

export default ThemeProvider;
