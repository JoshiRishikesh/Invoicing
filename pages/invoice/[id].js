import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavbar"; // Assuming you have a sidebar component

const ViewInvoice = () => {
  const router = useRouter();
  const { id } = router.query;
  const [invoiceData, setInvoiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState({
    clientName: false,
    contactNumber: false,
    address: false,
    deliveryDate: false,
    paymentMode: false,
    deliveryStatus: false,
  });
  const [editedData, setEditedData] = useState({
    clientName: "",
    contactNumber: "",
    address: "",
    deliveryDate: "",
    paymentMode: "",
    deliveryStatus: "",
    totalAmount: 0,
    discount: 0,
    finalAmount: 0,
    pendingAmount: 0
  });

  const [makePaymentVisible, setMakePaymentVisible] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchInvoiceData = async () => {
      try {
        const response = await fetch(`/api/getInvoice/${id}`);
        const data = await response.json();

        if (response.ok) {
          setInvoiceData(data);
          setEditedData({
            clientName: data.clientName,
            contactNumber: data.contactNumber,
            address: data.address,
            deliveryDate: data.deliveryDate,
            paymentMode: data.paymentMode,
            deliveryStatus: data.deliveryStatus,
            totalAmount: data.totalAmount,
            discount: data.discount,
            finalAmount: data.finalAmount,
            pendingAmount: data.pendingAmount
          });
        } else {
          setError(data.message || "Error fetching invoice data");
        }
      } catch (err) {
        setError("Error fetching invoice data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoiceData();
  }, [id]);

  const handleEditClick = (field) => {
    setEditMode((prevMode) => ({
      ...prevMode,
      [field]: true
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`/api/updateInvoice/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedData)
      });

      if (response.ok) {
        const updatedInvoice = await response.json();
        setInvoiceData(updatedInvoice);
        setEditMode({
          clientName: false,
          contactNumber: false,
          address: false,
          deliveryDate: false,
          paymentMode: false,
          deliveryStatus: false,
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error saving data.");
      }
    } catch (err) {
      setError("Error saving data: " + err.message);
    }
  };

  const handleDeletePayment = async (paymentId) => {
    try {
      const response = await fetch(`/api/deletePayment/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentId }),
      });

      if (response.ok) {
        const updatedInvoice = await response.json();
        setInvoiceData(updatedInvoice);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error deleting payment.");
      }
    } catch (err) {
      setError("Error deleting payment: " + err.message);
    }
  };

  const handleMakePaymentClick = () => {
    setMakePaymentVisible(true);
  };

  const handleFullPayment = async () => {
    try {
      const response = await fetch(`/api/makePayment/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: invoiceData?.pendingAmount }),
      });

      if (response.ok) {
        const updatedInvoice = await response.json();
        setInvoiceData(updatedInvoice);
        setMakePaymentVisible(false);
      } else {
        setError("Failed to make payment.");
      }
    } catch (err) {
      setError("Error making full payment: " + err.message);
    }
  };

  const handlePartialPayment = async () => {
    if (!paymentAmount || isNaN(paymentAmount) || parseFloat(paymentAmount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    if (parseFloat(paymentAmount) > invoiceData?.pendingAmount) {
      setError(`Payment amount cannot exceed the pending amount of ${invoiceData?.pendingAmount} KWD.`);
      return;
    }

    try {
      const response = await fetch(`/api/makePartialPayment/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount: parseFloat(paymentAmount) })
      });

      if (response.ok) {
        const updatedInvoice = await response.json();
        setInvoiceData(updatedInvoice);
        setMakePaymentVisible(false);
        setPaymentAmount("");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error making payment.");
      }
    } catch (err) {
      setError("Error making partial payment: " + err.message);
    }
  };

  if (loading) return <div className="text-center text-2xl">Loading...</div>;
  if (error) return <div className="text-center text-red-500 text-2xl">{error}</div>;

  return (
    <div className="flex bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
      {/* Sidebar */}
      <SideNavbar />

      {/* Main Content */}
      <div className="flex-grow p-8 lg:ml-64 bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8 p-4 bg-blue-600 rounded-lg shadow-lg">
            Invoice #{invoiceData?.invoiceNumber}
          </h1>

          {/* Customer Information Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Information</h3>

              {/* Client Name */}
              <div className="flex justify-between items-center mb-4">
                {editMode.clientName ? (
                  <input
                    type="text"
                    name="clientName"
                    value={editedData.clientName}
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p><strong>Name:</strong> {invoiceData?.clientName}</p>
                )}
                <button
                  onClick={() => {
                    if (editMode.clientName) {
                      handleSaveClick();
                    } else {
                      handleEditClick("clientName");
                    }
                  }}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  {editMode.clientName ? "Save" : "Edit"}
                </button>
              </div>

              {/* Contact Number */}
              <div className="flex justify-between items-center mb-4">
                {editMode.contactNumber ? (
                  <input
                    type="text"
                    name="contactNumber"
                    value={editedData.contactNumber}
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p><strong>Contact:</strong> {invoiceData?.contactNumber}</p>
                )}
                <button
                  onClick={() => {
                    if (editMode.contactNumber) {
                      handleSaveClick();
                    } else {
                      handleEditClick("contactNumber");
                    }
                  }}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  {editMode.contactNumber ? "Save" : "Edit"}
                </button>
              </div>

              {/* Address */}
              <div className="flex justify-between items-center mb-4">
                {editMode.address ? (
                  <input
                    type="text"
                    name="address"
                    value={editedData.address}
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p><strong>Address:</strong> {invoiceData?.address}</p>
                )}
                <button
                  onClick={() => {
                    if (editMode.address) {
                      handleSaveClick();
                    } else {
                      handleEditClick("address");
                    }
                  }}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  {editMode.address ? "Save" : "Edit"}
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Invoice Details</h3>
              <p><strong>Invoice Date:</strong> {invoiceData?.invoiceDate}</p>
              <p><strong>Delivery Date:</strong>
                {editMode.deliveryDate ? (
                  <input
                    type="date"
                    name="deliveryDate"
                    value={editedData.deliveryDate}
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <span>{invoiceData?.deliveryDate}</span>
                )}
              </p>
              <button
                onClick={() => {
                  if (editMode.deliveryDate) {
                    handleSaveClick();
                  } else {
                    handleEditClick("deliveryDate");
                  }
                }}
                className="text-blue-500 hover:text-blue-700 mt-2 font-semibold"
              >
                {editMode.deliveryDate ? "Save" : "Edit"}
              </button>

              <p><strong>Reference Number:</strong> {invoiceData?.referenceNumber}</p>
              <p><strong>Serial Number:</strong> {invoiceData?.serialNumber}</p>
            </div>
          </div>

          {/* Products Table */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Products</h3>
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 border-b">Name</th>
                  <th className="py-3 px-4 border-b">Quantity</th>
                  <th className="py-3 px-4 border-b">Price</th>
                  <th className="py-3 px-4 border-b">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData?.products.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{product.name}</td>
                    <td className="py-3 px-4 border-b">{product.quantity}</td>
                    <td className="py-3 px-4 border-b">{product.price} KWD</td>
                    <td className="py-3 px-4 border-b">{product.total} KWD</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Amount Status Section */}
          <div className="mt-8 text-gray-700 space-y-2">
            <p><strong>Total Amount:</strong> {invoiceData?.totalAmount} KWD</p>
            <p><strong>Discount:</strong> {invoiceData?.discount} KWD</p>
            <p><strong>Final Amount:</strong> {invoiceData?.finalAmount} KWD</p>
            <p><strong>Advance Amount:</strong> {invoiceData?.advanceAmount} KWD</p>
            <p><strong>Pending Amount:</strong> {invoiceData?.pendingAmount} KWD</p>
          </div>

          {/* Payment History Table */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment History</h3>
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 border-b">Amount</th>
                  <th className="py-3 px-4 border-b">Timestamp</th>
                  <th className="py-3 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData?.paymentHistory.map((payment) => (
                  <tr key={payment._id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{payment.amount} KWD</td>
                    <td className="py-3 px-4 border-b">{new Date(payment.date).toLocaleString()}</td>
                    <td className="py-3 px-4 border-b">
                      <button
                        onClick={() => handleDeletePayment(payment._id)}
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Make Payment Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleMakePaymentClick}
              className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition duration-300"
            >
              Make Payment
            </button>
          </div>

          {/* Payment Options (Full Payment / Partial Payment) */}
          {makePaymentVisible && (
            <div className="mt-8 text-center">
              <button
                onClick={handleFullPayment}
                className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition duration-300 mr-4"
              >
                Full Payment
              </button>
              <input
                type="number"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className="px-4 py-3 border rounded-xl text-gray-700 shadow-md"
                placeholder="Enter amount"
              />
              <button
                onClick={handlePartialPayment}
                className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition duration-300 ml-4"
              >
                Make Partial Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewInvoice;
