/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: Category Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// style for the Category component
const CategoryStyle = {
    Category: `text-xl text-black justify-center`
}

export default function Category({ category }) {
    return (
        <div className={CategoryStyle.Category}>
            <a href="#">{category.CategoryName}</a>
        </div>
    )
}