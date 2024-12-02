const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const userId = process.env.MONGODB_USERID
const password = process.env.MONGODB_PASSWORD    
const uri = `mongodb+srv://${userId}:${password}@slotify-cluster.mlu8u.mongodb.net/?retryWrites=true&w=majority&appName=Slotify-cluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function connectDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }catch(error) {
    console.log("Error: ", error)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


module.exports = connectDB