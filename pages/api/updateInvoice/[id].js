import dbConnect from "../../../utils/dbConnect";
import Invoice from "../../../models/Invoice";

// Endpoint to handle updating the invoice
export default async function handler(req, res) {
  const { id } = req.query; // Get the invoice ID from the URL

  // Connect to the database
  await dbConnect();

  if (req.method === "PATCH") {
    try {
      // Get the updated data from the request body
      const updatedData = req.body;

      // Find and update the invoice document in the database
      const updatedInvoice = await Invoice.findByIdAndUpdate(
        id,
        updatedData, // The fields that need to be updated
        { new: true } // Return the updated invoice document
      );

      if (!updatedInvoice) {
        return res.status(404).json({ message: "Invoice not found" });
      }

      // Return the updated invoice
      return res.status(200).json(updatedInvoice);
    } catch (error) {
      console.error("Error updating invoice:", error);
      return res.status(500).json({ message: "Error updating invoice." });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
