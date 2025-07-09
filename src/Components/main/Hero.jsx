/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: Hero Component for the CS-hub project (The main content of the page)
 */

// Import for the style
import "@/style/style.css";

// Import for React Router
import { Outlet } from "react-router-dom";

/**
 * @description: Style for the Hero component
 * @style: Full width and height main content with independent scrolling
 *         Takes all available space next to fixed sidebar
 */
const HeroStyle = {
    Hero: `flex flex-col mt-20
    `,
}

export default function Hero() {
    return (
        <div className={HeroStyle.Hero}>
            <Outlet />
        </div>
    )
}




