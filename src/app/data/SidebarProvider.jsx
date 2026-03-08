"use client";
import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext();

export function useSidebarContext() {
  return useContext(SidebarContext);
}

export function SidebarProvider({ children }) {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabView, setIsTabView] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isTabViewheader, setIsTabViewheader] = useState(false);

  // const [small, setSmall] = useState(false);
  


  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const isTab = window.innerWidth <= 1280;
      // const small = window.innerWidth <= 450;
      if (isMobile) { setSidebarOpen(false) }

      setIsMobileView(isMobile);
      setIsTabView(isTab);
      // setSmall(small);
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

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const isTab = window.innerWidth <= 1280;
      // const small = window.innerWidth <= 450;
      if (isMobile) { setSidebarOpen(false) }

      setIsMobileView(isMobile);
      setIsTabViewheader(isTab);
      // setSmall(small);
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

  const [isMobile, setIsMobile] = useState(false);
  // const [isTab, setIsTab] = useState(false);
  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
      // setIsTab(window.innerWidth <= 1280);
    };

    window.addEventListener('resize', checkWindowSize);
    checkWindowSize();

    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => { };

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

  // console.log(isPlanActive, "haa ya naa");
  return (
    <SidebarContext.Provider
      value={{ sidebarOpen, setSidebarOpen, isMobileView, isTabView, isMobile, isTabViewheader, setIsTabViewheader }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
` `;
