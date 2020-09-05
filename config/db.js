const mongo = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongo.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected!!');
    } catch (e) {
        console.error(e);
    }
};
module.exports = connectDB;
