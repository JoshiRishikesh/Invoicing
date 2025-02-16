import { useState } from "react";
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { href: '/', label: 'Dashboard', icon: HomeIcon },
  // { href: '/about', label: 'About Us', icon: InfoIcon },
  // { href: '/contact', label: 'Contact', icon: ContactMailIcon },
  { href: '/invoice', label: 'Create New Invoice', icon: ReceiptIcon },
  { href: '/all-invoices', label: 'All Invoices', icon: ListAltIcon },
  { href: '/calendar', label: 'Calendar', icon: CalendarTodayIcon },
  { href: '/delivery-status', label: 'Delivery Status', icon: ReceiptIcon },  // New link
];

export default function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-full lg:h-screen">
      <div className="lg:hidden fixed top-0 left-0 p-4 z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <CloseIcon className="text-blue-500" /> : <MenuIcon className="text-blue-500" />}
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:flex-col fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 shadow-xl z-40`}>
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-extrabold mb-8 flex items-center">
            <HomeIcon className="mr-2 text-white" />
            Invoice Dashboard
          </h2>
          <nav className="flex-grow">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link href={item.href} legacyBehavior>
                    <a className="flex items-center text-lg p-2 rounded transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
                      <item.icon className="mr-2 text-white" />
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <footer className="text-center text-sm mt-auto opacity-80">
            <p>© 2025 CIS SERVICES. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
