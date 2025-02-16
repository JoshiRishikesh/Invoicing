import { useEffect, useState } from "react"; 
import Link from "next/link";
import SideNavbar from "../components/SideNavbar";

export default function Dashboard() {
  const [deliveries, setDeliveries] = useState([]);  
  const [deliveryCount, setDeliveryCount] = useState(0); 
  const [orders, setOrders] = useState([]); 
  const [orderCount, setOrderCount] = useState(0);
  const [isClient, setIsClient] = useState(false); 
  

  // Handle client-side rendering
  useEffect(() => {
    setIsClient(true); // Set client-side flag after the component mounts
  }, []);


  // Fetch deliveries data from the backend
  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const response = await fetch('/api/getDeliveries');
        const data = await response.json();

        if (response.ok) {
          setDeliveries(data);
        } else {
          console.error('Error fetching deliveries:', data.message);
        }
      } catch (err) {
        console.error('Error fetching deliveries:', err.message);
      }
    };

    fetchDeliveries();
  }, []);

  // Fetch orders data from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/getTodaysInvoices'); // Changed the endpoint to getInvoices
        const data = await response.json();
  
        if (response.ok) {
          console.log('Orders Data:', data); // Log the data structure
          setOrders(data);  // Set orders state
        } else {
          console.error('Error fetching orders:', data.message);  // Log any errors related to fetching orders
        }
      } catch (err) {
        console.error('Error fetching orders:', err.message);  // Catch any network or other errors
      }
    };
  
    fetchOrders();
  }, []);



  // Normalize the date to "YYYY-MM-DD" format without time
  const normalizeDate = (date) => {
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0); // Set to midnight
    return normalizedDate.toISOString().split('T')[0]; // Return the string part (YYYY-MM-DD)
  };

  // Get the current date string (today's date)
  const todayString = normalizeDate(new Date());

  // Calculate total deliveries and orders for today
  useEffect(() => {
    // Calculate delivery count for today
    const deliveryCount = deliveries.find(
      (delivery) => normalizeDate(new Date(delivery.deliveryDate)) === todayString
    )?.count || 0;

    // Calculate order count for today
    const orderCount = orders.find(
      (order) => normalizeDate(new Date(order.invoiceDate)) === todayString
    )?.count || 0;

    // Update the state for delivery and order counts
    setDeliveryCount(deliveryCount);
    setOrderCount(orderCount);
  }, [deliveries, orders, todayString]); // Trigger when deliveries, orders, or todayString changes

  if (!isClient) {
    return null; // Avoid rendering anything until after component mounts
  }


  return (
    <div className="h-screen flex bg-gray-100">
      <SideNavbar />
      <div className="flex-grow p-8 lg:ml-64"> {/* Adjust content to avoid going behind the navbar */}
        <div className="container mx-auto bg-white shadow-xl rounded-lg p-8">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800">Welcome to Invoice Dashboard</h1>
          </header>
          <main className="text-center">
            <p className="text-gray-600 text-lg mb-4">Manage your invoices easily and efficiently.</p>

            <div className="mt-4">
              <Link href="/invoice" legacyBehavior>
                <a className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105">
                  Create New Invoice
                </a>
              </Link>
            </div>

            {/* Total Deliveries Today Card */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-semibold mb-2">Total Deliveries Today</h2>
              <p className="text-xl font-bold">{deliveryCount}</p>
              <p className="mt-2 text-lg">Stay up-to-date with the latest deliveries for today!</p>
            </div>
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-semibold mb-2">Total Orders Today</h2>  {/* Updated to Orders */}
              <p className="text-xl font-bold">{orderCount}</p>  {/* Updated to orderCount */}
              <p className="mt-2 text-lg">Stay up-to-date with the latest orders for today!</p>  {/* Updated the description */}
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
