/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: NavList Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// style for the NavList component 
const NavListStyle = {
    NavList: ``,
    Element: "text-black text-lg"
}

export default function NavList() {
    return (
        <div className={NavListStyle.NavList}>
            <ul className="flex flex-row justify-between gap-4">
                <li className={NavListStyle.Element}>Home</li>
                <li className={NavListStyle.Element}>About</li>
                <li className={NavListStyle.Element}>Contact</li>
            </ul>
        </div>
    )
}