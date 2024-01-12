import React, { useState } from 'react';

const SliderComponent = ({  updateSizeVariable }) => {
  // Use state to store the slider value
  const [sliderValue, setSliderValue] = useState(50);
  // Function to handle slider value changes
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    updateSizeVariable(sliderValue);
  };

  return (
    <div>
      <p>Slider Value: {sliderValue}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default SliderComponent;