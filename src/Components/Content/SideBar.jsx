/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: SideBar Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// Import for the data
import CategoryList from "@/data/Category";

// Import for the components
import Category from "@/Components/Content/Category";



/**
 * @description: Style for the SideBar component
 * @style: Fixed positioned sidebar that stays in place
 *         Independent of page scrolling with its own internal scroll
 */
const SideBarStyle = {
    SideBar: `flex flex-col 
    justify-around items-center
    fixed top-30 left-10
    bg-gray-200
    `,
}

export default function SideBar() {
    return (
        <div className={SideBarStyle.SideBar}>
            {CategoryList.map((category) => (
                <Category key={category.ID} category={category} />
            ))}
        </div>
    )
}