/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: Hero Component for the CS-hub project (The main content of the page)
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// Import for the components
import Home from "@/Components/Pages/Home";

/**
 * @description: Style for the Hero component
 * @style: Full width and height main content with independent scrolling
 *         Takes all available space next to fixed sidebar
 */
const HeroStyle = {
    Hero: `flex flex-col
    
    `,
}


export default function Hero() {
    return (
        <div className={HeroStyle.Hero}>
            <Home />
        </div>
    )
}




