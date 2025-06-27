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

/**
 * @description: Style for the Container component
 * @style: Container with left margin to account for fixed sidebar
 *         Hero takes full remaining space
 */
const ContainerStyle = {
    Container: `flex flex-row
    justify-center items-center
    w-[80%] mx-auto
    mt-3
    md:ml-70 md:mr-40
    `,
}

export default function Container() {
    return (
        <div className={ContainerStyle.Container}>
            <SideBar />
            <Hero />
        </div>
    )
}


