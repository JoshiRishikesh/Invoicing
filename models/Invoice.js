import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true },
  invoiceDate: { type: Date, required: true },  // Use Date instead of String
  clientName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  referenceNumber: { type: String, required: true },
  serialNumber: { type: String, required: true },
  discount: { type: Number, required: true },
  advanceAmount: { type: Number, required: true },
  paymentMode: { type: String, required: true },
  deliveryDate: { type: Date, required: true },  // Use Date instead of String
  deliveryStatus: { type: String, default: "Due" },
  products: [{ name: String, quantity: Number, price: Number, total: Number }],
  totalAmount: { type: Number, required: true },
  finalAmount: { type: Number, required: true },
  pendingAmount: { type: Number, required: true },
  paymentHistory: [{
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now }  // Timestamp for payment
  }],
}, { timestamps: true });

const Invoice = mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema);

export default Invoice;

