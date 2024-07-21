import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 5rem 1rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
`;

const LandingPage = () => {
  return (
    <Container>
      <Title>Welcome to Our Landing Page</Title>
      <Subtitle>This is a simple, attractive landing page.</Subtitle>
    </Container>
  );
}

export default LandingPage;
