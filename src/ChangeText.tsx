import { useRef, useState } from 'react';

const ChangeText = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [changedText, setChangedText] = useState("Unchanged Text");

  const handleButtonClick = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      setChangedText(inputValue);
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter text to change"
      />
      <p>{changedText}</p>
      <button onClick={handleButtonClick}>Change text</button>
    </div>
  );
}

export default ChangeText;
