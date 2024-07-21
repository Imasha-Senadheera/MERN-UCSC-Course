// Codes for when Styles are in separate files 


// import React from 'react';
// import './SimpleComponent.css'; 

// const SimpleComponent = () => {
//   return (
//     <div>
//       <header>
//         <h1>Simple React Component</h1>
//       </header>

//       <main>
//         <p>Welcome to my simple React component!</p>
//         <p>This is an example of a React component with external CSS.</p>
//       </main>

//       <footer>
//         <p>&copy; {new Date().getFullYear()} Your Name</p>
//       </footer>
//     </div>
//   );
// };

// export default SimpleComponent;



// Codes for when Styles are in same files 

import React from 'react';
import styled from 'styled-components';
import { Button } from '../mystyles';

const Body = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  margin-top: 0;
`;

const Main = styled.main`
  padding: 20rem;
  text-align: center; /* Center the content */
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const SimpleComponent = () => {
  return (
    <Body>
      <Header>
        <Heading>Simple React Component</Heading>
      </Header>

      <Main>
        <p>Welcome to my simple React component!</p>
        <br></br>
        <p>This is an example of a React component with external CSS.</p>
        <br></br>
        <Button>Button 01</Button>
        <Button>Button 02</Button>
      </Main>

      <Footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </Footer>
    </Body>
  );
};

export default SimpleComponent;