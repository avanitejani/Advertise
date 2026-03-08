"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoWarningOutline } from "react-icons/io5";
import { FcDisclaimer } from "react-icons/fc";
import { Modal, Tooltip } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
const BasicFooter = () => {
    /* API */
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const updateTimeZonePath = "/api/user/timezone"
    /* API ENDS */
    const [isMobile, setIsMobile] = useState();
      useEffect(() => {
        const handleResize = () => {
          const isMobile = window.innerWidth <= 850;
          setIsMobile(isMobile);
        };
    
        // Attach the event listener if running in a browser
        if (typeof window !== "undefined") {
          handleResize();
          window.addEventListener("resize", handleResize);
    
          // Clean up the event listener when the component unmounts
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }
      }, []);
  
  
  return (
    <div>
       <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#e6ffed", // Light green for success
              color: "#1a3e24",
            },
          },
          error: {
            style: {
              background: "#ffe6e6", // Light red for error
              color: "#3e1a1a",
            },
          },
          warning: {
            style: {
              background: "#fffbe6", // Light yellow for warning
              color: "#3e3a1a",
            },
          },
        }}
      />
      <div style={{ zIndex: "100" }} className={` border border-gray-100   ${
                      isMobile
                        ? ""
                        : ""
                    }   fixed bottom-0 left-0    w-full z-100 bg-white flex justify-start items-center py-3 px-5 shadow-md`}>
      <div className="flex items-center">
       
          <p className="mr-2">© 2025 AdPro. All rights reserved.</p>
       
      </div>


      </div>
    </div>
  );
};

export default BasicFooter;
