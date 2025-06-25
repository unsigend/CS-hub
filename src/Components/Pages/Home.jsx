/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: Home Page Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// style for the Home component
const HomeStyle = {
    Home: `bg-green-500`
}

export default function Home() {
    return (
        <div className={HomeStyle.Home}>Home This is the Home Page</div>
    )
}