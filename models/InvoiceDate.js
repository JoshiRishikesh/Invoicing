// /models/InvoiceDate.js
import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
    invoiceDate: { type: Date, required: true },
  // Add any other fields related to deliveries as needed
});

const Invoice = mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema);

export default Delivery;
