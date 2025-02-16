// /pages/api/getDeliveries.js
import dbConnect from "../../utils/dbConnect";
import Invoice from "../../models/Invoice";  // Assuming delivery date is stored in invoice model

export default async function handler(req, res) {
  await dbConnect(); // Connect to the database

  if (req.method === "GET") {
    try {
      // Query all invoices where deliveryDate exists
      const deliveries = await Invoice.aggregate([
        {
          $group: {
            _id: "$deliveryDate", // Group by deliveryDate
            count: { $sum: 1 }, // Count the number of deliveries for each date
          },
        },
        {
          $project: {
            _id: 0,
            deliveryDate: "$_id", // Rename _id to deliveryDate
            count: 1,
          },
        },
        {
          $sort: { deliveryDate: 1 }, // Sort by delivery date
        },
      ]);

      if (!deliveries) {
        return res.status(404).json({ message: "No deliveries found" });
      }

      return res.status(200).json(deliveries); // Return deliveries data

    } catch (error) {
      console.error("Error fetching deliveries:", error);
      return res.status(500).json({ message: "Error fetching deliveries" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
