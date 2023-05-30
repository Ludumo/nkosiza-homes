import { MongoClient } from 'mongodb';

async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client.db();
}

export default connectToDatabase;
