import mongoose from 'mongoose';

const dbConfig = 'mongodb+srv://usuario:usuario@cluster0.kzigt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;