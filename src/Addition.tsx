
import { useRef, useState } from 'react';

const Addition = () => {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    if (inputRef1.current && inputRef2.current) {
      const inputValue1 = Number(inputRef1.current.value);
      const inputValue2 = Number(inputRef2.current.value);

      setCount(inputValue1 + inputValue2);
      
    }
  };

  return (
    <div>
      <input
        ref={inputRef1}
        type="number"
        placeholder="Enter a number"
      />

      <input
        ref={inputRef2}
        type="number"
        placeholder="Enter a number"
      />
      <p>{count}</p>
      <button onClick={handleButtonClick}>Calculate</button>
    </div>
  );
}

export default Addition;

