import { useEffect, useState } from "react";
import SideNavbar from "../components/SideNavbar"; // Import the SideNavbar

const AllInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [statusFilter, setStatusFilter] = useState(""); // State for the status filter (Cleared or Pending)

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



// Pop Up Before deleting Invoice.

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      handleDelete(id);
    }
  };
  



// Handle delete Invoice

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/deleteInvoice/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (response.ok) {
        // Update the UI or state to reflect the deletion
        setFilteredInvoices(filteredInvoices.filter(invoice => invoice._id !== id));
      } else {
        console.error('Failed to delete invoice:', data.message);
      }
    } catch (error) {
      console.error('Error deleting invoice:', error);
    }
  }; 




  // Handle search input and filter invoices based on contact number
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    let filtered = invoices;
    if (term !== "") {
      // Filter invoices by contact number
      filtered = invoices.filter((invoice) =>
        invoice.contactNumber.includes(term)
      );
    }

    // Apply sorting to filtered invoices after search
    sortInvoices(filtered);
  };

  // Handle filtering by invoice status
  const handleStatusFilter = (e) => {
    const status = e.target.value;
    setStatusFilter(status);

    let filtered = invoices;
    if (status) {
      // Filter invoices by the selected status (Cleared or Pending)
      filtered = invoices.filter((invoice) =>
        status === "Cleared" ? invoice.pendingAmount === 0 : invoice.pendingAmount > 0
      );
    }

    // Apply sorting to filtered invoices after status filtering
    sortInvoices(filtered);
  };

  // Sort invoices by status (pending first) and by date (latest first)
  const sortInvoices = (invoicesToSort) => {
    const sortedInvoices = invoicesToSort
      .sort((a, b) => {
        // First, sort by status: Pending invoices (pendingAmount > 0) should come first
        if (a.pendingAmount > 0 && b.pendingAmount === 0) {
          return -1; // a is Pending, b is Cleared
        }
        if (a.pendingAmount === 0 && b.pendingAmount > 0) {
          return 1; // a is Cleared, b is Pending
        }

        // If statuses are the same, sort by date: Latest first
        const dateA = new Date(a.invoiceDate);
        const dateB = new Date(b.invoiceDate);
        return dateB - dateA; // Latest date first
      });

    setFilteredInvoices(sortedInvoices);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex">
      {/* Sidebar */}
      <SideNavbar />

      {/* Main Content */}
      <div className="flex-grow ml-0 lg:ml-64 p-4 sm:p-8 md:px-10 lg:px-14 bg-white shadow-lg rounded-lg border border-gray-300 max-w-full w-full sm:w-full md:w-full lg:w-auto sm:px-6 md:px-12 lg:px-14 overflow-x-auto">
        <h1 className="text-3xl font-semibold mb-6">All Invoices</h1>

        {/* Search Input and Status Filter */}
        <div className="mb-6 flex space-x-4">
          <div className="w-1/3">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by Contact Number"
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status Filter Dropdown */}
          <div className="w-1/3">
            <select
              value={statusFilter}
              onChange={handleStatusFilter}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Invoices</option>
              <option value="Pending">Pending</option>
              <option value="Cleared">Cleared</option>
            </select>
          </div>
        </div>

        {/* Check if no invoices exist */}
        {filteredInvoices.length === 0 ? (
          <div className="text-center text-gray-500">No invoices found.</div>
        ) : (
          <table className="w-full mb-8 border-collapse">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-100">
                <th className="p-2 sm:p-4 text-left border border-gray-300">Serial Number</th>
                <th className="p-2 sm:p-4 text-left border border-gray-300">Client Name</th>
                <th className="p-2 sm:p-4 text-left border border-gray-300">Invoice Date</th>
                <th className="p-2 sm:p-4 text-left border border-gray-300">Total Amount (KWD)</th>
                <th className="p-2 sm:p-4 text-left border border-gray-300">Pending Amount (KWD)</th>
                <th className="p-2 sm:p-4 text-left border border-gray-300">Status</th>
                <th className="p-2 sm:p-4 text-left border border-gray-300">Actions</th>
                <th className="p-2 sm:p-4 text-left border border-gray-300">Delete</th> {/* Added Delete Column */}
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice._id} className="border-b border-gray-200">
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">{invoice.serialNumber}</td>
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">{invoice.clientName}</td>
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">{invoice.invoiceDate}</td>
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">{invoice.totalAmount.toFixed(2)} KWD</td>
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">{invoice.pendingAmount.toFixed(2)} KWD</td>
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">
                    <span className={invoice.pendingAmount > 0 ? "text-red-500 font-bold" : "text-green-500 font-bold"}>
                      {invoice.pendingAmount > 0 ? "Pending" : "Cleared"}
                    </span>
                  </td>
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">
                    <button
                      onClick={() => window.location.href = `/invoice/${invoice._id}`}
                      className="bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700"
                    >
                      View
                    </button>
                  </td>
                  <td className="p-2 sm:p-4 text-sm border border-gray-300">
                  <button
                    onClick={() => handleDeleteClick(invoice._id)}
                    className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllInvoices;
