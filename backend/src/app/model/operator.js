import { model, Schema } from 'mongoose';

const operatorSchema = Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    clients: {
        type: Array,
        required: true,
    }
})

export default model('operator', operatorSchema);