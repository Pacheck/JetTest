import { Client, Operator } from "../hooks/types";

export const handleSequence = (operators: Operator[], csvClients: Client[]) => {

    if(operators.length > 0){
        const immutableOperators = [...operators];
        let clientsCounter = 0;
        let operatorsCounter = 0;

        while(clientsCounter < csvClients.length){
            if(operatorsCounter == operators.length){
                operatorsCounter = 0;
            }
            
            immutableOperators[operatorsCounter].clients.push(csvClients[clientsCounter]);

            clientsCounter++;
            operatorsCounter++;
        }
        return immutableOperators;
    }
}