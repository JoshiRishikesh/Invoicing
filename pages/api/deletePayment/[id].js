import dbConnect from "../../../utils/dbConnect";
import Invoice from "../../../models/Invoice";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect(); // Connect to the database

  if (req.method === "DELETE") {
    try {
      const { paymentId } = req.body;

      // Find the invoice by ID
      const invoice = await Invoice.findById(id);
      if (!invoice) {
        return res.status(404).json({ message: "Invoice not found" });
      }

      // Remove the payment from paymentHistory
      const updatedPaymentHistory = invoice.paymentHistory.filter(
        (payment) => payment._id.toString() !== paymentId
      );

      // Recalculate the total payments after deletion
      const totalPayments = updatedPaymentHistory.reduce(
        (sum, payment) => sum + payment.amount,
        0
      );

      // Recalculate the pending amount
      const updatedPendingAmount =
        invoice.finalAmount - invoice.advanceAmount - totalPayments;

      // Update the invoice with the new payment history and pending amount
      const updatedInvoice = await Invoice.findByIdAndUpdate(
        id,
        {
          paymentHistory: updatedPaymentHistory, // Updated payment history
          pendingAmount: updatedPendingAmount, // Updated pending amount
        },
        { new: true } // Return the updated document
      );

      if (!updatedInvoice) {
        return res.status(404).json({ message: "Invoice not found" });
      }

      // Return the updated invoice data
      return res.status(200).json(updatedInvoice);
    } catch (error) {
      console.error("Error deleting payment:", error);
      return res.status(500).json({ message: "Error deleting payment." });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
