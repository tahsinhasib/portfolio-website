import { AppSidebar } from "@/components/app-sidebar"
import { Navbar } from "@/components/common/navbarComp/Navbar"
import Sidebar from "@/components/about/sidebarComp/AboutSidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function About() {
    return (
        <>
            <Sidebar />
        </>
    )
}
