import { useRef, useState } from 'react';

const ColorBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [boxColor, setBoxColor] = useState('');

 
 
  const handleButtonClick = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      setBoxColor(inputValue);
    }
  };

 
 
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a color"
      />
      <button onClick={handleButtonClick}>Change Color</button>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: boxColor,
          marginTop: '10px',
        }}
      ></div>
    </div>
  );
};

export default ColorBox;
