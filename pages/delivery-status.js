import { useEffect, useState } from "react";
import SideNavbar from "../components/SideNavbar"; // Import the SideNavbar

const DeliveryStatus = () => {
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingInvoice, setEditingInvoice] = useState(null); // Invoice currently being edited
  const [newStatus, setNewStatus] = useState(""); // New status for editing
  const [statusFilter, setStatusFilter] = useState(""); // For filtering based on status

  // Fetch all invoices on page load
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch('/api/getInvoices');
        const data = await response.json();
        
        if (response.ok) {
          setInvoices(data);
          setFilteredInvoices(data); // Initially show all invoices
          sortInvoices(data); // Sort invoices initially
        } else {
          setError(data.message || 'Error fetching invoices');
        }
      } catch (err) {
        setError('Error fetching invoices: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  // Calculate Delivery Status Based on Delivery Date
  const calculateDeliveryStatus = (invoice) => {
    const today = new Date();
    const deliveryDate = new Date(invoice.deliveryDate);

    if (deliveryDate < today) {
      return "Due"; // If delivery date is in the past
    } else if (deliveryDate.toDateString() === today.toDateString()) {
      return "Due Today"; // If delivery date is today
    } else {
      return "Pending"; // If delivery date is in the future
    }
  };

  // Handle Filtering by Status
  const handleStatusFilter = (e) => {
    const status = e.target.value;
    setStatusFilter(status);
    
    // Filter invoices based on status and deliveryDate
    let filtered = invoices;
    if (status) {
      filtered = invoices.filter(invoice => invoice.deliveryStatus === status);
    }

    // Re-sort after filtering
    sortInvoices(filtered);
  };

  // Sort invoices first by deliveryStatus, then by deliveryDate (latest first)
  const sortInvoices = (invoicesToSort) => {
    const today = new Date();
  
    const sortedInvoices = invoicesToSort.sort((a, b) => {
      // Define the order for the deliveryStatus: Due -> Pending -> Cleared
      const statusOrder = { "Due": 1, "Pending": 2, "Delivered": 3 };
  
      // First, sort by deliveryStatus: Due -> Pending -> Cleared
      if (statusOrder[a.deliveryStatus] < statusOrder[b.deliveryStatus]) {
        return -1;
      }
      if (statusOrder[a.deliveryStatus] > statusOrder[b.deliveryStatus]) {
        return 1;
      }
  
      // Get the delivery dates for each invoice
      const dateA = new Date(a.deliveryDate);
      const dateB = new Date(b.deliveryDate);
  
      if (a.deliveryStatus === "Pending") {
        // For Pending: Nearest future date comes first
        return dateA - dateB;  // sort by ascending delivery date
      }
  
      if (a.deliveryStatus === "Delivered") {
        // For Cleared: Nearest past date comes first
        return dateB - dateA;  // sort by descending delivery date
      }
  
      if (a.deliveryStatus === "Due") {
        // For Due: Nearest future date comes last
        return dateA - dateB;  // sort by ascending delivery date
      }
  
      return 0; // default case, should not reach here
    });
  
    setFilteredInvoices(sortedInvoices);
  };
  


  const handleDeliverClick = (id) => {
    if (window.confirm('Are you sure you want to deliver this invoice?')) {
      handleDeliver(id);
    }
  };

  // Update Delivery Status to "Delivered"
  const handleDeliver = async (invoiceId) => {
    try {
      const response = await fetch(`/api/updateDeliveryStatus/${invoiceId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deliveryStatus: 'Delivered' })
      });

      if (response.ok) {
        // Update the status in the local state after successful update
        setInvoices((prevInvoices) =>
          prevInvoices.map((invoice) =>
            invoice._id === invoiceId ? { ...invoice, deliveryStatus: 'Delivered' } : invoice
          )
        );
        sortInvoices(invoices); // Re-sort after update
      } else {
        throw new Error('Failed to update delivery status');
      }
    } catch (error) {
      console.error('Error updating delivery status:', error);
      alert('There was an error updating the delivery status.');
    }
  };

  // Open the Edit status modal or dropdown for a specific invoice
  const handleEditStatus = (invoice) => {
    setEditingInvoice(invoice);
    setNewStatus(invoice.deliveryStatus); // Set the current status as the default
  };

  // Update the delivery status when the user selects a new one
  const handleChangeStatus = async () => {
    if (!newStatus) {
      alert("Please select a status");
      return;
    }

    try {
      const response = await fetch(`/api/updateDeliveryStatus/${editingInvoice._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deliveryStatus: newStatus })
      });

      if (response.ok) {
        // Update the invoice in local state with the new status
        setInvoices((prevInvoices) =>
          prevInvoices.map((invoice) =>
            invoice._id === editingInvoice._id ? { ...invoice, deliveryStatus: newStatus } : invoice
          )
        );
        setEditingInvoice(null); // Close modal after update
        sortInvoices(invoices); // Re-sort after update
      } else {
        throw new Error('Failed to update delivery status');
      }
    } catch (error) {
      console.error('Error changing status:', error);
      alert('There was an error changing the status.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <SideNavbar />

      {/* Main Content */}
      <div className="flex-grow ml-0 lg:ml-64 p-4 sm:p-8 md:px-10 lg:px-14 bg-white shadow-lg rounded-lg border border-gray-300 max-w-full w-full sm:w-full md:w-full lg:w-auto sm:px-6 md:px-12 lg:px-14 overflow-auto">
        <h1 className="text-3xl font-semibold mb-6">Delivery Status</h1>

        {/* Status Filter */}
        <div className="mb-4 flex justify-between items-center">
          <select
            value={statusFilter}
            onChange={handleStatusFilter}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Filter by Status</option>
            <option value="Due">Due</option>
            <option value="Pending">Pending</option>
            {/* <option value="Cleared">Cleared</option> */}
          </select>
        </div>

        {/* Check if no invoices exist */}
        {filteredInvoices.length === 0 ? (
          <div className="text-center text-gray-500">No invoices found.</div>
        ) : (
          <table className="w-full mb-8 border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 sm:p-4 text-left border border-gray-300">Serial Number</th>
                <th className="p-2 sm:p-4 text-left border border-gray-300">Client Name</th>
                <th className="p-2 sm:p-4 text-left border border-gray-300">Delivery Date</th>
                <th className="p-2 sm:p-4 text-left border border-gray-300">Pending Amount (KWD)</th>
                <th className="p-2 sm:p-4 text-left border border-gray-300">Status</th>
                <th className="p-2 sm:p-4 text-left border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice._id} className="hover:bg-gray-50">
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">{invoice.serialNumber}</td>
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">{invoice.clientName}</td>
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">{invoice.deliveryDate}</td>
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">{invoice.pendingAmount.toFixed(2)} KWD</td>
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">
                    <span className={`${
                      invoice.deliveryStatus === "Due" ? "text-red-500 font-bold" :
                      invoice.deliveryStatus === "Pending" ? "text-blue-500 font-bold" :
                      invoice.deliveryStatus === "Delivered" ? "text-green-500 font-bold" :
                      "text-yellow-500 font-bold"}`}>
                      {invoice.deliveryStatus}
                    </span>
                  </td>
                  <td className="p-2 sm:p-4 text-sm border border-gray-300 flex space-x-2">
                    {invoice.deliveryStatus !== "Delivered" && (
                      <button
                        onClick={() => handleDeliverClick(invoice._id)}
                        className="bg-green-600 text-white py-1 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-green-700 text-xs sm:text-sm"
                      >
                        Deliver
                      </button>
                    )}
                    <button
                      onClick={() => handleEditStatus(invoice)}
                      className="bg-blue-600 text-white py-1 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-blue-700 text-xs sm:text-sm"
                    >
                      Edit Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Edit Delivery Status Modal */}
        {editingInvoice && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-4">Edit Delivery Status</h3>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Due">Due</option>
                <option value="Pending">Pending</option>
                {/* <option value="Cleared">Cleared</option> */}
                <option value="Delivered">Delivered</option>
              </select>
              <div className="mt-4 flex space-x-2 justify-end">
                <button
                  onClick={handleChangeStatus}
                  className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700 text-xs sm:text-sm"
                >
                  Update Status
                </button>
                <button
                  onClick={() => setEditingInvoice(null)}
                  className="bg-gray-600 text-white py-1 px-3 rounded-md hover:bg-gray-700 text-xs sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryStatus;
