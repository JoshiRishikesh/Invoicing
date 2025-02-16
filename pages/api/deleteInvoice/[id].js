import mongoose from 'mongoose';
import Invoice from '../../../models/Invoice';  // Import the Invoice model

export default async function handler(req, res) {
  const {
    query: { id },  // Extract invoice ID from the URL
    method
  } = req;

  if (method === 'DELETE') {
    try {
      // Connect to MongoDB using Mongoose if not already connected
      if (mongoose.connections[0].readyState === 0) {
        await mongoose.connect(process.env.MONGODB_URI);  // MongoDB connection URI from env
      }

      // Ensure the ID is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid invoice ID" });
      }

      // Delete the invoice from the database by its _id
      const result = await Invoice.findByIdAndDelete(id);

      if (!result) {
        return res.status(404).json({ message: 'Invoice not found' });
      }

      // Return success message
      return res.status(200).json({ message: 'Invoice deleted successfully' });
    } catch (error) {
      console.error('Error deleting invoice:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // If the request method is not DELETE, return method not allowed
    res.setHeader('Allow', ['DELETE']);
    return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}
