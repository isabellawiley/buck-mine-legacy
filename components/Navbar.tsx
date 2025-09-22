import Link from "next/link";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";

const Navbar = () => {

    return (
        <header className="px-5 py-3 bg-red-600 shadow-sm">
            <nav className="flex justify-between items-center">
                <h1>BUCK MINE LEGACY</h1>
                <div className="flex items-center gap-5 text-yellow-300 hover:text-yellow-500">
                    <ul className="flex flex-wrap items-center font-medium text-sm">
                        <li className="p-4 lg:px-8"><Link href="/" className="text-yellow-300 hover:text-yellow-500">Home</Link></li>
                        <li className="p-4 lg:px-8">
                            <Link href="/about" className="text-yellow-300 hover:text-yellow-500">About</Link>
                            <button className="shrink-0 p-1">
                                <svg className="w-3 h-3 fill-yellow-300" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                    <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
                                </svg>
                            </button>
                            <ul className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl">
                                <li><Link href="/materials" className="text-yellow-300 hover:text-yellow-500">Materials</Link></li>
                                <li><Link href="/science" className="text-yellow-300 hover:text-yellow-500">Science</Link></li>
                                <li><Link href="/stewardship" className="text-yellow-300 hover:text-yellow-500">Stewardship</Link></li>
                                <li><Link href="/news" className="text-yellow-300 hover:text-yellow-500">News & Updates</Link></li>
                            </ul>
                        </li>
                        <li className="p-4 lg:px-8"><Link href="/gallery" className="text-yellow-300 hover:text-yellow-500">Gallery</Link></li>
                        <li className="p-4 lg:px-8"><Link href="/contact" className="text-yellow-300 hover:text-yellow-500">Contact</Link></li>
                    </ul>
                    {/* <Link href="/">Home</Link>
                    <Link href="/about">About</Link> */}
                    {/* <Menu>
                        <MenuButton>About</MenuButton>
                        <MenuItems anchor="bottom">
                            <MenuItem>
                                <Link href="/materials">Materials</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/science">Science</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/stewardship">Stewardship</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/news">News & Updates</Link>
                            </MenuItem>
                        </MenuItems>
                    </Menu> */}

                    {/* <Link href="/gallery">Gallery</Link>
                    <Link href="/contact">Contact</Link> */}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;