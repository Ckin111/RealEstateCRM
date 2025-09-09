import { Config } from '../../config';
import mongoose from 'mongoose';

const DB_URL = `mongodb+srv://${Config.db.mongo.id}:${Config.db.mongo.pwd}@cluster-free.hl7kwwi.mongodb.net/${Config.db.mongo.dbName}?retryWrites=true&w=majority&appName=Cluster-Free`;

const connectMongo = async () => {
  await mongoose.connect(DB_URL, {
    serverApi: { version: '1', strict: true, deprecationErrors: true },
  });
};

export default connectMongo;
