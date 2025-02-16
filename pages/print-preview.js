import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PrintPreview = () => {
  const router = useRouter();
  const [invoiceData, setInvoiceData] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [showSavePdf, setShowSavePdf] = useState(false); // Show Save PDF Button flag
  const printRef = useRef(null);

  useEffect(() => {
    if (router.query.invoiceData) {
      const data = JSON.parse(router.query.invoiceData);
      setInvoiceData(data);
    }
  }, [router.query.invoiceData]);

  const handleSaveInvoice = async () => {
    if (!invoiceData) return;
  
    // Ensure the address field is included (if not set, set it to "N/A")
    const updatedInvoiceData = {
      ...invoiceData,
      formData: {
        ...invoiceData.formData,
        address: invoiceData.formData.address || "N/A", // Default value for missing address
      },
    };
  
    console.log("Invoice Data Before Sending:", updatedInvoiceData); // Debugging Log
  
    try {
      const response = await fetch('/api/saveInvoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedInvoiceData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Invoice saved successfully!');
        setShowSavePdf(true); // Show Save PDF button after saving invoice
      } else {
        alert('Error saving invoice: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error saving the invoice.');
    }
  };
  
  
  

  const handleSavePdf = async () => {
    if (printRef.current) {
      setLoading(true); // Set loading state to true
      const element = printRef.current;
      const originalWidth = element.offsetWidth;
      const originalHeight = element.offsetHeight;

      element.style.width = '210mm';  // A4 width
      element.style.height = 'auto';

      try {
        // Use html2canvas to render the element as a canvas
        const canvas = await html2canvas(element, { scale: 1.5 }); // Adjust scale for performance
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`invoice_${invoiceData.formData.invoiceNumber}.pdf`);
      } catch (error) {
        console.error("Error generating PDF: ", error);
      } finally {
        // Reset the element's width and height
        element.style.width = originalWidth ? `${originalWidth}px` : '';
        element.style.height = originalHeight ? `${originalHeight}px` : '';
        setLoading(false); // Set loading state to false
      }
    }
  };

  const handleEditInvoice = () => {
    router.push("/invoice");
  };

  if (!invoiceData) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg border border-gray-300">
      <div
        id="invoice"
        ref={printRef}
        className="invoice-box p-4 sm:p-8 bg-white rounded-md border border-gray-200"
        aria-labelledby="invoiceHeader"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-20 sm:h-28 mb-4 sm:mb-0"
          />
          <div className="text-center sm:text-right">
            <h1 id="invoiceHeader" className="text-2xl sm:text-4xl font-bold font-business">
            خياط زهرة الفردوس
            </h1>
            <p className="text-md sm:text-lg font-semibold">
            مكان خاص للدشداشة
            </p>
            <p className="text-md sm:text-lg font-semibold">
            احدث انواع الاقمشة والخياطة الرجالية والجاهزة
            </p>
            <p className="text-md sm:text-lg font-semibold">
            الفحيحيل - شارع مكة - بناية قيس الغانم - الطابق الأرضي محل رقم ٦٢ 
            </p>
            <p className="text-md sm:text-lg font-semibold">
              66396881 / رقم تيلفون :-  51235130
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mb-8">
          <div>
            {/* <h3 className="text-lg sm:text-xl font-semibold">Bill To:</h3> */}
            <p><strong>{invoiceData.formData.clientName}</strong></p>
            <p><strong>{invoiceData.formData.contactNumber}</strong></p>
            <p><strong>{invoiceData.formData.address}</strong></p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl sm:text-3xl font-semibold">الفاتورة</h2>
            <p>Invoice #: <strong>{invoiceData.formData.invoiceNumber}</strong></p>
            <p>Created: <strong>{invoiceData.formData.invoiceDate}</strong></p>
            <p>Due: <strong>{invoiceData.formData.deliveryDate}</strong></p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg sm:text-xl font-semibold">تفاصيل الفاتورة :</h3>
          <p>Reference #: <strong>{invoiceData.formData.referenceNumber}</strong></p>
          <p>Serial #: <strong>{invoiceData.formData.serialNumber}</strong></p>
          <p>Payment Mode: <strong>{invoiceData.formData.paymentMode}</strong></p>
        </div>

        <table className="w-full mb-8 border-t border-b border-gray-300">
          <thead>
            <tr className="border-b border-gray-300 bg-gray-100">
              <th className="p-2 sm:p-4 text-left">Product</th>
              <th className="p-2 sm:p-4 text-right">Qty</th>
              <th className="p-2 sm:p-4 text-right">Price (KWD)</th>
              <th className="p-2 sm:p-4 text-right">Total Price (KWD)</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.products.map((product) => (
              <tr key={product.id} className="border-b border-gray-200">
                <td className="p-2 sm:p-4"><strong>{product.name}</strong></td>
                <td className="p-2 sm:p-4 text-right"><strong>{Number(product.quantity).toFixed(2)}</strong></td>
                <td className="p-2 sm:p-4 text-right"><strong>{Number(product.price).toFixed(2)}</strong></td>
                <td className="p-2 sm:p-4 text-right"><strong>{(Number(product.quantity) * Number(product.price)).toFixed(2)}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-right mb-8">
          <div className="flex justify-between border-t border-gray-300 pt-4">
            <p className="text-lg font-medium">Total:</p>
            <p className="text-lg font-medium"><strong>{Number(invoiceData.totalAmount).toFixed(2)} KWD</strong></p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-medium">Discount:</p>
            <p className="text-lg font-medium"><strong>{Number(invoiceData.formData.discount).toFixed(2)} KWD</strong></p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-medium">Final Amount:</p>
            <p className="text-lg font-medium"><strong>{Number(invoiceData.finalAmount).toFixed(2)} KWD</strong></p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-medium">Advance:</p>
            <p className="text-lg font-medium"><strong>{Number(invoiceData.formData.advanceAmount).toFixed(2)} KWD</strong></p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-medium">Pending:</p>
            <p className="text-lg font-medium"><strong>{Number(invoiceData.pendingAmount).toFixed(2)} KWD</strong></p>
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <img src="/stamp.png" alt="Stamp" className="h-20" />
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        {/* Initially show Save Invoice button */}
        {!showSavePdf ? (
          <button
            onClick={handleSaveInvoice}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none"
          >
            Save Invoice
          </button>
        ) : (
          <>
            {/* Show Save PDF button after Save Invoice is clicked */}
            <button
              onClick={handleSavePdf}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Save PDF
            </button>
          </>
        )}

        {/* Keep Edit Invoice button as it is */}
        <button
          onClick={handleEditInvoice}
          className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none"
        >
          Edit Invoice
        </button>
      </div>
    </div>
  );
};

export default PrintPreview;
