/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: NavBar Component for the CS-hub project
 */

// Import for React hooks
import { useState, useEffect } from 'react';

// Import for the style
import "@/style/style.css";

// Import for the components
import Logo from "@/Components/UI/logo";
import NavList from "@/Components/UI/NavList";

/**
 * @description: Style for the NavBar component
 * @style: Fixed top navigation with hide/show scroll behavior
 *         Hides on scroll down, shows on scroll up
 */
const NavBarStyle = {
    NavBar: "w-full fixed top-0 z-50 bg-white",
    _NavBar: `w-[80%] mx-auto 
    flex flex-row 
    justify-between items-center
    `,
}

/**
 * @description: NavBar Component for the CS-hub project
 * @returns: NavBar component with scroll behavior
 * @usage: NavBar is used in the Container component, 
 * if the user scrolls down, the NavBar will hide, 
 * if the user scrolls up, the NavBar will show
 */
export default function NavBar() {

    // State for the scroll behavior
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    // Effect for the scroll behavior
    useEffect(() => {
        const scrollHandler = () => {
            const currentScrollY = window.scrollY;

            // hidden the NavBar when the user scrolls down past 100px
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }else{
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        }
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [lastScrollY])

    return (
        <nav className={`${NavBarStyle.NavBar} 
            ${isVisible ? "translate-y-0" : "-translate-y-full"}
            transition-transform duration-300 ease-in-out`}>
            <div className={NavBarStyle._NavBar}>
                <Logo />
                <NavList />
            </div>
        </nav>
    )
}