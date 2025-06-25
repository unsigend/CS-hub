/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: Hero Component for the CS-hub project (The main content of the page)
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// style for the Hero component
const HeroStyle = {
    Hero: "bg-green-500"
}

export default function Hero() {
    return (
        <div className={HeroStyle.Hero}>Hero</div>
    )
}




