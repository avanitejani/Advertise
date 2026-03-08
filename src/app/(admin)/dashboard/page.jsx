

// "use client";
// import Dashboard from '@/app/Components/Admin/Pages/Dashboard'
// import { useSidebarContext } from "@/app/data/SidebarProvider";
// import React, { useEffect, useState } from 'react'

// const Dashboardpage = () => {
//   const { sidebarOpen } = useSidebarContext();

//   const [isMobile, setIsMobile] = useState(false);
//   const [isTab, setIsTab] = useState(false);
//   useEffect(() => {
//     const checkWindowSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       setIsTab(window.innerWidth <= 1280);
//     };

//     window.addEventListener('resize', checkWindowSize);
//     checkWindowSize();

//     return () => {
//       window.removeEventListener('resize', checkWindowSize);
//     };
//   }, []);

//   return (
//     <div className={` ${sidebarOpen ? "ml-[240px] mt-[4.5rem] " : isMobile ? "w-full mt-20" : "ml-[73px] mt-16"} `}>
//       <div className="pl-2 pr-2 md:pr-5 pt-1 ">
//         <Dashboard isTab={isTab} />
//       </div>
//     </div>
//   );
// };

// export default Dashboardpage;

"use client";
import Dashboard from "@/app/Components/Admin/Pages/Dashboard";
// import Dashboard from '@/app/Components/Admin/Pages/Dashboard'
import { useSidebarContext } from "@/app/data/SidebarProvider";
import React, { useEffect, useState } from 'react'

const Dashboardpage = () => {
  const { sidebarOpen } = useSidebarContext();

  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTab(window.innerWidth <= 1280);
    };
    window.addEventListener('resize', checkWindowSize);
    checkWindowSize();
    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  return (
    // Added bg-[#f8fafc] to match the dashboard background color
    // min-h-screen ensures the background covers the whole page
    <div className={`  transition-all duration-300 ${sidebarOpen ? "ml-[288px] mt-[4.2rem]" : isMobile ? "w-full mt-20" : "ml-[73px] mt-16"
      }`}>
      <div className="p-4 md:p-6 h-[calc(100vh-5rem)] flex flex-col">
       
        <div className="flex-1 overflow-hidden relative">
          <Dashboard isTab={isTab} />
        </div>
      </div>
    </div>
  );
};

export default Dashboardpage;