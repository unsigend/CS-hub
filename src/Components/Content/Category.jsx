/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: Category Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

/**
 * @description: Style for the Category component
 * @style: Category is built based on the tailwind css
 *         Using similar card theme to Logo and Navigation
 *         Each category is a clickable card with hover effects
 */
const CategoryStyle = {
    Category: "",
}

export default function Category({ category }) {
    return (
        <div className={CategoryStyle.Category}>
            {category.name}
        </div>
    )
}