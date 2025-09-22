// import { Home, Sidebar } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import NavLinks from "./ui/nav-links";
import Image from "next/image";

// const items = [
//     {
//         title: "Home",
//         url: "/",
//         icon: Home
//     }
// ]


const links = [
    {name: 'HOME', href: '/'},
    {name: 'ABOUT', href: '/about'},
    {name: 'MATERIALS', href: '/materials'},
    {name: 'SCIENCE', href: '/science'},
    {name: 'STEWARDSHIP', href: '/stewardship'},
    {name: 'NEWS & UPDATES', href: '/news-and-updates'},
    {name: 'GALLERY', href: '/gallery'},
    {name: 'CONTACT', href: '/contact'},
];

export function AppSidebar() {
    return(
        <Sidebar collapsible="offcanvas">
            <SidebarContent className="flex h-screen">
                <SidebarGroup className="flex-grow px-0 pb-0">
                    <SidebarGroupLabel className="h-16 justify-evenly">
                        <div className="text-yellow-400 font-bold text-lg">BUCK MINE<br/>LEGACY</div>
                        <Image src="/excavator60.png" alt="logo" width={60} height={60}/>
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="flex flex-grow">
                        <SidebarMenu className="flex flex-grow justify-evenly gap-0">
                            {links.map((link) => {
                                return(
                                    <SidebarMenuItem key={link.name} className="flex flex-grow">
                                        <SidebarMenuButton asChild className="flex flex-grow border-b-2 border-red-800">
                                            <a href={link.href} className="flex flex-grow h-full items-center"><span className="text-xl font-semibold text-yellow-400">{link.name}</span></a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}