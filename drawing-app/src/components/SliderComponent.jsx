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
    <><div class='sliderContainer'>
      <p>Slider Value: {sliderValue}</p>
      <input class="slider" id="sliderRange"
        type="range"
        min="1"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange} />
    </div><script src = "scripts/slider.js"></script></>
  );
};

export default SliderComponent;