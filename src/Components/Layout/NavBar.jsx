/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: NavBar Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// Import for the components
import Logo from "@/Components/UI/logo";
import NavList from "@/Components/UI/NavList";

// style for the NavBar component
const NavBarStyle = {
    NavBar: `${globalStyle.FullWidthScreenContainer} flex flex-row justify-between`
}

export default function NavBar() {
    return (
        <div className={NavBarStyle.NavBar}>
            <Logo />
            <NavList />
        </div>
    )
}