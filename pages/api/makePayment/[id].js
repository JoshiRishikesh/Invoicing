import dbConnect from "../../../utils/dbConnect";
import Invoice from "../../../models/Invoice";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  if (req.method === "PATCH") {
    const { amount } = req.body;

    try {
      // Ensure that the amount is valid and the invoice exists
      if (!amount || isNaN(amount) || amount <= 0) {
        return res.status(400).json({ message: "Invalid amount." });
      }

      // Find the invoice by ID
      const invoice = await Invoice.findById(id);

      if (!invoice) {
        return res.status(404).json({ message: "Invoice not found" });
      }

      // Check if the pending amount matches the amount being paid (i.e., full payment)
      if (invoice.pendingAmount !== amount) {
        return res.status(400).json({ message: "Payment amount does not match the pending amount." });
      }

      // Update the payment history
      const paymentHistory = [...invoice.paymentHistory, {
        amount,
        date: new Date(),
      }];

      // Set pending amount to 0 after full payment
      const updatedInvoice = await Invoice.findByIdAndUpdate(
        id,
        {
          paymentHistory,
          pendingAmount: 0, // Clear pending amount after full payment
        },
        { new: true } // Return the updated document
      );

      // Return the updated invoice data
      return res.status(200).json(updatedInvoice);
    } catch (error) {
      console.error("Error making payment:", error);
      return res.status(500).json({ message: "Error processing payment." });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
