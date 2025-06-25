/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: Footer Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// style for the Footer component
const FooterStyle = {
    Footer: "bg-purple-500"
}

// Footer component
export default function Footer() {
    return (
        <div className={FooterStyle.Footer}>Footer</div>
    )
}