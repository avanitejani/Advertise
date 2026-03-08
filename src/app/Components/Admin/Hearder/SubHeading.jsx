import Link from "next/link";
import { usePathname } from "next/navigation";

export function NotesSubHeading() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);
    const isStepTwoActivePath = (pathname) => {
        return /^\/(admin|user)\/(step-two|terms|policies|plan-invoices|plan|model|user|chat|content|child-safety)/.test(pathname);
    };

    const role = typeof window !== "undefined" ? localStorage.getItem("role") : null;




    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "notes/create" ?
                    " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05]"
                    }`}
            >
                <Link href="/notes/create">Step One</Link>
            </button>

            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${isStepTwoActivePath(pathname)
                    ? "bg-black text-white font-medium"
                    : "bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05]"
                    }`}
            >
                <Link href={`/${role}/step-two`}>Step Two</Link>
            </button>


            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${isStepThreeActive || trimmedPathname === "notes/save"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05]"
                    }`}
            >
                <Link href="/notes/save/">Step Three</Link>
            </button>

        </>
    );
}


// i have this type of path
// user / terms, user / policies, user / content / 12401f31 - 8c22 - 4730 - 8903 - 6a94409386b9, user / content,
//   and
// admin / terms, admin / policies, admin / plan - invoices, admin / plan, admin / plan, admin / model, admin / user, admin / chat / b2e95939 - f8e2 - 4614 - 90ac - 38b17c2bd535, admin / chat

export function AiNotesSubHeading() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);


    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "dashboard"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05]"
                    }`}
            >
                <Link href="/dashboard">Dashboard</Link>
            </button>
        </>
    );
}


export function MyScribesSubHeading() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);

    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "google"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05]"
                    }`}
            >
                <Link href="/google">Google</Link>
            </button>
        </>
    );
}


export function TemplateBuilderSubHeading() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);

    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "youtube"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05]"
                    }`}
            >
                <Link href="/youtube">YouTube</Link>
            </button>
        </>
    );
}


export function LearnFormatSubHeading() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);

    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "learn-format/soap-note" || trimmedPathname === "learn-format/hp-note" || trimmedPathname === "learn-format/progress-note" || trimmedPathname === "learn-format"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05]"
                    }`}
            >
                <Link href="/learn-format/soap-note">Template Builder</Link>
            </button>
        </>
    );
}


export function PatientSubHeading() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);

    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "view-patient"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05]"
                    }`}
            >
                <Link href="/view-patient">View Patient</Link>
            </button>
        </>
    );
}


export function ProfileSubHeading() {
    const pathname = usePathname();
    const trimmedPathname = pathname.slice(1);
    const isStepThreeActive = /^\/notes\/save\/[\d-]+$/.test(pathname);

    return (
        <>
            <button
                className={`text-sm h-8 w-fit px-2 py-1 rounded-md me-2 ${trimmedPathname === "profile"
                    ? " bg-black text-white font-medium "
                    : " bg-[#F0F4F9] text-black border-2 border-[#000000] hover:bg-[#d3dde7] hover:border-black hover:text-black hover:shadow-md hover:scale-[1.05] "
                    }`}
            >
                <Link href="/profile">Profile</Link>
            </button>
        </>
    );
}
