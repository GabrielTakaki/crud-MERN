const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const Schema = mongoose.Schema;
require('dotenv').config();


// https://stackoverflow.com/questions/47370487/node-js-mongodb-driver-async-await-queries
async function findOne() {

  const client = mongoose.connect(
    process.env.MONGOOSE_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );

  if (!client) {
      return;
  }

  try {

      const db = client.db("testdb");

      let collection = db.collection('cars');

      let query = { name: 'Volkswagen' }

      let res = await collection.findOne(query);

      console.log(res);

  } catch (err) {

      console.log(err);
  } finally {

      client.close();
  }
}

findOne();

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const ProductSchema = new Schema({
  product: { type: String, required: true },
  amount: { type: String },
  price: { type: Number, required: true },
  installments: { type: String},
  paid: { type: String},
  beginning: String,
});


const ContractSchema = new Schema({
  country: { type: String },
  state: { type: String },
  city: { type: String },
  documentNumber: { type: String, required: true },
  socialReason: { type: String, required: true },
  address: { type: String, required: true },
  district: { type: String, required: true },
  zip: { type: Number, required: true },
  phone: { type: String },
  email: { type: String, required: true },
  contractStart: { type: String, required: true },
  contractEnd: { type: String },
  due: { type: String },
  image: String,
  company: { type: String, required: true },
}, {
  versionKey: false,
});

const User = mongoose.model('user', UserSchema);
const Product = mongoose.model('product', ProductSchema);
const Contract = mongoose.model('contract', ContractSchema);

module.exports = {
  User,
  Product,
  Contract,
}
