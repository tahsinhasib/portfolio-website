'use client'
import { useEffect, useState } from "react";
import Education from "../aboutComp/Education";
import Overview from "../aboutComp/Overview";

import { AppSidebar } from "../../app-sidebar";
import { Navbar } from "../../common/navbarComp/Navbar";
import { Separator } from "../../ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../ui/sidebar";
import TechStack from "../aboutComp/TechStack";

export default function AboutSidebar() {
    const [activePage, setActivePage] = useState("overview"); // default page

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [activePage]);

    return (
        <>
            <Navbar />
            <div className="pt-20">
                <SidebarProvider>
                    <AppSidebar onNavigate={setActivePage} activePage={activePage} />
                    <SidebarInset className="">
                        <header className="flex h-16 shrink-0 items-center gap-2 px-4 lg:hidden">
                            <SidebarTrigger className="-ml-1 fixed" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                        </header>

                        <div className="flex flex-1 flex-col gap-4 p-2">
                            {activePage === "overview" && <Overview />}
                            {activePage === "education" && <Education />}
                            {activePage === "techstack" && <TechStack />}
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </>
    );
}
