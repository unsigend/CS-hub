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

// Import for React hooks
import { useState, useEffect } from "react";

// Import for the components
import Logo from "@/components/ui/Logo";
import NavList from "@/components/ui/NavList";

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
};

/**
 * @description: NavBar Component for the CS-hub project
 * @returns: NavBar component with scroll behavior
 * @usage: NavBar is used in the Container component,
 * if the user scrolls down, the NavBar will hide,
 * if the user scrolls up, the NavBar will show
 */
const NavBar = (): React.ReactNode => {
    // State for the scroll behavior
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    // Effect for the scroll behavior
    useEffect(() => {
        const scrollHandler = () => {
            const currentScrollY: number = window.scrollY;

            // hidden the NavBar when the user scrolls down past 100px
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [lastScrollY]);

    return (
        <nav
            className={`${NavBarStyle.NavBar} 
            ${isVisible ? "translate-y-0" : "-translate-y-full"}
            transition-transform duration-300 ease-in-out`}
        >
            <div className={NavBarStyle._NavBar}>
                <Logo />
                <NavList />
            </div>
        </nav>
    );
};

export default NavBar;
