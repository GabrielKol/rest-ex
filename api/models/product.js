/*const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    //productImage: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
*/

const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
  name: {type: String, required: true, max: 100},
  price: {type: Number, required: true},
});

module.exports = mongoose.model('Product', productSchema);
