import React from 'react';
import Card from 'intergalactic/card';
import { IconButton } from './components/Button';

function App() {
  return (
    <Card>
      <Card.Header>Page with a11y error</Card.Header>
      <Card.Body>
        <IconButton />
      </Card.Body>
    </Card>
  );
}

export default App;
