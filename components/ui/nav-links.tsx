import Link from "next/link";
import { SidebarMenuButton, SidebarMenuItem } from "./sidebar";
// import { usePathname } from "next/navigation";


const links = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Materials', href: '/materials'},
    {name: 'Science', href: '/science'},
    {name: 'Stewardship', href: '/stewardship'},
    {name: 'News & Updates', href: '/news-and-updates'},
    {name: 'Gallery', href: '/gallery'},
    {name: 'Contact', href: '/contact'},
];

export default function NavLinks() {
    // const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                return(
                    <SidebarMenuItem key={link.name}>
                        <SidebarMenuButton asChild>
                            <a href={link.href}><span className="text-xl font-semibold">{link.name}</span></a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    // <Link 
                    // key={link.name}
                    // href={link.href}
                    // className="flex h-[48px] grow items-center justify-center rounded-md text-yellow-400 bg-red-600 p-2 text-sm shadow-md font-medium hover:bg-yellow-400 hover:text-red-600 md:flex-none md:justify-start md:p-1 md:px-3">
                    //     <p className="hidden md:block">{link.name}</p>
                    // </Link>
                )
            })}
        </>
    )
}