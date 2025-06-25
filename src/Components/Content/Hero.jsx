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

// style for the Hero component
const HeroStyle = {
    Hero: `flex flex-col bg-green-500 w-[70%]`
}


export default function Hero() {
    return (
        <div className={HeroStyle.Hero}>
            <Home />
        </div>
    )
}




