

"use client";
import PrivacyEdit from "@/app/Components/Admin/Pages/PrivacyEdit";
import { useSidebarContext } from "@/app/data/SidebarProvider";
import React, { useEffect, useState } from 'react'

const PrivacyEditPage = () => {
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
    <div className={`  transition-all duration-300 ${sidebarOpen ? "ml-[288px] mt-[4.2rem]" : isMobile ? "w-full mt-20" : "ml-[73px] mt-16"
      }`}>
      <div className="p-4 md:p-6 flex flex-col">
       
        <div className="flex-1 overflow-hidden relative">
          <PrivacyEdit isTab={isTab} />
        </div>
      </div>
    </div>
  );
};

export default PrivacyEditPage;