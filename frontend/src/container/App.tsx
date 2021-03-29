import React from "react";
import customHook from "../hooks/useAPI";

const App = () => {
  const [data, loadDataFromServer] = customHook();
  const getDataFromAPI = async () => {
    const response = loadDataFromServer("/clients");
  };

  return (
    <>
      <h1>hello world</h1>
      <button onClick={getDataFromAPI}>Pega dado do server</button>
    </>
  );
};

export default App;
