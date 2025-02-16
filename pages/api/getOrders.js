// /pages/api/getOrders.js
import dbConnect from "../../utils/dbConnect";
import Invoice from "../../models/Invoice";

export default async function handler(req, res) {
  try {
    await dbConnect(); // Connect to the database
  } catch (error) {
    console.error("Database connection error:", error);
    return res.status(500).json({ message: "Database connection error", error: error.message });
  }

  if (req.method === "GET") {
    try {
      // Query all invoices where invoiceDate exists
      const orders = await Invoice.aggregate([
        {
          $project: {
            invoiceDateIST: {
              $dateToString: {
                format: "%Y-%m-%d", // Format as YYYY-MM-DD
                date: "$invoiceDate",
                timezone: "+05:30", // IST time zone
              },
            },
          },
        },
        {
          $group: {
            _id: "$invoiceDateIST", // Group by formatted date
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
          $sort: { invoiceDate: 1 }, // Sort by invoice date
        },
      ]);

      if (orders.length === 0) {
        return res.status(404).json({ message: "No orders found" });
      }

      return res.status(200).json(orders); // Return orders data
    } catch (error) {
      console.error("Error fetching orders:", error);
      return res.status(500).json({ message: "Error fetching orders", error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
