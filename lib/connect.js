import { MongoClient } from "mongodb";

const { MongoDBdataBase, MongoDBUserName, MongoDBPassword } = process.env;
const uri = `mongodb+srv://${MongoDBUserName}:${MongoDBPassword}@cluster0.ywnsq.mongodb.net/`;

const client = new MongoClient(uri);

async function main(_collection) {
  try {
    await client.connect();
    const collection = client.db(MongoDBdataBase)?.collection(_collection);
    return collection;
  } catch (error) {
    return null;
  }
}

export default main;
