/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: NavBar Component for the CS-hub project
 */

// Import for React hooks
import { useState, useEffect } from 'react';

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// Import for the components
import Logo from "@/Components/UI/logo";
import NavList from "@/Components/UI/NavList";

/**
 * @description: Style for the NavBar component
 * @style: Fixed top navigation with hide/show scroll behavior
 *         Hides on scroll down, shows on scroll up
 */
const NavBarStyle = {
    NavBar: "",
}

export default function NavBar() {
    return (
        <div className={NavBarStyle.NavBar}>
            NavBar
        </div>
    )
}