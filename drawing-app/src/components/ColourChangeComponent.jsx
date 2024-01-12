import React, { useState } from 'react';

const ColourChangeComponent = ({updateColour}) => {
  const [color, setColor] = useState("#000000");
  return (
    <input
    type="color"
    value={color}
    onChange={(e) => {
      updateColour(e.target.value);
      setColor(e.target.value);
    }}
/>
  );
};

export default ColourChangeComponent;