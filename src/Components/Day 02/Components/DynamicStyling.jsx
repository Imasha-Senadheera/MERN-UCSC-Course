import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'black'};
  color: ${props => props.primary ? 'white' : 'red'};
  border: 2px solid ${props => props.primary ? 'blue' : 'yellow'};
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s; /* Smooth transition */

  &:hover {
    background-color: ${props => props.primary ? 'darkblue' : 'darkgray'};
    border-color: ${props => props.primary ? 'darkblue' : 'darkgray'}; /* Match border color */
  }
`;

const Alert = styled.div`
  background-color: ${props => props.success ? 'green' : 'red'};
  color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  transition: background-color 0.3s; /* Smooth transition */

  &:hover {
    background-color: ${props => props.success ? 'darkgreen' : 'darkred'}; /* Darker shade on hover */
  }
`;

const Heading = styled.h1`
  font-size: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

function DynamicStyling() {
  return (
    <div>
      {/* Heading Section */}
      <div style={{ marginBottom: '20px' }}>
        <Heading>Dynamic Styling Example</Heading>
      </div>

      {/* Button Section */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Button primary>Primary Button</Button>
        <Button>Secondary Button</Button>
      </div>

      {/* Alert Section */}
      <div style={{ marginBottom: '20px' }}>
        <Alert success>Success Alert</Alert>
        <Alert>Failure Alert</Alert>
      </div>

      {/* Additional Heading Section */}
      <div>
        <Heading>This is another Heading 1</Heading>
      </div>
    </div>
  );
}

export default DynamicStyling;
