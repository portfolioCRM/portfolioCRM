import { MongoClient } from 'mongodb'


const uri = "mongodb+srv://raedrdhaounia:dadHH123@cluster0.ywnsq.mongodb.net/"

 const  client = new MongoClient(uri as string)
 export const connect = client.connect();