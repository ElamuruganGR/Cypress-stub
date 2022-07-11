import { useState } from "react";

export const useChange = () => {
  const [change, setChange] = useState(false);

  // useEffect ...

  const changeTheText = () => {
    // This will be an api call. So for example purpose, i used promise.
    // Promise.resolve().then(() => setChange(!change));
    fetch("https://jsonplaceholder.typicoden kjnkjn.com/todos/1")
      .then((response) => response.json())
      .then((json) => (json.userId === 1) ? setChange(true) : setChange(false));
  };

  return [change, changeTheText];
};