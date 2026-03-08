"use client"
import React, { useRef, useState } from "react";
import { FiUpload, FiX } from "react-icons/fi";

const CreateBanner = () => {

     const [homePageImage, setHomePageImage] = useState(null);
        const [pageImage, setPageImage] = useState(null);
    
        // 2. Refs for hidden inputs
        const homeInputRef = useRef(null);
        const pageInputRef = useRef(null);
    
        // 3. Handle File Change
        const handleFileChange = (e, setImage) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImage(reader.result);
                };
                reader.readAsDataURL(file);
            }
        };
    
        const handleRemoveImage = (e, setImage, inputRef) => {
            e.stopPropagation(); // Sabse important: Ye click ko parent tak nahi pahunchne dega (Upload window nahi khulegi)
            setImage(null); // Preview hata dega
            if (inputRef.current) {
                inputRef.current.value = ""; // Input reset karega taaki same file dobara select ho sake
            }
    };
    
    return (
        /* 
           1. h-[calc(100vh-70px)]: Adjust '70px' to match your Header height.
           2. overflow-y-auto: Enables vertical scrolling.
           3. scrollbar-thin: (If using tailwind-scrollbar) or custom CSS for better look.
        */
        <div className="flex font-montserrat items-start justify-center  w-full">


            <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-20">

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-8">
                    Create Banner
                </h2>

                {/* Banner Title */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Banner Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter banner title"
                            className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:border-orange-400 outline-none transition text-gray-700"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Description
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Enter banner description"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-orange-400 outline-none transition resize-none text-gray-700"
                        />
                    </div>

                    {/* Banner Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Banner Type
                        </label>
                        <select
                            className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:border-gray-400 outline-none transition"
                        >
                            <option>Select type</option>
                            <option>Homepage</option>
                            <option>Offer</option>
                            <option>Promotion</option>
                        </select>
                    </div>

                    {/* Upload Image */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Banner Image
                        </label>

                         <div
                                                        onClick={() => pageInputRef.current.click()}
                                                        className="relative w-full h-44 border-2 border-dashed border-slate-200 rounded-2xl bg-[#F8FAFC] flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 transition cursor-pointer group overflow-hidden"
                                                    >
                                                        <input
                                                            type="file"
                                                            hidden
                                                            ref={pageInputRef}
                                                            onChange={(e) => handleFileChange(e, setPageImage)}
                                                            accept="image/*"
                                                        />
                        
                                                        {pageImage ? (
                                                            <>
                                                                <div className="relative w-full h-full">
                                                                    <img src={pageImage} alt="Preview" className="w-full h-full object-cover" />
                        
                                                                    {/* REMOVE BUTTON (RED X) */}
                                                                    <button
                                                                        type="button"
                                                                        onClick={(e) => handleRemoveImage(e, setPageImage, pageInputRef)}
                                                                        className="absolute top-2 right-2 z-30 bg-[#FF7A22] text-white p-1.5 rounded-full shadow-lg hover:bg-[#e66a1a] transition"
                                                                        title="Remove Image"
                                                                    >
                                                                        <FiX size={16} />
                                                                    </button>
                        
                                                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center z-10">
                                                                        <p className="text-white text-xs font-bold uppercase">Change Image</p>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <FiUpload size={32} className="text-slate-300 group-hover:text-orange-400 transition" />
                                                                <p className="mt-3 text-sm font-medium text-slate-500">Upload image for Page</p>
                                                            </>
                                                        )}
                                                    </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 pt-6">
                        <button className="flex-1 cursor-pointer h-14 rounded-2xl border-2 border-[#FF7A22] text-[#FF7A22] font-bold text-sm tracking-wider hover:bg-orange-50 transition uppercase">
                            Cancel
                        </button>

                        <button className="flex-1 cursor-pointer h-14 rounded-2xl bg-[#FF7A22] text-white font-bold text-sm tracking-wider hover:bg-[#e66a1a] transition shadow-lg shadow-orange-200 uppercase">
                            Save
                        </button>
                    </div>
                </div>

            </div>


            {/* Optional: Add this CSS to your global.css for a cleaner scrollbar */}

        </div>
    );
};

export default CreateBanner;