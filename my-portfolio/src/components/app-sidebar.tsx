import * as React from "react"
import sidebarData from "@/data/aboutData/sidebarData.json"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"



export function AppSidebar({
    onNavigate,
    activePage,
    ...props
}: React.ComponentProps<typeof Sidebar> & {
    onNavigate: (page: string) => void
    activePage: string
}) {
    return (
        <>
            <Sidebar {...props} className="pt-20">
                <SidebarContent>
                    {sidebarData.navMain.map((group) => (
                        <SidebarGroup key={group.title}>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {group.items.map((item) => (
                                        <SidebarMenuItem key={item.title} className="">
                                            <SidebarMenuButton
                                                asChild
                                                className={`
                                                ${activePage === item.page ? ' bg-black dark:bg-slate-100 dark:text-black text-white hover:bg-black hover:text-white' : ''}
                                            `}
                                            >
                                                <button
                                                    onClick={() => onNavigate(item.page || item.title.toLowerCase())}
                                                >
                                                    {item.title}
                                                </button>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    ))}
                </SidebarContent>
                <SidebarRail />
            </Sidebar>
        </>
    )
}
