"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AccessDenied = () => {
    // const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     const storedUserData = localStorage.getItem("userData");
    //     if (storedUserData) {
    //         setUserData(JSON.parse(storedUserData));
    //     }
    // }, []);

    // const getRedirectPath = () => {
    //     if (userData?.role === "admin") {
    //         return "/admin/admin-content";
    //     } else if (userData?.role === "user") {
    //         return "/user/content";
    //     }
    //     return "/"; 
    // };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-10 md:p-16 rounded-lg shadow-sx text-center max-w-3xl w-full">
                <div className="flex justify-center mb-6">
                    <div className="text-yellow-500">
                        <Image
                            width={100}
                            height={100}
                            src="/img/padlock.png"
                            alt="Warning"
                            unoptimized
                        />
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    You don&apos;t have permission to view this page
                </h2>

                <p className="text-gray-600 mb-8">
                    Hit the request access button and we&apos;ll find someone who can give you access.
                </p>

                {/* <Link href={getRedirectPath()}> */}
                <Link href="/">
                    <button className="bg-blue-600 text-white font-medium py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Back to Home Page
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AccessDenied;
