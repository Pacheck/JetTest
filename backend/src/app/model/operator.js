import { model, Schema } from 'mongoose';

const operatorSchema = Schema({
    name: String,
    clients: Array,
})

const operatorModel = model('operator', operatorSchema);

const createOperator = async() => {
    const operator = new operatorModel({ name: 'Operator 1', clients: ['Client 1', 'Client 2'] });
    await operator.save().then(res => console.log(res)).catch(err => { err })
    return operator;
}

export default createOperator();