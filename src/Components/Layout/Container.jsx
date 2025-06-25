/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: Content Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

/**
 * Import for the components
 * - SideBar
 * - Hero
 */
import SideBar from "@/Components/Content/SideBar";
import Hero from "@/Components/Content/Hero";

// style for the Container component
const ContainerStyle = {
    Container: `${globalStyle.FlexRowContainer} bg-blue-500 justify-between`
}

export default function Container() {
    return (
        <div className={ContainerStyle.Container}>
            <SideBar />
            <Hero />
        </div>
    )
}


