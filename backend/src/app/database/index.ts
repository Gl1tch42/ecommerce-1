import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_URI

export default function connectToMongoDB(): void {
    if(mongoURI) {
        mongoose.connect(mongoURI, {}, () => console.log('Conectado com o MongoDB'))
    } else {
        console.log('Não conectado com o MongoDB')
    }
    
}