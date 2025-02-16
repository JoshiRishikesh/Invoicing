// /pages/api/getInvoice/[id].js
import dbConnect from "../../../utils/dbConnect";
import Invoice from "../../../models/Invoice";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect(); // Connect to the database

  if (req.method === "GET") {
    try {
      const invoice = await Invoice.findById(id); // Find invoice by ID

      if (!invoice) {
        return res.status(404).json({ message: "Invoice not found" });
      }

      return res.status(200).json(invoice); // Return invoice data including customer details

    } catch (error) {
      console.error("Error fetching invoice:", error);
      return res.status(500).json({ message: "Error fetching invoice data" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
