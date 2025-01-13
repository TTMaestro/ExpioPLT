import React from 'react';
import { Button } from '@shadcn/ui';

const ButtonComponent = () => {
  return (
    <div>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );
};

export default ButtonComponent;
