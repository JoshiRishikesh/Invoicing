// /models/Delivery.js
import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema({
  deliveryDate: { type: Date, required: true },
  // Add any other fields related to deliveries as needed
});

const Delivery = mongoose.models.Delivery || mongoose.model('Delivery', deliverySchema);

export default Delivery;
