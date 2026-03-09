"use client"
import React, { useRef, useState } from "react";
import { FiUpload, FiX } from "react-icons/fi";

const About = () => {
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
            // hi avani
        <div className="flex font-montserrat items-start justify-center  w-full">
            <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-20">

                {/* Main Header Title */}
                <h2 className="text-xl font-semibold text-[##111827] mb-8">
                    About Us
                </h2>

                <div className="space-y-6">
                    {/* Title Field (Full Width) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-500 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter title"
                            className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:border-orange-400 outline-none transition text-gray-700"
                        />
                    </div>

                    {/* Description Field (Full Width) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-500 mb-2">
                            Description
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Enter description"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-orange-400 outline-none transition resize-none text-gray-700"
                        />
                    </div>

                    {/* Mission & Vision (2 Columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-500 mb-2">
                                Our Mission
                            </label>
                            <input
                                type="text"
                                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:border-orange-400 outline-none transition text-gray-700"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-500 mb-2">
                                Our Vision
                            </label>
                            <input
                                type="text"
                                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:border-orange-400 outline-none transition text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Platform & Flexibility (2 Columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-500 mb-2">
                                Our Platform
                            </label>
                            <input
                                type="text"
                                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:border-orange-400 outline-none transition text-gray-700"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-500 mb-2">
                                Total Flexibility
                            </label>
                            <input
                                type="text"
                                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:border-orange-400 outline-none transition text-gray-700"
                            />
                        </div>
                    </div>

                    {/* For Every Business (Full Width) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-500 mb-2">
                            For Every Business
                        </label>
                        <input
                            type="text"
                            className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:border-orange-400 outline-none transition text-gray-700"
                        />
                    </div>

                    {/* Images Section (Label + 2 Dash Boxes) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-500 mb-2">
                            Images
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Upload 1: Home Page Image */}
                            <div
                                onClick={() => homeInputRef.current.click()}
                                className="relative w-full h-44 border-2 border-dashed border-slate-200 rounded-2xl bg-[#F8FAFC] flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 transition cursor-pointer group overflow-hidden"
                            >
                                <input
                                    type="file"
                                    hidden
                                    ref={homeInputRef}
                                    onChange={(e) => handleFileChange(e, setHomePageImage)}
                                    accept="image/*"
                                />

                                {homePageImage ? (
                                    <>
                                        <div className="relative w-full h-full">
                                        <img src={homePageImage} alt="Preview" className="w-full h-full object-cover" />
                                        <button
                                            type="button"
                                            onClick={(e) => handleRemoveImage(e, setHomePageImage, homeInputRef)}
                                                className="absolute top-2 right-2 z-30 bg-[#FF7A22] text-white p-1.5 rounded-full shadow-lg hover:bg-[#e66a1a] transition"
                                            title="Remove Image"
                                        >
                                            <FiX size={16} />
                                        </button>

                                        {/* Hover Overlay for Change */}
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center z-10">
                                            <p className="text-white text-xs font-bold uppercase">Change Image</p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <FiUpload size={32} className="text-slate-300 group-hover:text-orange-400 transition" />
                                        <p className="mt-3 text-sm font-medium text-slate-500">Upload image for Home Page</p>
                                    </>
                                )}
                            </div>

                            {/* Upload 2: Page Image */}
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
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-col md:flex-row gap-4 pt-6">
                        {/* Cancel Button */}
                        <button className="w-full md:flex-1 shrink-0 cursor-pointer h-14 min-h-[56px] rounded-2xl border-2 border-[#FF7A22] text-[#FF7A22] font-bold text-sm tracking-wider hover:bg-orange-50 transition uppercase">
                            Cancel
                        </button>

                        {/* Save Button */}
                        <button className="w-full md:flex-1 shrink-0 cursor-pointer h-14 min-h-[56px] rounded-2xl bg-[#FF7A22] text-white font-bold text-sm tracking-wider hover:bg-[#e66a1a] transition shadow-lg shadow-orange-200 uppercase">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
