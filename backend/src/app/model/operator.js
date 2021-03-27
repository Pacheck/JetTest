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

export default model('operator', operatorSchema);