/**
 * @author: Qiu Yixiang
 * @date: 2025-06-28
 * @description: Hamburger Menu Component for the CS-hub project
 */

// Import for the useState
import { useState } from "react";

// Import for the style
import "@/style/style.css";

// Import for the icons
import { Menu } from "lucide-react";


// style for the HamburgerMenu component
const HamburgerMenuStyle = {
    HamburgerMenu: `
    flex items-center justify-center
    md:hidden
    `,
}

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen(!isOpen);
        if (isOpen) {
            document.getElementById("SideBar").style.display = "flex";
            document.getElementById("SideBar").style.zIndex = "100";
        } else {
            document.getElementById("SideBar").style.display = "none";
            document.getElementById("SideBar").style.zIndex = "0";
        }
    }
    return (
        <div className={HamburgerMenuStyle.HamburgerMenu} onClick={toggleMenu}>
            <Menu />
        </div>
    )
}