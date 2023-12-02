const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

const uri = process.env.DB_URL;
const client = new MongoClient(uri);

app.get('/getData/:table', async (req, res) => {
    const { table } = req.params;
  
    try {
      await client.connect();
      const database = client.db('travel-app-data');
      const collection = database.collection(table);
  
      const data = await collection.find({}).toArray();
  
      res.json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
