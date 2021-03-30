import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import CSVReader from "react-csv-reader";
import { HookApiResponse } from "../../hooks/types";
import { Axios } from "../../services/api";
import "./index.css";

const Formulario = () => {
  const id = window.location.pathname.replace("/formulario/", "");
  const [operatorFromServer, setOperatorFromSever] = useState([]);
  const [csvData, setCsvData] = useState([]);

  const handleDataFromServer = async (url: string) => {
    const response: HookApiResponse = await Axios.get(`/operators/${url}`);
    console.log(response);
  };

  const handleStoreCSVData = (data: []) => {
    setCsvData(data);
  };

  useEffect(() => {
    handleDataFromServer(id);
  }, []);

  return (
    <Container className="ContainerClass">
      <Form className="FormClass">
        <FormGroup controlId="formName">
          <FormLabel>Nome</FormLabel>
          <FormControl type="text" placeholder="Digite seu nome" />
        </FormGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Formulario;
