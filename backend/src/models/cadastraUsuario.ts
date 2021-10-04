import mongoose from 'mongoose';

const newUserSchema = new mongoose.Schema({
    nome: {
        type: String, required: true
    },
    data: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    confirmEmail: {
        type: String, required: true
    },
    tel: {
        type: String, required: true
    },
    senha: {
        type: String, required: true
    },
});

export default newUserSchema;