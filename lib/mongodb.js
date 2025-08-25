import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("mongodb+srv://Admin:<db_password>@gameheavencluster.sbht6bj.mongodb.net/?retryWrites=true&w=majority&appName=GameHeavenCluster");
}

if (process.env.NODE_ENV === "development") {
  // development এ কানেকশন রিইউজ করবে
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // production এ নতুন কানেকশন করবে
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
