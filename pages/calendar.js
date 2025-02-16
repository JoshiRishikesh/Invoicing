import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import SideNavbar from "../components/SideNavbar";

const CalendarPage = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [deliveryCount, setDeliveryCount] = useState(0);
  const [isClient, setIsClient] = useState(false); // Flag to ensure client-side rendering

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

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const selectedDateString = normalizeDate(date);
    const count = deliveries.find(
      (delivery) => normalizeDate(new Date(delivery.deliveryDate)) === selectedDateString
    )?.count || 0;
    setDeliveryCount(count);
  };

  // Function to normalize a Date object to "YYYY-MM-DD" format without time
  const normalizeDate = (date) => {
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    return normalizedDate.toISOString().split('T')[0];
  };

  // Helper function to format date as 'YYYY-MM-DD'
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Helper function to get delivery count for a specific date
  const getDeliveryCount = (date) => {
    const dateString = normalizeDate(date);
    return deliveries.find((delivery) => normalizeDate(new Date(delivery.deliveryDate)) === dateString)?.count || 0;
  };

  // Only render the calendar on the client side
  if (!isClient) {
    return null; // Avoid rendering anything until after component mounts
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNavbar />

      <div className="flex-grow ml-0 lg:ml-64 p-6 sm:p-8 md:px-10 lg:px-14 bg-white shadow-lg rounded-lg border border-gray-300 max-w-full w-full sm:w-full md:w-full lg:w-auto sm:px-6 md:px-12 lg:px-14 overflow-x-auto transition-all duration-300 ease-in-out">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800 transition-all duration-300 ease-in-out">Calendar</h1>

        <div className="flex justify-center mb-6">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileClassName={({ date, view }) => {
            const isToday = normalizeDate(date) === normalizeDate(new Date());
            const isDeliveryDay = getDeliveryCount(date) > 0;

            let classes = 'font-bold text-blue-800'; // Make all dates darker and bold by default

            // Apply different styles based on whether the date is today or has deliveries
            if (isToday) {
              classes += ' bg-blue-200 hover:bg-blue-400 text-dark '; // Style for today
            }
            if (isDeliveryDay) {
              classes += ' bg-blue-600 text-white '; // Style for delivery days (darker blue)
            } else {
              classes += ' hover:bg-blue-200 '; // Hover effect for other dates
            }

            return classes.trim();
          }}
          tileContent={({ date }) => {
            const count = getDeliveryCount(date);
            return count > 0 ? (
              <div className="text-xs text-white bg-blue-600 rounded-full p-2">{count}</div> // Darker blue for counts
            ) : null;
          }}
          tileDisabled={({ date }) => getDeliveryCount(date) === 0}
        />

        </div>

        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Deliveries on {formatDate(selectedDate)}</h2>
          <p className="text-lg mt-2 text-blue-600 font-semibold">Total Deliveries: {deliveryCount}</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
