import { model, Schema } from 'mongoose';

const Operator = Schema({
    name: String,
    clients: Array,
})