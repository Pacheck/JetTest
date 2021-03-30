import React, { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";
import customAPI from "../../hooks/useAPI";
import { handleSequence } from "../../helper/handleSequence";

import "./index.css";

const Listagem = () => {
  const [csvData, setCsvData] = useState([]);
  const [operators, setOperators, loadOperators] = customAPI();

  const handleClientsToOperators = async () => {
    await loadOperators("/operators");
    const result = handleSequence(operators, csvData);
    console.log(result);
  };

  useEffect(() => {
    handleClientsToOperators();
  }, []);

  return (
    <>
      <CSVReader
        cssInputClass="colorTransparent"
        onFileLoaded={(data: any) => {
          // any[] type is recommended by csvreader module on npm
          setCsvData(data);
        }}
      />
      <h2 onClick={handleClientsToOperators}>rs</h2>

      {operators.map((operator) => (
        <h2 key={operator.id}>{operator.name}</h2>
      ))}
    </>
  );
};

export default Listagem;
