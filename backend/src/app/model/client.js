import { model, Schema } from 'mongoose';

const clientSchema = Schema({
    id: {
        type: Number,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    nascimento: {
        type: String,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    }
})

const ClientModel = model('client', clientSchema);

export default ClientModel;