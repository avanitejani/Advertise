

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NotesSubHeadingM() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);

    // LOGIC: Check if path starts with "/notes/save/" AND contains numbers/dashes after it
    // RegExp Explanation: 
    // ^           = Start of string
    // \/notes\/save\/ = Matches "/notes/save/" literally
    // [\d-]+      = Matches one or more digits (0-9) or hyphens (-)
    // $           = End of string
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);

    const isStepTwoActivePath = (pathname) => {
        return /^\/(admin|user)\/(step-two|terms|policies|plan-invoices|plan|model|user|chat|content)/.test(pathname);
    };
    const role = typeof window !== "undefined" ? localStorage.getItem("role") : null;


    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "notes/create" ?
                    " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05] hidden"
                    }`}
            >
                <Link href="/notes/create">Step One</Link>
            </button>

            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${isStepTwoActivePath(pathname)
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05] hidden"
                    }`}
            >
                <Link href={`/${role}/step-two`}>Step Two</Link>
            </button>


            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${isStepThreeActive || trimmedPathname === "notes/save" // Uses the Regex logic defined above
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05] hidden"
                    }`}
            >

                <Link href="/notes/save/">Step Three</Link>
            </button>


        </>
    );
}


export function AiNotesSubHeadingM() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);

    // LOGIC: Check if path starts with "/notes/save/" AND contains numbers/dashes after it
    // RegExp Explanation: 
    // ^           = Start of string
    // \/notes\/save\/ = Matches "/notes/save/" literally
    // [\d-]+      = Matches one or more digits (0-9) or hyphens (-)
    // $           = End of string
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);

    return (
        <>


            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "dashboard"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05] hidden"
                    }`}
            >
                <Link href="/dashboard">Dashboard</Link>
            </button>
        </>
    );
}

export function MyScribesSubHeadingM() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);

    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "my-scribes"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05] hidden"
                    }`}
            >
                <Link href="/my-scribes">My Scribes</Link>
            </button>
        </>
    );
}


export function TemplateBuilderSubHeadingM() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);

    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "template-builder"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05] hidden"
                    }`}
            >
                <Link href="/template-builder">My Scribes</Link>
            </button>
        </>
    );
}


export function LearnFormatSubHeadingM() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);

    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "learn-format/soap-note" || trimmedPathname === "learn-format/hp-note" || trimmedPathname === "learn-format/progress-note" || trimmedPathname === "learn-format"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05] hidden"
                    }`}
            >
                <Link href="/learn-format/soap-note">Template Builder</Link>
            </button>
        </>
    );
}


export function PatientSubHeadingM() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);

    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "view-patient"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05] hidden"
                    }`}
            >
                <Link href="/view-patient">View Patient</Link>
            </button>
        </>
    );
}


export function ProfileSubHeadingM() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);

    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "profile"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05] hidden"
                    }`}
            >
                <Link href="/profile">Profile</Link>
            </button>
        </>
    );
}