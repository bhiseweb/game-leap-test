import mongoose from 'mongoose'

export default (config) => {
    // Connect to MongoDb
    return mongoose.connect(config.mongo.uri, config.mongo.options)
    .then(() => {
        console.log(`Mongo connected to [${config.mongo.uri}]`.cyan);
    })
    .catch((err) => console.error(`MongoDB connection error: ${err.message}\n`.red, err));
}
