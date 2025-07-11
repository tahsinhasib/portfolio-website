import { AppSidebar } from "../app-sidebar";
import { Navbar } from "../Navbar/Navbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Separator } from "../ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";


export default function Sidebar() {
    return (
        <>
            <Navbar />
            <div className="pt-20">
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 px-4 lg:hidden">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />

                        </header>
                        <div className="flex flex-1 flex-col gap-4 p-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sed odio exercitationem voluptate architecto nemo, eaque distinctio est id consequatur iusto ullam beatae, corrupti voluptatum atque a dicta nesciunt assumenda?</p>
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </>
    )
}
