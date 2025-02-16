// /pages/api/getDeliveries.js
import dbConnect from "../../utils/dbConnect";
import Invoice from "../../models/Invoice";  // Assuming delivery date is stored in invoice model

export default async function handler(req, res) {
  await dbConnect(); // Connect to the database

  if (req.method === "GET") {
    try {
      // Query all invoices where deliveryDate exists
      const orders = await Invoice.aggregate([
        {
          $group: {
            _id: "$invoiceDate", // Group by invoiceDate
            count: { $sum: 1 }, // Count the number of orders for each date
          },
        },
        {
          $project: {
            _id: 0,
            invoiceDate: "$_id", // Rename _id to invoiceDate
            count: 1,
          },
        },
        {
          $sort: { invoiceDate: 1 }, // Sort by delivery date
        },
      ]);

      if (!orders) {
        return res.status(404).json({ message: "No orders found" });
      }

      return res.status(200).json(orders); // Return orders data

    } catch (error) {
      console.error("Error fetching orders:", error);
      return res.status(500).json({ message: "Error fetching orders" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
