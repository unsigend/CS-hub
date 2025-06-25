/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: NavBar Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";


// style for the NavBar component
const NavBarStyle = {
    NavBar: "bg-red-500"
}

export default function NavBar() {
    return (
        <div className={NavBarStyle.NavBar}>NavBar</div>
    )
}