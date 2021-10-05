import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    
    data: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
        lowercase: true,
    },

    confirmEmail: {
        type: String,
        require: true,
        lowercase: true,
    },

    tel: {
        type: String,
        require: true,
    },

    senha: {
        type: String,
        require: true,
        select: false,
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;