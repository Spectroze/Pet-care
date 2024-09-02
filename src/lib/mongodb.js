import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Use the environment variable for the connection URI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let clientPromise;

// In development mode, use a global variable to avoid multiple connections
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = MongoClient.connect(uri, options);
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new connection per request
  clientPromise = MongoClient.connect(uri, options);
}

export default clientPromise;
