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
    }
    return (
        <div className={HamburgerMenuStyle.HamburgerMenu} onClick={toggleMenu}>
            <Menu />
        </div>
    )
}