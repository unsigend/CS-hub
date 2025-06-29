/**
 * @author: Qiu Yixiang
 * @date: 2025-06-28
 * @description: Hamburger Menu Component for the CS-hub project
 */

// Import for the useState and useEffect
import { useState, useEffect } from "react";

// Import for the style
import "@/style/style.css";

// Import for the icons
import { Menu, X } from "lucide-react";

// style for the HamburgerMenu component
const HamburgerMenuStyle = {
    HamburgerMenu: `
    flex items-center justify-center
    md:hidden
    p-2 rounded-lg
    text-gray-700 hover:text-black
    hover:bg-gray-100
    transition-all duration-200
    cursor-pointer
    `,
}

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    
    // Listen for close events from sidebar
    useEffect(() => {
        const handleCloseSidebar = () => {
            setIsOpen(false);
        };

        window.addEventListener('closeMobileSidebar', handleCloseSidebar);
        return () => window.removeEventListener('closeMobileSidebar', handleCloseSidebar);
    }, []);
    
    function toggleMenu() {
        const newState = !isOpen;
        setIsOpen(newState);
        const sideBar = document.getElementById("SideBar");
        
        if (newState) {
            // Show overlay with smooth transitions
            sideBar.style.display = "flex";
            sideBar.style.position = "fixed";
            sideBar.style.top = "0";
            sideBar.style.left = "0";
            sideBar.style.width = "100vw";
            sideBar.style.height = "100vh";
            sideBar.style.zIndex = "1000";
            sideBar.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
            sideBar.style.backdropFilter = "blur(4px)";
            sideBar.style.transition = "all 0.3s ease-in-out";
            
            // Prevent body scroll
            document.body.style.overflow = "hidden";
            
            // Animate in
            setTimeout(() => {
                sideBar.style.opacity = "1";
            }, 10);
        } else {
            // Hide overlay with smooth transitions
            sideBar.style.opacity = "0";
            sideBar.style.backgroundColor = "rgba(0, 0, 0, 0)";
            sideBar.style.backdropFilter = "blur(0px)";
            
            // Restore body scroll
            document.body.style.overflow = "unset";
            
            // Complete hide after transition
            setTimeout(() => {
                sideBar.style.display = "none";
                sideBar.style.position = "fixed";
                sideBar.style.zIndex = "0";
            }, 300);
        }
    }
    
    return (
        <div className={HamburgerMenuStyle.HamburgerMenu} onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
    )
}