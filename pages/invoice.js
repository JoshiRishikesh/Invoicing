import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import SideNavbar from "../components/SideNavbar"; // Import SideNavbar component
import CalendarPage from "../pages/calendar";
import { format } from 'date-fns-tz';

function ProductTable({ products, productOptions, handleProductChange, removeProduct, addProduct }) {
  return (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="block sm:hidden"> {/* Vertical layout for small screens */}
        {products.map((product, index) => (
          <div key={product.id} className="mb-4 border-b border-gray-300 pb-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Product</label>
              <select
                value={product.name}
                onChange={(e) => handleProductChange(index, "name", e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {productOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Quantity</label>
              <input
                type="number"
                value={product.quantity}
                onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Price</label>
              <input
                type="number"
                value={product.price}
                onChange={(e) => handleProductChange(index, "price", e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Total</label>
              <input
                type="number"
                value={product.quantity * product.price}
                readOnly
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
              />
            </div>
            <div className="text-center">
              {products.length > 1 && (
                <button
                  onClick={() => removeProduct(index)}
                  className="text-red-600 hover:text-red-800 text-xl"
                >
                  ❌
                </button>
              )}
            </div>
          </div>
        ))}
        <button
          onClick={addProduct}
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none"
        >
          Add Another Product
        </button>
      </div>

      <div className="hidden sm:block overflow-x-auto"> {/* Horizontal layout for larger screens */}
        <table className="min-w-full text-sm table-auto border-collapse">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <select
                    value={product.name}
                    onChange={(e) => handleProductChange(index, "name", e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {productOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </td>
                <td className="p-4">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>
                <td className="p-4">
                  <input
                    type="number"
                    value={product.price}
                    onChange={(e) => handleProductChange(index, "price", e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </td>
                <td className="p-4 bg-gray-100">{(product.quantity * product.price).toFixed(2)}</td>
                <td className="p-4 text-center">
                  {products.length > 1 && (
                    <button
                      onClick={() => removeProduct(index)}
                      className="text-red-600 hover:text-red-800 text-xl"
                    >
                      ❌
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={addProduct}
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none"
        >
          Add Another Product
        </button>
      </div>
    </div>
  );
}

export default function Invoice() {
  const productOptions = [
    // "Fabric",
    "Fabric + Stitching",
    "Readymade Cloth",
    "Cut Piece",
    "Stitching",
  ];
  
  const currentDateString = format(new Date(), 'yyyy-MM-dd', { timeZone: 'Asia/Kolkata' });
  const [formData, setFormData] = useState({
    invoiceNumber: `INV-${Date.now()}`,
    invoiceDate: currentDateString,
    clientName: "",
    contactNumber: "",
    address: "",
    referenceNumber: "",
    serialNumber: "",
    discount: 0,
    advanceAmount: 0,
    paymentMode: "Cash",
    deliveryDate: currentDateString,
  });

  const [products, setProducts] = useState([
    { id: 1, name: productOptions[0], quantity: 1, price: 0, total: 0 },
  ]);

  const [showCalendarModal, setShowCalendarModal] = useState(false); // Manage modal visibility
  const [selectedDeliveryDate, setSelectedDeliveryDate] = useState(formData.deliveryDate); // Store selected delivery date
  const [popupVisible, setPopupVisible] = useState(false); // State for showing the popup

  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('invoiceData');
    if (storedData) {
      const { formData, products } = JSON.parse(storedData);
      setFormData(formData);
      setProducts(products);
      localStorage.removeItem('invoiceData');  // Clear local storage after loading data
    }
  }, []);

  // Function to open the calendar modal
  const openCalendarModal = () => {
    setShowCalendarModal(true);
  };

  // Function to close the calendar modal
  const closeCalendarModal = () => {
    setShowCalendarModal(false);
  };

  // Function to update delivery date when selected from the calendar
  const handleDateSelect = (date) => {
    setFormData({
      ...formData,
      deliveryDate: date,
    });
    setSelectedDeliveryDate(date);
    closeCalendarModal(); // Close the modal after selection
  };

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleProductChange = (index, field, value) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product, i) =>
        i === index ? { ...product, [field]: value, total: field === 'quantity' || field === 'price' ? (field === 'quantity' ? value * product.price : product.quantity * value) : product.total } : product
      );
      return updatedProducts;
    });
  };

  const addProduct = () => {
    setProducts([
      ...products,
      { id: products.length + 1, name: productOptions[0], quantity: 1, price: 0, total: 0 },
    ]);
  };

  const removeProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const totalAmount = products.reduce((sum, product) => sum + product.total, 0);
  const finalAmount = totalAmount - (Number(formData.discount) || 0);
  const pendingAmount = finalAmount - (Number(formData.advanceAmount) || 0);

  const handlePrintRedirect = () => {
    if (router.isReady) {
      // Save data to local storage
      localStorage.setItem('invoiceData', JSON.stringify({
        formData,
        products,
        totalAmount,
        finalAmount,
        pendingAmount,
      }));

      router.push({
        pathname: "/print-preview",
        query: {
          invoiceData: JSON.stringify({
            formData,
            products,
            totalAmount,
            finalAmount,
            pendingAmount,
          }),
        },
      }).catch((error) => {
        console.error("Navigation error:", error);
      });
    }
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  const handlePreviewInvoice = () => {
    setPopupVisible(true); // Show the popup when the button is clicked
  };

  return (
    <>
      <Head>
        <title>Invoice Form</title>
      </Head>
      <div className="h-screen flex bg-gray-100">
        <SideNavbar /> {/* Integrate SideNavbar component */}
        <div className="flex-grow p-8 lg:ml-64"> {/* Adjust content to avoid going behind the navbar */}
          <div className="container mx-auto bg-white shadow-lg rounded-lg p-6"> {/* Add content container */}
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Create Your Invoice</h2>
            </header>
            <main>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
                {[ 
                  { label: "Invoice Number", value: formData.invoiceNumber, readOnly: true },
                  { label: "Invoice Date", value: formData.invoiceDate, readOnly: true, type: "date" },
                  { label: "Client Name", value: formData.clientName, field: "clientName" },
                  { label: "Contact Number", value: formData.contactNumber, field: "contactNumber", type: "tel" },
                  { label: "Reference Number", value: formData.referenceNumber, field: "referenceNumber" },
                  { label: "Serial Number", value: formData.serialNumber, field: "serialNumber" },
                  { label: "Discount", value: formData.discount, field: "discount", type: "number" },
                  { label: "Advance Amount", value: formData.advanceAmount, field: "advanceAmount", type: "number" },
                ].map((input, idx) => (
                  <div key={idx} className="w-full">
                    <label className="block text-gray-700 font-semibold mb-2">{input.label}</label>
                    <input
                      type={input.type || "text"}
                      value={input.value}
                      readOnly={input.readOnly}
                      onChange={input.field ? (e) => handleFormChange(input.field, e.target.value) : undefined}
                      className={`w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${input.readOnly ? "bg-gray-100" : "bg-white"}`}
                    />
                  </div>
                ))}
              </div>

              {/* Payment Mode and Delivery Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
                <div className="w-full">
                  <label className="block text-gray-700 font-semibold mb-2">Payment Mode</label>
                  <select
                    value={formData.paymentMode}
                    onChange={(e) => handleFormChange("paymentMode", e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option>Cash</option>
                    <option>Credit</option>
                    <option>Debit</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>

                <div className="w-full">
                  <label className="block text-gray-700 font-semibold mb-2">Delivery Date</label>
                  <input
                    type="date"
                    value={formData.deliveryDate}
                    onChange={(e) => handleFormChange("deliveryDate", e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={openCalendarModal}
                    className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none"
                  >
                    Check Delivery Date
                  </button>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Address</label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleFormChange("address", e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows={4}
                  ></textarea>
                </div>
              </div>

              {/* Products Table */}
              <ProductTable
                products={products}
                productOptions={productOptions}
                handleProductChange={handleProductChange}
                removeProduct={removeProduct}
                addProduct={addProduct}
              />

              {/* Totals Section */}
              <div className="mt-6 border-t pt-6">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total Amount</span>
                  <span>{totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Discount</span>
                  <span>{Number(formData.discount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Final Amount</span>
                  <span>{finalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Advance Amount</span>
                  <span>{Number(formData.advanceAmount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Pending Amount</span>
                  <span>{pendingAmount.toFixed(2)}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-between gap-4">
                <button
                  onClick={handlePrintRedirect}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                  Preview Invoice
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendarModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <button
              onClick={closeCalendarModal}
              className="absolute top-2 right-2 text-gray-700"
            >
              ✖
            </button>
            <CalendarPage onDateSelect={handleDateSelect} />
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {popupVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">
            <button
              onClick={handlePopupClose}
              className="absolute top-2 right-2 text-gray-700"
            >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-4">Invoice Preview</h3>
            <div className="overflow-auto">
              <div className="mb-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Total Amount:</span>
                  <span>{totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Discount:</span>
                  <span>{formData.discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Final Amount:</span>
                  <span>{finalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Pending Amount:</span>
                  <span>{pendingAmount.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={handlePrintRedirect}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                Print Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
