/**
 * MIT License
 * 
 * Copyright (c) 2025 Qiu Yixiang
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @description: HamburgerMenu component used as a button to open the sidebar
 */

// Import for the useState and useEffect
import { useState, useEffect } from "react";

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
    
    // this function will be called only when the hamburger menu is clicked
    function toggleMenu() {
        const newState = !isOpen;
        setIsOpen(newState);
        const sideBar = document.getElementById("SideBar");
        
        // If the sidebar is open, show it
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
        }
        // If the sidebar is closed, hide it
        else {
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