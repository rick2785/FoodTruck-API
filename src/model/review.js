import mongoose from 'mongoose';
import FoodTruck from './foodtruck';
let Schema = mongoose.Schema;

let ReviewSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: String,
  foodtruck: {
    type: Schema.Types.ObjectId,
    ref: 'FoodTruck',
    required: true
  }
});

module.exports = mongoose.model('Review', ReviewSchema);
