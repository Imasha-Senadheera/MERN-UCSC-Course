
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #333; 
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 15px 32px; /* Some padding */
  text-align: center; /* Center the text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Make the button inline */
  font-size: 16px; /* Increase font size */
  margin: 4px 2px; /* Add some margin */
  cursor: pointer; /* Add a pointer cursor on hover */
  border-radius: 12px; /* Rounded corners */
  transition: background-color 0.3s ease; /* Smooth transition for background-color */

  &:hover {
    background-color: #335; /* Darker green on hover */
  }

  &:focus {
    outline: none; /* Remove outline on focus */
  }

  &:active {
    background-color: #335; /* Even darker green when clicked */
  }
`;
