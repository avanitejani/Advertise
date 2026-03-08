// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";

// import toast, { Toaster } from "react-hot-toast";
// import { RxCross2 } from "react-icons/rx";
// // import "./header.css";
// import { TbRefresh, TbTemplate } from "react-icons/tb";
// import { useSidebarContext } from "@/app/data/SidebarProvider";
// // import { FaEye } from "react-icons/fa";
// import { MdFileCopy, MdPersonalInjury, MdPlaylistAddCheckCircle } from "react-icons/md";

// import { usePathname, useRouter } from "next/navigation";
// // import {
// //   NotesSubHeading,
// // } from "./SubHeading";

// // import {
// //   NotesSubHeadingM,
// // } from "./MobailSubHeading";

// /* REACT ICONS */
// import { FaEye, FaEyeSlash, FaFacebook, FaYoutube, FaMicroscope, FaUser } from "react-icons/fa";
// import { IoIosLock, IoMdClose, IoMdTime } from "react-icons/io";
// import {
//   MdAppSettingsAlt,
//   MdLock,
//   MdMarkEmailRead,
//   MdNotificationsNone,
//   MdOutlineLogout,
// } from "react-icons/md";

// import {
//   LuLayoutDashboard, LuSearch, LuImage, LuInfo, LuLayers,
//   LuShield, LuFileText, LuMail, LuWallet, LuUsers,
//   LuBarChart2, LuMegaphone, LuSettings, LuChevronDown
// } from "react-icons/lu";


// import { FaCircleDot, FaDollarSign, FaXRay } from "react-icons/fa6";
// import { FaRegIdCard } from "react-icons/fa";
// import { FaStethoscope } from "react-icons/fa6";

// import { GiHamburgerMenu, GiMicroscope, GiRotaryPhone } from "react-icons/gi";
// import { IoSearchSharp, IoSettings } from "react-icons/io5";
// import {
//   RiChatUploadFill,
//   RiFileUploadFill,
//   RiMoneyDollarCircleFill,
//   RiTicket2Fill,
// } from "react-icons/ri";

// import { HiClock, HiMenu } from "react-icons/hi";
// import { HiClipboardDocumentList, HiInboxArrowDown } from "react-icons/hi2";
// import { Modal, Tooltip } from "antd";
// // import { PiListStarFill } from "react-icons/pi";
// import { BiSolidNotepad, BiSolidPhoneCall } from "react-icons/bi";
// // import { useCommonVariableContext } from "@/CommonVariableProvider";
// import { FiInbox, FiMonitor } from "react-icons/fi";
// // import {
// //   NotesSubHeadingM,
// //   AiNotesSubHeadingM,
// //   MyScribesSubHeadingM,
// //   TemplateBuilderSubHeadingM,
// //   LearnFormatSubHeadingM,
// //   PatientSubHeadingM,
// //   ProfileSubHeadingM,

// // } from ".MobileSubHeading";
// import {
//   // NotesSubHeading,
//   AiNotesSubHeading,
//   MyScribesSubHeading,
//   TemplateBuilderSubHeading,
//   LearnFormatSubHeading,
//   PatientSubHeading,
//   ProfileSubHeading,

// } from "./SubHeading";
// // import { logout } from "../../Auth/Logout";
// import {
//   AiNotesSubHeadingM,
//   // NotesSubHeadingM,
//   MyScribesSubHeadingM,
//   TemplateBuilderSubHeadingM,
//   LearnFormatSubHeadingM,
//   PatientSubHeadingM,
//   ProfileSubHeadingM,
// } from "./MobileSubHeading";
// import { useCommonVariableContext } from "../../../../../CommonVariableProvider";
// import { PiYoutubeLogoFill } from "react-icons/pi";
// // import { useCommonVariableContext } from "@/app/CommonVariableProvider";
// const loaderClasses = [
//   "loaderfirst",
//   "loadertwo",
//   "loaderthree",
//   "loaderfour",
//   "loaderfive",
//   "loadersix",
// ];
// const Header = () => {

//   const [newdataP, setNewDataP] = useState({
//     old_password: "",
//     password: "",
//     password_confirmation: "",
//     email: "",
//   });

//   const [isSaving, setIsSaving] = useState(false);
//   const [buttonloader, setButtonloader] = useState(false);
//   const [errors, setErrors] = useState({});

//   const [showAllNotification, setShowAllNotification] = useState(false);

//   // const userType = localStorage.getItem("userType");
//   // const userData = JSON.parse(localStorage.getItem("userData"));

//   const router = useRouter();
//   // const permitted = JSON.parse(localStorage.getItem("activepermissions"));
//   const dropdownRef = useRef(null);
//   const pathname = usePathname();
//   const { editId, setEditId } = useCommonVariableContext();
//   const handleInputChange = (e) => {
//     setNewDataP({ ...newdataP, [e.target.name]: e.target.value });
//   };


//   const styles = `
//   .scroll-container {
//     overflow-y: auto;
//   }
  
//   .scroll-container::-webkit-scrollbar {
//     width: 8px;
//   }
  
//   `;
//   // Remove the leading forward slash from the pathname
//   const targetString = "ERA/EOB Upload";

//   const trimmedPathname = pathname.slice(1);
//   // const isStepTwoActive = /^\/(admin|user)\/(step-two|terms|policies|plan-invoices|plan|model|user|chat|content|child-safety)/.test(pathname);
//   const { sidebarOpen, setSidebarOpen, isTabView, isTabViewheader } =
//     useSidebarContext();
//   const [search, setSearch] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const [isMobile, setIsMobile] = useState(false);
//   const [smallbar, setSmallbar] = useState(false);

//   const smallbaropefun = () => {
//     setSmallbar(!smallbar);
//   };


//   useEffect(() => {
//     const checkWindowSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       // setIsTab(window.innerWidth > 768);
//     };
//     window.addEventListener("resize", checkWindowSize);

//     checkWindowSize();

//     return () => {
//       window.removeEventListener("resize", checkWindowSize);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };
//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };



//   // const isActive = (link) => {
//   //   return link.pathMatch.some((pattern) => {
//   //     if (pattern instanceof RegExp) {
//   //       return pattern.test(trimmedPathname);
//   //     }
//   //     return trimmedPathname === pattern;
//   //   });
//   // };



//   // const links = [


//   //   {
//   //     // href: notesHref,
//   //     href: "/dashboard",
//   //     label: "Step Four",
//   //     icon: <BiSolidNotepad />,
//   //     // modulePermitted: ["notesget", "notescreate"],
//   //     pathMatch: ["dashboard"],
//   //   },

//   //   {
//   //     href: "/my-scribes",
//   //     label: "My Scribes",
//   //     icon: <HiInboxArrowDown />,
//   //     // modulePermitted: ["notesget", "notescreate"],
//   //     pathMatch: ["my-scribes"],
//   //   },

//   //   {
//   //     href: "/template-builder",
//   //     label: "Template Builder",
//   //     icon: <TbTemplate />,
//   //     // modulePermitted: ["notesget", "notescreate"],
//   //     pathMatch: ["template-builder"],
//   //   },

//   //   {
//   //     href: "/learn-format/soap-note",
//   //     label: "Learn Format",
//   //     icon: <MdFileCopy />,
//   //     // modulePermitted: ["notesget", "notescreate"],
//   //     pathMatch: ["learn-format", "learn-format/soap-note", "learn-format/hp-note", "learn-format/progress-note"],
//   //   },

//   //   {
//   //     href: "/view-patient",
//   //     label: "View Patient",
//   //     icon: <MdPersonalInjury />,
//   //     // modulePermitted: ["notesget", "notescreate"],
//   //     pathMatch: ["view-patient"],
//   //   },

//   //   {
//   //     href: "/account",
//   //     label: "Account",
//   //     icon: <BiSolidNotepad />,
//   //     // modulePermitted: ["notesget", "notescreate"],
//   //     pathMatch: ["account",],
//   //   },

//   //   // {
//   //   //   href: "/profile",
//   //   //   label: "Profile",
//   //   //   icon: <BiSolidNotepad />,
//   //   //   // modulePermitted: ["notesget", "notescreate"],
//   //   //   pathMatch: ["profile",],
//   //   // },

//   // ];

//   const links = [
//     {
//       href: "/dashboard",
//       label: "Dashboard",
//       icon: <LuLayoutDashboard size={20} />,
//       pathMatch: ["dashboard"],
//       color: "text-indigo-600",
//     },
//     {
//       label: "SERVICES",
//       isGroup: true,
//       children: [
//         { href: "/google", label: "Google", icon: <LuSearch size={20} />, pathMatch: ["google"], color: "text-blue-500" },
//         { href: "/youtube", label: "YouTube", icon: <FaYoutube size={20} />, pathMatch: ["youtube"], color: "text-red-500" },
//         { href: "/meta", label: "Meta", icon: <FaFacebook size={20} />, pathMatch: ["meta"], color: "text-indigo-600" },
//       ],
//     },
//     {
//       label: "WEB",
//       isGroup: true,
//       children: [
//         { href: "/banner", label: "Banner", icon: <LuImage size={20} />, pathMatch: ["banner"], color: "text-orange-500" },
//         { href: "/about", label: "About", icon: <LuInfo size={20} />, pathMatch: ["about"], color: "text-emerald-500" },
//         { href: "/services", label: "Services", icon: <LuLayers size={20} />, pathMatch: ["services"], color: "text-purple-500" },
//         { href: "/privacy", label: "Privacy Policy", icon: <LuShield size={20} />, pathMatch: ["privacy"], color: "text-amber-600" },
//         { href: "/terms", label: "Terms & Condition", icon: <LuFileText size={20} />, pathMatch: ["terms"], color: "text-cyan-600" },
//         { href: "/contact", label: "Contact Us", icon: <LuMail size={20} />, pathMatch: ["contact"], color: "text-pink-500" },
//       ],
//     },
//     { isDivider: true },
//     { href: "/pricing", label: "Pricing", icon: <LuWallet size={20} />, pathMatch: ["pricing"], color: "text-emerald-500" },
//     { href: "/users", label: "Users", icon: <LuUsers size={20} />, pathMatch: ["users"], color: "text-indigo-500" },
//     { href: "/reporting", label: "Reporting", icon: <LuBarChart2 size={20} />, pathMatch: ["reporting"], color: "text-rose-500" },
//     { href: "/announcement", label: "Announcement", icon: <LuMegaphone size={20} />, pathMatch: ["announcement"], color: "text-orange-500" },
//     { href: "/config", label: "Service Configuration", icon: <LuSettings size={20} />, pathMatch: ["config"], color: "text-sky-500" },
//   ];

//   // Safely check if a link is active (Handles groups vs regular links)
//   const isActive = (link) => {
//     if (!link || !link.pathMatch) return false; // Prevent crash if pathMatch is missing
//     return link.pathMatch.some((pattern) => {
//       if (pattern instanceof RegExp) {
//         return pattern.test(trimmedPathname);
//       }
//       return trimmedPathname === pattern;
//     });
//   };

//   // Update filter to look inside groups
//   // Update filter to safely look inside groups and handle dividers
//   const filteredLinks = links.filter((link) => {
//     const searchLower = (search || "").toLowerCase();

//     if (link.isDivider) {
//       return searchLower === "";
//     }
//     if (!link.label) return false;

//     if (link.isGroup && link.children) {
//       return link.children.some(child =>
//         child.label && child.label.toLowerCase().includes(searchLower)
//       );
//     }
//     return link.label.toLowerCase().includes(searchLower);
//   });

//   // const filteredLinks = links.filter((link) => {
//   //   const searchLower = search.toLowerCase();
//   //   // You must return a boolean here for the filter to work
//   //   return link.label.toLowerCase().includes(searchLower);
//   // });


  

//   /* LOGOUT */
//   const handleLogOut = () => {
//     logout();
//   };
//   /* LOGOUT ENDS */

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       // Click occurred outside the dropdown
//       if (setDropdownOpen) {
//         setDropdownOpen(false);
//       }
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);



//   const handleViewplan = () => {
//     router.push("/pricing");
//   };
//   return (
//     <>
//       <style>{styles}</style>
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           success: {
//             style: {
//               background: "#e6ffed", // Light green for success
//               color: "#1a3e24",
//             },
//           },
//           error: {
//             style: {
//               background: "#ffe6e6", // Light red for error
//               color: "#3e1a1a",
//             },
//           },
//           warning: {
//             style: {
//               background: "#fffbe6", // Light yellow for warning
//               color: "#3e3a1a",
//             },
//           },
//         }}
//       />
//       <div className="w-full cursor-default">
//         <div
//           className={` ${isMobile ? " hidden" : sidebarOpen ? "w-52  fixed top-0 h-full" : "w-16  fixed top-0 h-full"}`}
//         >
//           {sidebarOpen ? (
//             <aside className="fixed top-4 left-4 bottom-4 w-72 bg-white rounded-[2.5rem] shadow-xl flex flex-col overflow-hidden transition-all duration-300 border border-gray-100">
//               {/* LOGO SECTION */}
//               <div className="flex h-20 items-center px-8 border-b border-gray-50">
//                 <div className="flex items-center gap-3">
//                   <div className="w-11 h-11 bg-gradient-to-br from-[#FF8C39] to-[#FF5C00] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
//                     {/* Bar chart icon placeholder */}
//                     <div className="flex items-end gap-[2px]">
//                       <div className="w-1.5 h-3 bg-white rounded-full opacity-60"></div>
//                       <div className="w-1.5 h-5 bg-white rounded-full"></div>
//                       <div className="w-1.5 h-4 bg-white rounded-full opacity-80"></div>
//                     </div>
//                   </div>
//                   <span className="text-2xl font-bold text-[#1E293B] tracking-tight">AdPro</span>
//                 </div>
//               </div>

//               {/* NAVIGATION SCROLL AREA */}
//               <div className="flex-1 overflow-y-auto no-scrollbar px-6 py-6 space-y-1">
//                 {links.map((link, index) => {
//                   // Divider
//                   if (link.isDivider) {
//                     return <div key={index} className="my-4 border-t border-gray-100 mx-2" />;
//                   }

//                   // Section Group (SERVICES / WEB)
//                   if (link.isGroup) {
//                     return (
//                       <div key={index} className="pt-4 pb-2">
//                         <div className="flex items-center justify-between px-3 mb-3">
//                           <p className="text-[11px] font-bold text-slate-400 tracking-[0.1em] uppercase">
//                             {link.label}
//                           </p>
//                           <LuChevronDown className="text-slate-400" size={14} />
//                         </div>
//                         <div className="space-y-1">
//                           {link.children.map((child, cIdx) => (
//                             <Link
//                               key={cIdx}
//                               href={child.href}
//                               className={`flex items-center gap-4 px-4 py-2.5 rounded-2xl transition-all group ${isActive(child)
//                                   ? "bg-indigo-50 text-indigo-600 font-semibold"
//                                   : "text-slate-600 hover:bg-slate-50"
//                                 }`}
//                             >
//                               <span className={`${child.color} opacity-90 group-hover:opacity-100`}>
//                                 {child.icon}
//                               </span>
//                               <span className="text-[15px] font-medium">{child.label}</span>
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     );
//                   }

//                   // Regular Top-level link (Dashboard, Pricing, etc.)
//                   const active = isActive(link);
//                   return (
//                     <Link
//                       key={index}
//                       href={link.href}
//                       className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group ${active
//                           ? "bg-[#EEF2FF] text-[#4F46E5] font-semibold"
//                           : "text-slate-600 hover:bg-slate-50"
//                         }`}
//                     >
//                       <span className={`${active ? "text-indigo-600" : link.color} opacity-90`}>
//                         {link.icon}
//                       </span>
//                       <span className="text-[15px] font-medium">{link.label}</span>
//                     </Link>
//                   );
//                 })}
//               </div>
//             </aside>
//           ) : (
//             /* SMALL BAR (Icons only) - Matches rounded card style */
//             <aside className="fixed top-4 left-4 bottom-4 w-20 bg-white rounded-[2.5rem] shadow-lg flex flex-col items-center py-8 border border-gray-100">
//               <div className="w-10 h-10 bg-[#FF6A00] rounded-xl flex items-center justify-center mb-10 cursor-pointer" onClick={() => setSidebarOpen(true)}>
//                 <div className="w-1.5 h-4 bg-white rounded-full"></div>
//               </div>

//               <div className="space-y-6 flex flex-col items-center overflow-y-auto no-scrollbar w-full px-2">
//                 {links.filter(l => !l.isDivider).map((link, i) => {
//                   // Handle nested icons for mini-bar
//                   const items = link.isGroup ? link.children : [link];
//                   return items.map((item, idx) => (
//                     <Tooltip key={`${i}-${idx}`} title={item.label} placement="right">
//                       <Link
//                         href={item.href || "#"}
//                         className={`p-3 rounded-xl transition-all ${isActive(item) ? 'bg-indigo-50 text-indigo-600 shadow-sm' : 'text-slate-400 hover:bg-slate-50'}`}
//                       >
//                         {item.icon}
//                       </Link>
//                     </Tooltip>
//                   ));
//                 })}
//               </div>
//             </aside>
//           )}

          
//           {/* {sidebarOpen ? (
//             <aside className="flex flex-col   px-4 py-0 sidebar_container h-full overflow-none  bg-[#fdfcf8]    ">
//               <div className="flex h-[8%] mt-0.5 justify-between ">
//                 <div className="flex my-auto cursor-pointer justify-center ">
//                   <span className="font-bold">
                  
//                   </span>
//                 </div>
//                 <GiHamburgerMenu
//                   size={25}
//                   className="my-auto cursor-pointer"
//                   onClick={() => setSidebarOpen(false)}
//                 />
//               </div>

//               <div className="flex flex-col justify-between flex-1 mt-3 h-[92%]">
//                 <div className="flex-1 -mx-3 space-y-4 h-[88%]">
                  

//                   <div className="h-[92.8%] w-full scrollbar_table overflow-y-auto !pt-2">
//                     {filteredLinks.map((link, index) => (
//                       <Link
//                         key={index}
//                         href={link.href}
//                         className={`flex items-center text-sm my-1 p-3 transition-colors duration-300 transform ${isActive(link) // <--- USE YOUR HELPER FUNCTION HERE
//                           ? "bg-[#185f8b] font-bold text-[#C1E7FF] rounded-none"
//                           : "hover:bg-[#185f8b] hover:font-bold hover:text-[#C1E7FF] text-gray-600  rounded-none"
//                           }`}
//                       >
//                         {link.icon}
//                         <span className="mx-2 text-sm ">{link.label}</span>
//                       </Link>
//                     ))}

//                   </div>
//                 </div>
//                 <div className="p-1"></div>
//               </div>
//             </aside>
//           ) : (
//             <aside className="flex flex-col items-center w-16 h-screen py-4   overflow-none  bg-[#C1E7FF] border-gray-300 border-r rtl:border-l rtl:border-r-0  ">
//               <div className="flex justify-between">
//                 <GiHamburgerMenu
//                   size={25}
//                   className="mx-auto cursor-pointer"
//                   onClick={() => setSidebarOpen(true)}
//                 />
//               </div>
//               <div className="no-scrollbar forsidebar_small overflow-y-auto">

//                 {filteredLinks.map((link, index) => (
//                   <Link
//                     key={index}
//                     href={link.href}
//                     className={`p-1.5  focus:outline-nones transition-colors duration-200  ${link.pathMatch.includes(trimmedPathname)
//                       ? "text-[#f4c242] font-bold rounded-full"
//                       : " hover:text-[#f4c242] text-gray-700 rounded-full"
//                       } w-full  `}
//                   >
//                     <Tooltip placement="right" title={link.label}>
//                       {link.icon}
//                     </Tooltip>
//                   </Link>
//                 ))}

//               </div>

//             </aside>
//           )} */}

          
//         </div>

//         {/* use to responsive layout for phone */}

//         <div style={{ zIndex: "9999" }} className="z-[9999] pt-5 bg-[#fdfcf8] h-screen fixed">
//           {smallbar && (
//             <aside
//               className={`-mt-20  w-screen flex flex-col  h-100 px-5 my-6  bg-[#fdfcf8] rounded-lg `}
//             >
//               <div className="flex justify-between">
//                 <div className="flex">
//                   <span className="font-bold">
//                     {/* <Image
//                       width={70}
//                       height={20}
//                       src="/img/MDxbig2.png"
//                       alt="Warning"
//                       unoptimized
//                     /> */}
//                   </span>
//                 </div>
//                 <GiHamburgerMenu
//                   size={25}
//                   className="my-auto"
//                   onClick={smallbaropefun}
//                 />
//               </div>middleware.js
//               <div className="flex flex-col grow mt-3">
//                 <div className="relative mb-3 rounded-lg">
//                   <span className="absolute inset-y-0 left-0 pl-1 flex items-center">
//                     <IoSearchSharp />
//                   </span>

//                   <input
//                     type="text"
//                     className="form-control w-full pl-8 py-1.5 pr-4 bg-white border rounded-md text-gray-700"
//                     placeholder="Search"
//                     value={search}
//                     onChange={handleSearchChange}
//                   />
//                 </div>

//                 <div className="overflow-y-auto flex-grow max-h-[calc(100vh-140px)] pr-1">
//                   <div className="space-y-2 pb-5">
//                     {filteredLinks.map((link, index) => (
//                       <Link
//                         key={index}
//                         href={link.href}
//                         className={`flex no-underline items-center p-2 text-dark ${link.pathMatch.includes(trimmedPathname)
//                           ? "bg-[#C1E7FF] font-bold rounded-full"
//                           : "hover:bg-[#C1E7FF] hover:font-bold rounded-full"
//                           }`}
//                       >
//                         <div className="flex text-center justify-center w-full">
//                           <span className="ms-2 text-sm">{link.icon}</span>
//                           <span className="ms-2 text-sm text-center">{link.label}</span>
//                         </div>
//                       </Link>
//                     ))}

//                     {filteredLinks.map((link, index) => {
//                       // Add this check first!
//                       if (link.isDivider) {
//                         return <div key={index} className="my-4 border-t border-gray-100 mx-2" />;
//                       }

//                       if (link.isGroup) {
//                         // ... rest of your group rendering code
//                       }

//                       // ... rest of your link rendering code
//                     })}
//                   </div>
//                 </div>
//               </div>


//             </aside>
//           )}
//         </div>

//         <div
//           className={`fixed top-0 bg-white shadow-none transition-all duration-300
//             ${isMobile
//               ? "w-full left-0"
//               : sidebarOpen
//                 ? "ml-52 w-[calc(100%-13rem)]"
//                 : "ml-16 w-[calc(100%-4rem)]"
//             }
//           `}
//           style={{ zIndex: "9999" }}
//         >
//           <div
//             className={`flex flex-wrap w-full px-5 bg-[#fdfcf8]
//               ${isTabView ? "justify-between -mb-7" : "justify-between py-3"}
//               ${isTabViewheader ? "justify-between" : "py-3"}
//             `}
//           >
//             <div
//               style={{ display: !isMobile ? "none" : "" }}
//             >
//               <span
//                 className={`${!isMobile ? "hidden " : " p-2 "}`}
//                 onClick={smallbaropefun}
//               >
//                 <HiMenu size={25} />
//               </span>
//             </div>

//             <div className="my-auto   ">
//               <div className="relative w-full flex cursor-pointer ">
//                 {isTabView ? (
//                   <>
//                     <div
//                       className="py-1 focus:outline-none"
//                       onClick={toggleMenu}
//                     >
//                       {isTabViewheader ? (
//                         <>
//                           <div
//                             className="py-2 focus:outline-none"
//                             onClick={toggleMenu}
//                           >
//                             <p
//                               className={`text-base  p-auto ${trimmedPathname === ""
//                                 ? "border-b-2  border-b-teal-400"
//                                 : ""
//                                 }`}
//                             >
//                               {trimmedPathname === "dashboard" ? (
//                                 "Dashboard"
//                               ) :
//                                 trimmedPathname === "dashboard" ? (
//                                   <AiNotesSubHeadingM />
//                                 )
//                                   :
//                                   trimmedPathname === "my-scribes" ? (
//                                     <MyScribesSubHeadingM />
//                                   )
//                                     :
//                                     trimmedPathname === "template-builder" ? (
//                                       <TemplateBuilderSubHeadingM />
//                                     )
//                                       :
//                                       trimmedPathname === "learn-format" ||
//                                         trimmedPathname === "learn-format/soap-note" ||
//                                         trimmedPathname === "learn-format/hp-note" ||
//                                         trimmedPathname === "learn-format/progress-note" ? (
//                                         <LearnFormatSubHeadingM />
//                                       ) :
//                                         trimmedPathname === "view-patient" ? (
//                                           <PatientSubHeadingM />
//                                         ) :
//                                           trimmedPathname === "profile" ? (
//                                             <ProfileSubHeadingM />
//                                           )
//                                             : (
//                                               ""
//                                             )}
//                             </p>
//                           </div>
//                         </>
//                       ) : (
//                         ""
//                       )}
//                     </div>
//                     {menuOpen && (
//                       <div className="fixed inset-0 flex justify-center  ">
//                         <div className={`${isMobile ? " my-16" : "my-14"} bg-white w-full h-full  shadow-md scrollbar-thin overflow-auto overflow-y-scroll`}>
//                           <div className="flex justify-between ">
//                             <div></div>
//                             <button
//                               className="p-2 focus:outline-none "
//                               onClick={toggleMenu}
//                             >
//                               <svg
//                                 className="w-6 h-6"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth="2"
//                                   d="M6 18L18 6M6 6l12 12"
//                                 ></path>
//                               </svg>
//                             </button>
//                           </div>

//                           <div className="px-10 pb-5 items-center flex flex-col justify-items-center gap-5 z-[1001]" >
//                             {trimmedPathname === "dashboard" ? (
//                               "Dashboard"
//                             ) :
//                               trimmedPathname === "dashboard" ? (
//                                 <AiNotesSubHeading />
//                               )
//                                 : trimmedPathname === "my-scribes" ? (
//                                   <MyScribesSubHeading />
//                                 ) :
//                                   trimmedPathname === "template-builder" ? (
//                                     <TemplateBuilderSubHeading />
//                                   ) :
//                                     trimmedPathname === "learn-format" ||
//                                       trimmedPathname === "learn-format/soap-note" ||
//                                       trimmedPathname === "learn-format/hp-note" ||
//                                       trimmedPathname === "learn-format/progress-note" ? (
//                                       <LearnFormatSubHeading />
//                                     ) :
//                                       trimmedPathname === "view-patient" ? (
//                                         <PatientSubHeading />
//                                       ) :
//                                         trimmedPathname === "profile" ? (
//                                           <ProfileSubHeading />
//                                         ) : (
//                                           ""
//                                         )}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <p
//                     className={`text-base  p-auto ${trimmedPathname === ""
//                       ? "border-b-2  border-b-teal-400"
//                       : ""
//                       }`}
//                   >
//                     {trimmedPathname === "dashboard" ? (
//                       "Dashboard"
//                     ) :
//                       trimmedPathname === "dashboard" ? (
//                         <AiNotesSubHeading />
//                       ) :
//                         trimmedPathname === "my-scribes" ? (
//                           <MyScribesSubHeading />
//                         ) :
//                           trimmedPathname === "template-builder" ? (
//                             <TemplateBuilderSubHeading />
//                           ) :
//                             trimmedPathname === "learn-format" ||
//                               trimmedPathname === "learn-format/soap-note" ||
//                               trimmedPathname === "learn-format/hp-note" ||
//                               trimmedPathname === "learn-format/progress-note" ? (
//                               <LearnFormatSubHeading />
//                             ) :
//                               trimmedPathname === "view-patient" ? (
//                                 <PatientSubHeading />
//                               ) :
//                                 trimmedPathname === "profile" ? (
//                                   <ProfileSubHeading />
//                                 )
//                                   : (
//                                     ""
//                                   )}
//                   </p>
//                 )}
//               </div>
//             </div>


//             <div className="my-auto flex">
//               <div
//                 className="relative dashboard-nav w-8 h-8 rounded-md bg-[#f4c242] me-2 flex justify-center items-center notification cursor-pointer "
//                 onClick={() => handelopenNotifination()}
//               >
//                 <Tooltip placement="left" title={"Notification"}>
//                   <MdNotificationsNone
//                     className="bell text-white  font-bold"
//                     size={25}
//                   />
//                 </Tooltip>
//                 <div className="absolute -top-[10px] -right-1 rounded-full bg-red-600   font-medium text-sm flex min-w-5 min-h-5 w-fit justify-center items-center text-white p-[1px]">
//                   {" "}
//                   <span>3</span>
//                 </div>
//               </div>
//               <div className="dashboard-nav w-8 h-8 rounded-md bg-[#f4c242] my-auto  ">
//                 <div ref={dropdownRef} className="relative">
//                   <p
//                     className="text-center mt-[2px] relative justify-center font-bold text-xl text-white cursor-pointer"
//                     onClick={toggleDropdown}
//                   >

//                     -
//                   </p>
//                   {dropdownOpen && (
//                     <div
//                       className="dropdown-menu absolute shadow-lg rounded-md w-[270px] bg-white  left-[1.5rem] py-7 pb-4 my-2 show"
//                       aria-labelledby="dropdownMenuButton1"
//                       style={{ transform: "translate3d(-257px, 15px, 0px)" }}
//                       data-popper-placement="bottom-start"
//                     >
//                       <div className="text-center border-b pb-5">
//                         <div className="image image-circle image-tiny mb-5">

//                           <div className="relative bg-[#d4cbbe] rounded-full w-[80px] h-[80px] m-auto flex items-center justify-center">

//                             <h1 className="text-3xl ">
//                             </h1>
//                           </div>
//                         </div>
//                         <h3 className="text-gray-900 text-[15px]">
//                         </h3>
//                         <h4 className="mb-0 fw-400 text-[15px] fs-6">
//                         </h4>
//                       </div>
//                       <ul className="pt-6 text-[15px] py-2 ps-8 flex   flex-col gap-5">
//                         <li className="flex items-center">
//                           <span
//                             className="dropdown-item flex items-center"
//                             // href="#"
//                             // onClick={handleLogOut}
//                             onClick={handleLogOut}

//                           >
//                             <MdOutlineLogout className="inline-block mb-[2px] me-2" />
//                             Logout
//                           </span>
//                         </li>
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* </div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;





// table ui demo to all scroll page 
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { IoTrashBinOutline } from 'react-icons/io5';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const BannerList = () => {
  const router = useRouter();

  const [banners, setBanners] = useState([
    { id: 1, title: 'Grow Your Business', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
    { id: 2, title: 'Grow Your Business', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
    { id: 3, title: 'Grow Your Business', description: 'High performance marketing banners', type: 'Hero', status: false, image: '/img/image.png' },
    { id: 4, title: 'Grow Your Business', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
    { id: 5, title: 'Grow Your Business', description: 'High performance marketing banners', type: 'Hero', status: false, image: '/img/image.png' },
    { id: 6, title: 'Grow Your Business', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
    { id: 7, title: 'Grow Your Business', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
    { id: 8, title: 'Grow Your Business', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
    { id: 9, title: 'Grow Your Business', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
    { id: 10, title: 'Grow Your Business', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
  ]);

  const toggleStatus = (id) => {
    setBanners(prevBanners =>
      prevBanners.map(banner =>
        banner.id === id ? { ...banner, status: !banner.status } : banner
      )
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const totalPages = Math.ceil(banners.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = banners.slice(indexOfFirstItem, indexOfLastItem);

  return (
    /* 
       1. Removed: h-[calc(100vh-140px)], flex-col, overflow-hidden.
       2. Added: min-h-screen (agar data kam ho toh bhi background white rahe).
    */
    <div className="bg-white font-montserrat rounded-lg px-6 shadow-sm border border-gray-100 m-2 min-h-screen">

      {/* Table Header */}
      <div className="flex justify-between items-center py-6 bg-white">
        <h2 className="text-xl font-semibold text-gray-800">Banner List</h2>
        <button
          onClick={() => router.push("/banner/banner-create")}
          className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition"
        >
          Create
        </button>
      </div>

      {/* Table Body Area - Removed flex-grow aur overflow-auto */}
      <div className="relative">
        <table className="w-full text-left border-collapse">
          {/* Header: Sticky tab rakhein jab tak page scroll ho raha hai (optional) */}
          <thead className="text-xs bg-white uppercase text-[#374151] font-semibold border-b border-gray-300">
            <tr>
              <th className="px-3 py-4">Image</th>
              <th className="px-3 py-4">Title</th>
              <th className="px-3 py-4">Description</th>
              <th className="px-3 py-4 text-center">Type</th>
              <th className="px-3 py-4 text-center">Status</th>
              <th className="px-3 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {currentItems.length > 0 ? (
              currentItems.map((banner) => (
                <tr key={banner.id} className="hover:bg-blue-50/50 transition text-sm text-[#334155]">
                  <td className="px-3 py-4">
                    <img src={banner.image} alt="banner" className="w-20 h-10 object-cover rounded border border-gray-200" />
                  </td>
                  <td className="px-3 py-4 text-sm font-normal">{banner.title}</td>
                  <td className="px-3 py-4 text-[#334155] max-w-[200px] font-normal text-sm truncate">{banner.description}</td>
                  <td className="px-3 py-4 text-center text-[#334155] font-normal text-sm">{banner.type}</td>
                  <td className="px-3 py-4 text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={banner.status}
                        onChange={() => toggleStatus(banner.id)}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-gray-300 rounded-full transition-all duration-300 peer-checked:bg-gradient-to-r peer-checked:from-green-400 peer-checked:to-green-600 shadow-inner"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-6"></div>
                    </label>
                  </td>
                  <td className="px-3 py-4 text-center">
                    <div className="flex justify-center gap-3">
                      <button title="Edit" className="text-blue-500 cursor-pointer hover:bg-blue-50 p-1.5 rounded transition">
                        <FiEdit size={16} />
                      </button>
                      <button title="Delete" className="text-red-500 cursor-pointer hover:bg-red-50 p-1.5 rounded transition">
                        <IoTrashBinOutline size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-20 text-gray-400 font-medium">
                  No Records Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer - Removed sticky bottom */}
      <div className="bg-white border-t border-gray-100 py-8 flex justify-between items-center">
        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">
          Showing {banners.length > 0 ? indexOfFirstItem + 1 : 0} to {Math.min(indexOfLastItem, banners.length)} of {banners.length} entries
        </p>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all ${currentPage === 1
              ? 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
              }`}
          >
            <LuChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-1.5">
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold transition-all duration-200 ${currentPage === pageNum
                    ? 'bg-[#FF7A22] text-white shadow-lg shadow-orange-200 border-[#FF7A22]'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all ${currentPage === totalPages
              ? 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
              }`}
          >
            <LuChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerList;