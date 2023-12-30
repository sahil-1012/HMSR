import { useEffect, useState } from "react";
import { Button, IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PaymentIcon from '@mui/icons-material/Payment';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';
import FeedbackIcon from '@mui/icons-material/Feedback';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NavButton from "../mui/NavButton";
import { useLocation } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SideDrawer from "../mui/SideDrawer";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  // useEffect(() => {
  //   const scrollAnimElements = document.querySelectorAll(
  //     "[data-animate-on-scroll]"
  //   );
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       for (const entry of entries) {
  //         if (entry.isIntersecting || entry.intersectionRatio > 0) {
  //           const targetElement = entry.target;
  //           targetElement.classList.add(styles.animate);
  //           observer.unobserve(targetElement);
  //         }
  //       }
  //     },
  //     {
  //       threshold: 0.15,
  //     }
  //   );

  //   for (let i = 0; i < scrollAnimElements.length; i++) {
  //     observer.observe(scrollAnimElements[i]);
  //   }

  //   return () => {
  //     for (let i = 0; i < scrollAnimElements.length; i++) {
  //       observer.unobserve(scrollAnimElements[i]);
  //     }
  //   };
  // }, []);

  const tabs = [
    {
      icon: <HomeIcon />,
      name: "Home",
      active: currentPage === '/home',
      location: "/home"
    },
    {
      icon: <AddBusinessIcon />,
      name: "Services",
      active: currentPage === '/services',
      location: "/services"
    },
    {
      icon: <PaymentIcon />,
      name: "Payments",
      active: currentPage === '/payments',
      location: "/payments"
    },
    {
      icon: <DateRangeIcon />,
      name: "Attendance",
      active: currentPage === '/attendance',
      location: "/attendance"
    },
    {
      icon: <FeedbackIcon />,
      name: "Feedback",
      active: currentPage.startsWith('/feeds'),
      location: "/feeds?tab=Complaint"
    },
    {
      icon: <NotificationsIcon />,
      name: "Notification",
      active: currentPage === '/notifications',
      location: "/notifications"
    }
  ];


  return (
    <>
      <SideDrawer tabs={tabs} />

      <nav className="lg:w-[280px] xl:w-[320px] ">
        <div className="relative hidden tab:flex mb:w-20 tab:w-64 xl:w-80 bg-slate-100 h-full">
          <div className="relative flex-col flex w-full p-5 space-y-5">
            <div>
              <div className="flex flex-row w-full justify-center mb-5">
                <img
                  className=" w-14 h-14"
                  alt=""
                  src="/ellipse-1.svg"
                // data-animate-on-scroll
                />
                <div className=" hidden tab:flex flex-col tab:px-1 xl:px-4 w-full">
                  <h3 className="flex w-full text-gray-850 font-medium text-lg">Anna George</h3>
                  <p className="flex text-slate-400 font-medium text-sm ">
                    HN-512
                  </p>
                </div>
                <span className="hidden xl:flex items-center">
                  <VerifiedIcon className="text-green-700" />
                </span>
              </div>
              <div className="flex-none bg-gray-300 h-[1.5px] " />
            </div>

            {tabs.map((tab, index) => (
              <NavButton key={index} icon={tab.icon} name={tab.name} active={tab.active} location={tab.location} />
            ))}

            <div className="bg-gray-300 h-[1.5px] " />

            <div className="pt-5">
              <NavButton icon={<ManageAccountsIcon />} name={'User Settings'} active={currentPage.startsWith('/updateDetails')} location={'/updateDetails?tab=Update+Details'} />
            </div>

            <div className="hidden tab:flex flex-col items-center justify-center ">
              <Button color="error" fullWidth size="large" sx={{ paddingY: '12px', backgroundColor: '#fee2e2' }} endIcon={<ExitToAppIcon sx={{ marginLeft: '8px' }} />}>Logout</Button>
            </div>
          </div>
        </div >
      </nav>

    </>

  );
};

export default NavBar;