'use client'
import { Inter } from "next/font/google";
import { SidebarProvider } from "@/app/data/SidebarProvider";
// import Header from "@/app/Components/Hrm/Header/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../Components/loader/loader";
// import { CommonVariableProvider } from "@/CommonVariableProvider";
// import { ListProvider } from "@/ListProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CommonVariableProvider } from "../../../CommonVariableProvider";
import { ListProvider } from "../../../ListProvider";
import Header from "../Components/Admin/Hearder/Header";
import BasicFooter from "../Components/Admin/Footer/BasicFooter";

// import SessionWrapper from "../Components/SessionWrapper";


export default function RootLayout({ children }) {
    const [accessToken, setAccessToken] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);


    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(loadingTimeout);
    }, []);

   
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedAccessToken = localStorage.getItem("accessToken");
            if (storedAccessToken) {
                setAccessToken(storedAccessToken);
            }
        }
    }, []);



    return (
        <>
            {isLoading ? (
                <Loader />
            ) :
                (
                    <CommonVariableProvider>
                        <SidebarProvider>
                            <Header />

                            <ListProvider>
                                {children}
                            </ListProvider>
                            <BasicFooter />
                        </SidebarProvider>
                    </CommonVariableProvider>)}
        </>
    );
}
