const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// pass : 03WHYjw1z24tHxsK
// username : simpleDBuser
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://simpleDBuser:03WHYjw1z24tHxsK@rafis-cluster.wpt21fe.mongodb.net/?retryWrites=true&w=majority&appName=Rafis-cluster";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db('usersdb');
    const usersCollection = database.collection('users');

    
    


    //sending data to DB
    app.post('/users', async(req,res)=>{
        console.log('data in the server', req.body)
        const newUser = req.body;

        const result = await usersCollection.insertOne(newUser);
        res.send(result); 
    })


    //getting data from db
    app.get('/users',async(req,res)=>{
        const cursor = usersCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    //Deleting a Users
    app.delete('/users/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await usersCollection.deleteOne(query);
        res.send(result);

    })

    //Finding a Specific Item
    app.get('/users/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await usersCollection.findOne(query);
        res.send(result);

    })


    //Update
    app.put('/users/:id', async(req, res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const user = req.body;

        const updatedDoc = {
            $set: {
                name: user.name,
                email: user.email
            }
        }

        const result = await usersCollection.updateOne(filter,updatedDoc);
        res.send(result);
    })






    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req,res)=>{
    res.send('simple crud server')
})


app.listen(port, ()=>{
    console.log(`running on port ${port}`);
})