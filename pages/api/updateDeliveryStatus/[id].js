import dbConnect from '../../../utils/dbConnect';
import Invoice from '../../../models/Invoice';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect(); // Connect to MongoDB

  if (method === 'PATCH') {
    try {
      const { deliveryStatus } = req.body;

      // Find the invoice and update the deliveryStatus
      const updatedInvoice = await Invoice.findByIdAndUpdate(
        id,
        { deliveryStatus },
        { new: true } // Return the updated document
      );

      if (!updatedInvoice) {
        return res.status(404).json({ message: 'Invoice not found' });
      }

      return res.status(200).json(updatedInvoice); // Return updated invoice data
    } catch (error) {
      console.error("Error updating delivery status:", error);
      return res.status(500).json({ message: 'Error updating delivery status.' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
