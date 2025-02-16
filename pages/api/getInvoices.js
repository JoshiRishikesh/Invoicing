import Invoice from "../../models/Invoice"; // Assuming you have an Invoice model

export default async function handler(req, res) {
  try {
    const invoices = await Invoice.find(); // Find all invoices in the database
    res.status(200).json(invoices); // Return the list of invoices
  } catch (error) {
    console.error("Error fetching invoices:", error);
    res.status(500).json({ message: "Error fetching invoices" });
  }
}
