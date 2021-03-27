import { model, Schema } from 'mongoose';

const operatorSchema = Schema({
    name: {
        type: String,
        required: true,
    },

    clients: {
        type: Array,
        required: true,
    }
})

const operatorModel = model('operator', operatorSchema);

const createOperator = async() => {
    const operator = new operatorModel({ name: 'Operator 1', clients: ['Client 1', 'Client 2', 'Client 3'] });
    await operator.save().then(res => console.log(res)).catch(err => { err })
    return operator;
}

export default createOperator;