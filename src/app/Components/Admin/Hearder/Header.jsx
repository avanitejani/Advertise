"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSidebarContext } from "@/app/data/SidebarProvider";
import { usePathname, useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaFacebook, FaYoutube, FaMicroscope, FaUser } from "react-icons/fa";
import {
  LuLayoutDashboard, LuSearch, LuImage, LuInfo, LuLayers,
  LuShield, LuFileText, LuMail, LuWallet, LuUsers,
  LuBarChart2, LuMegaphone, LuSettings, LuChevronDown
} from "react-icons/lu";
import { GiHamburgerMenu, GiMicroscope, GiRotaryPhone } from "react-icons/gi";
import { HiClock, HiMenu } from "react-icons/hi";
import { Modal, Tooltip } from "antd";
import {
  // NotesSubHeading,
  AiNotesSubHeading,
  MyScribesSubHeading,
  TemplateBuilderSubHeading,
  LearnFormatSubHeading,
  PatientSubHeading,
  ProfileSubHeading,
} from "./SubHeading";
// import { logout } from "../../Auth/Logout";
import {
  AiNotesSubHeadingM,
  // NotesSubHeadingM,
  MyScribesSubHeadingM,
  TemplateBuilderSubHeadingM,
  LearnFormatSubHeadingM,
  PatientSubHeadingM,
  ProfileSubHeadingM,
} from "./MobileSubHeading";
import { useCommonVariableContext } from "../../../../../CommonVariableProvider";
import { PiWallet, PiYoutubeLogoFill } from "react-icons/pi";
// import { useCommonVariableContext } from "@/app/CommonVariableProvider";
const loaderClasses = [
  "loaderfirst",
  "loadertwo",
  "loaderthree",
  "loaderfour",
  "loaderfive",
  "loadersix",
];
const Header = () => {

  const [newdataP, setNewDataP] = useState({
    old_password: "",
    password: "",
    password_confirmation: "",
    email: "",
  });

  const router = useRouter();
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const { editId, setEditId } = useCommonVariableContext();
  const handleInputChange = (e) => {
    setNewDataP({ ...newdataP, [e.target.name]: e.target.value });
  };


  const styles = `
  .scroll-container {
    overflow-y: auto;
  }
  
  .scroll-container::-webkit-scrollbar {
    width: 8px; 
  }
  
  `;
  // Remove the leading forward slash from the pathname
  const targetString = "ERA/EOB Upload";

  const trimmedPathname = pathname.slice(1);
  // const isStepTwoActive = /^\/(admin|user)\/(step-two|terms|policies|plan-invoices|plan|model|user|chat|content|child-safety)/.test(pathname);
  const { sidebarOpen, setSidebarOpen, isTabView, isTabViewheader } =
    useSidebarContext();
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [smallbar, setSmallbar] = useState(false);

  const smallbaropefun = () => {
    setSmallbar(!smallbar);
  };


  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
      // setIsTab(window.innerWidth > 768);
    };
    window.addEventListener("resize", checkWindowSize);

    checkWindowSize();

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LuLayoutDashboard size={20} />,
      pathMatch: ["dashboard"],
      color: "text-indigo-600",
    },
    {
      label: "SERVICES",
      isGroup: true,
      children: [
        { href: "/google", label: "Google", icon: <LuSearch size={20} />, pathMatch: ["google"], color: "text-blue-500" },
        { href: "/youtube", label: "YouTube", icon: <FaYoutube size={20} />, pathMatch: ["youtube"], color: "text-red-500" },
        { href: "/meta", label: "Meta", icon: <FaFacebook size={20} />, pathMatch: ["meta"], color: "text-indigo-600" },
      ],
    },
    {
      label: "WEB",
      isGroup: true,
      children: [
        { href: "/banner", label: "Banner", icon: <LuImage size={20} />, pathMatch: ["banner"], color: "text-orange-500" },
        { href: "/about", label: "About", icon: <LuInfo size={20} />, pathMatch: ["about"], color: "text-emerald-500" },
        { href: "/services", label: "Services", icon: <LuLayers size={20} />, pathMatch: ["services"], color: "text-purple-500" },
        { href: "/privacy", label: "Privacy Policy", icon: <LuShield size={20} />, pathMatch: ["privacy"], color: "text-amber-600" },
        { href: "/terms", label: "Terms & Condition", icon: <LuFileText size={20} />, pathMatch: ["terms"], color: "text-cyan-600" },
        { href: "/contact", label: "Contact Us", icon: <LuMail size={20} />, pathMatch: ["contact"], color: "text-pink-500" },
      ],
    },
    { isDivider: true },
    { href: "/pricing", label: "Pricing", icon: <LuWallet size={20} />, pathMatch: ["pricing"], color: "text-emerald-500" },
    { href: "/users", label: "Users", icon: <LuUsers size={20} />, pathMatch: ["users"], color: "text-indigo-500" },
    { href: "/reporting", label: "Reporting", icon: <LuBarChart2 size={20} />, pathMatch: ["reporting"], color: "text-rose-500" },
    { href: "/announcement", label: "Announcement", icon: <LuMegaphone size={20} />, pathMatch: ["announcement"], color: "text-orange-500" },
    { href: "/config", label: "Service Configuration", icon: <LuSettings size={20} />, pathMatch: ["config"], color: "text-sky-500" },
  ];

  // Safely check if a link is active (Handles groups vs regular links)
  const isActive = (link) => {
    if (!link || !link.pathMatch) return false; // Prevent crash if pathMatch is missing
    return link.pathMatch.some((pattern) => {
      if (pattern instanceof RegExp) {
        return pattern.test(trimmedPathname);
      }
      return trimmedPathname === pattern;
    });
  };

  // Update filter to look inside groups
  // Update filter to safely look inside groups and handle dividers
  const filteredLinks = links.filter((link) => {
    const searchLower = (search || "").toLowerCase();

    if (link.isDivider) {
      return searchLower === "";
    }
    if (!link.label) return false;

    if (link.isGroup && link.children) {
      return link.children.some(child =>
        child.label && child.label.toLowerCase().includes(searchLower)
      );
    }
    return link.label.toLowerCase().includes(searchLower);
  });

  /* LOGOUT */
  const handleLogOut = () => {
    logout();
  };
  /* LOGOUT ENDS */

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Click occurred outside the dropdown
      if (setDropdownOpen) {
        setDropdownOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);



  const handleViewplan = () => {
    router.push("/pricing");
  };

  // Header component ke andar top par:
  const [openGroups, setOpenGroups] = useState({
    SERVICES: true, // Default open rahega
    WEB: true,      // Default open rahega
  });

  // Toggle function
  const toggleGroup = (label) => {
    setOpenGroups((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      <style>{styles}</style>
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
      <div className="w-full cursor-default">
        <div
          className={` ${isMobile ? " hidden" : sidebarOpen ? "w-72  fixed top-0 h-full" : "w-16  fixed top-0 h-full"} border border-gray-200 mb-20`}
        >
        
          
          {sidebarOpen ? (
            <aside className="flex flex-col   py-0 sidebar_container h-full overflow-none  bg-[#ffff]    ">
              
              <div className="flex my-auto pr-8 justify-between border-b border-gray-200">
                <div className="flex my-auto cursor-pointer justify-center ">
                  <div className="flex h-16 items-center px-8 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-gradient-to-br from-[#FF8C39] to-[#FF5C00] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
                        <div className="flex items-end gap-[2px]">
                          <div className="w-1.5 h-3 bg-white rounded-full opacity-60"></div>
                          <div className="w-1.5 h-5 bg-white rounded-full"></div>
                          <div className="w-1.5 h-4 bg-white rounded-full opacity-80"></div>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-[#1E293B] tracking-tight">AdPro</span>
                    </div>
                  </div>
                </div>
                <GiHamburgerMenu
                  size={25}
                  className="my-auto cursor-pointer"
                  onClick={() => setSidebarOpen(false)}
                />
              </div>

              <div className="flex flex-col justify-between flex-1 mt-3 h-[92%]">
                <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-2 space-y-1 mb-20">
                      {links.map((link, index) => {
                        if (link.isDivider) {
                          return <div key={index} className="my-4 border-t border-gray-100 mx-2" />;
                        }
                        // if (link.isGroup) {
                        //   return (
                        //     <div key={index} className="pt-4 pb-2">
                        //       <div onClick={() => toggleGroup(link.label)} className="flex items-center justify-between px-3 mb-3">
                        //         <p className="text-[11px] font-bold text-slate-400 tracking-[0.1em] uppercase">
                        //           {link.label}
                        //         </p>
                        //         <LuChevronDown className="text-slate-400" size={14} />
                        //       </div>
                        //       <div className="space-y-1">
                        //         {link.children.map((child, cIdx) => (
                        //           <Link
                        //             key={cIdx}
                        //             href={child.href}
                        //             className={`flex items-center gap-4 px-4 py-2.5 rounded-2xl transition-all group ${isActive(child)
                        //               ? "bg-indigo-50 text-indigo-600 font-semibold"
                        //               : "text-slate-600 hover:bg-slate-50"
                        //               }`}
                        //           >
                        //             <span className={`${child.color} opacity-90 group-hover:opacity-100`}>
                        //               {child.icon}
                        //             </span>
                        //             <span className="text-[15px] font-medium">{child.label}</span>
                        //           </Link>
                        //         ))}
                        //       </div>
                        //     </div>
                        //   );
                        // }
                        if (link.isGroup) {
                          return (
                            <div key={index} className="pt-4 pb-2">
                              {/* Header - Click karne par toggle hoga */}
                              <div
                                onClick={() => toggleGroup(link.label)}
                                className="flex items-center justify-between px-3 mb-3 cursor-pointer group/item"
                              >
                                <p className="text-[11px] font-bold text-slate-400 tracking-[0.1em] uppercase group-hover/item:text-indigo-500 transition-colors">
                                  {link.label}
                                </p>
                                <LuChevronDown
                                  className={`text-slate-400 transition-transform duration-300 ${openGroups[link.label] ? "" : "-rotate-90"}`}
                                  size={14}
                                />
                              </div>

                              {/* Children Container - Isme animation aur hide/show logic hai */}
                              <div className={`space-y-1 transition-all duration-500 ease-in-out overflow-hidden ${openGroups[link.label] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                }`}>
                                {link.children.map((child, cIdx) => (
                                  <Link
                                    key={cIdx}
                                    href={child.href}
                                    className={`flex items-center gap-4 px-4 py-2.5 rounded-2xl transition-all group ${isActive(child)
                                      ? "bg-indigo-50 text-indigo-600 font-semibold"
                                      : "text-slate-600 hover:bg-slate-50"
                                      }`}
                                  >
                                    <span className={`${child.color} opacity-90 group-hover:opacity-100`}>
                                      {child.icon}
                                    </span>
                                    <span className="text-[15px] font-medium">{child.label}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        const active = isActive(link);
                        return (
                          <Link
                            key={index}
                            href={link.href}
                            className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group ${active
                              ? "bg-[#EEF2FF] text-[#4F46E5] font-semibold"
                              : "text-slate-600 hover:bg-slate-50"
                              }`}
                          >
                            <span className={`${active ? "text-indigo-600" : link.color} opacity-90`}>
                              {link.icon}
                            </span>
                            <span className="text-[15px] font-medium">{link.label}</span>
                          </Link>
                        );
                      })}
                  
                  
                    </div>
                
                <div className="p-1"></div>
              </div>
            </aside>
          ) : (
              <aside className="fixed  left-2 w-20  h-screen  bg-white shadow-lg flex flex-col items-center pb-5 border-gray-300 border-r rtl:border-l rtl:border-r-0 ">
              <div className="flex justify-between">
                <GiHamburgerMenu
                  size={25}
                  className="mx-auto cursor-pointer my-4"
                  onClick={() => setSidebarOpen(true)}
                />
              </div>
                <div className="space-y-6 flex flex-col items-center overflow-y-auto scrollbar-thin w-full py-3 px-2">
                {links.filter(l => !l.isDivider).map((link, i) => {
                  // Handle nested icons for mini-bar
                  const items = link.isGroup ? link.children : [link];
                  return items.map((item, idx) => (
                    <Tooltip key={`${i}-${idx}`} title={item.label} placement="right">
                      <Link
                        href={item.href || "#"}
                        className={`p-3 rounded-xl transition-all ${isActive(item) ? 'bg-indigo-50 text-indigo-600 shadow-sm' : 'text-slate-400 hover:bg-slate-50'}`}
                      >
                        {item.icon}
                      </Link>
                    </Tooltip>
                  ));
                })}
              </div>

            </aside>
          )}
          
        </div>

        <div style={{ zIndex: "9999" }} className="z-[9999] pt-5 bg-[#ffff] h-screen fixed">
          {smallbar && (
            <aside
              className={`-mt-20  w-screen flex flex-col  h-100 px-5 my-6  bg-[#ffff] rounded-lg `}
            >
              <div className="flex justify-between">
                <div className="flex">
                  <span className="font-bold">
                    {/* <Image
                      width={70}
                      height={20}
                      src="/img/MDxbig2.png"
                      alt="Warning"
                      unoptimized
                    /> */}
                  </span>
                </div>
                <GiHamburgerMenu
                  size={25}
                  className="my-auto"
                  onClick={smallbaropefun}
                />
              </div>middleware.js
              <div className="flex flex-col grow mt-3">
                <div className="overflow-y-auto flex-grow max-h-[calc(100vh-140px)] pr-1">
                  <div className="space-y-2 pb-5">
                    {filteredLinks.map((link, index) => {
                      if (link.isDivider) {
                        return <div key={index} className="my-4 border-t border-gray-100 mx-2" />;
                      }

                      if (link.isGroup && link.children) {
                        return (
                          <div key={index} className="pt-4 pb-1">
                            {/* Mobile Group Header */}
                            <div
                              onClick={() => toggleGroup(link.label)}
                              className="flex items-center justify-between px-4 cursor-pointer"
                            >
                              <p className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
                                {link.label}
                              </p>
                              <LuChevronDown
                                className={`text-slate-400 transition-transform duration-300 ${openGroups[link.label] ? "" : "-rotate-90"}`}
                                size={14}
                              />
                            </div>

                            {/* Mobile Children List */}
                            <div className={`mt-2 space-y-1 transition-all duration-500 overflow-hidden ${openGroups[link.label] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                              }`}>
                              {link.children.map((child, cIdx) => (
                                <Link
                                  key={cIdx}
                                  href={child.href}
                                  onClick={smallbaropefun}
                                  className={`flex items-center p-3 rounded-xl transition-all ${isActive(child)
                                    ? "bg-indigo-50 text-indigo-600 font-bold"
                                    : "hover:bg-gray-50 text-gray-600"
                                    }`}
                                >
                                  <span className="mr-3">{child.icon}</span>
                                  <span className="text-sm">{child.label}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={index}
                          href={link.href}
                          onClick={smallbaropefun} // Close menu on click
                          className={`flex items-center p-3 rounded-xl transition-all ${isActive(link)
                              ? "bg-indigo-50 text-indigo-600 font-bold"
                              : "hover:bg-gray-50 text-gray-700"
                            }`}
                        >
                          <span className="mr-3">{link.icon}</span>
                          <span className="text-sm">{link.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>


            </aside>
          )}
        </div>

        <div
          className={`fixed top-0 bg-white shadow-none transition-all duration-300 
            ${isMobile
              ? "w-full left-0"
              : sidebarOpen
                ? "ml-72 w-[calc(100%-18rem)]"
                : "ml-22 w-[calc(100%-4rem)]"
            } 
          `}
          style={{ zIndex: "9999" }}
        >
          <div
            className={`flex flex-wrap w-full px-5 bg-[#ffff] border-b border-gray-200
              ${isTabView ? "justify-between -mb-7" : "justify-between py-3.5"} 
              ${isTabViewheader ? "justify-between" : "py-3"}
            `}
          >
            <div
              style={{ display: !isMobile ? "none" : "" }}
            >
              <span
                className={`${!isMobile ? "hidden " : " p-2 "}`}
                onClick={smallbaropefun}
              >
                <HiMenu size={25} />
              </span>
            </div>

            <div className="my-auto   ">
              <div className="relative w-full flex cursor-pointer ">
                {isTabView ? (
                  <>
                    <div
                      className="py-1 focus:outline-none"
                      onClick={toggleMenu}
                    >
                      {isTabViewheader ? (
                        <>
                          <div
                            className="py-2 focus:outline-none"
                            onClick={toggleMenu}
                          >
                            <p
                              className={`text-base  p-auto ${trimmedPathname === ""
                                ? "border-b-2  border-b-teal-400"
                                : ""
                                }`}
                            >
                              {trimmedPathname === "dashboard" ? (
                                "Dashboard"
                              ) :
                                trimmedPathname === "dashboard" ? (
                                  <AiNotesSubHeadingM />
                                )
                                  :
                                  trimmedPathname === "my-scribes" ? (
                                    <MyScribesSubHeadingM />
                                  )
                                    :
                                    trimmedPathname === "template-builder" ? (
                                      <TemplateBuilderSubHeadingM />
                                    )
                                      :
                                      trimmedPathname === "learn-format" ||
                                        trimmedPathname === "learn-format/soap-note" ||
                                        trimmedPathname === "learn-format/hp-note" ||
                                        trimmedPathname === "learn-format/progress-note" ? (
                                        <LearnFormatSubHeadingM />
                                      ) :
                                        trimmedPathname === "view-patient" ? (
                                          <PatientSubHeadingM />
                                        ) :
                                          trimmedPathname === "profile" ? (
                                            <ProfileSubHeadingM />
                                          )
                                            : (
                                              ""
                                            )}
                            </p>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    {menuOpen && (
                      <div className="fixed inset-0 flex justify-center  ">
                        <div className={`${isMobile ? " my-16" : "my-14"} bg-white w-full h-full  shadow-md scrollbar-thin overflow-auto overflow-y-scroll`}>
                          <div className="flex justify-between ">
                            <div></div>
                            <button
                              className="p-2 focus:outline-none "
                              onClick={toggleMenu}
                            >
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                ></path>
                              </svg>
                            </button>
                          </div>

                          <div className="px-10 pb-5 items-center flex flex-col justify-items-center gap-5 z-[1001]" >
                            {trimmedPathname === "dashboard" ? (
                              "Dashboard"
                            ) :
                              trimmedPathname === "dashboard" ? (
                                <AiNotesSubHeading />
                              )
                                : trimmedPathname === "my-scribes" ? (
                                  <MyScribesSubHeading />
                                ) :
                                  trimmedPathname === "template-builder" ? (
                                    <TemplateBuilderSubHeading />
                                  ) :
                                    trimmedPathname === "learn-format" ||
                                      trimmedPathname === "learn-format/soap-note" ||
                                      trimmedPathname === "learn-format/hp-note" ||
                                      trimmedPathname === "learn-format/progress-note" ? (
                                      <LearnFormatSubHeading />
                                    ) :
                                      trimmedPathname === "view-patient" ? (
                                        <PatientSubHeading />
                                      ) :
                                        trimmedPathname === "profile" ? (
                                          <ProfileSubHeading />
                                        ) : (
                                          ""
                                        )}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <p
                    className={`text-base  p-auto ${trimmedPathname === ""
                      ? "border-b-2  border-b-teal-400"
                      : ""
                      }`}
                  >
                    {trimmedPathname === "dashboard" ? (
                      "Dashboard"
                    ) :
                      trimmedPathname === "dashboard" ? (
                        <AiNotesSubHeading />
                      ) :
                        trimmedPathname === "my-scribes" ? (
                          <MyScribesSubHeading />
                        ) :
                          trimmedPathname === "template-builder" ? (
                            <TemplateBuilderSubHeading />
                          ) :
                            trimmedPathname === "learn-format" ||
                              trimmedPathname === "learn-format/soap-note" ||
                              trimmedPathname === "learn-format/hp-note" ||
                              trimmedPathname === "learn-format/progress-note" ? (
                              <LearnFormatSubHeading />
                            ) :
                              trimmedPathname === "view-patient" ? (
                                <PatientSubHeading />
                              ) :
                                trimmedPathname === "profile" ? (
                                  <ProfileSubHeading />
                                )
                                  : (
                                    ""
                                  )}
                  </p>
                )}
              </div>
            </div>


            <div className="my-auto gap-3 flex">
              <div>
                <span className="dashboard-nav py-1 px-3 flex justify-center my-auto rounded-md bg-[#D3F2DE] border-1 border-[#AAEECD] text-[#44957B]  ">
                  <span className="flex justify-center items-center my-auto gap-3">
                    <span>
                      <PiWallet size={20}/>
                    </span>
                    <span>
                     ₹ 2500
                    </span>
                  </span>
                   
                </span>

              </div>
              <div className="dashboard-nav w-9 h-9 rounded-full my-auto overflow-hidden border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1723189037167-8a0bb4c423af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" // Placeholder URL
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
