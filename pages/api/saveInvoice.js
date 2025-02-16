import dbConnect from '../../utils/dbConnect';
import Invoice from '../../models/Invoice';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect(); // Connect to MongoDB

      const {
        formData,
        products,
        totalAmount,
        finalAmount,
        pendingAmount,
      } = req.body;

      // Set deliveryStatus to "Due" if missing
      const invoiceData = {
        invoiceNumber: formData.invoiceNumber,
        invoiceDate: formData.invoiceDate,
        clientName: formData.clientName,
        contactNumber: formData.contactNumber,
        address: formData.address,
        referenceNumber: formData.referenceNumber,
        serialNumber: formData.serialNumber,
        discount: formData.discount,
        advanceAmount: formData.advanceAmount,
        paymentMode: formData.paymentMode,
        deliveryDate: formData.deliveryDate,
        deliveryStatus: formData.deliveryStatus || "Due", // Default to "Due"
        products,
        totalAmount,
        finalAmount,
        pendingAmount,
      };

      console.log("✅ Invoice Data Before Saving:", invoiceData); // Debug log

      // Create and save invoice
      const newInvoice = new Invoice(invoiceData);
      await newInvoice.save();

      return res.status(201).json({ message: 'Invoice saved successfully!' });
    } catch (error) {
      console.error('❌ Error saving invoice:', error);
      return res.status(500).json({ message: 'Error saving invoice.', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
