import dbConnect from "../../../utils/dbConnect";
import Invoice from "../../../models/Invoice";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect(); // Connect to the database

  if (req.method === "PATCH") {
    const { amount } = req.body;

    try {
      // Check if amount is valid
      if (!amount || isNaN(amount) || amount <= 0) {
        return res.status(400).json({ message: "Invalid amount." });
      }

      // Find the invoice by ID
      const invoice = await Invoice.findById(id);
      if (!invoice) {
        return res.status(404).json({ message: "Invoice not found" });
      }

      // Update payment history
      const updatedPaymentHistory = [
        ...invoice.paymentHistory,
        { amount, date: new Date() },
      ];

      // Recalculate the pending amount
      const updatedPendingAmount =
        invoice.pendingAmount - amount;

      // Ensure the pending amount does not go below 0
      const finalPendingAmount = updatedPendingAmount < 0 ? 0 : updatedPendingAmount;

      // Update the invoice with the new payment history and pending amount
      const updatedInvoice = await Invoice.findByIdAndUpdate(
        id,
        {
          paymentHistory: updatedPaymentHistory, // Add new payment
          pendingAmount: finalPendingAmount, // Update pending amount
        },
        { new: true } // Return the updated document
      );

      if (!updatedInvoice) {
        return res.status(500).json({ message: "Failed to update invoice" });
      }

      // Return the updated invoice data
      return res.status(200).json(updatedInvoice);
    } catch (error) {
      console.error("Error processing partial payment:", error);
      return res.status(500).json({ message: "Error processing partial payment." });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
