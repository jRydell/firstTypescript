import { useRef, useState } from "react";


type ListItem = {
  id: number;
  value: string;
};

const List = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [listItems, setListItems] = useState<ListItem[]>([]);

  const handleAddClick = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      
      
      if (inputValue !== "") {
        const newItem: ListItem = {
          id: listItems.length + 1,
          value: inputValue,
        };

        setListItems((List) => [...List, newItem]);
      }
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
      />
     
     
      <button onClick={handleAddClick}>Add to list</button>
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
