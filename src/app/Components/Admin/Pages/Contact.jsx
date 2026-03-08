

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { IoTrashBinOutline } from 'react-icons/io5';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const ContactList = () => {
    const router = useRouter();

    // Sample Data
    const [banners, setBanners] = useState([
        { id: 1, email: 'kiaan@gmail.com', contact: '91586-01080', subject: 'Google Ads', message: 'Need Help with Google', status: true, name: 'kiaan Xoian' },
        { id: 2, email: 'kiaan@gmail.com', contact: '91586-01080', subject: 'Google Ads', message: 'Need Help with Google', status: true, name: 'kiaan Xoian' },
        { id: 3, email: 'kiaan@gmail.com', contact: '91586-01080', subject: 'Google Ads', message: 'Need Help with Google', status: false, name: 'kiaan Xoian' },
        { id: 4, email: 'kiaan@gmail.com', contact: '91586-01080', subject: 'Google Ads', message: 'Need Help with Google', status: true, name: 'kiaan Xoian' },
        { id: 5, email: 'kiaan@gmail.com', contact: '91586-01080', subject: 'Google Ads', message: 'Need Help with Google', status: false, name: 'kiaan Xoian' },
        { id: 6, email: 'kiaan@gmail.com', contact: '91586-01080', subject: 'Google Ads', message: 'Need Help with Google', status: true, name: 'kiaan Xoian' },
        { id: 7, email: 'kiaan@gmail.com', contact: '91586-01080', subject: 'Google Ads', message: 'Need Help with Google', status: true, name: 'kiaan Xoian' },
        { id: 8, email: 'kiaan@gmail.com', contact: '91586-01080', subject: 'Google Ads', message: 'Need Help with Google', status: true, name: 'kiaan Xoian' },
        { id: 9, email: 'kiaan@gmail.com', contact: '91586-01080', subject: 'Google Ads', message: 'Need Help with Google', status: true, name: 'kiaan Xoian' },
        { id: 10, email: 'kiaan@gmail.com', contact: '91586-01080', subject: 'Google Ads', message: 'Need Help with Google', status: true, name: 'kiaan Xoian' },


    ]);

    const toggleStatus = (id) => {
        setBanners(prevBanners =>
            prevBanners.map(banner =>
                banner.id === id ? { ...banner, status: !banner.status } : banner
            )
        );
    };

    // --- Pagination Logic ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7; // Per page 7 entries as per your requirement

    const totalPages = Math.ceil(banners.length / itemsPerPage) || 1;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = banners.slice(indexOfFirstItem, indexOfLastItem);

    return (
        /* 
           1. h-[calc(100vh-140px)]: Screen height se header minus karke fix kar diya.
           2. flex flex-col: Elements ko stack karne ke liye.
           3. overflow-hidden: Page scroll ko rokne ke liye.
        */
        <div className="bg-white font-montserrat rounded-lg px-6 shadow-sm border border-gray-100 flex flex-col h-[calc(100vh-140px)] overflow-hidden m-2">

            {/* Table Header (Static) */}
            <div className="flex justify-between items-center  py-4 shrink-0 bg-white">
                <h2 className="text-xl font-semibold text-gray-800">Contact Us List</h2>
                {/* <button
                    onClick={() => router.push("/services/services-create")}
                    className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition"
                >
                    Create
                </button> */}
            </div>

            {/* Table Body (Scrollable Area) */}
            <div className="flex-grow overflow-auto scrollbar-thin relative">
                <table className="w-full text-left border-collapse ">
                    <thead className="text-xs bg-white uppercase text-[#374151] font-semibold sticky top-0 z-10 border-b border-gray-300">
                        <tr>
                            <th className="px-3 py-3">Name</th>
                            <th className="px-3 py-3">Email</th>
                            <th className="px-3 py-3">Contact</th>
                            <th className="px-3 py-3">Subject</th>
                            <th className="px-3 py-3 text-center">Message</th>
                            <th className="px-3 py-3 text-center">Status</th>
                            <th className="px-3 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {currentItems.length > 0 ? (
                            currentItems.map((banner) => (
                                <tr key={banner.id} className="hover:bg-blue-50/50 transition text-sm text-[#334155]">
                                    <td className="px-3 py-3 text-sm font-normal whitespace-nowrap">{banner.name}</td>
                                    <td className="px-3 py-3 text-sm font-normal whitespace-nowrap">{banner.email}</td>
                                    <td className="px-3 py-3 text-sm font-normal whitespace-nowrap">{banner.contact}</td>
                                    <td className="px-3 py-3 text-[#334155] max-w-[200px] font-normal text-sm truncate whitespace-nowrap">{banner.subject}</td>
                                    <td className="px-3 py-3 text-center text-[#334155] font-normal text-sm">{banner.message}</td>
                                    <td className="px-3 py-3 text-center">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={banner.status}
                                                onChange={() => toggleStatus(banner.id)}
                                                className="sr-only peer"
                                            />

                                            <div className="w-12 h-6 bg-gray-300 rounded-full transition-all duration-300 
                  peer-checked:bg-gradient-to-r peer-checked:from-green-400 peer-checked:to-green-600 
                  shadow-inner">
                                            </div>

                                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md 
                  transition-all duration-300 
                  peer-checked:translate-x-6 peer-checked:shadow-green-300/50">
                                            </div>
                                        </label>
                                    </td>
                                    <td className="px-3 py-3 text-center">
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
                                <td colSpan="6" className="text-center py-20 text-gray-400 font-medium bg-white">
                                    No Records Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="shrink-0 bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center z-20">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">
                    Showing {banners.length > 0 ? indexOfFirstItem + 1 : 0} to {Math.min(indexOfLastItem, banners.length)} of {banners.length} entries
                </p>

                <div className="flex items-center gap-2">
                    {/* <div className="flex items-center mr-2 group">
                        <span className="text-[10px] font-bold text-slate-400 mr-2 uppercase">Go to:</span>
                        <input
                            type="number"
                            value={currentPage}
                            onChange={(e) => {
                                const val = Math.max(1, Math.min(totalPages, Number(e.target.value)));
                                setCurrentPage(val);
                            }}
                            className="w-10 h-9 border border-slate-200 rounded-lg text-center text-sm font-bold outline-none focus:border-orange-500 transition-colors"
                        />
                    </div> */}

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
                            if (totalPages > 5 && (pageNum < currentPage - 1 || pageNum > currentPage + 1) && pageNum !== 1 && pageNum !== totalPages) {
                                if (pageNum === currentPage - 2 || pageNum === currentPage + 2) return <span key={i} className="text-slate-400">...</span>;
                                return null;
                            }

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

export default ContactList;