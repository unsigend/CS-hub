/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: SideBar Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// style for the SideBar component
const SideBarStyle = {
    SideBar: "bg-yellow-500"
}

export default function SideBar() {
    return (
        <div className={SideBarStyle.SideBar}>SideBar</div>
    )
}