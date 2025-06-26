/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: NavList Component for the CS-hub project
 */

// Import for the icons
import {  EqualApproximately, Github, Home } from "lucide-react";

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

/**
 * @description: Style for the NavList component
 * @style: NavList is built based on the tailwind css
 *         Using similar theme to Logo but with subtle variations
 *         Each nav item is a card-style element with hover effects
 */
const NavListStyle = {
    NavList: `
    flex flex-row
    gap-2
    `,
    NavItem: `
    flex flex-row items-center gap-2
    relative px-6 py-3
    text-gray-700 font-medium
    rounded-full
    border border-transparent
    bg-white/80 backdrop-blur-sm
    hover:bg-white hover:border-gray-200
    hover:text-black hover:shadow-md
    transition-all duration-400 ease-out
    cursor-pointer group overflow-hidden
    hover:scale-105 hover:-translate-y-0.5
    active:scale-95 active:translate-y-0
    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-gray-100/0 before:via-gray-100/50 before:to-gray-100/0
    before:translate-x-[-100%] before:transition-transform before:duration-500
    hover:before:translate-x-[100%]
    after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5
    after:bg-black after:transition-all after:duration-300 after:ease-out
    hover:after:w-3/4 hover:after:left-1/8
    `,
}

export default function NavList() {
    return (
        <ul className={NavListStyle.NavList}>
            <li className={NavListStyle.NavItem}>
                <Home size={20}/>
                Home
            </li>
            <li className={NavListStyle.NavItem}>
                <Github size={20}/>
                Github
            </li>
            <li className={NavListStyle.NavItem}>
                <EqualApproximately size={20}/>
                About
            </li>
        </ul>
    )
}