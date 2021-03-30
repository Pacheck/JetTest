import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Table,
} from "react-bootstrap";
import CSVReader from "react-csv-reader";
import customAPI from "../../hooks/useAPI";
import { handleSequence } from "../../helper/handleSequence";

import { Operator } from "../../hooks/types";
import "./index.css";

const initialOperator = {
  id: "",
  name: "",
  clients: [],
};

const Listagem = () => {
  const [csvData, setCsvData] = useState([]);
  const [operators, setOperators, loadOperators, removeOperator] = customAPI();
  const [operatorToFocus, setOperatorToFocus] = useState<Operator>(
    initialOperator
  );

  const history = useHistory();

  const handleClientsToOperators = async () => {
    await loadOperators("/operators");
  };

  const handleFocusItem = (operator: Operator) => {
    setOperatorToFocus(operator);
  };

  const handleLoadCSV = () => {
    handleSequence(operators, csvData);
  };

  const handleStoreCSVData = (csvData: []) => {
    var filteredCSV = csvData.map(function (x) {
      return {
        id: x[0],
        nome: x[1],
        nascimento: x[2],
        valor: x[3],
        email: x[4],
        profession: x[5],
      };
    });
    setCsvData(filteredCSV as any);
  };

  const handleEditClient = (operatorID: string) => {
    history.push(`/formulario/${operatorID}`);
  };

  const handleDeleteClient = (operatorID: string) => {
    removeOperator(`/operators/${operatorID}`);
    const newOperators = operators.filter(
      (operator) => operator.id !== operatorID
    );

    setOperatorToFocus(initialOperator);
    setOperators(newOperators);
  };

  useEffect(() => {
    handleClientsToOperators();
  }, []);

  useEffect(() => {
    handleLoadCSV();
  }, [csvData, operators]);

  return (
    <>
      <Jumbotron className="JumboClass">
        <h1>Bem vindo!</h1>
        <p>
          Esta é a página que será listado os operadores com seus respectivos
          clientes.
        </p>
        <p>Para começar, importe um arquivo em CSV</p>
        <CSVReader
          cssInputClass="CSVReader"
          onFileLoaded={(data: any) => {
            // any[] type is recommended by csvreader module on npm
            handleStoreCSVData(data);
          }}
        />
      </Jumbotron>

      <ListGroup as="ul">
        {/* <ListGroupItem key={Math.random() * 100} variant="primary" disabled>
          Operadores
        </ListGroupItem> */}
        {operators.map((operator) => {
          return (
            <ListGroupItem
              className="ItemGroup"
              active={operator.id === operatorToFocus.id}
              as="li"
              key={operator.id}
              onClick={() => handleFocusItem(operator)}
            >
              {operator.name}
              <ButtonToolbar>
                <ButtonGroup>
                  <Button
                    variant="info"
                    onClick={() => handleEditClient(operator.id)}
                  >
                    Editar
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteClient(operator.id)}
                  >
                    Deletar
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </ListGroupItem>
          );
        })}
      </ListGroup>
      {console.log(operatorToFocus)}
      {operatorToFocus.clients.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nascimento</th>
              <th>Valor</th>
              <th>E-mail</th>
              <th>Profissão</th>
            </tr>
          </thead>
          <tbody>
            {operatorToFocus.clients.map((client) => (
              <tr key={Math.random() * 100}>
                <td>{client.nome}</td>
                <td>{client.nascimento}</td>
                <td>{client.valor}</td>
                <td>{client.email}</td>
                <td>{client.profession}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Listagem;
